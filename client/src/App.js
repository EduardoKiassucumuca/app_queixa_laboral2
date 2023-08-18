import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Submeter_queixa from './components/Queixoso/submeter_queixa';
import Home from './components/Home/home';
import Queixoso from './Pages/Queixoso/dados_queixoso';
import Dashboard from './components/Dashboard/dashboard';
import Dashboard_queixoso from './components/Dashboard/dashboard_queixoso';
import Login from './components/Login/form_login';
import FormQueixante from './components/Queixoso/Formulario_queixante';
import QueixaAnonima from './components/Queixoso/queixa_modo_privado';
import { useState } from 'react';
import FormQueixoso from './components/Queixante/Form_Queixoso';
import RecepcionistaQueixa from './components/Recepcionista/queixas_recepcionista';
import QueixarMesmaEmpresa from './components/Dashboard/queixar_mesma_empresa';
import QueixarOutraEmpresa from './components/Dashboard/queixar_outra_empresa';
import LerQueixa from './components/Dashboard/ler_queixa';
import ValidacaoQueixoso from './components/Queixoso/validacao_trabalhador';
import ValidacaoEmpregador from './components/Queixante/validacao_empregador';
function App() {
  const [show, setShow] = useState('Empregador')
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/queixar_empregador' element={<FormQueixante />} />
        <Route path='/queixar_trabalhador' element={<FormQueixoso />} />
        <Route path='/Entrar' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard_queixoso' element={<Dashboard_queixoso />} />
        <Route path='/queixa_anonima' element={<QueixaAnonima />} />
        <Route path='/queixas_recepcionista' element={<RecepcionistaQueixa />} />
        <Route path='/queixar_mesma_empresa' element={<QueixarMesmaEmpresa />} />
        <Route path='/queixar_outra_empresa' element={<QueixarOutraEmpresa />} />
        <Route path='/ler_queixa/:id_queixa' element={<LerQueixa />} />
        <Route path='/validacao_trabalhador' element={<ValidacaoQueixoso />} />
        <Route path='/empregador' element={<ValidacaoEmpregador />} />

      </Routes>
    </Router>
  );
}


export default App;
