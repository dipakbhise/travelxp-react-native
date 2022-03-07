import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function WatchSvg(props) {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      {...props}
    >
      <Path d="M0 40h40V0H0z" fill="none" />
      <Rect
        x={5}
        y={6.67}
        width={30}
        height={21.67}
        rx={2}
        fill="none"
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M26.67 35L20 28.33 13.33 35"
        fill="none"
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      />
    </Svg>
  )
}

export default WatchSvg
