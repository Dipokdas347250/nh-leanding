import Image from "next/image";
import Link from "next/link";

const sizes = [
  { size: "15g", label: "Pocket size", note: "A little calm, wherever you go." },
  { size: "20g", label: "Everyday jar", note: "Your nightly bedside companion." },
  { size: "50g", label: "The full ritual", note: "A generous jar for slow evenings." },
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
        <Link className="header-cta" href="/checkout?size=50g">
          Shop the balm <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section aria-labelledby="hero-title" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Your softer end to the day</p>
          <h1 id="hero-title">
            A little balm.
            <br />
            A <em>slower</em> evening.
          </h1>
          <p className="hero-description">
            Meet your new bedtime ritual: a soothing, lavender-scented massage
            balm made with a thoughtful blend of botanicals.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/checkout?size=50g">
              Find your jar <span aria-hidden="true">→</span>
            </Link>
            <a className="text-link" href="#our-story">
              Get to know us <span aria-hidden="true">↓</span>
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
              alt="Green Seven natural lavender sleep balm in three jar sizes"
              className="product-art"
              height={1024}
              priority
              src="/new.jpg"
              width={1536}
            />
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

      <div aria-label="Product highlights" className="benefit-strip">
        <div><span className="benefit-icon">✿</span><span><strong>Botanical blend</strong><small>Inspired by nature</small></span></div>
        <div><span className="benefit-icon">☾</span><span><strong>Evening ritual</strong><small>Make a moment for you</small></span></div>
        <div><span className="benefit-icon">♡</span><span><strong>Massage-friendly</strong><small>Melts in with a gentle touch</small></span></div>
        <div><span className="benefit-icon">♧</span><span><strong>Three sizes</strong><small>Choose your kind of calm</small></span></div>
      </div>

      <section aria-labelledby="sizes-title" className="sizes-section" id="shop">
        <div className="section-heading">
          <p className="eyebrow">A jar for your kind of evening</p>
          <h2 id="sizes-title">Choose your <em>ritual.</em></h2>
          <p>Pick a size and head straight to checkout.</p>
        </div>
        <div className="size-grid">
          {sizes.map((item, index) => (
            <Link
              aria-label={`Choose ${item.size} Green Seven sleep balm and go to checkout`}
              className={`size-card ${index === 2 ? "size-card-featured" : ""}`}
              href={`/checkout?size=${item.size}`}
              key={item.size}
            >
              <span className="jar-illustration" aria-hidden="true">
                <span className="jar-lid" />
                <span className="jar-body"><LeafMark /><small>GREEN<br />SE7EN</small></span>
              </span>
              <span className="size-label">{item.label}</span>
              <strong className="size-value">{item.size}</strong>
              <span className="size-note">{item.note}</span>
              <span className="size-link">Choose this jar <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
        <p className="price-note">You can confirm current pricing and delivery details at checkout.</p>
      </section>

      <section aria-labelledby="story-title" className="story-section" id="our-story">
        <div className="story-orb" aria-hidden="true"><span>G</span><LeafMark /></div>
        <div className="story-copy">
          <p className="eyebrow">A softer kind of self-care</p>
          <h2 id="story-title">Make bedtime feel like <em>yours.</em></h2>
          <p>
            The day can be a lot. Green Seven Sleep Balm turns a few quiet
            minutes into a small, sensory ritual—warm the balm between your
            fingertips, take a breath, and massage it gently where you like.
          </p>
          <a className="text-link" href="#how-to-use">A simple way to use it <span aria-hidden="true">↓</span></a>
        </div>
        <div className="story-aside">
          <span className="quote-mark">“</span>
          <p>Small rituals can make space for a gentler end to the day.</p>
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
            <p>Choose a jar above to continue to checkout, where current pricing and delivery details can be confirmed.</p>
          </details>
        </div>
      </section>

      <section className="closing-cta">
        <div><p className="eyebrow">Your evening, a little gentler</p><h2>Ready to find your <em>jar?</em></h2></div>
        <Link className="button button-light" href="/checkout?size=50g">Shop Sleep Balm <span aria-hidden="true">→</span></Link>
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
