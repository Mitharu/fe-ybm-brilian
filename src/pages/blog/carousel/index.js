import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import ImageWithFallback from '../../../components/image-with-fallback'

const TitleCarousel = styled.div`
  display: inline-block;
  font-size: 35px;
  font-weight: 700;
  color: #00569c;
  padding: 10px;
  text-align: left;
  width: 100%;
  margin-top: 50px 0 0 0;
  padding: 0;
`

// const DescCarousel = styled.div`
//   display: inline-block;
//   font-size: 30px;
//   font-weight: 600;
//   color: #000;
//   padding: 10px;
//   width: 100%;
// `

export default function Carousel({ data }) {
  const settings = {
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  }

  return (
    <div className="container-xxl py-0 bg-dark hero-header wow fadeInUp">
      <div className="container my-5 py-5 carousel-blog">
        <Slider {...settings}>
          {data &&
            data.map((item, idx) => (
              <div key={String(idx)}>
                <div className="col-md-12">
                  <div
                    className="row box-carousel"
                    style={{ background: '#f2f2f2' }}
                  >
                    <div className="col-lg-6 col-md-6">
                      <ImageWithFallback
                        src={`${process.env.REACT_APP_IMAGE_BLOG}/${item.image}`}
                        alt={item.image}
                        imageHeight="500px"
                      />
                      {/* <div className="box-label">
                        <TitleCarousel>{item.name}</TitleCarousel>
                        <LabelCarousel>
                          <span>
                            {new Date(item.created_at).toDateString()},
                          </span>
                          <span>
                            <i class="fa fa-paperclip"></i>{' '}
                            {item?.blog_type?.name}
                          </span>
                        </LabelCarousel>
                      </div> */}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <TitleCarousel>{item.name}</TitleCarousel>
                      {/* <DescCarousel dangerouslySetInnerHTML={{ __html: item.isi_konten }} /> */}
                      <a
                        href={`/blog/${item.id}`}
                        className="btn btn-primary mt-5"
                      >
                        baca selengkapnya ...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <style>
        {`
          .carousel-blog .slick-slider ul.slick-dots {
            text-align: left;
            margin: 0 0 0 -10px;
            bottom: -20px;
          }

          .carousel-blog .slick-slider ul.slick-dots li {
            width: 10px;
            height: 10px;
          }

          .carousel-blog .slick-slider ul.slick-dots li button:before {
            font-size: 12px;
          }

          .box-carousel {
            position: relative;
            padding: 0;
          }

          .box-carousel .box-label {
            background-color: rgba(0,0,0,0.2);
            position: absolute;
            z-index: 1;
            bottom: 0;
            width: 100%;
            box-sizing: border-box;
            padding: 0 15px;
          }
        `}
      </style>
    </div>
  )
}
