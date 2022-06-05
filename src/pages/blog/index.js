import React, { useEffect, useState } from 'react'
import Carousel from './carousel'
import CardBlog from '../../components/card-blog'
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
      <div className="container-xxl py-0 bg-dark hero-header wow fadeInUp">
        <div className="container my-5 py-5 carousel-blog">
          <div className="row">
            {banner &&
              banner.map((item, idx) => (
                <div key={String(idx)} className="col-lg-3 col-md-3" style={{ marginBottom: "10px" }}>
                  <CardBlog
                    linkTo={`blog/${item.id}`}
                    imageSrc={`${process.env.REACT_APP_IMAGE_BLOG}/${item.image}`}
                    imageHeight="250px"
                    title={item.name}
                    label={`${new Date(item.created_at).toDateString()}, ${item?.blog_type?.name}`}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
