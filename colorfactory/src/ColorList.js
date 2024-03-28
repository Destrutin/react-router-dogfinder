import React from "react";
import {Link} from "react-router-dom";

function ColorList({colors}) {

    return (
        <>
            <h2>Please select a color.</h2>
            <ul>
                {colors.map((color, i) => (
                        <li key={i}>
                        <Link to={`/colors/${color.name}`}>
                            <p>{color.name}</p>
                        </Link>
                        </li>
                ))}
            </ul>
        </>
    )
}

export default ColorList;