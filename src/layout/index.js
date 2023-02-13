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
  const [homeConfig, setHomeConfig] = useState([])

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

    async function fetchDataConfig() {
      //get banner
      get({
        endpoint: 'homeConfig',
      })
        .then((res) => {
          if (res?.StatusCode === 200 && res?.Error === false)
            setHomeConfig(res.Data)
            // console.log(res.Data);
        })
        .catch((err) => {
          console.log('err ->', err)
        })
    }
    fetchDataConfig()
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
      <div className="position-relative px-0 pb-0 carousel-banner-home">
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
              <img
                src={require('../assets/image/tulisan_ybmArtboard_2.png').default}
                alt="Logo"
                id="text-logo"
                class="my-auto img-ybm"
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
                <a
                  href="/"
                  className={`nav-item nav-link ${
                    url?.pathname.length <= 1 && url?.pathname === '/'
                      ? 'active'
                      : ''
                  }`}
                >
                  Beranda
                </a>
                <NavLink
                  to="/tentang-kami"
                  className={`nav-item nav-link ${
                    url?.pathname === '/tentang-kami' ? 'active' : ''
                  }`}
                >
                  Tentang Kami
                </NavLink>
                {/* <NavLink
                  to="/contact-us"
                  className={`nav-item nav-link ${
                    url?.pathname === '/contact-us' ? 'active' : ''
                  }`}
                >
                  Contact Us
                </NavLink> */}
                {/* <NavLink
                  to="/program"
                  className={`nav-item nav-link ${
                    url?.pathname === '/program' ? 'active' : ''
                  }`}
                >
                  Program
                </NavLink> */}
                <div className="nav-item dropdown">
                  <a
                    href="/program"
                    className={`nav-link dropdown-toggle ${
                      [
                        '/program',
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
                  <div className="dropdown-menu m-0">
                    <a
                      href="/program"
                      className={`dropdown-item ${
                        url?.pathname === '/program' ? 'active' : ''
                      }`}
                    >
                      Index Program
                    </a>
                    <a
                      href="/program/ekonomi"
                      className={`dropdown-item ${
                        url?.pathname === '/program/ekonomi' ? 'active' : ''
                      }`}
                    >
                      Ekonomi
                    </a>
                    <a
                      href="/program/sosial"
                      className={`dropdown-item ${
                        url?.pathname === '/program/sosial' ? 'active' : ''
                      }`}
                    >
                      Sosial
                    </a>
                    <a
                      href="/program/pendidikan"
                      className={`dropdown-item ${
                        url?.pathname === '/program/pendidikan' ? 'active' : ''
                      }`}
                    >
                      Pendidikan
                    </a>
                  </div>
                </div>
                <NavLink
                  to="/berita"
                  className={`nav-item nav-link ${
                    url?.pathname === '/berita' ? 'active' : ''
                  }`}
                >
                  Berita Terkini
                </NavLink>
                <div className="nav-item dropdown">
                  <a
                    href="/lainnya"
                    className={`nav-link dropdown-toggle ${
                      ['/blog', '/kontak-kami'].includes(url?.pathname)
                        ? 'active'
                        : ''
                    }`}
                    data-bs-toggle="dropdown"
                  >
                    Lainnya
                  </a>
                  <div className="dropdown-menu m-0">
                    <a
                      href={process.env.REACT_APP_BRILIAN_TV}
                      className="dropdown-item"
                    >
                      Brilian TV <i className="fa fa-tv"></i>
                    </a>
                    <a
                      href="/kontak-kami"
                      className={`dropdown-item ${
                        url?.pathname === '/kontak-kami' ? 'active' : ''
                      }`}
                    >
                      Kontak Kami
                    </a>
                  </div>
                </div>
                {/* <NavLink
                  to="/blog"
                  className={`nav-item nav-link ${
                    url?.pathname === '/blog' ? 'active' : ''
                  }`}
                >
                  Blog
                </NavLink> */}
              </div>
              <a
                href={process.env.REACT_APP_DONASI_URL}
                className="btn btn-primary"
              >
                DONASI
              </a>
            </div>
        </nav>
        <div className='contaier-xl container-cus-1360'>
          {url?.pathname !== '/' ? (
            <div className="py-5 bg-dark hero-bread mb-5">
              <div className="text-center pt-5 pb-4">
                <h1
                  className="display-3 text-white mb-3 animated slideInDown"
                  style={{ textTransform: 'capitalize' }}
                >
                  {params?.slug !== undefined &&
                    params?.slugChild !== undefined &&
                    params?.slugChild.replace(/[/-]/g, ' ')}
                  {params?.slug !== undefined &&
                    params?.slugChild === undefined &&
                    params?.slug.replace(/[/-]/g, ' ')}
                  {params?.slug === undefined &&
                    params?.slugChild === undefined &&
                    url?.pathname.replace(/[/-]/g, ' ')}
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center text-uppercase">
                    <li className="breadcrumb-item">
                      <a href={process.env.REACT_APP_BASE_URL}>Beranda</a>
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
              <div >
                <Carousel data={banner} />
              </div>
              {
                homeConfig.title == undefined ? '' :
                <>
                  <Achieve manfaat={homeConfig.penerima_manfaat} pemberdayaan={homeConfig.pendayagunaan} />
                  <div className="bg-dark hero-header wow fadeInUp">
                    <div>
                      <div
                        className="row align-items-center g-5"
                        style={{ marginRight: 0, marginLeft: 0 }}
                      >
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                          <img
                            className="img-fluid"
                            src={process.env.REACT_APP_IMAGE_HOME_CONFIG+'/'+homeConfig.image}
                            // src={
                            //   require(`${homeConfig.image}`)
                            //     .default
                            // }
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                          <h1 className="display-3" style={{ color: '#00569C' }}>
                          { homeConfig.title }
                          </h1>
                          <p className="animated slideInLeft mb-4 pb-2">
                          { homeConfig.desc }
                          </p>
                          <a href="/tentang-kami" className="btn btn-primary">
                            Lihat lebih lanjut
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              }
              
            </React.Fragment>
          )}
        </div>
      </div>
      <div className='contaier-xl container-cus-1360'>
        {children}
      </div>
      
      {/* Footer */}
      <div
        className="text-primary footer wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          background: '#023056',
        }}
      >
        <div className='contaier-xl container-cus-1360 pt-3'>
          <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
            <div className="col-lg-4 text-center">
              <img
                src={require('../assets/image/logo.png').default}
                alt="logo-ybm"
                width={150}
              />
              <p style={{ color: '#fff' }}>
                YBM BRI yang kini bertransformasi menjadi YBM BRILiaN merupakan
                Lembaga Filantropi Islam yang mengelola dana zakat, infak dan
                sedekah secara profesional dan sesuai dengan ketentuan syariat
                Islam.
              </p>
              <p style={{ color: '#fff' }}>
                <i className="fa fa-building"></i> Gedung Olahraga BRI Lt.2 Jl.
                Jenderal Sudirman Kav 44-46 Jakarta Pusat 10210
              </p>
              <p style={{ color: '#fff' }}>
                <i className="fa fa-phone"></i> Customer Care 0811 808 412
              </p>
            </div>
            <div className="col-lg-8">
              <div className="row py-2">
                <div className="col-md-4">
                  <p style={{ color: '#fff' }}>
                    <strong>Program</strong>
                  </p>
                  <a href="/program/pendidikan" className="btn btn-link">
                    Pendidikan
                  </a>
                  <a href="/program/social" className="btn btn-link">
                    Sosial
                  </a>
                  <a href="/program/ekonomi" className="btn btn-link">
                    Ekonomi
                  </a>
                </div>
                <div className="col-md-4">
                  <p style={{ color: '#fff' }}>
                    <strong>Program</strong>
                  </p>
                  <a href="#a" className="btn btn-link">
                    Jadilah Fundraiser
                  </a>
                </div>
                <div className="col-md-4">
                  <p style={{ color: '#fff' }}>
                    <strong>Tentang Kami</strong>
                  </p>
                  <a href="#a" className="btn btn-link">
                    Lembaga
                  </a>
                  <a href="#a" className="btn btn-link">
                    Berita
                  </a>
                  <a href="#a" className="btn btn-link">
                    Artikel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OpenChat />
    </div>
  )
}

function OpenChat() {
  var img = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M3.516 3.516c4.686-4.686 12.284-4.686 16.97 0 4.686 4.686 4.686 12.283 0 16.97a12.004 12.004 0 0 1-13.754 2.299l-5.814.735a.392.392 0 0 1-.438-.44l.748-5.788A12.002 12.002 0 0 1 3.517 3.517zm3.61 17.043.3.158a9.846 9.846 0 0 0 11.534-1.758c3.843-3.843 3.843-10.074 0-13.918-3.843-3.843-10.075-3.843-13.918 0a9.846 9.846 0 0 0-1.747 11.554l.16.303-.51 3.942a.196.196 0 0 0 .219.22l3.961-.501zm6.534-7.003-.933 1.164a9.843 9.843 0 0 1-3.497-3.495l1.166-.933a.792.792 0 0 0 .23-.94L9.561 6.96a.793.793 0 0 0-.924-.445 1291.6 1291.6 0 0 0-2.023.524.797.797 0 0 0-.588.88 11.754 11.754 0 0 0 10.005 10.005.797.797 0 0 0 .88-.587l.525-2.023a.793.793 0 0 0-.445-.923L14.6 13.327a.792.792 0 0 0-.94.23z'/%3E%3C/svg%3E`;
  return(
    <div className='dhn-wa-ves'>
      <a href="https://wa.me/%2B62811808412?text=Assalamualaikum%20YBM%20BRILiaN%2C%20saya%20ingin%20bertanya">
        <div className='dhn-wa-button'>
          <img src={img} alt="wa" />
        </div>
      </a>
    </div>
  );

}
