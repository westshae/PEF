import axios from "axios";
import { useState, createContext, useContext } from "react";
import {saveUser} from "../interactions/exercise_interactions"
import styled from "styled-components";

interface Exercise {
    id:number,
    exercise_name:string,
    target_group:string[],
    exercise_level:string,
    exercise_form:string,
    exercise_equipment:string[],
    compound: boolean,
}

interface User {
    id:number,
    male: boolean,
    age: number,
    weight:number,
    height:number,
    currentfitness:string,
    goals: string[],
    time:number,
    intensity:string,
    injury:string[],
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

    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [currentFitness, setCurrentFitness] = useState("");
    const [goals, setGoals] = useState("");
    const [time, setTime] = useState("");
    const [intensity, setIntensity] = useState("");
    const [injury, setInjury] = useState("");

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        saveUser(user).then((res)=>{
            console.log(res?.data);
            createContext(res?.data);
        })
    }

    

    return (
    <OverallStyle>
        <Form onSubmit={submitForm}>
            <IndividualFormStyle>
                <label htmlFor={"gender"}>Gender</label>
                <input value={gender} onChange={(e) => setGender(e.target.value)} type="text" placeholder="Enter your gender" id={"gender"}/>
            </IndividualFormStyle>
            <IndividualFormStyle>
                <label htmlFor={"age"}>Age</label>
                <input value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder="Enter your age" id={"age"}/>
            </IndividualFormStyle>
            <IndividualFormStyle>
                <label htmlFor={"weight"}>Weight</label>
                <input value={weight} onChange={(e) => setWeight(e.target.value)} type="text" placeholder="Enter your weight" id={"weight"}/>
            </IndividualFormStyle>
            <IndividualFormStyle>
                <label htmlFor={"height"}>Height</label>
                <input value={height} onChange={(e) => setHeight(e.target.value)} type="text" placeholder="Enter your height" id={"height"}/>
            </IndividualFormStyle>
            <IndividualFormStyle>
                <label htmlFor={"currentfitness"}>Current Fitness</label>
                <input value={currentFitness} onChange={(e) => setCurrentFitness(e.target.value)} type="text" placeholder="Enter your current fitness" id={"currentfitness"}/>
            </IndividualFormStyle>
            <IndividualFormStyle>
                <label htmlFor={"goals"}>Goals</label>
                <input value={goals} onChange={(e) => setGoals(e.target.value)} type="text" placeholder="Enter your goals" id={"goals"}/>
            </IndividualFormStyle>
            <IndividualFormStyle>
                <label htmlFor={"time"}>Time</label>
                <input value={time} onChange={(e) => setTime(e.target.value)} type="text" placeholder="Enter time per week" id={"time"}/>
            </IndividualFormStyle>
            <IndividualFormStyle>
                <label htmlFor={"intensity"}>Intensity</label>
                <input value={intensity} onChange={(e) => setIntensity(e.target.value)} type="text" placeholder="Enter requested intensity" id={"intensity"}/>
            </IndividualFormStyle>
            <IndividualFormStyle>
                <label htmlFor={"injury"}>Injury</label>
                <input value={injury} onChange={(e) => setInjury(e.target.value)} type="text" placeholder="Enter previous injuries" id={"injury"}/>
            </IndividualFormStyle>

            <button type="submit">Submit</button>
        </Form>
    </OverallStyle>
  );
}

export default UserInput;