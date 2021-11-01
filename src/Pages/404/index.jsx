import Img404 from '../../Assets/404.svg'
import './style.css'
const PageNotFound = () => {
    return ( 
        <div className='page-404'>
            <img src={Img404} alt="Site não encontrado" />
        </div>
     );
}
 
export default PageNotFound;