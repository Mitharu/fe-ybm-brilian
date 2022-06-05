import React, { useEffect, useState } from 'react'
import CardNews from '../../components/card-news'
import ThumbnailNews from '../../components/thumbnail-news'
import { get } from '../../api'
// import { news } from '../../__json__'

export default function News() {
  const [news, setNews] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
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
          <div class="row">
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
                        desc={item.created_at}
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
                        desc={item.created_at}
                        linkTo={`/news/${item.id}`}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="container-xxl py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4" dangerouslysetinnerhtml={{ __html: }}>
              
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  )
}
