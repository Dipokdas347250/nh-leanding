"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CheckoutForm from "./checkout/checkout-form";
import { sizes } from "./product-data";

const bannerImages = [
  
  {
    src: "/slide1.jpg",
    alt: "Green Seven sleep massage balm product range",
    name: "Product range",
  },
  {
    src: "/slide.jpg",
    alt: "Green Seven lavender balm evening ritual",
    name: "Evening ritual",
  },
  {
    src: "/slide2.jpg",
    alt: "Green Seven lavender balm evening ritual",
    name: "Evening ritual new",
  },
  {
    src: "/slide3.jpg",
    alt: "Green Seven lavender balm evening ritual",
    name: "Evening ritual two",
  },
];

function LeafMark({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        d="M25.8 5.2C16 5.2 7.1 8.7 6.1 17.1c-.6 5.2 3.2 8.9 7.7 8.9 8.7 0 12-10.1 12-20.8Z"
        fill="currentColor"
      />
      <path d="M5 28c4.1-7.5 9.5-12.5 17-17" stroke="white" strokeWidth="1.7" />
    </svg>
  );
}

export default function Home() {
  const [selectedSize, setSelectedSize] = useState("20g");
  const [activeBanner, setActiveBanner] = useState(0);

  function chooseSize(size) {
    setSelectedSize(size);
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <header className="site-header">
        <Link aria-label="Green Seven home" className="brand" href="/">
          <span className="brand-mark">
            <LeafMark />
          </span>
          <span className="brand-name">
            GREEN <strong>SE7EN</strong>
            <small>BOTANICALS FOR EVERYDAY</small>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="main-nav">
          <a href="#our-story">Our story</a>
          <a href="#how-to-use">How to use</a>
          <a href="#faq">FAQs</a>
        </nav>
        <a className="header-cta" href="#shop">
         এখনই অর্ডার করুন <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section aria-labelledby="hero-title" className="hero">
        <div className="hero-copy">
          
          <h1 id="hero-title " className="hero-title font-bold">

           আপনার রাতের
            <br />
            যত্নে প্রাকৃতিক ছোঁয়া
          </h1>
          <p className="hero-description ">
            আপনার নতুন শয়নকালীন অভ্যাসের সাথে পরিচিত হোন: ভেষজ উপাদানের সুচিন্তিত মিশ্রণে তৈরি ল্যাভেন্ডার-সুগন্ধি এক প্রশান্তিদায়ক ম্যাসাজ বাম।
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#shop">
              এখনই অর্ডার করুন<span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#our-story">
              বিস্তারিত জানুন <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-notes">
            <span><b>✳</b> Lavender-led</span>
            <span><b>✳</b> Made for massage</span>
            <span><b>✳</b> Three jar sizes</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-glow" />
          <div className="art-image-wrap">
            <Image
              alt={bannerImages[activeBanner].alt}
              className="product-art"
              fill
              priority={activeBanner === 0}
              sizes="(max-width: 700px) 90vw, 45vw"
              src={bannerImages[activeBanner].src}
            />
          </div>
          <div aria-label="Choose a banner image" className="banner-thumbnails">
            {bannerImages.map((image, index) => (
              <button
                aria-label={`Show ${image.name} image`}
                aria-pressed={activeBanner === index}
                className={`banner-thumbnail ${activeBanner === index ? "banner-thumbnail-active" : ""}`}
                key={image.src}
                onClick={() => setActiveBanner(index)}
                type="button"
              >
                <Image
                  alt=""
                  fill
                  sizes="100px"
                  src={image.src}
                />
              </button>
            ))}
          </div>
          <div className="image-caption">
            <span className="caption-icon"><LeafMark /></span>
            <span><strong>Green Seven</strong><small>Sleep Balm · Lavender</small></span>
            <span className="caption-seal">100%<br />HERBAL</span>
          </div>
          <span aria-hidden="true" className="floating-sparkle sparkle-one">✳</span>
          <span aria-hidden="true" className="floating-sparkle sparkle-two">✦</span>
        </div>
      </section>

      <section aria-label="Contact Green Seven" className="hero-contact">
        <span className="hero-contact-prompt">Questions or ready to order?</span>
        <a className="contact-link contact-call" href="tel:+8801967949373">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path d="M7.1 3.8 9.4 7l-1.6 2a14 14 0 0 0 7.2 7.2l2-1.6 3.2 2.3-.7 3.1c-.2.8-1 1.3-1.8 1.2C9.1 20.1 3.9 14.9 2.8 6.3c-.1-.8.4-1.6 1.2-1.8l3.1-.7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
          <span><strong>Call us</strong><small>+880 1967-949373</small></span>
        </a>
        <a
          className="contact-link contact-whatsapp"
          href="https://wa.me/8801967949373"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path d="M20 11.7a8.1 8.1 0 0 1-12 7.1L4 20l1.2-3.8A8.1 8.1 0 1 1 20 11.7Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
            <path d="M9 8.4c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .6.5.9 1.3 1.7 2.3 2.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.2.3.4 0 .3-.2 1.1-.7 1.4-.4.4-1 .6-1.6.5-1-.2-2.2-.7-3.5-1.8-1.2-1-2.1-2.3-2.4-3.3-.3-.9.1-2 .5-2.7Z" fill="currentColor" />
          </svg>
          <span><strong>WhatsApp us</strong><small>Chat with our team</small></span>
        </a>
      </section>

   

      <section aria-labelledby="sizes-title" className="sizes-section" id="shop">
        <div className="section-heading">
          {/* <p className="eyebrow">A jar for your kind of evening</p> */}
          <h2 id="sizes-title">দয়া করে ১০০% নিশ্চিত হয়ে  <em>অর্ডার করুন.</em></h2>
          <p>আপনার পছন্দের জারটি বেছে নিন এবং নিচে আপনার সম্পূর্ণ ডেলিভারি বিল দেখুন।</p>
        </div>
        <div className="size-grid">
          {sizes.map((item, index) => (
            <button
              aria-label={`Choose ${item.size} Green Seven sleep balm and go to checkout`}
              aria-pressed={selectedSize === item.size}
              className={`size-card ${index === 2 ? "size-card-featured" : ""} ${selectedSize === item.size ? "size-card-selected" : ""}`}
              onClick={() => chooseSize(item.size)}
              key={item.size}
              type="button"
            >
              <span className="jar-illustration" aria-hidden="true">
                <span className="jar-lid" />
                <span className="jar-body"><LeafMark /><small>GREEN<br />SE7EN</small></span>
              </span>
              <span className="size-label">{item.label}</span>
              <strong className="size-value">{item.size}</strong>
              <span className="size-price">৳{item.price}</span>
              <span className="size-note">{item.note}</span>
              <span className="size-link">{selectedSize === item.size ? "Selected ✓" : "Choose this jar"} <span aria-hidden="true">→</span></span>
            </button>
          ))}
        </div>
        <p className="price-note">Choose your preferred jar to continue to the one-page checkout.</p>
        <section aria-labelledby="checkout-title" className="checkout-inline" id="checkout">
          <div className="checkout-inline-heading">
          
            <h2 id="checkout-title">আপনার অর্ডার  <em>দিন।</em></h2>
          </div>
          <CheckoutForm
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
          />
        </section>
      </section>

      <section aria-labelledby="story-title" className="story-section" id="our-story">
        <div className="story-orb" aria-hidden="true"><span>G</span><LeafMark /></div>
        <div className="story-copy">
          <p className="eyebrow">এক ধরনের কোমল আত্ম-যত্ন</p>
          <h2 id="story-title">আপনার রাতের যত্নে প্রাকৃতিক <em>ছোঁয়া .</em></h2>
          <p>
           Green Seven Lavender Sleep Balm — ল্যাভেন্ডারের মনোমুগ্ধকর সুবাসে তৈরি একটি ময়েশ্চারাইজিং হার্বাল ম্যাসাজ বাম। প্রতিদিনের ব্যক্তিগত যত্নে যোগ করুন কোমলতা ও প্রশান্তিময় অনুভূতি।
          </p>
          <a className="text-link" href="#how-to-use">A simple way to use it <span aria-hidden="true">↓</span></a>
        </div>
        <div className="story-aside">
          <span className="quote-mark">“</span>
          <p>ছোট ছোট আচার-অনুষ্ঠান দিনের সমাপ্তিকে আরও শান্তিময় করে তুলতে পারে।</p>
          <span>THE GREEN SEVEN WAY</span>
        </div>
      </section>

      <section aria-labelledby="how-title" className="how-section" id="how-to-use">
        <div className="section-heading">
          <p className="eyebrow">Easy does it</p>
          <h2 id="how-title">Your three-step <em>wind-down.</em></h2>
        </div>
        <div className="steps-grid">
          <article className="step-card">
            <span className="step-number">01</span><span className="step-symbol">☼</span>
            <h3>Take a little</h3><p>Scoop a small amount and warm it between your fingertips.</p>
          </article>
          <article className="step-card">
            <span className="step-number">02</span><span className="step-symbol">〰</span>
            <h3>Massage gently</h3><p>Enjoy a gentle massage on your shoulders, hands, or feet.</p>
          </article>
          <article className="step-card">
            <span className="step-number">03</span><span className="step-symbol">☾</span>
            <h3>Slow things down</h3><p>Breathe in the lavender aroma and settle into your evening.</p>
          </article>
        </div>
        <p className="usage-note">For external use only. Avoid contact with eyes; patch test before first use.</p>
      </section>

      <section aria-labelledby="faq-title" className="faq-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">Good to know</p>
          <h2 id="faq-title">A few little <em>answers.</em></h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>What is Green Seven Sleep Balm?</summary>
            <p>A botanical massage balm with a lavender aroma, designed to be part of a relaxing evening routine.</p>
          </details>
          <details>
            <summary>How should I use it?</summary>
            <p>Warm a small amount between your fingers and massage gently onto skin. For external use only; avoid your eyes and patch test first.</p>
          </details>
          <details>
            <summary>Which size should I choose?</summary>
            <p>Choose 15g for a compact jar, 20g for everyday use, or 50g for a larger jar to keep at home.</p>
          </details>
          <details>
            <summary>Where can I see the price and delivery options?</summary>
            <p>Select a jar size and your delivery area to see the full total before you place your order.</p>
          </details>
        </div>
      </section>

      <section className="closing-cta">
        <div><p className="eyebrow">Your evening, a little gentler</p><h2>Ready to find your <em>jar?</em></h2></div>
        <a className="button button-light" href="#shop">Shop Sleep Balm <span aria-hidden="true">→</span></a>
      </section>

      <footer className="site-footer">
        <Link aria-label="Green Seven home" className="brand footer-brand" href="/">
          <span className="brand-mark"><LeafMark /></span>
          <span className="brand-name">GREEN <strong>SE7EN</strong><small>BOTANICALS FOR EVERYDAY</small></span>
        </Link>
        <p>Take a breath. Make it a ritual.</p>
        <span>© Green Seven</span>
      </footer>
    </main>
  );
}
