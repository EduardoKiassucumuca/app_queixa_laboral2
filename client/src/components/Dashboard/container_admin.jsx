import React, { useState } from "react";
import "./container_admin.css";
import { Button } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../Modal/modal_delete";

function ContainerAdmin(props) {
  const [showModal, setShowModal] = useState(false);
  const [funcionarios, setFuncionarios] = useState([]);
  const [funcionario, setFuncionario] = useState("");

  const navigate = useNavigate();
  React.useEffect(() => {
    //console.log("ok");
    Axios.get("http://localhost:3001/funcionarios_igt")
      .then(({ data }) => {
        setFuncionarios(data.funcionarios);

        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log(res.response.data.msg);
      });
  }, []);

  const novo_funcionario = () => {
    navigate("/registrar_funcionario");
  };
  const modal_apagar = (funcionario) => {
    setFuncionario(funcionario);
    setShowModal(true);
  };
  return (
    <>
      <Button
        variant="warning"
        className="fw-bold btn-nova-queixa"
        type="button"
        onClick={novo_funcionario}
      >
        Novo Funcionario
      </Button>
      <table class="table table-striped table-responsive table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Localização do Office</th>
            <th scope="col">Cargo</th>
            <th scope="col">Departamento</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((funcionario) => (
            <tr>
              <th scope="row">{funcionario.id}</th>
              <td>
                {funcionario.Pessoa.nome} {funcionario.Pessoa.sobrenome}
              </td>
              <td>{funcionario.localizacao_office}</td>
              <td>{funcionario.cargo}</td>
              <td>{funcionario.area_departamento}</td>
              <td>
                <a
                  href={`/ver_funcionario/${funcionario.id}`}
                  className="btn btn-light"
                >
                  Editar
                </a>
              </td>
              <td>
                <a
                  className="btn btn-danger"
                  onClick={() => modal_apagar(funcionario)}
                >
                  Apagar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalDelete
        show={showModal}
        setShow={setShowModal}
        close={() => setShowModal(false)}
        funcionario={funcionario}
      />
    </>
  );
}

export default ContainerAdmin;
