import React from 'react'
import Slider from 'react-slick'
import ImageWithFallback from '../../../components/image-with-fallback'

export default function Carousel({ data }) {
  const settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className="container-xxl py-0 bg-dark hero-header wow fadeInUp">
      <div className="container my-5 py-5 carousel-program">
        <Slider {...settings}>
          {data &&
            data.map((item, idx) => (
              <div key={String(idx)}>
                <div className="col-md-12 container-carousel">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <ImageWithFallback
                        src={`${process.env.REACT_APP_IMAGE_BANNER}/${item.img}`}
                        // src="https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang-1024x640.jpg"
                        alt={item.img}
                        imageHeight="600px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {data &&
            data.map((item, idx) => (
              <div key={String(idx)}>
                <div className="col-md-12 container-carousel">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <ImageWithFallback
                        src={`${process.env.REACT_APP_IMAGE_BANNER}/${item.img}`}
                        // src="https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang-1024x640.jpg"
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

            .carousel-program .slick-slider ul.slick-dots li button:before {
              font-size: 14px;
            }
          `}
      </style>
    </div>
  )
}
