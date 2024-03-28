import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function NewColorForm({addColor}) {
    const [newColor, setNewColor] = useState({name: ""});
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newColor.name || !newColor.value) {
            alert("Please add a name and select a color.");
            return;
        }
        addColor(newColor);
        nav("/colors");
    }

    return (
        <>
            <h1>Add a color</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Color Name"
                    value={newColor.name}
                    onChange={(e) => setNewColor({...newColor, name: e.target.value})}
                />
                <input
                    type="color"
                    value={newColor.value}
                    onChange={(e) => setNewColor({...newColor, value: e.target.value})}
                />
                <button type="submit">Add this color</button>
            </form>
        </>
    )
}

export default NewColorForm;