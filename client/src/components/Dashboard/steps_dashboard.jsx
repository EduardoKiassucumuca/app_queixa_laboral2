import React from "react"
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { FiSend } from "react-icons/fi";
import { BsCircle } from "react-icons/bs";


const StepsDashboard = ({ currentStep }) => {
    return (
        <div className="steps">
            <div className="step active">
                <BsCircle />
                <p>Identificação da Empresa</p>
                <span class="stepfirst">1</span>
            </div>
            <div className={`step ${currentStep >= 1 ? "active" : ""}`} id="step-queixa">
                <BsCircle />
                <p>Narração dos factos</p>
                <span class="steptwo">2</span>
            </div>
        </div>

    )
};

export default StepsDashboard;