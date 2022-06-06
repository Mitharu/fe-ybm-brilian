import React, { useEffect } from 'react'
import styled from 'styled-components'
import { mobileVersion } from '../../utils/helpers'

const Title = styled.h2`
  color: #00569c;
  padding: 0 5px;
  border-radius: 5px;
  span {
    color: #f26624;
  }
  text-align: ${(props) => props.align || 'left'};
`

export default function ContactUs() {
  const { dynamicWidth } = mobileVersion()
  const isMobile = dynamicWidth <= 425 ? true : false

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <React.Fragment>
      {/* <div class="container-xxl py-5">
        <div class="container">
          <div class="row wow fadeInUp">
            <div class="col-lg-6 col-md-6">
              <ul style={{ listStyle: "none"}}>
                <li><i class="fa fa-instagram"></i> https://www.instagram.com/ybmbrilian/</li>
                <li><i class="fas fa-youtube"></i> https://www.instagram.com/ybmbrilian/</li>
                <li><i class="fa fa-envelope"></i> https://www.instagram.com/ybmbrilian/</li>
                <li><i class="fa fa-envelope"></i> https://www.instagram.com/ybmbrilian/</li>
              </ul>
            </div>
            {!isMobile && (
              <div class="col-lg-6 col-md-6">
                <img
                  className="img-surat"
                  src={require('../../assets/image/gedung-2.svg').default}
                  alt="gedung-2"
                />
              </div>
            )}
          </div>
        </div>
      </div> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row wow fadeInUp">
            {!isMobile && (
              <div class="col-lg-6 col-md-6">
                <img
                  className="img-surat"
                  src={require('../../assets/image/surat.svg').default}
                  alt="surat"
                />
              </div>
            )}
            <div class="col-lg-6 col-md-6 col-xs-12">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12">
                  <input
                    class="form-control"
                    placeholder="Nama depan"
                    type="text"
                  />
                </div>
                <div
                  class={`col-lg-6 col-md-6 col-xs-12 ${
                    isMobile ? 'mt-4' : ''
                  }`}
                >
                  <input
                    class="form-control"
                    placeholder="Nama belakang"
                    type="text"
                  />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg-12 col-md-12">
                  <input
                    class="form-control"
                    placeholder="Email"
                    type="email"
                  />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg-12 col-md-12">
                  <textarea class="form-control" placeholder="Pesan" />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg-12 col-md-12 d-flex justify-content-end">
                  <button class="btn btn-primary">Kirim</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5">
        <Title>
          Kantor Wilayah <span>YBM BRILiaN</span>
        </Title>
        <a href="/kontak-kami/kantor-wilayah" class="btn btn-primary">
          Daftar kantor wilayah
        </a>
        <div class="container">
          <div class="row wow fadeInUp">
            <picture>
              <img
                src={require('../../assets/image/peta.webp').default}
                alt="peta-wilayah"
                width="100%"
              />
            </picture>
          </div>
        </div>
      </div>
      <style>
        {`

          .img-surat {
            height: 450px;
          }

          @media(max-width: 425px) {
            .img-surat {
              width: 300px;
            }
          }
        
        `}
      </style>
    </React.Fragment>
  )
}
