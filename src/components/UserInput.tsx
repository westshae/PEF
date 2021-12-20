import { useState } from "react";
import {login} from "../interactions/user_interactions"
import styled from "styled-components";
import Router from "next/router"

interface User {
    id:number,
    email:string,
    token:string,
}

const OverallStyle = styled.div`
    justify-content:center;
`

const Form = styled.form`
    justify-content:center;
    width:fit;
`

const IndividualFormStyle = styled.div`
    display:flex;
    flex-grow:400;
    justify-content:center;
`

const Button = styled.button`
  font-size: 1.25rem;
  background: transparent;
  color: #800000;
  border: none;
  font-weight: bold;
`

const UserInput = () =>{
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if(code == ""){
            login(email, undefined);
        }else{
            login(email, code).then(()=>{
                Router.push('/profile')
            })
        }
    }

    

    return (
    <OverallStyle>
        <Form onSubmit={submitForm}>
            <IndividualFormStyle>
                <label htmlFor={"email"}>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" id={"email"}/>
            </IndividualFormStyle>
            <IndividualFormStyle>
                <label htmlFor={"code"}>Code</label>
                <input value={code} onChange={(e) => setCode(e.target.value)} type="text" placeholder="Enter your code if recieved" id={"code"}/>
            </IndividualFormStyle>
            <Button type="submit">Submit</Button>
        </Form>
    </OverallStyle>
  );
}

export default UserInput;