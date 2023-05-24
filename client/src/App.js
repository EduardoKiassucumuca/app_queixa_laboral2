import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Submeter_queixa from './components/Queixoso/submeter_queixa';
import Home from './components/Home/home';
import Queixoso from './Pages/Queixoso/dados_queixoso';
import Dashboard from './components/Dashboard/dashboard';
import Login from './components/Login/form_login';
import FormQueixante from './components/Queixoso/Formulario_queixante';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/queixoso' element={<FormQueixante/>}/>
          <Route path='/Entrar' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
  );
}


export default App;
