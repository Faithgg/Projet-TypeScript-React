import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "./Features/usersSlice";
import examsSlice from "./Features/examsSlice";
import quizsSlice from "./Features/quizsSlice";

export const store = configureStore({
    reducer : {
        users : usersSlice,
        exams : examsSlice,
        quizs : quizsSlice
    }
})