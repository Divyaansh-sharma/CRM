import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import styles from "../styles/projects.module.css";

export function Projects() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setproducts(res?.products));
  }, []);

  console.log("products ==>", products);

  return (
    <div className={styles.products_container}>
      {products?.map((product) => (
        <Card data={product} />
      ))}
    </div>
  );
}
