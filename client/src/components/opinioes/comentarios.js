import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./comentarios.css";
import img_person from "../../img/Eduardo.jpg";


function Opinioes(){
    return (
        <>
        <Row className='opinioes'>
        <h1 className='txt-opinioes'>Como a plataforma ajudou você</h1>
            {Array.from({length:3}).map((_, opiniao)=>(
                <Col md={4}>
                        <Card.Body>
                        <Card.Title className='titulo-artigo'>Eduardo Kiassucumuca</Card.Title>
                        <Card.Text className='detalhes-artigo'>
                        Esta plataforma ajudou-me imenso a resolver o problema que eu tinha com a minha empresa!
                        </Card.Text>
                        </Card.Body>
                 
                </Col>
            ))}
        </Row>
        </>
    )
}

export default Opinioes;