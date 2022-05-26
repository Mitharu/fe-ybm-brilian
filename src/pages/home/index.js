import React, { useEffect, useState } from 'react'
import CardNews from '../../components/card-news'
import ImageWithFallback from '../../components/image-with-fallback'
import ThumbnailNews from '../../components/thumbnail-news'
import { get } from '../../api'
import { program } from '../../__json__'

export default function Home() {
  const [news, setNews] = useState([])

  useEffect(() => {
    async function fetchData() {
      // get data news
      get({
        endpoint: 'berita',
      })
        .then((res) => {
          if (res?.StatusCode === 200 && res?.Error === false)
            setNews(res.Data[0]?.berita)
        })
        .catch((err) => {
          console.log('err ->', err)
        })
    }
    fetchData()
  }, [])

  return (
    <React.Fragment>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 class="mb-5">Program Kami</h3>
          </div>
          <div class="row align-items-center justify-content-center">
            {program &&
              program.map((item, idx) => (
                <div
                  key={String(idx)}
                  class="col-lg-3 text-center m-2 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item rounded p-3">
                    <ImageWithFallback
                      src={item.urlImage}
                      alt={`img-program-${idx}`}
                      imageHeight="250px"
                    />
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 class="mb-5">News</h3>
          </div>
          <div class="row wow fadeInUp">
            <div class="col-lg-8 col-md-8">
              <div class="row mb-4">
                <div class="col-lg-12 col-md-12">
                  {news &&
                    news
                      .slice(0, 1)
                      .map((item, idx) => (
                        <ThumbnailNews
                          key={String(idx)}
                          imageSrc={`${process.env.REACT_APP_IMAGE_BERITA}/${item.img}`}
                          imageHeight="500px"
                          title={item.name}
                        />
                      ))}
                </div>
              </div>
              <div class="row">
                {news &&
                  news.slice(0, 4).map((item, idx) => (
                    <div class="col-lg-3" key={String(idx)}>
                      <CardNews
                        imageSrc={`${process.env.REACT_APP_IMAGE_BERITA}/${item.img}`}
                        imageHeight="180px"
                        title={item.name}
                        desc={`8 April 2022`}
                        linkTo={`/news/${item.id}`}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="row">
                {news &&
                  news.slice(0, 2).map((item, idx) => (
                    <div class="col-lg-12 col-md-12 mb-4" key={String(idx)}>
                      <CardNews
                        imageSrc={`${process.env.REACT_APP_IMAGE_BERITA}/${item.img}`}
                        imageHeight="300px"
                        title={item.name}
                        desc={`8 April 2022`}
                        linkTo={`/news/${item.id}`}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
