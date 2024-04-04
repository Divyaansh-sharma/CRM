import React, { useEffect, useState } from "react";
import styles from "../styles/addProductForm.module.css";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../store/products-actions";

export const ProductForm = ({
  closeFormHandler,
  productFormState,
  editProductData,
}) => {
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    brand: "",
    description: "",
    thumbnail: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (editProductData) {
      setProductData({
        title: editProductData?.title,
        price: editProductData?.price,
        brand: editProductData?.brand,
        description: editProductData?.description,
        thumbnail: editProductData?.thumbnail,
      });
    }
  }, [editProductData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);

    setProductData({
      ...productData,
      thumbnail: imageURL,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productFormState === "Add") {
      dispatch(addProduct(productData));
    } else if (productFormState === "Edit") {
      dispatch(updateProduct({ ...productData, id: editProductData.id }));
    }
    closeFormHandler();
    setProductData({
      title: "",
      price: "",
      brand: "",
      description: "",
      thumbnail: null,
    });
  };

  return (
    <>
      <div className={styles.backdrop} onClick={closeFormHandler}></div>
      <div className={styles.container}>
        <h2>{productFormState} Product</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Brand:</label>
            <input
              type="text"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Description:</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label>Thumbnail:</label>
            <input
              type="file"
              accept="image/*"
              name="thumbnail"
              onChange={handleThumbnailChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
