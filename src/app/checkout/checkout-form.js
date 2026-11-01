"use client";

import { useState } from "react";
import { deliveryOptions, sizes } from "../product-data";

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

export default function CheckoutForm({ selectedSize, onSizeChange }) {
  const [submitted, setSubmitted] = useState(false);
  const [deliveryArea, setDeliveryArea] = useState("dhaka");
  const [quantity, setQuantity] = useState(1);
  const selectedProduct = sizes.find((item) => item.size === selectedSize) ?? sizes[1];
  const deliveryCharge =
    deliveryOptions.find((option) => option.area === deliveryArea)?.charge ?? 60;

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
            <fieldset className="form-field form-field-full delivery-options">
              <legend>Delivery area</legend>
              {deliveryOptions.map((option) => (
                <label className="delivery-option" key={option.area}>
                  <input
                    checked={deliveryArea === option.area}
                    name="delivery-area"
                    onChange={() => {
                      setDeliveryArea(option.area);
                      setSubmitted(false);
                    }}
                    type="radio"
                    value={option.area}
                  />
                  <span>{option.label}</span>
                  <strong>৳{option.charge}</strong>
                </label>
              ))}
            </fieldset>
          </div>
          <button className="button button-dark checkout-submit" type="submit">
            Continue <span aria-hidden="true">→</span>
          </button>
        </form>
        {submitted ? (
          <p aria-live="polite" className="checkout-success">
            Your order details are ready. Online order submission and payment
            are not connected yet. Please contact the shop to complete this order.
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
        <div className="quantity-row">
          <span>Quantity</span>
          <div aria-label="Product quantity" className="quantity-control" role="group">
            <button
              aria-label="Decrease quantity"
              disabled={quantity <= 1}
              onClick={() => {
                setQuantity((current) => Math.max(1, current - 1));
                setSubmitted(false);
              }}
              type="button"
            >
              −
            </button>
            <output aria-live="polite" aria-label={`${quantity} items`}>{quantity}</output>
            <button
              aria-label="Increase quantity"
              onClick={() => {
                setQuantity((current) => current + 1);
                setSubmitted(false);
              }}
              type="button"
            >
              +
            </button>
          </div>
        </div>
        <div aria-label="Choose a jar size" className="order-size-list">
          {sizes.map((item) => (
            <button
              aria-pressed={item.size === selectedSize}
              className={`order-size-link ${item.size === selectedSize ? "order-size-link-active" : ""}`}
              key={item.size}
              onClick={() => {
                onSizeChange(item.size);
                setSubmitted(false);
              }}
              type="button"
            >
              <span>{item.size} jar</span><span>৳{item.price} {item.size === selectedSize ? "✓" : "→"}</span>
            </button>
          ))}
        </div>
        <div aria-live="polite" className="order-total">
          <div><span>Product ({selectedSize} × {quantity})</span><span>৳{selectedProduct.price * quantity}</span></div>
          <div><span>Delivery ({deliveryArea === "dhaka" ? "Inside Dhaka" : "Outside Dhaka"})</span><span>৳{deliveryCharge}</span></div>
          <strong><span>Total</span><span>৳{selectedProduct.price * quantity + deliveryCharge}</span></strong>
        </div>
      </aside>
    </div>
  );
}
