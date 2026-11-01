"use client";

import { useState } from "react";
import Link from "next/link";

const sizes = ["15g", "20g", "50g"];

function LeafMark() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 32 32">
      <path
        d="M25.8 5.2C16 5.2 7.1 8.7 6.1 17.1c-.6 5.2 3.2 8.9 7.7 8.9 8.7 0 12-10.1 12-20.8Z"
        fill="currentColor"
      />
      <path d="M5 28c4.1-7.5 9.5-12.5 17-17" stroke="white" strokeWidth="1.7" />
    </svg>
  );
}

export default function CheckoutForm({ selectedSize }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="checkout-layout">
      <section aria-labelledby="delivery-title" className="checkout-form">
        <h2 id="delivery-title">Delivery details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="full-name">Full name</label>
              <input autoComplete="name" id="full-name" name="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone number</label>
              <input autoComplete="tel" id="phone" name="phone" required type="tel" />
            </div>
            <div className="form-field form-field-full">
              <label htmlFor="address">Delivery address</label>
              <input
                autoComplete="street-address"
                id="address"
                name="address"
                required
              />
            </div>
            <div className="form-field form-field-full">
              <label htmlFor="city">City / area</label>
              <input autoComplete="address-level2" id="city" name="city" required />
            </div>
          </div>
          <button className="button button-dark checkout-submit" type="submit">
            Continue <span aria-hidden="true">→</span>
          </button>
        </form>
        {submitted ? (
          <p aria-live="polite" className="checkout-success">
            Your details are entered. This demo checkout does not submit or store
            orders yet; connect a payment and order service to accept purchases.
          </p>
        ) : (
          <p className="demo-notice">
            Demo checkout: no payment will be taken and form details are not sent
            or stored.
          </p>
        )}
      </section>

      <aside aria-labelledby="order-title" className="order-card">
        <h2 id="order-title">Your selection</h2>
        <div className="order-product">
          <span aria-hidden="true" className="order-thumb"><LeafMark /></span>
          <span><strong>Green Seven Sleep Balm</strong><small>Lavender · {selectedSize}</small></span>
        </div>
        <div aria-label="Choose a jar size" className="order-size-list">
          {sizes.map((size) => (
            <Link
              aria-current={size === selectedSize ? "true" : undefined}
              className={`order-size-link ${size === selectedSize ? "order-size-link-active" : ""}`}
              href={`/checkout?size=${size}`}
              key={size}
            >
              <span>{size} jar</span><span>{size === selectedSize ? "Selected ✓" : "Choose →"}</span>
            </Link>
          ))}
        </div>
        <div className="order-total">
          Price &amp; delivery
          <strong>Confirmed before payment</strong>
        </div>
      </aside>
    </div>
  );
}
