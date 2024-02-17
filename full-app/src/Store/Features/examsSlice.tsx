import {createSlice} from '@reduxjs/toolkit'
import { configureStore } from "@reduxjs/toolkit";

// shema =  {
//     id : "",
//     idQuestion1 : "",
//     idQuestion2 : "",
//     idUser : "",
//     note : "",
// }
//   let  exams= require('../../Datas/Exams.json')

let storageData = localStorage.getItem('Exams');
let exams = storageData? JSON.parse(storageData) : [];
  const initialState = exams;
  
export const examsSlice = createSlice({
    name : 'examsSlice',
    initialState,
    reducers: {
        addExam : async  (state : any ,action : any) => {
            const examss = [...state,{
                id : action.payload.id,
                idQuestion1 : action.payload.idQuestion1,
                idQuestion2 : action.payload.idQuestion2,
                idUser : action.payload.idUser,
                note : action.payload.note,
                difficulte : action.payload.difficulte,
            }];

            exams = examss;

            
            
            localStorage.setItem('Exams', JSON.stringify(exams));

            return exams;

        },

        removeExam: async (state : any ,action : any)=>{
            const tempArray = [...state]
            tempArray.splice(action.payload.index, 1)
            exams = [...tempArray]

            localStorage.setItem('Exams', JSON.stringify(exams));

            return exams;
        }
    }
})

export const {addExam,removeExam} = examsSlice.actions;

export default examsSlice.reducer;