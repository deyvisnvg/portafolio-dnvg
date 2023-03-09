import { Conocimiento, Experiencia, Footer, Header, Proyectos } from "../../components"
import "./Portafolio.css"

export default function Portafolio() {
    return (
        <div className="container">
            <Header />
            <Proyectos />
            <Experiencia />
            <Conocimiento />
            <Footer />
        </div>
    )
}