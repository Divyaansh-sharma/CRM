import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import styles from "../styles/projects.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getproductsData,
  updateProduct,
} from "../store/products-actions";
import { ProductForm } from "../components/ProductForm";

export function Products() {
  const { products } = useSelector((state) => state.prod);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [productFormState, setProductFormState] = useState("");
  const [editProductData, setEditProductData] = useState(null);

  console.log("products =>", products);
  useEffect(() => {
    dispatch(getproductsData());
  }, [dispatch]);

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  const closeFormHandler = () => {
    setIsOpen(false);
    setProductFormState("");
    setEditProductData(null);
  };

  const editProductDataHandler = (data) => {
    console.log("lets check in edit ==>", data);
    setIsOpen(true);
    setProductFormState("Edit");
    setEditProductData(data);
  };

  return (
    <div className={styles.products_main_container}>
      <button
        onClick={() => {
          setIsOpen(true);
          setProductFormState("Add");
        }}
      >
        Add Product
      </button>
      {isOpen && (
        <ProductForm
          productFormState={productFormState}
          closeFormHandler={closeFormHandler}
          editProductData={editProductData}
        />
      )}
      <div className={styles.products_container}>
        {products?.map((product) => (
          <Card
            data={product}
            id={product.id}
            key={product.id}
            deleteProductHandler={deleteProductHandler}
            editProductDataHandler={editProductDataHandler}
          />
        ))}
      </div>
    </div>
  );
}
