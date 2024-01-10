import { Conocimiento, Experiencia, Footer, Header, Proyectos, DespliegueTop } from "../../components";
import "./Portafolio.css";

export default function Portafolio() {
    return (
        <div className="h-screen px-14 sm:px-32 md:px-20 lg:px-20 xl:px-40 overflow-y-scroll scroll-smooth relative">
            <Header />
            <Proyectos />
            <Experiencia />
            <Conocimiento />
            <Footer />
            <DespliegueTop />
        </div>
    )
}