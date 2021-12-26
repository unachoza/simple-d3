import React from "react"
import { arc } from 'd3'

const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 4;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 300;
const mouthRadius = 340;

const mouthArc = arc()
    .innerRadius(mouthWidth)
    .outerRadius(mouthRadius)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI / 2 * 3);

arc();
const BCircle = ({radius, color}) => {

  return  <circle
        r={radius}
        fill={color}
        stroke="black"
        strokeWidth={strokeWidth}
    />
}

const Circle = () => (
    <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
            <BCircle radius={centerY - strokeWidth / 2}  color={"pink"}/>
            
            <circle
                cx={-eyeOffsetX}
                cy={-eyeOffsetY}
                r={eyeRadius}
            />
            <circle
                cx={eyeOffsetX}
                cy={-eyeOffsetY}
                r={eyeRadius}
            />
            <path d={mouthArc()} />
        </g>
    </svg>
)
export default Circle