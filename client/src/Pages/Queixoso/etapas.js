import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./etapas.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Etapas(){
    
    return(
        <ul id="progressbar">
                <li class="active">Personal Details</li>
                <li>Social Profiles</li>
                <li>Account Setup</li>
        </ul>
    )
}

export default Etapas;