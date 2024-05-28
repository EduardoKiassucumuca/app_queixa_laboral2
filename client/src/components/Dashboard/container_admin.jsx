import React, { useState } from "react";
import "./container_admin.css";
import { Button } from "react-bootstrap";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "react-bootstrap";

function ContainerAdmin(props) {
  const [showModal, setShowModal] = useState(false);
  const [funcionarios, setFuncionarios] = useState([]);
  const [funcionario, setFuncionario] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [displayStyle, setDisplayStyle] = useState("none");
  const [displayStyle2, setDisplayStyle2] = useState("none");

  const [alert, setAlert] = useState("");

  const itemsPerPage = 10; // Número de itens por página

  // Cálculo dos índices dos itens a serem exibidos na página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = funcionarios.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const navigate = useNavigate();
  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay2 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle2((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
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
  const funcionarioSelecionado = (funcionario) => {
    setFuncionario(funcionario);
    console.log(funcionario);
    toggleDisplay();
  };
  function eliminar_funcionario() {
    Axios.delete("http://localhost:3001/apagar_funcionario", {
      params: {
        _id_funcionario: funcionario.id,
        pessoaID: funcionario.Pessoa.id,
        enderecoID: funcionario.Pessoa.Endereco.id,
      },
    })
      .then((response) => {
        setAlert(response.data.message);
        toggleDisplay();
        toggleDisplay2();

        // You can update your UI here to reflect the deleted item.
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function reloadPage() {
    window.location.reload();
  }
  function ver_funcionario(funcionario) {
    localStorage.setItem("id_funcionario", funcionario.id);
    window.location.href = "/ver_funcionario";
  }
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
      <table class="table table-striped table-responsive table-white">
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
          {currentItems.reverse().map((funcionario) => (
            <tr>
              <th scope="row">{funcionario.id}</th>
              <td>
                {funcionario.Pessoa.nome} {funcionario.Pessoa.sobrenome}
              </td>
              <td>{funcionario.localizacao_office}</td>
              <td>{funcionario.cargo}</td>
              <td>{funcionario.area_departamento}</td>
              <td>
                <button
                  onClick={(e) => ver_funcionario(funcionario)}
                  className="btn btn-warning"
                >
                  Editar
                </button>
              </td>
              <td>
                <a
                  className="btn btn-danger"
                  onClick={() => funcionarioSelecionado(funcionario)}
                >
                  Apagar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle,
        }}
      >
        <div class="modal-content">
          <p>Tens a certeza que pretendes eliminar?</p>
          <div class="modal-footer">
            <Button variant="warning" onClick={eliminar_funcionario}>
              Sim
            </Button>
            <Button variant="danger" onClick={toggleDisplay}>
              Nao
            </Button>
          </div>
        </div>
      </div>
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle2,
        }}
      >
        <div class="modal-content">
          <p>Funcionario eliminado com sucesso</p>
          <div class="modal-footer">
            <Button variant="warning" onClick={reloadPage}>
              OK
            </Button>
          </div>
        </div>
      </div>
      <Pagination
        className="justify-content-center mb-0"
        style={{ marginTop: 10, paddingBottom: 10 }}
      >
        {Array.from({
          length: Math.ceil(funcionarios.length / itemsPerPage),
        }).map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
}

export default ContainerAdmin;
