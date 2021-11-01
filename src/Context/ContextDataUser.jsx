import { get, ref } from "@firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import { database } from "../Database";

const DataUserContext = createContext();

export default function DataUserProvider({ children }) {
  const [dataUser, setDataUser] = useState({});
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dbRef = ref(database, "List-User");
      try {
        const data = await get(dbRef);
        setListUser(data.val()|| []);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <DataUserContext.Provider
      value={{ dataUser, setDataUser, listUser, setListUser }}
    >
      {children}
    </DataUserContext.Provider>
  );
}

export const useDataUser = () => {
  const { dataUser, setDataUser, listUser, setListUser } =
    useContext(DataUserContext);
  return { dataUser, setDataUser, listUser, setListUser };
};
