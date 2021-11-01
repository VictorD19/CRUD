import Table from "../../Components/Table";
import './style.css'
import ImgNotFound from '../../Assets/user-not-found.svg'

import { useDataUser } from "../../Context/ContextDataUser";


const Crud = () => {
    const {listUser} = useDataUser()
    return ( <div className='crud'>
       
        {listUser.length <= 0 &&  <img className='img' src={ImgNotFound} alt="userNotFound" />  }
        {listUser.length > 0 && <>
            <h1>Lista de Usuarios</h1>
            <Table/> 
        </> }
        
    </div>);
}
 
export default Crud;