import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Dashboard from './Pages/Dashboard';
import Home from './Components/Home';
import Error from './Components/Error';
import AboutUs from './Pages/AboutUs';
import { store } from './Store';
import {Provider} from 'react-redux';
import Exams from './Pages/Exams';

import ExamShow from './Components/Exam/Show';
function App() {
  return (
 <Provider store={store}>
        <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/exam">
              <Route index={true} element={<Dashboard />} />
              <Route path="start" element={<Home />} />
              <Route path=":id" element={<ExamShow />} />
              <Route path=":id/update" element={<Home />} />
            </Route>
            <Route path="/exams">
              <Route index={true} element={<Exams />} />
            </Route>
            {/* <Route path="/exams" element={<Exams />}></Route> */}
            <Route path="about" element={<AboutUs />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </React.StrictMode>
      
    </Provider>


  );
}

export default App;
