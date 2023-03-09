import React from 'react';

export default function TitleIcon({ skill }) {
    return (
        skill.map(ski => {
            const titleIcon = ski.displayName.replace('IconBrand', '')
            return (
                <span key={titleIcon} className="icon" title={titleIcon}>
                    {React.createElement(ski)}
                </span>
            )
        })
    )
}