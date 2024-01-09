import React from "react"

export default function Skills({ name_skill, skills }) {
    return (
        <div className="flex p-7 gap-12 items-center bg-neutral-300 rounded-3xl">
            <p className="font-bold text-sm sm:text-lg text-[#2926ff]">
                {name_skill}
            </p>
            <figure className="flex flex-wrap gap-x-10 gap-y-4 items-center font-bold text-xs">
                {
                    skills.map(({ name, skill }) => {
                        return (
                            <span key={name} className="flex flex-col items-center hover:*:text-pink-600 hover:-translate-y-0 hover:scale-125 duration-700">
                                {name}{React.createElement(skill)}
                            </span>
                        )
                    })
                }
            </figure>
        </div>
    )
}