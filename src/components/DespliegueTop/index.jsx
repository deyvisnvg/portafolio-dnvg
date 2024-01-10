import { createElement } from "react";
import { IconArrowNarrowUp } from "@tabler/icons-react";

export default function DespliegueTop() {
    return (
        <div className="fixed right-10 bottom-20 bg-white text-black rounded-full p-2">
            <a href="#top">{createElement(IconArrowNarrowUp)}</a>
        </div>
    )
}