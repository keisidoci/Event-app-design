import React from 'react'
import "../components/TextComponent.css"

const TextComponent = ({label,size,weight,color, lineheight}) => {
    const style = `family ${size} ${weight} ${color} ${lineheight}`
    
    return (
        <div className={style}> 
            {label}
        </div>
    );
}

export default TextComponent