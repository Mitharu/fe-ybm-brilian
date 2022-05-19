import React from 'react'

export default function Achievement() {
  return (
    <div className="container-xxl py-5">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-3 text-center box-achieve">
            <div style={{ background: '#F2C94C' }} className="content">
              <h2 className="text-light">10</h2>
            </div>
            <p class="animated slideInLeft mb-4 pb-2" style={{ fontSize: "20px", fontWeight: "400"}}>
              Total <br />
              <span style={{ background: "#EB5757", padding: "0 5px", color: "#fff", borderRadius: "5px" }}>Donasi <i class="fa fa-coins"></i></span>
            </p>
          </div>
          <div class="col-lg-3 text-center box-achieve">
            <div style={{ background: '#333333' }} className="content">
              <h2 className="text-light">10</h2>
            </div>
            <p class="animated slideInLeft mb-4 pb-2" style={{ fontSize: "20px", fontWeight: "400"}}>
              Penerima <br />
              <span style={{ background: "#EB5757", padding: "0 5px", color: "#fff", borderRadius: "5px" }}>Manfaat <i class="fa fa-hand-holding-heart"></i></span>
            </p>
          </div>
          <div class="col-lg-3 text-center box-achieve">
            <div style={{ background: '#2D9CDB' }} className="content">
              <h2 className="text-light">10</h2>
            </div>
            <p class="animated slideInLeft mb-4 pb-2" style={{ fontSize: "20px", fontWeight: "400"}}>
              Jumlah <br />
              <span style={{ background: "#EB5757", padding: "0 5px", color: "#fff", borderRadius: "5px" }}>Donatur <i class="fa fa-users"></i></span>
            </p>
          </div>
        </div>
      </div>
      <style>
        {`
          .box-achieve {
            display: flex;
            align-items: center;
            flex-direction: column;
            align-items: center;
          }

          .box-achieve .content {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: red !important;
          }

          .box-achieve .content h2 {
            margin: 0;
          }
        `}
      </style>
    </div>
  )
}
