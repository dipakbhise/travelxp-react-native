import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function DiamondStrokeSvg(props) {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1013.81 919.15"
      {...props}
    >
      <Path
        d="M1006.24 274.57a8.59 8.59 0 00-1.58-6.11L841.8 12.71c0-1.13-1.59-1.58-2.49-2.49s0 0-1.36 0a9.15 9.15 0 00-5.44-2.72H181.32a9.08 9.08 0 00-5.44 1.59h-1.36c-1.35 0-2 1.36-2.49 2.49L9.17 268.44a11.7 11.7 0 00-1.59 6.13 6.35 6.35 0 000 2 21 21 0 000 3.17h0l490.61 629.48h0a12.21 12.21 0 002.49 2.27h1.13a14.82 14.82 0 004.31 0h0a14.75 14.75 0 004.3 0h0l2.95-2.27h0l490.83-628.1h0a18.64 18.64 0 000-3.17 6.51 6.51 0 002.04-3.38zM506.8 39.21l142.7 224.24H364.32L474.18 90.63zm148.59 246.21L507.02 858.48 358.44 285.42zm156.74-214l20.38-32.17 142.7 224.24h-285.4zM446.77 92.67l-102.6 161.27-142.7-223.79h285.4zM323.32 263.45H38.61L181.32 39.21zM481.88 853.5L41.1 285.42h294.46zm195.44-568.08h294.45L531.03 853.5zm-8.61-31.48L527.18 30.15h285.4z"
        fill={props.fill}
        stroke={props.fill}
        strokeMiterlimit={10}
        strokeWidth={20}
      />
    </Svg>
  )
}

export default DiamondStrokeSvg
