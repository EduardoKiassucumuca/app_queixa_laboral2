import "./container_queixoso.css";
import Button from 'react-bootstrap/Button';
const { Row, Col } = require("antd");

const Container_queixoso = (props) =>{
 
  return (
    <>
   <Row className="row-queixoso">
   <Button variant="warning" className='fw-bold btn-nova-queixa' type="submit">
    Nova Queixa
</Button>
        <table class="table table-striped table-responsive table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Queixa</th>
      <th scope="col">Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{props.myData.queixa.id}</th>
      <td>{props.myData.queixa.facto}</td>
      <td>{props.myData.queixa.estado}</td> 
    </tr>
  </tbody>
</table>
</Row>
</>
  );
}
export default Container_queixoso;