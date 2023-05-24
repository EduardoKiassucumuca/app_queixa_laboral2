
import Menu from "../Navbar/navbar";
import CompnentMain from "../container/container";
import Artigos from "../artigos/artigos";
import Opinioes from "../opinioes/comentarios";
import Footer from "../Footer/footer";
import SubComentario from "../SubmeterComentario/submeter_comentario";
import Noticias from "../Noticias/noticias";
import "./home.css";
function Home() {
  return (
  <>
    <div className="meu-cover">
     <div className="cover-container d-flex w-100 h-100 p-3 mx-auto text-white flex-column">
      <Menu/>
      <CompnentMain/>
     </div>
     </div>
     <Noticias/>
     <Artigos/>
     <Opinioes/>
     <SubComentario/>
     <Footer/>
  </>
  );
}


export default Home;