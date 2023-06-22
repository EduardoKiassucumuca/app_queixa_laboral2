import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Submeter_queixa from './components/Queixoso/submeter_queixa';
import Home from './components/Home/home';
import Queixoso from './Pages/Queixoso/dados_queixoso';
import Dashboard from './components/Dashboard/dashboard';
import Login from './components/Login/form_login';
import FormQueixante from './components/Queixoso/Formulario_queixante';
import QueixaAnonima from './components/Queixoso/queixa_modo_privado';
import { useState } from 'react';
import FormQueixoso from './components/Queixante/Form_Queixoso';

function App() {
  const [show, setShow] = useState('Empregador')
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/queixar_empregador' element={<FormQueixante/>}/>
          <Route path='/queixar_trabalhador' element={<FormQueixoso/>}/>
          <Route path='/Entrar' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/queixa_anonima' element={<QueixaAnonima/>}/>
        </Routes>
      </Router>
  );
}


export default App;
