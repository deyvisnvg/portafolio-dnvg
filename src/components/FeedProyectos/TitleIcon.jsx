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
                <span key={titleIcon} className="icon" title={titleIcon}>
                    {React.createElement(ski)}
                </span>
            )
        })
    )
}