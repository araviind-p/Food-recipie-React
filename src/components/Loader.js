import React from 'react'
import { ShimmerPostList } from "react-shimmer-effects";

function Loader() {
  return (
    <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={3} gap={30} />
  )
}

export default Loader