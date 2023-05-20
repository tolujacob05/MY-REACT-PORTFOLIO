import React from "react";
import "./Pop1.css";

const Pop1 = ({open, onClose}) => {
    if(!open) return null;

    return (
        <>
            <section onClick={onClose}>
                <div className="pop-text">
                    tolu
                </div>
            </section>
        </>
    )
};

export default Pop1;