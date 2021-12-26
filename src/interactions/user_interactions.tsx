import axios, {AxiosError} from "axios";
interface CheckCodeResponse {
  id:number,
  access_token:string,
}

const login = async (email:string, code?:string) => {
  let data:CheckCodeResponse;

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
      data = (await axios.get("http://localhost:5000/auth/checkcode", {
        params:{
          email:email,
          code:code,
        }
      })).data;

      await window.localStorage.setItem("token", data.access_token);
      await window.localStorage.setItem("email", email);
      


    }
  }catch(error){
    console.error(error);
  }
}

const getSettings = async (email:string, token:string) =>{
  try{
    axios.get("http://localhost:5000/auth/settings/get/", {
      params:{
        email:email,
        token:token
      }
    }).then((res)=>{
      return res.data;
    })
  }catch(error){
    console.error(error);
  }
}

const updateSettings = async (email:string, token:string, settings:string[]) =>{
  try{
    axios.post("http://localhost:5000/auth/settings/update/", {
        email:email,
        token:token,
        settings:settings,
    })
  }catch(error){
    console.error(error);
  }
}


export {login, getSettings, updateSettings}