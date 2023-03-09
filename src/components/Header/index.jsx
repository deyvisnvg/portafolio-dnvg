import "./Header.css"
// import "../../assets/css/fonts.css"

export default function Header() {
    return (
        <header id="header">
            <div className="perfil">
                <h1>
                    <a href="#">Deyvis Valdez</a>
                </h1>
                <h2>
                    Hola soy<span> backend developer </span>
                    en Node.js y Python de Perú
                </h2>
            </div>

            <nav id="navbar" className="navbar">
                <ul>
                    <li>
                        <a className="nav-link active" href="#header">Home</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#portafolio">Portafolio</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#experience">Experiencia</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#conocimiento">Conocimiento</a>
                    </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

            <div className="social-links">
                <a href="https://twitter.com/Deyvisnvg" className="twitter">
                    <i className="icon icon-twitter"></i>
                </a>
                <a href="https://www.facebook.com/neyser94" className="facebook">
                    <i className="icon icon-facebook"></i>
                </a>
                <a href="https://www.instagram.com/deyvisnvg/" className="instagram">
                    <i className="icon icon-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/deyvisnvg/" className="linkedin">
                    <i className="icon icon-linkedin"></i>
                </a>
            </div>

        </header>
    )
}