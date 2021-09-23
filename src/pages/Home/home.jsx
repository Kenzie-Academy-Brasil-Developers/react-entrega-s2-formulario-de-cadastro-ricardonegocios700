//que sacagem:
import fundo from "../../images/bem_vindo.png";

import "./home.css";

const Home = ({ dataForm }) => {
  return (
    <div className="welcome">
      <h1> Seja bem-vindo(a){dataForm && ` ${dataForm.name}`}!</h1>
      <img src={fundo} alt="Bem vindo" />
      <h3>
        Verifique nossa mensagem no email{dataForm && ` ${dataForm.email}`}!
      </h3>
    </div>
  );
};

export default Home;
