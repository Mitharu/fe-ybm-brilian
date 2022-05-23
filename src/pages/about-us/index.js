import React from 'react'
import styled from 'styled-components'
import { image_mitra, nilai_nilai, milestone } from '../../__json__'

const TitleAbout = styled.h2`
  position: relative;
  background: #f2c94c;
  color: #fff;
  display: inline;
  padding: 0 5px;
  margin: ${(props) => props.margin || '0 0 0 70px'};
  border-radius: 5px;
  span {
    color: #2d9cdb;
  }
  img {
    position: absolute;
    bottom: 0;
    top: 0;
    left: -80px;
    margin: auto 0;
  }
`

const TitleVision = styled.h2`
  background: ${(props) => props.color};
  color: #fff;
  font-weight: 400;
  display: inline;
  padding: 0 5px;
  border-radius: 5px;
`

export default function AboutUs() {
  return (
    <React.Fragment>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-6 text-center text-lg-start animated slideInRight">
              <TitleAbout>
                <img
                  src={require('../../assets/image/logo.png').default}
                  alt="logo-ybm"
                  width={80}
                />
                About <span>YBM Brillian</span>
              </TitleAbout>
              <p class="mb-4 pb-2 mt-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                Commodo voluptate occaecat sit commodo et cupidatat est dolore
                excepteur. Elit fugiat qui Lorem qui nostrud pariatur proident
                sit proident. Quis ut labore et occaecat esse excepteur
                adipisicing duis eiusmod ea cupidatat laboris occaecat deserunt.
                Nostrud laboris ut ullamco consectetur exercitation. Cupidatat
                pariatur tempor consectetur fugiat esse ut eiusmod consequat do
                enim elit non et. Consectetur esse velit sunt eu voluptate
                officia excepteur esse. Cupidatat amet esse nisi minim enim
                mollit reprehenderit consectetur.
              </p>
            </div>
            <div class="col-lg-6 text-center text-lg-end overflow-hidden animated fadeIn">
              <img
                class="img-fluid"
                src={require('../../assets/image/photo-1.jpg').default}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-xxl py-5 animated slideInLeft"
        style={{ backgroundColor: '#f2f2f2' }}
      >
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6">
              <TitleVision color="#EB5757">
                Visi <i class="fa-solid fa-hand-holding-hand"></i>
              </TitleVision>
              <p class="mb-4 pb-2 mt-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>
            <div class="col-lg-6">
              <TitleVision color="#2F80ED">Misi</TitleVision>
              <p class="mb-4 pb-2 mt-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                Commodo voluptate occaecat sit commodo et cupidatat est dolore
                excepteur. Elit fugiat qui Lorem qui nostrud pariatur proident
                sit proident. Quis ut labore et occaecat esse excepteur
                adipisicing duis eiusmod ea cupidatat laboris occaecat deserunt.
                Nostrud laboris ut ullamco consectetur exercitation. Cupidatat
                pariatur tempor consectetur fugiat esse ut eiusmod consequat do
                enim elit non et. Consectetur esse velit sunt eu voluptate
                officia excepteur esse. Cupidatat amet esse nisi minim enim
                mollit reprehenderit consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 animated slideInRight">
        <div class="container">
          <TitleAbout margin="0">
            6 Nilai <span>YBM Brillian</span>
          </TitleAbout>
          <div class="row g-5 mt-2">
            {nilai_nilai &&
              nilai_nilai.map((item, idx) => (
                <div
                  class="col-lg-4 col-md-4"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100px',
                      height: '100px',
                      backgroundColor: item.bgColor,
                      borderRadius: '50%',
                    }}
                  >
                    <i class={`${item.icon}`} style={{ color: '#fff' }}></i>
                  </div>
                  <p
                    style={{
                      margin: '10px 0',
                      padding: 0,
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#000',
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ margin: 0, padding: 0 }}>{item.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div
        class="container-xxl py-5 animated slideInRight"
        style={{ backgroundColor: '#f2f2f2' }}
      >
        <div class="container">
          <TitleAbout margin="0">
            Milestone <span>YBM Brillian</span>
          </TitleAbout>
          <div class="row g-5 mt-3">
            {milestone &&
              milestone.map((item, idx) => (
                <div key={String(idx)} class="col-lg-3 col-md-3" style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      backgroundImage: `url(${item.url})`,
                      backgroundPosition: 'center right',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      width: '270px',
                      height: '350px',
                      boxShadow: '0px 0px 3px 0px rgb(0 0 0 / 18%)',
                      borderRadius: '5px',
                    }}
                  >
                    <h2 style={{ padding: '10px 10px 0 10px' }}>{item.year}</h2>
                    <p style={{ textAlign: 'justify', padding: '0 10px', lineHeight: "1.2" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 animated slideInRight">
        <div class="container">
          <TitleAbout margin="0">
            Mitra <span>YBM Brillian</span>
          </TitleAbout>
          <p class="mb-4 pb-2 mt-4">
            Beberapa mitra yang ikut mendukung dalam upaya dedikasi penyaluran
            zakat, infak, sedekah dan wakaf.
          </p>
          <div class="row g-5">
            {image_mitra &&
              image_mitra.map((item, idx) => (
                <div key={String(idx)} class="col-lg-3 col-md-3" style={{ display: "flex", justifyContent: "center" }}>
                  <img src={item.url} alt={item.alt} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
