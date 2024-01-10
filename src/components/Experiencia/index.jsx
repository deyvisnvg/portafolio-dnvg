import { silabuz, buildsoft, conf2, mdpConsulting } from "../../assets/images"

export default function Experiencia() {
    return (
        <section id="experience" className="relative text-white pb-16">
            <div>
                <p className="text-lg tracking-widest uppercase font-mono flex items-center pb-1">
                    Experiencia
                    <span className="border-t-2 border-green-600 px-14 sm:px-20 ml-3"></span>
                </p>
                <h1 className="text-3xl sm:text-5xl font-bold uppercase pb-10">Más Sobre mi Experiencia</h1>
            </div>

            <div className="*:bg-gray-100 *:rounded-2xl text-black *:text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 *:w-full *:h-[480px] lg:*:h-[500px]">
                <article className="flex flex-col items-center pt-2">
                    <figure className="w-11/12">
                        <img src={mdpConsulting} alt="conferencia4" className="rounded-2xl w-full h-52" />
                    </figure>
                    <div className="bg-white -m-24 px-3 sm:px-5 py-3 w-10/12">
                        <div className="*:text-center *:py-1 font-bold">
                            <h1 className="text-lg">MDP Consulting</h1>
                            <p>Analista Programador</p>
                        </div>
                        <div className="font-light py-2">
                            <p>Funciones del Cargo.</p>
                            <p className="pt-2">⚡ Análisis de requerimientos funcionales del Proyecto.</p>
                            <p>⚡ Desarrollo del Proyecto en Angular15 y consumo de Servicios Rest.</p>
                            <p>⚡ Preubas y despliegue a integración.</p>
                        </div>
                        <div className="text-center py-4">
                            <a className="p-3 border rounded-lg border-blue-700 text-blue-700 hover:bg-gray-100" href="http://www.mdp.com.pe">
                                Ver Plática
                            </a>
                        </div>
                    </div>
                </article>

                <article className="flex flex-col items-center pt-2">
                    <figure className="w-11/12">
                        <img src={silabuz} alt="conferencia" className="rounded-2xl w-full h-52" />
                    </figure>
                    <div className="bg-white -m-24 px-3 sm:px-5 py-3 w-10/12">
                        <div className="*:text-center *:py-1 font-bold">
                            <h1 className="text-lg">SILABUZ</h1>
                            <p>Desarrollador Backend</p>
                        </div>
                        <div className="font-light py-2">
                            <p>Formación Profesional.</p>
                            <p>Capacitación técnica Backend en tecnologías como:</p>
                            <p className="pt-2">⚡ Python, Flask, Django,</p>
                            <p>⚡MongoDB, Mysql.</p>
                            <p>⚡ Node.js, React.js, Javascript, Typescript, Mysql.</p>
                        </div>
                        <div className="text-center py-4">
                            <a className="p-3 border rounded-lg border-blue-700 text-blue-700 hover:bg-gray-100" href="http://www.buildsoft.com.pe/portalbs/#/">
                                Ver Plática
                            </a>
                        </div>
                    </div>
                </article>

                <article className="flex flex-col items-center pt-2">
                    <figure className="w-11/12">
                        <img src={buildsoft} alt="conferencia" className="rounded-2xl w-full h-52" />
                    </figure>
                    <div className="bg-white -m-24 px-3 sm:px-5 py-3 w-10/12">
                        <div className="*:text-center *:py-1 font-bold">
                            <h1 className="text-lg">BuilSoft SAC</h1>
                            <p>Analista Programador</p>
                        </div>
                        <div className="font-light py-2">
                            <p>Funciones del Cargo.</p>
                            <p className="pt-2">⚡ Desarrollo en java, PL/SQL y .Net de formularios con millones de registros para MAPFRE.</p>
                            <p>⚡ Daily meetings y coordinación de requerimientos con los analistas funcionales</p>
                        </div>
                        <div className="text-center py-4">
                            <a className="p-3 border rounded-lg border-blue-700 text-blue-700 hover:bg-gray-100" href="http://www.buildsoft.com.pe/portalbs/#/">
                                Ver Plática
                            </a>
                        </div>
                    </div>
                </article>

                <article className="flex flex-col items-center pt-2">
                    <figure className="w-11/12">
                        <img src={conf2} alt="conferencia" className="rounded-2xl w-full h-52" />
                    </figure>
                    <div className="bg-white -m-24 px-3 sm:px-5 py-3 w-10/12">
                        <div className="*:text-center *:py-1 font-bold">
                            <h1 className="text-lg">NetSolutions SAC</h1>
                            <p>Asistente de Proyecto TI</p>
                        </div>
                        <div className="font-light py-2">
                            <p>Funciones del Cargo.</p>
                            <p className="pt-2">⚡ Realizar documentación propias del proyecto.</p>
                            <p>⚡ Manejo del sistema GlobalSuite, carga de los procesos de negocios.</p>
                            <p>⚡ Soporte remoto o presencial de incidencias y requerimientos del cliente.</p>
                        </div>
                        <div className="text-center py-4">
                            <a className="p-3 border rounded-lg border-blue-700 text-blue-700 hover:bg-gray-100" href="https://www.netsolutions.pe/">
                                Ver Plática
                            </a>
                        </div>
                    </div>
                </article>
            </div>

        </section>
    )
}