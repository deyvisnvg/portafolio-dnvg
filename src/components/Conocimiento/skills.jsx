import React from "react"

export default function Skills({ name_skill, skills }) {
    return (
        <div className="py-4 px-6 sm:px-10 bg-neutral-300 rounded-3xl">
            <div className="font-bold sm:text-lg text-[#2926ff] pb-3">
                {name_skill}
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(60px,_1fr))] gap-x-10 gap-y-4 items-center font-bold text-xs">
                {
                    skills.map(({ name, skill }) => {
                        return (
                            <div key={name} className="flex flex-col items-center hover:*:text-pink-600 hover:-translate-y-0 hover:scale-125 duration-700">
                                {name}{React.createElement(skill)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}