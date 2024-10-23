import React, { useEffect, useState } from "react";
import "./Overview.css";
import Template_Card from "./Template_Card";
import { useSearchParams } from "react-router-dom";

function Overview() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function FetchData() {
      try {
        const response = await fetch("overview");
        const data = await response.json();
        setData([...data]);
        console.log(data);
      } catch (err) {
        console.log("error", err);
      }
    }
    FetchData();
  }, []);
  return (
    <>
      <div className="container">
        <h1>🌽 Node Farm 🥦</h1>

        <div className="cards-container">
          {data.map((product) => {
            return (
              <Template_Card
                description={product.description}
                key={product.id}
                id={product.id}
                name={product.productName}
                quantity={product.quantity}
                nutrients={product.nutrients}
                organic={product.organic}
                country={product.from}
                price={product.price} 
                image={product.image}
                />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Overview;
