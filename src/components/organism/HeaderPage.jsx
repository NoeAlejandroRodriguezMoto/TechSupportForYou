import WrapperLabel from "../molecules/WrapperLabel";
import Logo from '../../assets/img/Logo.svg';
import "../../assets/style/Header.css";
import { Link } from "react-router-dom";

function HeaderPage() {
    return (
        <>
            <header>
                <div className="container">
                    <div>
                        <img src={Logo} alt="Logo de la empresa"/>
                    </div>
                    <div>
                        <Link to="/landingUser"><WrapperLabel msn="Iniciar sesión" /></Link>
                        <Link to="/landingTech"><WrapperLabel msn="Registrarse" /></Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderPage;