import "./style.css";
import Button from "../Button";
import { useDataUser } from "../../Context/ContextDataUser";
import { useHistory } from "react-router";
import { ref, set } from "@firebase/database";
import { database } from "../../Database";
const Table = () => {
  const {listUser,setListUser,setDataUser} = useDataUser()
  const history = useHistory()
  const deleteUser = (id)=>{
    const newList = listUser.filter(user => user.id !== id)
    setListUser(newList)
    set(ref(database,'List-User'),newList)

  }
  const editUser = (user)=>{
    setDataUser(user)
    history.push('/edit')
  }


  return (
    <table className="table table-light table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Sobrenome</th>
          <th scope="col">Idade</th>
          <th scope="col">Hobby</th>
          <th scope="col">Altura</th>
          <th scope="col">Peso</th>
          <th scope="col">Sexo</th>
          <th scope="col">Edit/Del</th>
        </tr>
      </thead>
      <tbody>
        {listUser.map((user,i) => 
          <tr key={user.id}>
          <th scope="row">{i}</th>
          <td>{user.name}</td>
          <td>{user.surname}</td>
          <td>{user.age}</td>
          <td>{user.hobby}</td>
          <td>{user.height}cm</td>
          <td>{user.weight}kg</td>
          <td>{user.sexo}</td>
          <td className='group-button-table'> 
            <Button  text='Editar' fuction={()=> editUser(user)} color='warning'>
             
            </Button>
            <Button text='Delete' fuction={()=>deleteUser(user.id)} color='danger'>
            
            </Button>
          </td>
          {/* colspan="2" */}
        </tr>
          
          
          )}
        
      </tbody>
    </table>
  );
};

export default Table;
