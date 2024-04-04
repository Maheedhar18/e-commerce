import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Carousel } from "antd";

const Product = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  let { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    fetchProductDetails(id);
  }, [id]);

  const fetchProductDetails = (id) => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProduct(res);
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className=" ">
        <div>
          {/* <Carousel effect="fade" className="">
            {product?.images?.map((image, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "300px",
                }}
              >
               
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  style={{ width: "auto", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </Carousel> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
