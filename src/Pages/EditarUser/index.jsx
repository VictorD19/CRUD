import { useEffect } from "react";
import FormUpdate from "../../Components/FormUpdate";
import { useDataUser } from "../../Context/ContextDataUser";
import ImgSelect from '../../Assets/select-user.svg'

const EditUser = () => {
  const { dataUser, setDataUser } = useDataUser();

  useEffect(() => {
    return () => setDataUser({});
  }, []);

  console.log();
  return (
    <div className='crud'>
      {Object.values(dataUser).length === 0 && <img src={ImgSelect} style={{height: '450px'}} alt="selecione-img" />  }
      {Object.values(dataUser).length !== 0 && <>
        <h1>Editar User</h1>
       <FormUpdate/>

      </>  
       }
     
    </div>
  );
};

export default EditUser;
