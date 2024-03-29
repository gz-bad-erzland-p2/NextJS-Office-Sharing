import React from 'react'

const uniqId = '__spinner__';
const DashedRotateAnimation = (dash) => `@keyframes DashedRotate${uniqId}` + '{' +
    `0% {stroke-dasharray:${dash} ${dash} 1 ${dash};transform:rotate(0deg);}` +
    `50% {stroke-dasharray:${dash};transform:rotate(360deg);}` +
    `100% {stroke-dasharray:${dash} ${dash} 1 ${dash};transform:rotate(720deg);}` +
    '};';

const InlineSvgStyle = ({animation}) => (
    <style>
        {`/* <![CDATA[ */${(animation)}/* ]]> */`}
    </style>
)


const DashLoading = ({
                         size = 40,
                         strokeWidth = 4,
                         duration = 1.8,
                         stroke,
                         ...rest
                     }) => {
    const radius = size / 2 - strokeWidth
    const dash = Math.PI * radius / 5

    return (
        <svg {...rest} width={size} height={size}>
            <InlineSvgStyle animation={DashedRotateAnimation(dash)}/>
            <circle
                fill='none'
                stroke={stroke}
                strokeLinecap='round'
                strokeWidth={strokeWidth}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                style={{
                    transformOrigin: 'center',
                    animationName: `DashedRotate${uniqId}`,
                    animationDuration: `${duration}s`,
                    animationIterationCount: 'infinite',
                }}
            />
        </svg>
    )
}

export default DashLoading