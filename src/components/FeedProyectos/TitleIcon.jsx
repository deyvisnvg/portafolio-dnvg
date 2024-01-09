import React from 'react';

export default function TitleIcon({ skill }) {
    return (
        skill.map(ski => {
            let titleIcon = ski.displayName

            if (titleIcon == "IconLeaf") {
                titleIcon = "leaflet"
            } else if (titleIcon == "IconBrandFoursquare") {
                titleIcon = "Flask"
            } else {
                titleIcon = titleIcon.replace('IconBrand', '')
            }

            return (
                <span key={titleIcon} className="icon *:w-full *:h-full hover:text-yellow-200 hover:*:duration-700 hover:*:-translate-y-0 hover:*:scale-125" title={titleIcon}>
                    {React.createElement(ski)}
                </span>
            )
        })
    )
}