import React from 'react'
// import ImageWithFallback from "../../components/image-with-fallback"

export default function Carousel({ data }) {
  return (
    <div className="py-5 bg-dark hero-header wow fadeIn">
      <div
        className="row"
        style={{
          backgroundImage: `url(${
            require('../../assets/image/main-banner.svg').default
          })`,
          // backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '900px',
          width: '100%',
          boxSizing: 'border-box',
          marginTop: "-50px",
          marginRight: 0,
          marginLeft: 0,
        }}
      >
        <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center list-group animated fadeInLeft">
          <h1 style={{ fontSize: '56px', margin: 0, textAlign: 'center', color: "#fff" }}>
            Tetaplah asik dalam berbuat baik
          </h1>
          <p style={{ color: "#fff", textAlign: "center" }}>Yuk berbuat baik supaya kerjaan lancar dan hidup makin berkah</p>
          <a className="btn-donation" href="#afaf">Ayo Donasi!</a>
        </div>
        <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center animated fadeInRight">
          <img 
            className="img-carousel"
            src={require("../../assets/image/volunter.png").default}
            alt="volunter"
          />
        </div>
      </div>
      <style>
        {`
            .container-carousel {
              background: #f2f2f2;
            }

            .btn-donation {
              display: flex;
              align-items: center;
              justify-content: center;
              background-image: url(${require("../../assets/image/btn-donation.svg").default});
              background-position:;
              background-repeat: no-repeat;
              background-size: contain;
              width: 170px;
              height: 60px;
              font-size: 16px;
              font-weight: 400;
              color: #fff;
            }

            .btn-donation:hover {
              color: #fff;
              font-weight: 600;
            }

            @media(min-width: 320px) {
              .img-carousel {
                width: 0px;
                margin-top: -250px;
              }
            }

            @media(min-width: 375px) {
              .img-carousel {
                width: 300px;
                margin-top: -250px;
              }
            }

            @media(min-width: 425px) {
              .img-carousel {
                width: 350px;
                margin-top: -250px;
              }
            }

            @media(min-width: 1024px) {
              .img-carousel {
                width: 550px;
              }
            }

          `}
      </style>
    </div>
  )
}
