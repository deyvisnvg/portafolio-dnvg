import "./Experiencia.css"

export default function Experiencia() {
    return (
        <section id="experience">

            <div className="section-title">
                <h2>Experiencia</h2>
                <p>Más Sobre mi Experiencia</p>
            </div>

            <div className="section-experience">
                <article className="event">
                    <figure >
                        <img src="images/silabuz.jpg" alt="conferencia" />
                    </figure>
                    <div className="event-detail">
                        <h1>SILABUZ</h1>
                        <h3>Estudiante Desarrollador Backend</h3>
                        <p>
                            Formación Profesional.
                            <br />
                            Capacitación técnica Backend en tecnologías como:
                            <br />
                            ⚡ Python, Flask, Django,
                            <br />
                            ⚡ Node.js, React.js, Javascript, Typescript, Mysql.
                        </p>
                        <a className="event-url" href="http://www.buildsoft.com.pe/portalbs/#/" target="_blank">Ver Plática</a>
                    </div>
                </article>
                <article className="event">
                    <figure >
                        <img src="images/buildsoft.png" alt="conferencia" />
                    </figure>
                    <div className="event-detail">
                        <h1>BuilSoft SAC.</h1>
                        <h3>Analista Programador</h3>
                        <p>
                            He aprendido mucho y estoy muy agradecido por ello.
                            <br />
                            Mis funciones:
                            <br />
                            ⚡ Desarrollo en java, .Net, C# de formularios o mantenedores y reportes con millones de registros para la aseguradora Mapfre.
                            <br />
                            ⚡ Daily meetings y coordinación de requerimientos con los analistas funcionales
                        </p>
                        <a className="event-url" href="http://www.buildsoft.com.pe/portalbs/#/" target="_blank">Ver Plática</a>
                    </div>
                </article>
                <article className="event">
                    <figure>
                        <img src="images/conf2.jpeg" alt="conferencia" />
                    </figure>
                    <div className="event-detail">
                        <h1>NetSolutions Consultores S.A.C.</h1>
                        <h3>Asistente de Proyecto TI</h3>
                        <p>
                            Como mi primer trabajo fue una bonita experiencia.
                            <br />
                            Mis funciones:
                            <br />
                            ⚡ Realizar toda documentación propia del proyecto.
                            <br />
                            ⚡ Manejo del sistema GlobalSuite, para la carga de los procesos de negocio de empresas financieras.
                            <br />
                            ⚡ Soporte remoto o presencial de tickets de incidencia y requerimientos del cliente.
                        </p>
                        <a className="event-url" href="https://www.netsolutions.pe/" target="_blank">Ver Plática</a>
                    </div>
                </article>
            </div>

        </section>
    )
}