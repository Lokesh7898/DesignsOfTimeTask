"use client";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || "Product Name";
  const price = searchParams.get('price') || "0.00";
  const size = searchParams.get('size') || "S";
  const img = searchParams.get('img') || "/images/img1_1.jpg";

  return (
    <div className="checkout-main">
      <div className="container">
        <div className="row g-5">
          {/* LEFT: FORM */}
          <div className="col-md-7">
            <h5 className="fw-bold mb-4 text-uppercase">Shipping Details</h5>
            <form className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="First Name" required />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Last Name" required />
              </div>
              <div className="col-12">
                <input type="email" className="form-control" placeholder="Email Address" required />
              </div>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Address" required />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="City" required />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Postal Code" required />
              </div>

              <h5 className="fw-bold mt-5 mb-4 text-uppercase">Payment</h5>
              <div className="col-12 border p-3 mb-3 bg-light d-flex justify-content-between align-items-center">
                <span className="small fw-bold">CREDIT CARD</span>
                <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" width="30" alt="visa" />
              </div>
              <div className="col-12">
                <input type="text" className="form-control mb-2" placeholder="Card Number" />
                <div className="row g-2">
                  <div className="col-6"><input type="text" className="form-control" placeholder="MM/YY" /></div>
                  <div className="col-6"><input type="text" className="form-control" placeholder="CVV" /></div>
                </div>
              </div>

              <button type="submit" className="btn btn-dark w-100 mt-5 py-3 fw-bold rounded-0">PAY NOW ${price}</button>
            </form>
          </div>

          {/* RIGHT: SUMMARY */}
          <div className="col-md-5">
            <div className="order-summary-box">
              <h5 className="fw-bold mb-4 text-uppercase">Your Order</h5>
              <div className="d-flex gap-3 mb-4 border-bottom pb-4">
                <img src={img} width="80" height="110" style={{objectFit:'cover'}} alt="product" />
                <div>
                  <div className="fw-bold">{name}</div>
                  <div className="text-muted">Size: {size}</div>
                  <div className="fw-bold mt-2">${price}</div>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2"><span>Subtotal</span><span>${price}</span></div>
              <div className="d-flex justify-content-between mb-2"><span>Shipping</span><span className="text-success">FREE</span></div>
              <hr />
              <div className="d-flex justify-content-between fw-bold fs-5"><span>Total</span><span>USD ${price}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}