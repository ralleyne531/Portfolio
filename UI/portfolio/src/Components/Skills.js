import React from "react";
import * as Icons from "./Icons"

function Skills(){

    return <>
        <h2>Skills</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {Object.entries(Icons).map(([name, Icon]) => (
                <div key={name} style={{ textAlign: 'center', margin: '0' }}>
                    <Icon width={50} height={50} />
                    <p style={{ fontSize: '12px' }}>{name.replace('Icon', '')}</p>
                </div>
            ))}
        </div>
    </>
}

export default Skills