"use client";
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductDetail() {
  const router = useRouter();

  const [activeThumb, setActiveThumb] = useState(0);
  const [selectedSize, setSelectedSize] = useState('S');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const productName = "FLYSHIRT GIUBBOTTO";
  const productPrice = "435.00";
  const productImg = "/images/img1_1.jpg";

  const productImages = [
    "/images/img1_1.jpg",
    "/images/img1_2.png",
    "/images/img1_3.png",
    "/images/img1_4.png",
    "/images/img1_5.png",
  ];

  const sizeChart = [
    { it: '44', uni: 'XS', fr: '40', de: '44', uk: '32' },
    { it: '46', uni: 'S', fr: '42', de: '46', uk: '34' },
    { it: '48', uni: 'M', fr: '44', de: '48', uk: '36' },
    { it: '50', uni: 'L', fr: '46', de: '50', uk: '38' },
    { it: '52', uni: 'XL', fr: '48', de: '52', uk: '40' },
  ];

  const scrollToImage = (index: number) => {
    setActiveThumb(index);
    imageRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCheckout = () => {
    const query = new URLSearchParams({
      name: productName,
      price: productPrice,
      size: selectedSize,
      img: productImg
    }).toString();

    router.push(`/checkout?${query}`);
  };

  return (
    <main className="position-relative">

      <div className={`size-drawer-overlay ${isDrawerOpen ? 'open' : ''}`} onClick={() => setIsDrawerOpen(false)}>
        <div className="size-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <span className="fw-bold text-uppercase" style={{ fontSize: '10px' }}>
              <span className="text-danger">■</span> Size Chart Man Outerwear
            </span>
            <button className="border-0 bg-transparent fs-4" onClick={() => setIsDrawerOpen(false)}>&times;</button>
          </div>

          <table className="size-table">
            <thead>
              <tr><th>IT</th><th>UNI</th><th>FR</th><th>DE</th><th>UK</th></tr>
            </thead>
            <tbody>
              {sizeChart.map((row) => (
                <tr
                  key={row.uni}
                  className={selectedSize === row.uni ? 'selected' : ''}
                  onClick={() => { setSelectedSize(row.uni); setIsDrawerOpen(false); }}
                >
                  <td>{row.it}</td><td>{row.uni}</td><td>{row.fr}</td><td>{row.de}</td><td>{row.uk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container-fluid px-5 mt-4">
        <div className="breadcrumb-text mb-4">
          SS26 MASON'S MEN / FLYSHIRT DELAMERE MEN'S OVERSHIRT JACKET IN STRETCH GABARDINE
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="sticky-top">
              <div className="d-flex gap-2 mb-4">
                {productImages.map((img, index) => (
                  <div key={index} onClick={() => scrollToImage(index)} style={{ cursor: 'pointer', width: '45px' }}>
                    <img src={img} className="w-100" style={{ height: '65px', objectFit: 'cover', filter: activeThumb === index ? 'none' : 'grayscale(100%)' }} />
                    <div className={activeThumb === index ? 'thumb-active-line' : ''}></div>
                    <div style={{ fontSize: '8px', textAlign: 'center', marginTop: '2px' }}>0{index + 1}</div>
                  </div>
                ))}
              </div>
              <div className="calligraphy-title">Flyshirt Giubbotto</div>

              <div className="mt-5 pt-4">
                <div className="pdp-accordion">
                  <div className="pdp-accordion-title"><span>PRODUCT DESCRIPTION</span><span>+</span></div>
                  <div className="pdp-accordion-content">
                    <p>● <b>Color:</b> Basalt Grey</p>
                    <p>● <b>Composition:</b> 96% Cotton, 04% Elastane</p>
                    <p>● <b>Code:</b> 2CA2332 CBE700 TS60-SS26</p>
                  </div>
                </div>
                <div className="pdp-accordion border-bottom">
                  <div className="pdp-accordion-title"><span>GARMENT DYEING</span><span>+</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 px-4">
            <div className="d-flex flex-column gap-3">
              {productImages.map((img, index) => (
                <div key={index} ref={(el) => { imageRefs.current[index] = el; }}>
                  <img src={img} alt="product" className="w-100 shadow-sm" />
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-3">
            <div className="sticky-top ps-lg-2">
              <h1 className="fw-bold h3 mb-1" style={{ letterSpacing: '1px' }}>{productName}</h1>
              <p className="small text-muted mb-5" style={{ fontSize: '9px' }}>STRETCH GABARDINE</p>

              <div className="mb-5">
                <div className="pdp-info-row"><div className="pdp-label">Style</div><div className="pdp-value">FLYSHIRT GIUBBOTTO</div></div>
                <div className="pdp-info-row"><div className="pdp-label">Model</div><div className="pdp-value">FLYSHIRT DELAMERE MEN'S OVERSHIRT JACKET IN STRETCH GABARDINE</div></div>
                <div className="pdp-info-row"><div className="pdp-label">Price</div><div className="pdp-value fw-bold" style={{ fontSize: '11px' }}>${productPrice}</div></div>
                <div className="pdp-info-row"><div className="pdp-label">SKU</div><div className="pdp-value">2CA2332 CBE700-TS60-SS26</div></div>
                <div className="pdp-info-row border-0"><div className="pdp-label">Color</div><div className="pdp-value">BASALT GREY</div></div>
              </div>

              <div className="mb-5">
                <div className="size-header-row d-flex justify-content-between mb-2">
                  <span className="fw-bold" style={{ fontSize: '9px' }}>SIZE IT</span>
                  <span className="fw-bold" style={{ fontSize: '9px' }}>ITALIAN SIZE</span>
                </div>
                <div className="d-flex gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <div
                      key={size}
                      className={`size-btn-custom ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-top border-bottom py-3 d-flex justify-content-between align-items-center mb-4"
                onClick={() => setIsDrawerOpen(true)} style={{ cursor: 'pointer' }}>
                <span className="small fw-bold" style={{ fontSize: '10px' }}>SIZE GUIDE</span>
                <span>+</span>
              </div>

              <div className="text-center">
                <div className="d-flex align-items-center justify-content-center gap-2 mb-3 small">
                  <span style={{ color: '#ff4d4d' }}>●</span> Last item available
                </div>
                <button className="btn btn-dark w-100 rounded-0 py-3 fw-bold mb-2 btn-pdp-main">ADD TO CART</button>

                <button
                  onClick={handleCheckout}
                  className="btn w-100 py-3 text-white fw-bold d-flex align-items-center justify-content-center gap-2 btn-shop-pay"
                >
                  Buy with <span style={{ fontStyle: 'italic', fontSize: '18px' }}>shop</span>
                </button>

                <a href="#" className="small text-dark d-block mt-3 text-decoration-underline" style={{ fontSize: '9px' }}>More payment options</a>
              </div>

              <div className="perks-grid mt-5">
                <div className="perk-item"><span>🎁</span> <div>10% OFF your FIRST order</div></div>
                <div className="perk-item"><span>🚚</span> <div>Express delivery</div></div>
                <div className="perk-item"><span>💬</span> <div>GET in TOUCH on Whatsapp</div></div>
                <div className="perk-item"><span>🔄</span> <div>Return within 14 days</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}