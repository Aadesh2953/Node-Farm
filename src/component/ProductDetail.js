import React, { useEffect ,useState } from "react";
import { useSearchParams } from "react-router-dom";
import './productDetail.css'
function ProductDetail() {
  const [productDetail,setProductDetail]=useState({})
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const data = await fetch(`/product?id=${productId}`);
        const productDetail=await data.json()
        setProductDetail({...productDetail})
        console.log(productDetail)
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
      {productDetail?.organic&&<div className="product__organic {%NOT_ORGANIC%}">
          <h5>Organic</h5>
        </div>}
        <a href="/overview" className="product__back">
          <span className="emoji-left">👈</span>Back
        </a>
        <div className="product__hero">
          <span className="product__emoji product__emoji--1">{productDetail?.image}</span>
          <span className="product__emoji product__emoji--2">{productDetail?.image}</span>
          <span className="product__emoji product__emoji--3">{productDetail?.image}</span>
          <span className="product__emoji product__emoji--4">{productDetail?.image}</span>
          <span className="product__emoji product__emoji--5">{productDetail?.image}</span>
          <span className="product__emoji product__emoji--6">{productDetail?.image}</span>
          <span className="product__emoji product__emoji--7">{productDetail?.image}</span>
          <span className="product__emoji product__emoji--8">{productDetail?.image}</span>
          <span className="product__emoji product__emoji--9">{productDetail?.image}</span>
        </div>
        <h2 className="product__name">{productDetail?.productName}</h2>
        <div className="product__details">
          <p>
            <span className="emoji-left">🌍 from</span>
            {productDetail?.from}
          </p>
          <p>
            <span className="emoji-left">❤️ </span>
            {productDetail?.nutrients}
          </p>
          <p>
            <span className="emoji-left">📦</span>
            {productDetail?.quantity}
          </p>
          <p>
            <span className="emoji-left">🏷</span>
            ${productDetail?.price}
          </p>
        </div>

        <a href="#" className="product__link">
          <span className="emoji-left">🛒</span>
          <span>Add to shopping card (€){productDetail?.price}</span>
        </a>

        <p className="product__description">{productDetail?.description}</p>
      </figure>
    </div>
  );
}

export default ProductDetail;
