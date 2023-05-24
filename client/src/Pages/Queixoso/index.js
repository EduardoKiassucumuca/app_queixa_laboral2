import Menu from "../../components/Navbar/navbar";
import Etapas from "./etapas";
import FormQueixoso from "./dados_queixoso";
import "./area_submissao_queixa.css";

function Form_queixoso(){
    
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
document.getElementById("next_1").onclick = function(){
    console.log("1");
};


    return (
        <>
            <Menu/>
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <form id="msform">
                        <Etapas/>
                        <FormQueixoso/>
                    </form>
                </div>
            </div>
        </>
    )
   
}

export default Form_queixoso;