import axios from "axios";
import React from "react";

export const getAllExercises = async () =>{
  let data;
  try{
    data = await (await axios.get("http://localhost:5000/exercise/all")).data;
  }
  catch(error){
    console.error(error);
  }
  return data;
}

export const getExercise = async() =>{
  let data;
  try{
    data = await (await axios.get("http://localhost:5000/exercise/specific")).data;
  }
  catch(error){
    console.error(error);
  }
  return data;
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

export const saveUser = async (user:User) => {
  let data;

  try{
    data = await axios.post("http://localhost:5000/exercise/user", {
      data: user
    })
  }catch(error){
    console.error(error);
  }

  return data;
}