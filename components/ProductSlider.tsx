"use client";
import React, { useRef } from 'react';
import Link from 'next/link';

const products = [
  { id: 1, name: "FLYSHIRT GIUBBOTTO", price: "$435.00", img: "/images/img1_1.jpg" },
  { id: 2, name: "OSAKA 1 PINCE", price: "$305.00", img: "/images/img1_2.png" },
  { id: 3, name: "OSAKA 1 PINCES", price: "$339.00", img: "/images/img1_3.png" },
  { id: 4, name: "FIELD JACKET", price: "$545.00", img: "/images/img1_4.png" },
  { id: 5, name: "CHILE CARGO", price: "$315.00", img: "/images/img1_5.png" },
];

export default function ProductSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="product-section">
      <div className="d-flex justify-content-between px-5 mb-4 align-items-center">
        <div className="text-uppercase fw-bold" style={{ fontSize: '14px', letterSpacing: '1px' }}>
          Discover the new collection
        </div>
        <button onClick={scrollNext} className="border-0 bg-transparent fw-bold" style={{ fontSize: '11px', cursor: 'pointer' }}>
          NEXT
        </button>
      </div>

      <div className="product-container" ref={scrollRef}>
        {products.map((p) => (
          <Link href={`/product/${p.id}`} key={p.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={p.img} alt={p.name} />
            </div>
            <div className="px-1">
              <div className="fw-bold text-uppercase mb-1" style={{ fontSize: '11px' }}>{p.name}</div>
              <div style={{ fontSize: '11px', color: '#666' }}>{p.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}