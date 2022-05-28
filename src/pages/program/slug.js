import React, { useEffect, useState } from 'react'
import Carousel from './carousel'
import ImageWithFallback from '../../components/image-with-fallback'
import { get } from '../../api'
import { program } from '../../__json__'

export default function Slug() {
  const [banner, setBanner] = useState([])

  useEffect(() => {
    async function fetchData() {
      //get banner
      get({
        endpoint: 'banner',
      })
        .then((res) => {
          if (res?.StatusCode === 200 && res?.Error === false)
            setBanner(res.Data)
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
      <div class="container-xxl py-5 wow fadeInUp">
        <div class="container">
          <div class="row align-items-start justify-content-center">
            {program &&
              program.map((item, idx) => (
                <div class="col-lg-3 col-md-3 m-1" data-wow-delay="0.1s">
                  <div className="service-item rounded p-3">
                    <div class="row">
                      <div class="col-lg-5 col-md-5">
                        <ImageWithFallback
                          src={item.urlImage}
                          alt={item.urlImage}
                          imageHeight="200px"
                        />
                      </div>
                      <div class="col-lg-7 col-md-7">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
