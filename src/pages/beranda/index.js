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
      <div class="py-5 container-program">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 class="mb-5">Program Kami</h3>
          </div>
          <div class="row align-items-center justify-content-center">
            {program &&
              program.map((item, idx) => (
                <a
                  href={item.path}
                  class="col-lg-3"
                  style={{ textDecoration: 'none', color: '#666565' }}
                >
                  <div
                    key={String(idx)}
                    class="text-center m-2 wow fadeInUp"
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
                </a>
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
                          linkTo={`/news/${item.id}`}
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
      <style>
        {`
          .container-program {
            position: relative;
            width: 100%;
            box-sizing: border-box;
          }

          .container-program::before {
            position: absolute;
            background-image: url(${require("../../assets/image/rectangle-3.svg").default});
            background-size: contain;
            background-repeat: no-repeat;
            content: "";
            top: 0;
            left: 0;
            width: 150px;
            height: 150px;
            z-index: 1;
          }

          .container-program::after {
            position: absolute;
            background-image: url(${require("../../assets/image/rectangle-4.svg").default});
            background-size: contain;
            background-repeat: no-repeat;
            content: "";
            bottom: 0;
            right: 50px;
            width: 300px;
            height: 300px;
            transform: rotate(180deg);
            z-index: 1;
          }
        `}
      </style>
    </React.Fragment>
  )
}
