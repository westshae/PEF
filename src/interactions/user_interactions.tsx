import axios, {AxiosError, AxiosResponse} from "axios";

interface User {
  id:number,
  email:string,
  token:string,
}

export const login = async (email:String, code?:String) => {
  let data;

  try{
    if(email == null) return;
    if(code == undefined){
      await axios.get("http://localhost:5000/auth/get",{
        params:{
          email:email
        }
      }).catch((e:AxiosError)=>{
        console.error(e);
      })
    }else{
      console.log("checkcode start")
      data = await axios.get("http://localhost:5000/auth/checkcode", {
        params:{
          email:email,
          code:code,
        }
      }).then((res:AxiosResponse)=>{
        console.log("checkcode response");
        console.log(res.status);
        console.log(res.data);
      })
    }
  }catch(error){
    console.error(error);
  }

  return data;
}