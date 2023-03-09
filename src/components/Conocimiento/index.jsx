import "./Conocimiento.css"

export default function Conocimiento() {
    return (
        <section id="conocimiento">
            <div className="section-title">
                <h2>Conocimiento</h2>
                <p>Mis Conocimientos</p>
            </div>
            <div className="section-conocimiento">
                <article className="code-list">
                    <figure>
                        <img src="images/code.png" alt="" />
                        <p><strong>Construcción</strong></p>
                    </figure>
                    <figure>
                        <img src="images/design.png" alt="" />
                        <p><strong>Diseño</strong></p>
                    </figure>
                    <figure>
                        <img src="images/certificados.png" alt="" />
                        <p><strong>Certificados</strong></p>
                    </figure>
                </article>
                <article className="skills">
                    <div className="description">
                        <p>Frontend</p>
                        <figure>
                            <img src="images/html.png" alt="html" width="40px" />
                            <img src="images/css.png" alt="css" width="40px" />
                            <img src="images/js.png" alt="js" width="40px" />
                            <img src="images/react.png" alt="html" width="40px" />
                        </figure>
                    </div>
                    <div className="description">
                        <p>Backend</p>
                        <figure>
                            <img src="images/php.png" alt="html" width="45px" />
                            <img src="images/mysql.png" alt="css" width="62px" />
                            <img src="images/nodejs.png" alt="js" width="45px" />
                            <img src="images/expressjs.png" alt="js" width="30px" />
                            <img src="images/python3.png" alt="js" width="30px" />
                        </figure>
                    </div>
                    <div className="description">
                        <p>Otras habilidades</p>
                        <figure>
                            <img src="images/git.png" alt="html" width="42px" height="18px" />
                            <img src="images/github.png" alt="css" width="72px" height="22px" />
                            <img src="images/photoshop.png" alt="js" width="40px" />
                        </figure>
                    </div>
                </article>
            </div>
        </section>
    )
}