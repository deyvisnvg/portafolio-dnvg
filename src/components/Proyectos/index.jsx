import FeedProjects from "../FeedProyectos";

export default function Proyectos() {
    return (
        <section id="portafolio" className="relative text-white">
            <div>
                <p className="text-lg tracking-widest uppercase font-mono flex items-center pb-1">
                    Portfolio
                    <span className="border-t-2 border-green-600 px-14 sm:px-20 ml-3"></span>
                </p>
                <h1 className="text-3xl sm:text-5xl font-bold uppercase pb-10">Mis Proyectos</h1>
            </div>
            <div className="">
                <FeedProjects />
            </div>
        </section >
    )
}