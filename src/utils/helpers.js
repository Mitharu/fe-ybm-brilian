import Cookies from 'js-cookie'
// import { PostLogout } from '../api'

export const isLoggedIn = () => {
  const isLogin = Cookies.get('user_logged_in')
  return isLogin ? true : false
}

export const userLoggedIn = () => {
  const email = Cookies.get('user_data_email')
  const id_user = Cookies.get('user_data_id')
  const token = Cookies.get('user_data_token')
  return {
    email: JSON.parse(email),
    id_user: JSON.parse(id_user),
    token: JSON.parse(token),
  }
}

export const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx)
}

export const getBrowser = () => {
  if (
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]'
    })(
      !window['safari'] ||
        (typeof safari !== 'undefined' && window['safari'].pushNotification),
    )
  ) {
    return 'safari'
  } else {
    return 'another'
  }
}

export const splitUsername = () => {
  const name = JSON.parse(Cookies.get('user_data_nama'))
  const arr = name.split(' ')
  return arr[0]
}

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
