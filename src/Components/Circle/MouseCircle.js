import React, { useState } from "react"


const width = window.innerWidth;
const height = window.innerHeight;
const circleX = width / 2;
const circleY = height / 2;
const circleRadius = 100

const initialMousePosition = { x: width / 2, y: height / 2 }
const MouseCircle = () => {
    const [mousePosition, setMousePosition] = useState(initialMousePosition)

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        setMousePosition({x: clientX, y: clientY})
    }
    return (< svg width={width} height={height} onMouseMove={handleMouseMove} >

        <circle
            cx={mousePosition.x}
            cy={mousePosition.y}
            r={circleRadius}
        />
    </svg >
    )
}
export default MouseCircle