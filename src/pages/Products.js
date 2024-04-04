import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import styles from "../styles/products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getproductsData } from "../store/products-actions";
import { ProductForm } from "../components/ProductForm";

export function Products() {
  const { products, isLoading, error } = useSelector((state) => state.prod);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [productFormState, setProductFormState] = useState("");
  const [editProductData, setEditProductData] = useState(null);

  useEffect(() => {
    if (!products.length) {
      dispatch(getproductsData());
    }
  }, [dispatch, products]);

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  const closeFormHandler = () => {
    setIsOpen(false);
    setProductFormState("");
    setEditProductData(null);
  };

  const editProductDataHandler = (data) => {
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
      {error?.isError && (
        <div className={`${styles.loading_container} ${styles.error_message}`}>
          {error.message}
        </div>
      )}
      {isLoading && <div className={styles.loading_container}>Loading...</div>}
      {!isLoading && (
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
      )}
    </div>
  );
}
