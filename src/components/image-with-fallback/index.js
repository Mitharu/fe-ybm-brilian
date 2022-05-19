import React, { useState, useEffect } from 'react'
import { toBase64, shimmerImgLoader } from '../../utils/helpers'

export default function ImageWithFallback({ src, alt }) {
  const styles = {
    position: "absolute",
    inset: "0px",
    boxSizing: "border-box",
    padding: "0px",
    border: "none",
    margin: "auto",
    display: "block",
    width: "0px",
    height: "0px",
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: "100%",
    maxHeight: "100%",
    objectFit: "cover",
  }
  const fallBackSrc = require("../../assets/image/image_not_found.png")
  const [state, setState] = useState({
    imgUrl: null,
    isLoaded: false,
  })
  const changeImage = () => {
    setState((prevState) => ({
      ...prevState,
      imgUrl: fallBackSrc,
      isLoaded: true,
    }))
  }
  useEffect(() => {
    setState((prevState) => ({ ...prevState, imgUrl: src, isLoaded: true }))
  }, [src])
  // const [imageError, setImageError] = useState(false);

  return (
    <>
      <img
        style={styles}
        src={
          !state.isLoaded
            ? `data:image/svg+xml;base64,${toBase64(
                shimmerImgLoader(400, 400),
              )}`
            : state.imgUrl
        }
        alt={alt}
        onLoad={() =>
          setState((prevState) => ({ ...prevState, isLoaded: true }))
        }
        onError={() => changeImage()}
      />
    </>
  )
}
