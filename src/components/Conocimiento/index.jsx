import Skills from "./skills";
import {habilidades} from "../../core/habilidades";

export default function Conocimiento() {
    return (
        <section id="conocimiento" className="relative text-white pt-16">
            <div>
                <p className="text-lg tracking-widest uppercase font-mono flex items-center pb-1">
                    Conocimiento
                    <span className="border-t-2 border-green-600 px-14 sm:px-20 ml-3"></span>
                </p>
                <h1 className="text-3xl sm:text-5xl font-bold uppercase pb-10">Mis Conocimientos</h1>
            </div>
            <div>
                <article className="flex flex-col gap-y-5 pb-10 text-black">
                    {
                        habilidades.map(({ name_skill, skills }) => {
                            return (
                                <Skills
                                    key={name_skill}
                                    name_skill={name_skill}
                                    skills={skills}
                                />
                            )
                        })
                    }
                </article>
            </div>
        </section>
    )
}