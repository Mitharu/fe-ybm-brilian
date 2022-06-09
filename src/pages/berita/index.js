import React, { useEffect, useState } from 'react'
import CardNewsSidebar from '../../components/card-news-sidebar'
import CarouselThumbnail from '../beranda/carousel-thumbnail'
import CarouselNews from '../beranda/carousel-news'
import { get } from '../../api'
import { transformNews } from '../../utils/helpers'
// import { news } from '../../__json__'

export default function News() {
  const [news, setNews] = useState()
  const [video, setVideo] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    async function fetchData() {
      // get data news
      get({
        endpoint: 'berita',
      })
        .then((res) => {
          if (res?.StatusCode === 200 && res?.Error === false)
            setNews(transformNews(res.Data[0]?.berita))
        })
        .catch((err) => {
          console.log('err ->', err)
        })

      // get data video
      get({
        endpoint: 'video',
      })
        .then((res) => {
          if (res?.StatusCode === 200 && res?.Error === false)
            setVideo(res.Data)
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
          <div class="row wow fadeInUp">
            <div class="col-lg-8 col-md-8">
              <div class="row mb-4">
                <div class="col-lg-12 col-md-12">
                  <CarouselThumbnail data={news && news.main} video={video} />
                </div>
              </div>
              <div class="row slider-news-hp">
                <CarouselNews data={news && news.list} />
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="row">
                {news &&
                  news.sidebar &&
                  news.sidebar.slice(0, 2).map((item, idx) => (
                    <div class="col-lg-12 col-md-12 mb-4" key={String(idx)}>
                      <CardNewsSidebar
                        imageSrc={`${process.env.REACT_APP_IMAGE_BERITA}/${item.img}`}
                        imageHeight="300px"
                        title={item.name}
                        desc={item.created_at}
                        linkTo={`/berita/${item.id}`}
                        type="sidebar"
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
