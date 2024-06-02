import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Submeter_queixa from "./components/Queixoso/submeter_queixa";
import Home from "./components/Home/home";
import Queixoso from "./Pages/Queixoso/dados_queixoso";
import Dashboard from "./components/Dashboard/dashboard";
import Dashboard_queixoso from "./components/Dashboard/dashboard_queixoso";
import Login from "./components/Login/form_login";
import FormQueixante from "./components/Queixoso/Formulario_queixante";
import QueixaAnonima from "./components/Queixoso/queixa_modo_privado";
import { useState } from "react";
import FormQueixoso from "./components/Queixante/Form_Queixoso";
import QueixarMesmaEmpresa from "./components/Dashboard/queixar_mesma_empresa";
import QueixarOutraEmpresa from "./components/Dashboard/queixar_outra_empresa";
import LerQueixa from "./components/Dashboard/ler_queixa";
import ValidacaoQueixoso from "./components/Queixoso/validacao_trabalhador";
import ValidacaoEmpregador from "./components/Queixante/validacao_empregador";
import Dashboard_recepcionista from "./components/Recepcionista/area_recepcionista";
import ValidacaoEmail from "./components/Login/validacao_email";
import Dashboard_chefeServicos from "./components/Chefe_Servicos/dashboard_chefeServicos";
import ChatAconselhamento from "./components/chat/chat_aconselhamento";
import JoinAconselhamento from "./components/Join/join";
import DashboardAdmin from "./components/Dashboard/dashboard_admin";
import RegistrarFuncionario from "./components/Dashboard/registrar_funcionario";
import VerFuncionario from "./components/Dashboard/ver_funcionario";
import DashboardInspector from "./components/Inspector/dashboard_inspector";
import MaisDetalhes from "./components/Inspector/mais_detalhes";
import NovaReuniao from "./components/Inspector/nova_reuniao";
import NovaReuniaoEmpregador from "./components/Inspector/nova_reuniao_empregador";
import ReunioesEmpregados from "./components/Inspector/reunioes_empregados";
import ReunioesEmpregadores from "./components/Inspector/reunioes_empregadores";
import ReunioesQueixoso from "./components/Queixoso/reuniao_queixoso";
import HomeDuvidas from "./components/Duvidas/homeDuvidas";
import DetalhesDuvidas from "./components/Duvidas/detalhesDuvidas";
import QueixasFiltradasChefe from "./components/Chefe_Servicos/queixasFiltradas";
import HomeMaisNoticias from "./components/Noticias/homeMaisNoticias";
import HomeMaisArtigos from "./components/artigos/homeMaisArtigos";
import HomeMaisDetalhesNoticias from "./components/Noticias/homeMaisDetalhesNoticias";
import QueixasAdmin from "./components/Dashboard/queixas_admin";
import QueixasPorEstado from "./components/Dashboard/queixas_por_estado";
function App() {
  const [show, setShow] = useState("Empregador");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/queixar_empregador" element={<FormQueixante />} />
        <Route path="/queixar_trabalhador" element={<FormQueixoso />} />
        <Route path="/Entrar" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard_queixoso" element={<Dashboard_queixoso />} />
        <Route path="/queixa_anonima" element={<QueixaAnonima />} />
        <Route
          path="/queixar_mesma_empresa"
          element={<QueixarMesmaEmpresa />}
        />
        <Route
          path="/queixar_outra_empresa"
          element={<QueixarOutraEmpresa />}
        />
        <Route path="/ler_queixa/:id_queixa" element={<LerQueixa />} />
        <Route path="/validacao_trabalhador" element={<ValidacaoQueixoso />} />
        <Route path="/empregador" element={<ValidacaoEmpregador />} />
        <Route path="/recepcionista" element={<Dashboard_recepcionista />} />
        <Route path="/validacao" element={<ValidacaoEmail />} />
        <Route path="/chefe_servicos" element={<Dashboard_chefeServicos />} />
        <Route path="/chat_aconselhamento" element={<ChatAconselhamento />} />
        <Route path="/join" element={<JoinAconselhamento />} />
        <Route path="/dashboard_admin" element={<DashboardAdmin />} />
        <Route
          path="/registrar_funcionario"
          element={<RegistrarFuncionario />}
        />
        <Route path="/ver_funcionario" element={<VerFuncionario />} />
        <Route path="/mais_detalhes/:id_queixa" element={<MaisDetalhes />} />
        <Route
          path="/queixasFiltradas/:estado"
          element={<QueixasFiltradasChefe />}
        />

        <Route path="/inspector" element={<DashboardInspector />} />
        <Route path="/nova_reuniao" element={<NovaReuniao />} />
        <Route
          path="/nova_reuniao_empregador"
          element={<NovaReuniaoEmpregador />}
        />
        <Route path="/reunioes_empregados" element={<ReunioesEmpregados />} />
        <Route
          path="/reunioes_empregadores"
          element={<ReunioesEmpregadores />}
        />
        <Route path="/reunioes_queixoso" element={<ReunioesQueixoso />} />
        <Route path="/duvidas" element={<HomeDuvidas />} />
        <Route
          path="/detalhesDuvidas/:id_duvida"
          element={<DetalhesDuvidas />}
        />
        <Route path="/noticias" element={<HomeMaisNoticias />} />
        <Route path="/artigos" element={<HomeMaisArtigos />} />
        <Route
          path="/saiba_mais/:cod_noticia"
          element={<HomeMaisDetalhesNoticias />}
        />
        <Route path="/queixas_admin" element={<QueixasAdmin />} />
        <Route path="/queixas_admin/:estado" element={<QueixasPorEstado />} />
      </Routes>
    </Router>
  );
}

export default App;
