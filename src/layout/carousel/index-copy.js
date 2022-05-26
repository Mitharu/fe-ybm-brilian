import React from 'react'
import Slider from 'react-slick'
import ImageWithFallback from '../../components/image-with-fallback'

export default function Carousel({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className="py-5 bg-dark hero-header wow fadeInUp">
      <div className="mt-5 carousel-home">
        <Slider {...settings}>
          {data &&
            data.map((item, idx) => (
              <div key={String(idx)}>
                <div className="col-md-12 container-carousel">
                  <div className="row">
                    <div className="col-md-6 carousel-title">
                      <p className="title">{item.title}</p>
                      <p className="desc">{item.banner_desc}</p>
                    </div>
                    <div className="col-md-6">
                      <ImageWithFallback
                        src={`${process.env.REACT_APP_IMAGE_BANNER}/${item.img}`}
                        alt={item.img}
                        imageHeight="600px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <style>
        {`
            .container-carousel {
              background: #f2f2f2;
            }

            .carousel-title {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            }

            .carousel-title .title {
              background: #EB5757;
              color: #fff;
              padding: 5px;
              border-radius: 5px;
              font-size: 24px;
              font-weight: 400;
            }

            .carousel-title .desc {
              margin: 0;
              padding: 0 0 0 10px;
            }

            .carousel-home .slick-slider ul.slick-dots li button:before {
              font-size: 14px;
            }
          `}
      </style>
    </div>
  )
}
