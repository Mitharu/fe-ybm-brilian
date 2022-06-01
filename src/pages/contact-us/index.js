import React, { useEffect } from 'react'
import { mobileVersion } from '../../utils/helpers'

export default function ContactUs() {
  const { dynamicWidth } = mobileVersion()
  const isMobile = dynamicWidth <= 425 ? true : false

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <React.Fragment>
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
