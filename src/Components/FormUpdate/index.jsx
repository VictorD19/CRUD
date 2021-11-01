import { useDataUser } from "../../Context/ContextDataUser";
import { useAlert } from "../../hooks/useAlert";
import Button from "../Button";
import Alert from "../Alert";
import { useHistory } from "react-router";
import { ref, set } from "@firebase/database";
import {database} from '../../Database'
import { useState } from "react";


const FormUpdate = () => {
  const history = useHistory();
  const { dataUser, setDataUser, listUser, setListUser } = useDataUser();
  const [checked, setChecked] = useState(false)


  const { alert, setAlert } = useAlert();
  const toList = () => {
    history.push("/list");
  };

  const getValues = (e) => {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });
  };

  const setUser = (e) => {
    e.preventDefault();
    if (Object.values(dataUser).filter((value) => value !== "").length === 8) {
      setAlert({ hidde: true, success: "success",message:'Usuario atualizado com sucesso!' });
      const [user] = listUser.filter((users) => users.id === dataUser.id);
      const index = listUser.indexOf(user);
      const newList = [...listUser];
      newList[index] = dataUser;
      // mudando estado la lista
      setListUser(newList);

      // guardando no banco de dados
      set(ref(database,'List-User'),newList)

    } else {
      setAlert({ hidde: true, success: "danger",message:'Error ao tentar atualizar! Verique as informações.' });
    }
  };

  return (
    <>
      <form autoComplete="off" className="row g-3 formCreate" id="form_create">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            value={dataUser.name}
            onChange={getValues}
            type="text"
            name="name"
            className="form-control"
            id="name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="surname" className="form-label">
            Sobrenome
          </label>
          <input
            value={dataUser.surname}
            onChange={getValues}
            type="text"
            name="surname"
            className="form-control"
            id="surname"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="age" className="form-label">
            Idade
          </label>
          <input
            value={dataUser.age}
            onChange={getValues}
            type="number"
            name="age"
            className="form-control"
            id="age"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="height" className="form-label">
            Altura
          </label>
          <div className="input-group">
            <div className="input-group-text">cm</div>
            <input
              value={dataUser.height}
              onChange={getValues}
              type="number"
              name="height"
              className="form-control"
              id="height"
            />
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputZip" className="form-label">
            Peso
          </label>
          <div className="input-group">
            <div className="input-group-text">kg</div>
            <input
              value={dataUser.weight}
              onChange={getValues}
              type="number"
              name="weight"
              className="form-control"
              id="inputZip"
            />
          </div>
        </div>
        <div className="col-12 group-sex">
          <div className="form-check form-check-inline">
            <input
              onChange={getValues}
              className="form-check-input"
              checked={dataUser.sexo =='Homen' ? true:false}
              type="radio"
              name="sexo"
              id="sexo1"
              value="Homen"
            />
            <label className="form-check-label" htmlFor="sexo1">
              Homen
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              checked={dataUser.sexo =='Mulher' ? true:false}
              onChange={getValues}
              className="form-check-input"
              type="radio"
              name="sexo"
              id="sexo2"
              value="Mulher"
            />
            <label className="form-check-label" htmlFor="sexo2">
              Mulher
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              checked={dataUser.sexo =='Otro' ? true:false}

              onChange={getValues}
              className="form-check-input"
              type="radio"
              name="sexo"
              id="sexo3"
              value="Otro"
            />
            <label className="form-check-label" htmlFor="sexo3">
              Otro
            </label>
          </div>
        </div>
        <div className="col-12">
          <label className="form-check-label" htmlFor="hobby">
            Hobby
          </label>
          <input
            value={dataUser.hobby}
            onChange={getValues}
            className="form-control"
            type="text"
            name="hobby"
            id="hobby"
          />
        </div>
        <div className="col-12 group-btn-form">
          <Button
            color="success"
            text="Atualizar"
            fuction={setUser}
            type="submit"
          />
          <Button color="primary" text="Ir para lista" fuction={toList} />
        </div>
      </form>
      {alert.hidde && <Alert type={alert.success}  text={alert.message}/>}
    </>
  );
};

export default FormUpdate;
