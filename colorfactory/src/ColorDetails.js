import React from "react";
import {Navigate, Link} from "react-router-dom";
import {useParams} from "react-router-dom";

function ColorDetails({colors}) {
    const {color} = useParams();
    const selectColor = colors.find((c) => c.name === color);

    if (!selectColor || !color) return <Navigate to="/colors"/>

    return (
        <>
            <div className="Color">
                <h1 style={{
                    textAlign: "center",  
                    zIndex: 1,
                    position: "relative"
                    }}>THIS IS {color.toUpperCase()}, ISN'T IS BEAUTIFUL?!</h1>
                <div style={{
                    position: "fixed",
                    top: 0, 
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: selectColor.value,
                    }}/>
                <Link to="/colors" style={{
                    zIndex: 1, 
                    position: "relative",
                    color: "black"
                    }}>Go Home</Link>
            </div>
        </>
    )
}

export default ColorDetails;