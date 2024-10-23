import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function ProductDetail() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const productDetail = await fetch(`/product?id=${productId}`);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductDetail()
  }, []);
  //
  return (
    <div className="container">
      <h1>🌽 Node Farm 🥦</h1>

      <figure className="product">
        <div className="product__organic {%NOT_ORGANIC%}">
          <h5>Organic</h5>
        </div>
        <a href="/overview" className="product__back">
          <span className="emoji-left">👈</span>Back
        </a>
        <div className="product__hero">
          <span className="product__emoji product__emoji--1"></span>
          <span className="product__emoji product__emoji--2"></span>
          <span className="product__emoji product__emoji--3"></span>
          <span className="product__emoji product__emoji--4"></span>
          <span className="product__emoji product__emoji--5">{}</span>
          <span className="product__emoji product__emoji--6">{}</span>
          <span className="product__emoji product__emoji--7">{}</span>
          <span className="product__emoji product__emoji--8">{}</span>
          <span className="product__emoji product__emoji--9">{}</span>
        </div>
        <h2 className="product__name">{}</h2>
        <div className="product__details">
          <p>
            <span className="emoji-left">🌍</span>From{" "}
          </p>
          <p>
            <span className="emoji-left">❤️</span>
          </p>
          <p>
            <span className="emoji-left">📦</span>
          </p>
          <p>
            <span className="emoji-left">🏷</span>
          </p>
        </div>

        <a href="#" className="product__link">
          <span className="emoji-left">🛒</span>
          <span>Add to shopping card (€)</span>
        </a>

        <p className="product__description"></p>
      </figure>
    </div>
  );
}

export default ProductDetail;
