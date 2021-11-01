import { useState } from "react"

export const useAlert =()=>{
  const [alert, setAlert] = useState({success: 'danger',hidde:false,message:'Por Favor Verifique as informações'})

  return{alert,setAlert}

}