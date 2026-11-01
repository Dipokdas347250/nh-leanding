import { Suspense } from "react";
import Link from "next/link";
import CheckoutForm from "./checkout-form";

const sizes = new Set(["15g", "20g", "50g"]);

export const metadata = {
  title: "Checkout | Green Seven",
  description: "Choose your Green Seven Sleep Balm jar and enter delivery details.",
};

async function CheckoutDetails({ searchParams }) {
  const params = await searchParams;
  const requestedSize = Array.isArray(params?.size) ? params.size[0] : params?.size;
  const selectedSize = sizes.has(requestedSize) ? requestedSize : "50g";

  return (
    <>
      <CheckoutForm selectedSize={selectedSize} />
      <Link className="checkout-back" href="/">← Continue browsing</Link>
    </>
  );
}

function CheckoutFallback() {
  return <div aria-busy="true" className="checkout-layout" />;
}

export default function CheckoutPage({ searchParams }) {
  return (
    <main className="checkout-page">
      <header className="site-header checkout-header">
        <Link aria-label="Green Seven home" className="brand" href="/">
          <span className="brand-mark">
            <svg aria-hidden="true" fill="none" viewBox="0 0 32 32">
              <path
                d="M25.8 5.2C16 5.2 7.1 8.7 6.1 17.1c-.6 5.2 3.2 8.9 7.7 8.9 8.7 0 12-10.1 12-20.8Z"
                fill="currentColor"
              />
              <path d="M5 28c4.1-7.5 9.5-12.5 17-17" stroke="white" strokeWidth="1.7" />
            </svg>
          </span>
          <span className="brand-name">GREEN <strong>SE7EN</strong><small>BOTANICALS FOR EVERYDAY</small></span>
        </Link>
        <Link href="/">← Back to the balm</Link>
      </header>
      <section className="checkout-main">
        <div className="checkout-title">
          <p className="eyebrow">One last little step</p>
          <h1>Checkout</h1>
        </div>
        <Suspense fallback={<CheckoutFallback />}>
          <CheckoutDetails searchParams={searchParams} />
        </Suspense>
      </section>
    </main>
  );
}
