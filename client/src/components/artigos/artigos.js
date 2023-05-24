import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./artigos.css";
import img_artigo from "../../img/lei_trabalho.jfif";

function Artigos() {
    return (
        <>
        <Row className='artigos'>
        <h1 className='txt-artigos'>Artigos</h1>
            {Array.from({length:3}).map((_, artigos)=>(
                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <button type='button' className='btn fw-bold bg-warning ribbon-artigo'>Artigo 1º</button>
                        <Card.Img variant="top" src={img_artigo} />
                        <Card.Body>
                        <Card.Title className='titulo-artigo'>Relação Jurídico-Laboral</Card.Title>
                        <Card.Text className='detalhes-artigo'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="warning" className='btn fw-bold btn-baixar-artigo'>Baixar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default Artigos;