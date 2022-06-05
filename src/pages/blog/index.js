import React, { useEffect, useState } from 'react'
import Carousel from './carousel'
import { get } from '../../api'

export default function Blog() {
  const [banner, setBanner] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    async function fetchData() {
      //get banner
      get({
        endpoint: 'blog',
      })
        .then((res) => {
          if (res?.StatusCode === 200 && res?.Error === false)
            setBanner(res.Data)
        })
        .catch((err) => {
          console.log('err ->', err)
        })
    }
    fetchData()
  }, [])

  return (
    <React.Fragment>
      <Carousel data={banner} />
    </React.Fragment>
  )
}
