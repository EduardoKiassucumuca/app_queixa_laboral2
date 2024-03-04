import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../Navbar/navbar";
import Footer from "../Footer/footer";
import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import axios from "axios";

function DetalhesDuvidas() {
  const [MyDuvida, setMyDuvida] = useState({});
  const navigate = useNavigate();
  const { id_duvida } = useParams();
  const getDuvida = async () => {
    try {
      const response = await axios.get("http://localhost:3001/myDuvida", {
        params: {
          duvidaID: id_duvida,
        },
      });

      console.log(response.data.duvidas);
      // Assuming you want to set the data from the response, not the entire response object
      setMyDuvida(response.data.duvidas);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  React.useEffect(() => {
    getDuvida();
  }, []);
  function detalhesDuvidas() {
    navigate("/detalhesDuvidas");
  }

  return (
    <>
      <Menu />
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
          <MDBRow className="justify-content-center">
            <MDBCol md="12" lg="10" xl="12">
              <MDBCard>
                <MDBCardBody>
                  <div className="d-flex flex-start align-items-center">
                    <div>
                      <h6 className="fw-bold text-primary mb-1">
                        {MyDuvida.assunto}
                      </h6>
                    </div>
                  </div>

                  <p className="mt-3 mb-4 pb-2">{MyDuvida.descricao}</p>
                </MDBCardBody>

                <MDBCardFooter
                  className="py-3 border-0"
                  style={{ backgroundColor: "#212529" }}
                >
                  <div
                    className="d-flex flex-start w-100"
                    style={{ marginLeft: 50 }}
                  >
                    <div>
                      <h6 className="fw-bold text-primary mb-1">
                        Lily Coleman
                      </h6>
                      <p className="text-muted small mb-0">
                        Shared publicly - Jan 2020
                      </p>
                      <p className="mt-3 mb-4 pb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip consequat.
                      </p>
                    </div>
                  </div>

                  <div className="float-end mt-2 pt-1"></div>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer />
      </section>
    </>
  );
}

export default DetalhesDuvidas;
