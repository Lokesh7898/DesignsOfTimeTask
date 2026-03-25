"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 40); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MegaMenuContent = ({ title }: { title: string }) => (
    <div className="mega-menu">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 menu-column">
            <h6>{title.toUpperCase()}</h6>
            <ul>
              <li>View All</li>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Essentials</li>
            </ul>
          </div>
          <div className="col-md-2 menu-column border-start ps-4">
            <h6>COLLECTION</h6>
            <ul>
              <li>Jackets</li>
              <li>Pants</li>
              <li>T-Shirts</li>
              <li>Shirts</li>
            </ul>
          </div>
          <div className="col-md-2 menu-column border-start ps-4">
            <h6>ACCESSORIES</h6>
            <ul>
              <li>Bags</li>
              <li>Belts</li>
              <li>Sunglasses</li>
              <li>Fragrances</li>
            </ul>
          </div>
          <div className="col-md-4 offset-md-2">
            <div className="position-relative">
              <img src="/images/img1_1.jpg" className="w-100" style={{ height: '200px', objectFit: 'cover' }} alt="promo" />
              <div className="mt-2 fw-bold text-uppercase" style={{ fontSize: '10px' }}>Explore the new SS26 Lookbook</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const leftLinks = ["Summer 2026 Men", "Summer 2026 Women", "Winter 2025 Men", "Winter 2025 Women", "Accessories", "Our Story", "Blog"];
  const rightLinks = ["Search", "Blog", "Account", "Cart (0)"];

  return (
    <header className={`header-wrapper ${isScrolled ? "sticky-active" : ""}`}>
      {!isScrolled && (
        <div className="top-bar">
          <div style={{ width: '33%' }}>SIGN UP FOR THE NEWSLETTER – 10% OFF YOUR FIRST ORDER</div>
          <div className="top-bar-m text-center" style={{ width: '33%' }}>M</div>
          <div className="text-end" style={{ width: '33%' }}>IN USD / EN ›</div>
        </div>
      )}

      <nav className="main-nav">
        <div className="d-flex align-items-center h-100">
          <div className="d-flex gap-3 h-100 align-items-center">
            {leftLinks.map((link) => (
              <div key={link} className="nav-group h-100 d-flex align-items-center">
                <Link href="/" className="nav-link-item">{link}</Link>
                <MegaMenuContent title={link} />
              </div>
            ))}
          </div>

          <Link href="/" className="brand-logo text-decoration-none text-dark">MASON'S</Link>
        </div>

        <div className="d-flex align-items-center gap-3 h-100">
          {rightLinks.map((link) => (
            <Link key={link} href="/" className="nav-link-item">
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}