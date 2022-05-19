import React from 'react'
import Slider from 'react-slick'

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className="container-xxl py-5 bg-dark hero-header">
      <div className="container my-5 py-5">
        <Slider {...settings}>
          {[...Array(5).keys()].map((idx) => (
            <div key={String(idx)}>
              <div className="col-md-12 container-carousel">
                <div className="row">
                  <div className="col-md-6 carousel-title">
                    <p className="title">Title untuk carousel</p>
                    <p className="desc">
                      Sit officia aliquip aliqua ut laborum. Elit pariatur
                      dolore velit ad eu laboris duis ex minim culpa nostrud
                      sunt non. Et cillum laboris aliqua elit anim sunt mollit
                      sunt. Eu consequat deserunt laboris excepteur enim id
                      irure.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="https://picsum.photos/seed/picsum/1300/600"
                      alt=""
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
          `}
      </style>
    </div>
  )
}
