import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BookSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        fill="none"
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5.25v13.5M2.25 15.674a.749.749 0 01.6-.734 3 3 0 000-5.88.749.749 0 01-.6-.734V6A.75.75 0 013 5.25h18a.75.75 0 01.75.75v2.326a.749.749 0 01-.6.734 3 3 0 000 5.88.749.749 0 01.6.734V18a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75z"
      />
    </Svg>
  )
}

export default BookSvg
