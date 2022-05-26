import React, { useEffect, useState } from 'react'
import { useLocation, useParams, NavLink } from 'react-router-dom'
import { get } from '../api'
import { levelBreadcrumb } from '../utils/helpers'
import Carousel from './carousel'
import Achieve from './achievement'
// import Header from "./header"

export default function Layout({ children }) {
  const url = useLocation()
  const params = useParams()
  const [banner, setBanner] = useState([])

  useEffect(() => {
    async function fetchData() {
      //get banner
      get({
        endpoint: 'banner',
      })
        .then((res) => {
          if (res?.StatusCode === 200 && res?.Error === false)
            setBanner(res.Data)
        })
        .catch((err) => {
          console.log('err ->', err)
        })
    }
    fetchData()
  }, [])

  return (
    <div className="bg-white p-0">
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: '3rem', height: '3rem' }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      <div className="position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            {/* <h1 className="text-primary m-0">
              <i className="fa fa-hand-holding me-3"></i>YBM Brillian
            </h1> */}
            <img
              src={require('../assets/image/logo.png').default}
              alt="Logo"
              height="100px"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <NavLink
                to="/"
                className={`nav-item nav-link ${
                  url?.pathname === '/' ? '' : ''
                }`}
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className={`nav-item nav-link ${
                  url?.pathname === '/about-us' ? 'active' : ''
                }`}
              >
                About Us
              </NavLink>
              {/* <NavLink
                to="/program"
                className={`nav-item nav-link ${
                  url?.pathname === '/program' ? 'active' : ''
                }`}
              >
                Program
              </NavLink> */}
              <div class="nav-item dropdown">
                <a
                  href="#a"
                  class={`nav-link dropdown-toggle ${
                    [
                      '/program/ekonomi',
                      '/program/sosial',
                      '/program/pendidikan',
                    ].includes(url?.pathname)
                      ? 'active'
                      : ''
                  }`}
                  data-bs-toggle="dropdown"
                >
                  Program
                </a>
                <div class="dropdown-menu m-0">
                  <a
                    href="/program/ekonomi"
                    class={`dropdown-item ${
                      url?.pathname === '/program/ekonomi' ? 'active' : ''
                    }`}
                  >
                    Ekonomi
                  </a>
                  <a
                    href="/program/sosial"
                    class={`dropdown-item ${
                      url?.pathname === '/program/sosial' ? 'active' : ''
                    }`}
                  >
                    Sosial
                  </a>
                  <a
                    href="/program/pendidikan"
                    class={`dropdown-item ${
                      url?.pathname === 'program/pendidikan' ? 'active' : ''
                    }`}
                  >
                    Pendidikan
                  </a>
                </div>
              </div>
              <NavLink
                to="/news"
                className={`nav-item nav-link ${
                  url?.pathname === '/news' ? 'active' : ''
                }`}
              >
                News
              </NavLink>
              <NavLink
                to="/blog"
                className={`nav-item nav-link ${
                  url?.pathname === '/blog' ? 'active' : ''
                }`}
              >
                Blog
              </NavLink>
            </div>
            <a href="#a" className="btn btn-primary py-2 px-4">
              CMS Login <i class="fa fa-lock"></i>
            </a>
          </div>
        </nav>
        {url?.pathname !== '/' ? (
          <div className="py-5 bg-dark hero-bread mb-5">
            <div className="text-center pt-5 pb-4">
              <h1
                className="display-3 text-white mb-3 animated slideInDown"
                style={{ textTransform: 'capitalize' }}
              >
                {params?.slug === undefined
                  ? url?.pathname.replace(/[/-]/g, ' ')
                  : 'News'}
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item">
                    <a href={process.env.REACT_APP_BASE_URL}>Home</a>
                  </li>
                  {levelBreadcrumb(url?.pathname).map((item, idx) => (
                    <li
                      key={String(idx)}
                      className={item.class}
                      aria-current="page"
                    >
                      {idx === levelBreadcrumb(url?.pathname).length - 1 ? (
                        item.text
                      ) : (
                        <a href={item.path}>{item.text}</a>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        ) : (
          <React.Fragment>
            <Carousel data={banner} />
            <Achieve />
            <div className="bg-dark hero-header wow fadeInUp">
              <div>
                <div className="row align-items-center g-5" style={{ marginRight: 0, marginLeft: 0 }}>
                  <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img
                      className="img-fluid"
                      src={require('../assets/image/sumbangan.png').default}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-3" style={{ color: '#00569C' }}>
                      Highlight About Us tentang YBM Brillian
                    </h1>
                    <p className="animated slideInLeft mb-4 pb-2">
                      Laborum ad mollit dolore veniam. Elit quis laborum commodo
                      occaecat. Aute amet voluptate excepteur aute nisi laboris.
                      Est do commodo dolor magna elit. Laboris voluptate ea
                      deserunt velit tempor do sint tempor sit Lorem ut
                      consectetur id enim. Esse nisi est culpa ex id magna est
                      ut proident anim adipisicing sint sint ea.
                      Laborum ad mollit dolore veniam. Elit quis laborum commodo
                      occaecat. Aute amet voluptate excepteur aute nisi laboris.
                      Est do commodo dolor magna elit. Laboris voluptate ea
                      deserunt velit tempor do sint tempor sit Lorem ut
                      consectetur id enim. Esse nisi est culpa ex id magna est
                      ut proident anim adipisicing sint sint ea.
                    </p>
                    <button class="btn btn-primary">Lihat lebih lanjut</button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>

      {children}

      {/* Footer */}
      <div
        className="container-fluid text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ background: '#f2f2f2' }}
      >
        <div>
          <div className="row g-5" style={{ marginRight: 0, marginLeft: 0 }}>
            <div
              className="col-lg-4 col-md-4 text-center py-3"
              style={{ background: '#E0E0E0', margin: 0 }}
            >
              <img
                src={require('../assets/image/logo.png').default}
                alt="logo-ybm"
                width={150}
              />
              <p style={{ color: '#000' }}>
                YBM BRI yang kini bertransformasi menjadi YBM BRILiaN merupakan
                Lembaga Filantropi Islam yang mengelola dana zakat, infak dan
                sedekah secara profesional dan sesuai dengan ketentuan syariat
                Islam.
              </p>
              <p style={{ color: '#000' }}>
                Gedung Olahraga BRI Lt.2 Jl. Jenderal Sudirman Kav 44-46 Jakarta
                Pusat 10210
              </p>
              <p style={{ color: '#000' }}>customer care 0811 808 412</p>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="row">
                <div className="col-md-3 col-lg-3">
                  <p style={{ color: '#000' }}>
                    <strong>Program</strong>
                  </p>
                  <a
                    href="#a"
                    className="btn btn-link"
                    style={{ color: '#828282' }}
                  >
                    Pendidikan
                  </a>
                  <a
                    href="#a"
                    className="btn btn-link"
                    style={{ color: '#828282' }}
                  >
                    Sosial
                  </a>
                  <a
                    href="#a"
                    className="btn btn-link"
                    style={{ color: '#828282' }}
                  >
                    Ekonomi
                  </a>
                </div>
                <div className="col-md-3 col-lg-3">
                  <p style={{ color: '#000' }}>
                    <strong>Program</strong>
                  </p>
                  <a
                    href="#a"
                    className="btn btn-link"
                    style={{ color: '#828282' }}
                  >
                    Jadilah Fundraiser
                  </a>
                </div>
                <div className="col-md-3 col-lg-3">
                  <p style={{ color: '#000' }}>
                    <strong>Tentang Kami</strong>
                  </p>
                  <a
                    href="#a"
                    className="btn btn-link"
                    style={{ color: '#828282' }}
                  >
                    Lembaga
                  </a>
                  <a
                    href="#a"
                    className="btn btn-link"
                    style={{ color: '#828282' }}
                  >
                    Berita
                  </a>
                  <a
                    href="#a"
                    className="btn btn-link"
                    style={{ color: '#828282' }}
                  >
                    Artikel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
