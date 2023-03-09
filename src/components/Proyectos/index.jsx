import FeedVideos from "../FeedProyectos"
import "./Proyectos.css"

export default function Proyectos() {
    return (
        <section id="portafolio">
            <div className="section-title">
                <h2>Portfolio</h2>
                <p>Mis Proyectos</p>
            </div>
            <div className="section-portafolio">
                <FeedVideos />
            </div>
        </section >
    )
}