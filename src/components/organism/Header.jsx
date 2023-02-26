import WrapperLabel from "../molecules/WrapperLabel";
import Logo from '../../assets/img/Logo.svg';
import "../../assets/style/Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div>
                        <img src={Logo} alt="Logo de la empresa"/>
                    </div>
                    <div>
                        <Link to=""><WrapperLabel msn="Inicio" /></Link>
                        <Link to=""><WrapperLabel msn="Consulta" /></Link>
                        <Link to=""><WrapperLabel msn="Historial de consultas" /></Link>
                        <Link to=""><WrapperLabel msn="Perfil" /></Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
