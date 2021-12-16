import { useState } from "react";
import {login} from "../interactions/user_interactions"
import styled from "styled-components";
import { StyledButton } from "./Button";

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
`

const IndividualFormStyle = styled.div`
    display:flex;
    flex-grow:400;
    justify-content:center;
`

const UserInput = () =>{
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(code == ""){
            login(email, undefined);
        }else{
            login(email, code);
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

            <StyledButton type="submit">Submit</StyledButton>
        </Form>
    </OverallStyle>
  );
}

export default UserInput;