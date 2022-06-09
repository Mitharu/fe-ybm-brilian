/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'

/* eslint-disable array-callback-return */
export const shimmerImgLoader = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f2f2f2" offset="20%" />
      <stop stop-color="#d8d8d8" offset="50%" />
      <stop stop-color="#f2f2f2" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#d8d8d8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

export const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export const levelBreadcrumb = (params) => {
  const arr = []
  let path = ''
  const text = params
  const textArr = text.substring(1).split('/')
  textArr.map((item, idx) => {
    path = path.concat(`/${item}`)
    arr.push({
      text: item,
      path: path,
      class: `breadcrumb-item text-white ${
        idx === textArr.lengt - 1 ? 'active' : ''
      }`,
    })
  })
  return arr
}

export const mobileVersion = () => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  })
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension)

    return () => {
      window.removeEventListener('resize', setDimension)
    }
  }, [screenSize])

  return { ...screenSize }
}

export const transformNews = (data) => {
  const mainSidebar = data && data.slice(0, 4)
  const list = data && data.slice(4, data.length)
  return {
    main: mainSidebar.slice(0, 2),
    sidebar: mainSidebar.slice(2, mainSidebar.length),
    list,
  }
}

export const transformBlog = (data) => {
  return {
    main: data && data.slice(0, 5),
    list: data && data.slice(5, data.length),
  }
}
