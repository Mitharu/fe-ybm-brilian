import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import ImageWithFallback from '../../../components/image-with-fallback'

const TitleCarousel = styled.p`
  display: inline-block;
  font-size: 22px;
  font-weight: 500;
  background: #00569c;
  color: #fff;
  margin: 20px 0 0 0;
  padding: 5px 10px;
  border-radius: 5px;
`

const LabelCarousel = styled.p`
  font-size: 16px;
  color: #fff;
  span {
    margin-right: 10px;
  }
`

export default function Carousel({ data }) {
  const settings = {
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
                  <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
                    <div className="col-lg-12 col-md-12 box-carousel">
                      <ImageWithFallback
                        src={`${process.env.REACT_APP_IMAGE_BLOG}/${item.image}`}
                        alt={item.image}
                        imageHeight="500px"
                      />
                      <div className="box-label">
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
                      </div>
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
