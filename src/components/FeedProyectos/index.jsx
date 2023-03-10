import {
    IconBrandReact,
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandJavascript,
    IconBrandNpm,
    IconBrandSocketIo,
    IconLeaf as IconBrandleaf,
    IconBrandPhp,
    IconBrandPython,
    IconBrandPowershell,
    IconBrandFoursquare as IconBrandFlask,
    IconBrandGit,
    IconBrandGithub,
    IconBrandTypescript,
    IconBrandVercel,
    IconBrandPrisma
} from '@tabler/icons-react';
import TitleIcon from './TitleIcon';
import "./FeedProyectos.css"
import todos from "../../../public/images/todos.png"
import dibujo from "../../../public/images/dibujo.png"
import cssGrid from "../../../public/images/cssGrid.png"
import paintWeb from "../../../public/images/paintWeb.png"
import leafletMapa from "../../../public/images/leafletMapa.png"
import chatSocketio from "../../../public/images/chatSocketio.png"
import juegoSecuencia from "../../../public/images/juegoSecuencia.png"
import control from "../../../public/images/control.png"
import villaNeyser from "../../../public/images/villaNeyser.png"
import cajeroAutomatico from "../../../public/images/cajeroAutomatico.png"
import dibujarConFlechas from "../../../public/images/dibujarConFlechas.png"
import bolsaTrabajo from "../../../public/images/bolsaTrabajo.png"
import bookPokemon from "../../../public/images/bookPokemon.png"
import rickyMorty from "../../../public/images/rickyMorty.png"

const PROJECTS = [
    {
        id: 7,
        src: rickyMorty,
        title: "Api Ricky and Morty",
        skill: [
            IconBrandPython,
            IconBrandFlask,
            IconBrandGit
        ],
        app: "#",
        github: "https://github.com/deyvisnvg/flaskPersonajeApi",
        description: ", proyecto final unidad 2 en Silabuz, aplicación que consume la API Rick and Morty, el cual extrae todos los personajes de la página 1 a la 21. API: https://rickandmortyapi.com/documentation/"
    },
    {
        id: 8,
        src: bookPokemon,
        title: "Books and Pokemon",
        skill: [
            IconBrandPython,
            IconBrandPowershell,
            IconBrandGit
        ],
        app: "#",
        github: "https://github.com/deyvisnvg/ProyectoSilabuz_1",
        description: ", construcción de la aplicacion Libro y Pokemon en python, cuya funcionalidad permite realizar las siguientes funcionalidades, CRUD de la aplicación Libros y Consumir la API de Pokemon para listar por generación, forma, habilidad, hábitat y tipo."
    },
    {
        id: 9,
        src: todos,
        title: "My Taks",
        skill: [
            IconBrandReact,
            IconBrandHtml5,
            IconBrandCss3,
            IconBrandJavascript
        ],
        app: "https://deyvisnvg.github.io/curso-intro-react/",
        github: "https://github.com/deyvisnvg/curso-intro-react",
        description: ", fue el resultado de mi aprendizaje al llevar el Curso de Introducción a React.js, es una aplicación interactiva realizada en React basado en componentes, en la cual pudes crear tus tareas, chekearlos como completado y eliminarlos en caso lo requieras."
    },
    {
        id: 10,
        src: dibujo,
        title: "Dibujos CSS",
        skill: [
            IconBrandHtml5,
            IconBrandCss3,
            IconBrandJavascript
        ],
        app: "https://deyvisnvg.github.io/retoDibujoCssGridLayout/",
        github: "https://github.com/deyvisnvg/retoDibujoCssGridLayout",
        description: ", fue el resultado de mi aprendizaje al llevar el Curso Profesional de Css Grid Layout, donde se puede apreciar el rostro de una persona cómica y un logotipo de marca."
    },
    {
        id: 11,
        src: cssGrid,
        title: "CSS Grid Layout",
        skill: [
            IconBrandHtml5,
            IconBrandCss3,
            IconBrandJavascript
        ],
        app: "https://deyvisnvg.github.io/proyectoCssGridLayout/",
        github: "https://github.com/deyvisnvg/proyectoCssGridLayout",
        description: ", fue el resultado de mi aprendizaje al llevar el Curso Profesional de Css Grid Layout, donde se utilizó las distintas propiedades de Css Grid Layoud."
    },
    {
        id: 12,
        src: paintWeb,
        title: "Paint Web",
        skill: [
            IconBrandHtml5,
            IconBrandCss3,
            IconBrandJavascript
        ],
        app: "https://deyvisnvg.github.io/paintWeb/",
        github: "https://github.com/deyvisnvg/paintWeb",
        description: ", aplicación similar a un Paint realizada en javascript, en la cual se manejan 3 tipos de eventos de mouse: mousedown, mousemove, mouseup, cuyas funcionalidades son: Pintar, borrar, establecer color y definir el tamaño del pincel."
    },
    {
        id: 13,
        src: leafletMapa,
        title: "Leaflet location",
        skill: [
            IconBrandNpm,
            IconBrandSocketIo,
            IconBrandleaf,
            IconBrandHtml5,
            IconBrandCss3,
            IconBrandJavascript
        ],
        app: "https://leaflet-node.herokuapp.com/",
        github: "https://github.com/deyvisnvg/leaflet-node",
        description: ", es una aplicación realizada en Node.js con socket.io y leaflet, la cual permite determinar la ubicación geográfica de los usarios que visitan tu página web."
    },
    {
        id: 14,
        src: chatSocketio,
        title: "Chat tiempo Real",
        skill: [
            IconBrandNpm,
            IconBrandSocketIo,
        ],
        app: "https://chatsocket-io.herokuapp.com/",
        github: "https://github.com/deyvisnvg/socketio-server",
        description: ", es una aplicación realizada en Node.js con tecnología socket.io que proporciona un canal de comunicación bidireccional entre cliente y servidor, la cual permite ejecutar conversaciones en tiempo real con distintos usuarios."
    },
    {
        id: 15,
        src: juegoSecuencia,
        title: "Juego: Simon dice",
        skill: [
            IconBrandHtml5,
            IconBrandCss3,
            IconBrandJavascript
        ],
        app: "https://deyvisnvg.github.io/juegoSecuenciaColores/",
        github: "https://github.com/deyvisnvg/juegoSecuenciaColores",
        description: ", fue el resultado de mi aprendizaje al llevar el Curso de Fundamentos de javascript en Platzi, en el que se van iluminando una secuencia de botones que el jugador tendrá que ir repitiendo hasta superar los 10 niveles de dificultad, para ganar."
    },
    {
        id: 16,
        src: control,
        title: "Control de Entrada",
        skill: [
            IconBrandHtml5,
            IconBrandCss3,
            IconBrandJavascript
        ],
        app: "https://deyvisnvg.github.io/ResponsiveDesign_Control/",
        github: "https://github.com/deyvisnvg/ResponsiveDesign_Control",
        description: ", control de Entrada, fue el resultado de mi aprendizaje al llevar el Curso de Desarrollo Web Online y Responsive Design en Platzi; una aplicación responsive, que permite controlar la asistencia de los Alumnos de una determinada I.E."
    },
    {
        id: 17,
        src: villaNeyser,
        title: "Villa Neyser",
        skill: [
            IconBrandHtml5,
            IconBrandJavascript
        ],
        app: "https://deyvisnvg.github.io/villaNeyser/",
        github: "https://github.com/deyvisnvg/villaNeyser",
        description: ", fue el resultado de mi aprendizaje al llevar el Curso de Programación Básica en Platzi; cuyo funcionamiento es el movimiento del lobo a través de las flechas del Teclado y el mouse."
    },
    {
        id: 18,
        src: cajeroAutomatico,
        title: "Cajero Automático",
        skill: [
            IconBrandHtml5,
            IconBrandJavascript
        ],
        app: "https://deyvisnvg.github.io/cajeroAutomatico/",
        github: "https://github.com/deyvisnvg/cajeroAutomatico",
        description: ", fue el resultado de mi aprendizaje al llevar el Curso de Programación Básica en Platzi; cuyo funcionamiento es la entrega efectiva del dinero solicitado."
    },
    {
        id: 19,
        src: dibujarConFlechas,
        title: "Dibujo con Flechas",
        skill: [
            IconBrandHtml5,
            IconBrandJavascript
        ],
        app: "https://deyvisnvg.github.io/flechasTeclado/",
        github: "https://github.com/deyvisnvg/flechasTeclado",
        description: ", fue el resultado de mi aprendizaje al llevar el Curso de Programación Básica en Platzi; cuyo funcionamiento es dibujar mediante lineas a través de las flechas del teclado."
    },
    {
        id: 20,
        src: bolsaTrabajo,
        title: "Bolsa de Trabajo",
        skill: [
            IconBrandPhp,
            IconBrandHtml5,
            IconBrandCss3,
            IconBrandJavascript
        ],
        app: "http://bolsa.unia.edu.pe/index.php",
        github: "#",
        description: ", es una aplicación web desarrollado para el Licenciamiento de la Universidad Nacional Intercultural de la Amazonía, la cual permite gestionar la publicación de oportunidades laborales realizadas por ciertas entidades."
    }
]

export default function FeedVideos() {
    return (
        PROJECTS.map(({ id, src, title, skill, app, github, description }) => {
            return (
                <div key={id} className="portafolio-item">
                    <img src={src} alt="todos app" />
                    <div className="portafolio-info">
                        <h2>{title}</h2>
                        <div className="skill">
                            <TitleIcon skill={skill} />
                        </div>
                        <div className="portafolio-links">
                            <a href={app} title="Ver App">
                                <i className="icon icon-mobile2"></i>
                            </a>
                            <a href={github} title="GitHub">
                                <i className="icon icon-link"></i>
                            </a>
                        </div>
                    </div>
                    <div className="description">
                        <strong>{title}</strong>
                        {description}
                    </div>
                </div>
            )
        })
    )
}