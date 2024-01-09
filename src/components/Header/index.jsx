import { icons } from "../../core/social";

export default function Header() {
    return (
        <header className="relative text-white h-screen flex flex-col justify-center">
            <div>
                <h1 className="text-5xl font-bold">Deyvis Valdez</h1>
                <p className="pt-5 pb-14 text-xl tracking-wider">
                    Hola bienvenido, soy<span className="border-b-2 border-green-500 pb-2"> fullstack developer </span>
                    de Perú
                </p>
            </div>

            <nav>
                <ul className=" flex gap-10 
                *:transition *:ease-in-out *:duration-700 
                hover:*:-translate-y-1 
                hover:*:scale-110 
                hover:*:border-b 
                hover:*:border-green-500
                hover:*:text-white
                font-medium *:text-gray-400 flex-wrap ease-out  duration-700"
                >
                    <li className="">
                        <a href="#header">Home</a>
                    </li>
                    <li>
                        <a href="#portafolio">Portafolio</a>
                    </li>
                    <li>
                        <a href="#experience">Experiencia</a>
                    </li>
                    <li>
                        <a href="#conocimiento">Conocimiento</a>
                    </li>
                </ul>
            </nav>

            <div className="pt-9 flex gap-4 *:flex *:justify-center *:items-center">
                {
                    icons.map(({ name, urlIcon }) => {
                        return (
                            <a key={name} href={urlIcon} className="bg-gray-800 p-3 rounded-full hover:bg-slate-700 activate:bg-slate-900">
                                <i className={`icon icon-${name}`} title={name}></i>
                            </a>
                        )
                    })
                }
            </div>
        </header>
    )
}