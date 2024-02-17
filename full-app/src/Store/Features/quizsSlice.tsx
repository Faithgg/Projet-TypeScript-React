import {createSlice} from '@reduxjs/toolkit'

// shema =  {
//     id : "",
//     choice_1 : "",
//     choice_2 : "",
//     choice_2 : "",
//     ExactResponse : "",
//     userResponse : "",
//     note : "",
// }

//   let quizs = require('../../Datas/Quizs.json')

let storageData = localStorage.getItem('Quizs');
let quizs = storageData? JSON.parse(storageData) : [];

  const initialState = quizs;
  
export const quizsSlice = createSlice({
    name : 'quizsSlice',
    initialState,
    reducers: {
        addQuiz :  (state : any ,action : any) => {
            quizs = [...state,{
                id : action.payload.id,
                question : action.payload.question,
                propositions : action.payload.propositions,
                ExactResponse : action.payload.ExactResponse,
                userResponse : action.payload.userResponse,
                note : action.payload.ExactResponse===action.payload.userResponse? 10:0,
            }];
            
            localStorage.setItem('Quizs', JSON.stringify(quizs));

            return quizs;
        },
        removeQuiz:  (state : any ,action : any)=>{
            const tempArray = [...state]
            tempArray.splice(action.payload.index, 1)
            quizs = [...tempArray]

            localStorage.setItem('Quizs', JSON.stringify(quizs));

            return quizs;
        }
    }
})

export const {addQuiz,removeQuiz} = quizsSlice.actions;

export default quizsSlice.reducer;