import { useState } from "react";
import {login} from "../interactions/user_interactions"
import styled from "styled-components";

interface User {
    id:number,
    email:string,
    token:string,
}

const OverallStyle = styled.div`
    justify-content:center;
`

const Form = styled.form`
    /* display:grid;
    grid-template-columns:1fr 2fr; */
`

const IndividualFormStyle = styled.div`
    display:flex;
    /* flex-direction:row-reverse; */
    flex-grow:400;
    justify-content:right;
`

const UserInput = () =>{

    const [user, setUser] = useState(Object);

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

            <button type="submit">Submit</button>
        </Form>
    </OverallStyle>
  );
}

export default UserInput;