import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageWithFallback from '../../components/image-with-fallback'
import Collapsible from 'react-collapsible'
import { program } from '../../__json__'

const TitleAbout = styled.h2`
  color: #00569c;
  padding: 0 5px;
  border-radius: 5px;
  span {
    color: #f26624;
  }
  text-align: ${(props) => props.align || 'left'};
`

export default function Program() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <React.Fragment>
      <div class="container-xxl py-5 wow fadeInUp">
        <div class="container">
          <div
            class="row align-items-center g-5"
            style={{ marginRight: 0, marginLeft: 0 }}
          >
            <div class="col-lg-6 text-center text-lg-start animated slideInRight">
              <TitleAbout>
                Program <span>YBM BRILiaN</span>
              </TitleAbout>
              <p class="mb-4 pb-2 mt-4">
                YBM BRILiaN merupakan Lembaga Filantropi Islam pengelola Dana
                Zakat, Infak, Sedekah, dan Wakaf yang dilaksanakan secara
                professional, sesuai dengan aturan dan ketentuan dalam syariat
                islam. YBM BRILiaN berkomitmen meningkatkan kualitas hidup dan
                mobilitas vertikal keluarga dhuafa melalui serangkaian program
                Pendidikan inklusif, pemberdayaan ekonomi, serta program sosial
                kemanusiaan sehingga terwujud masyarakat berdaya.
              </p>
            </div>
            <div class="col-lg-6 text-center text-lg-end overflow-hidden animated fadeIn">
              <img
                className="img-about-desc"
                src={require('../../assets/image/program-icon.svg').default}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 wow fadeInUp">
        <div class="container">
          <div class="row align-items-start justify-content-center">
            {program &&
              program.map((item, idx) => (
                <a key={String(idx)} href={item.path} class="col-lg-3 col-md-3" style={{ textDecoration: "none", color: "#666565"}}>
                <div class="m-1" data-wow-delay="0.1s">
                  <div className="service-item rounded p-3">
                    <div class="row">
                      <div class="col-lg-5 col-md-5">
                        <ImageWithFallback
                          src={item.urlImage}
                          alt={item.urlImage}
                          imageHeight="200px"
                        />
                      </div>
                      <div class="col-lg-7 col-md-7">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                </a>
              ))}
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 wow fadeInUp">
        <div class="container">
          <div class="row align-items-start justify-content-center">
            <Collapsible trigger="Faq 1">
              <p>
                Faq 1 Excepteur sint aute velit sint id mollit exercitation
                exercitation nulla officia amet in laborum fugiat. Elit cillum
                sint id reprehenderit reprehenderit quis laboris eu. Consectetur
                nulla cillum dolor id culpa enim occaecat laboris amet sint
                exercitation cupidatat Lorem. Lorem ex duis do aliqua pariatur
                dolore nulla excepteur cupidatat laborum eu magna deserunt.
              </p>
            </Collapsible>
            <Collapsible trigger="Faq 2">
              <p>
                Faq 1 Excepteur sint aute velit sint id mollit exercitation
                exercitation nulla officia amet in laborum fugiat. Elit cillum
                sint id reprehenderit reprehenderit quis laboris eu. Consectetur
                nulla cillum dolor id culpa enim occaecat laboris amet sint
                exercitation cupidatat Lorem. Lorem ex duis do aliqua pariatur
                dolore nulla excepteur cupidatat laborum eu magna deserunt.
              </p>
            </Collapsible>
            <Collapsible trigger="Faq 3">
              <p>
                Faq 1 Excepteur sint aute velit sint id mollit exercitation
                exercitation nulla officia amet in laborum fugiat. Elit cillum
                sint id reprehenderit reprehenderit quis laboris eu. Consectetur
                nulla cillum dolor id culpa enim occaecat laboris amet sint
                exercitation cupidatat Lorem. Lorem ex duis do aliqua pariatur
                dolore nulla excepteur cupidatat laborum eu magna deserunt.
              </p>
            </Collapsible>
          </div>
        </div>
      </div>
      <style>
        {`
          
          .Collapsible {
            margin-bottom: 10px;
          }
          .Collapsible__trigger {
            display: block;
            background: #56CCF2;
            width: 100%;
            padding: 5px 10px;
            color: #fff;
            border-radius: 5px 5px 0 0;
          }
          .Collapsible__trigger.is-open {
            background: #2D9CDB;
            font-weight: 500;
          }
          .Collapsible__contentInner {
            background: #f2f2f2;
            border-radius: 0 0 5px 5px;
          }
          .Collapsible__contentInner p {
            margin: 0;
            color: #000;
            padding: 10px;
          }
        `}
      </style>
    </React.Fragment>
  )
}
