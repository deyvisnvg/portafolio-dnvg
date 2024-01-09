import { PROJECTS } from "../../core/projects";
import TitleIcon from './TitleIcon';

export default function FeedProjects() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16'>
            {
                PROJECTS.map(({ id, src, title, skill, app, github, description }) => {
                    return (
                        <div key={id} className="flex flex-col">
                            <div className='relative'>
                                <img src={src} alt="todos app" className='w-full h-72' />
                                <div className='absolute 
                                    flex flex-col 
                                    inset-0
                                    place-content-center
                                    *:place-self-center
                                    scale-75
                                    text-transparent
                                    duration-700 
                                    hover:text-white 
                                    hover:bg-black/65
                                    hover:-translate-y-0 
                                    hover:scale-100
                                    hover:border-dashed '
                                >
                                    <h2 className='text-2xl font-bold tracking-wider text-center lg:text-3xl'>{title}</h2>
                                    <div className='flex py-6 gap-4'>
                                        <TitleIcon skill={skill} />
                                    </div>
                                    <div className="flex gap-4 *:text-3xl">
                                        <a href={app} title="Ver App">
                                            <i className="icon icon-mobile2"></i>
                                        </a>
                                        <a href={github} title="GitHub">
                                            <i className="icon icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="relative bg-neutral-800 mt-1 p-3.5 font-mono text-xs tracking-wider break-words text-justify rounded-b-2xl">
                                <span className='font-bold text-sm'>{`${title}, `}</span>
                                {description}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}