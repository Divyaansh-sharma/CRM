// import React from "react";
// import styles from "../styles/card.module.css";

// export function Card(props) {
//   const { data } = props;

//   return (
//     <div className={styles.cardContainer}>
//       <img className={styles.image} src={data.thumbnail} alt={data.title} />
//       <div className={styles.content}>
//         <h2 className={styles.title}>{data.title}</h2>
//         <p className={styles.brand}>{data.brand}</p>
//         <p className={styles.description}>{data.description}</p>
//         <div className={styles.actions}>
//           <button className={styles.editButton}>Edit</button>
//           <button className={styles.deleteButton}>Delete</button>
//           <button className={styles.addToCartButton}>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import styles from "../styles/card.module.css";

// export function Card(props) {
//   const { data } = props;
//   const [showFullDescription, setShowFullDescription] = useState(false);

//   const descriptionWords = data.description.split(" ");
//   const truncatedDescription = descriptionWords.slice(0, 10).join(" ");
//   const fullDescription = data.description;

//   const toggleDescription = () => {
//     setShowFullDescription(!showFullDescription);
//   };

//   return (
//     <div className={styles.cardContainer}>
//       <img className={styles.image} src={data.thumbnail} alt={data.title} />
//       <div className={styles.content}>
//         <h2 className={styles.title}>{data.title}</h2>
//         <p className={styles.brand}>{data.brand}</p>
//         <p className={styles.description}>
//           {showFullDescription ? fullDescription : truncatedDescription}
//           {!showFullDescription && (
//             <button className={styles.readMoreButton} onClick={toggleDescription}>
//               See more
//             </button>
//           )}
//         </p>
//         {showFullDescription && (
//           <button className={styles.readMoreButton} onClick={toggleDescription}>
//             Read less
//           </button>
//         )}
//         <div className={styles.actions}>
//           <button className={styles.editButton}>Edit</button>
//           <button className={styles.deleteButton}>Delete</button>
//           <button className={styles.addToCartButton}>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import styles from "../styles/card.module.css";

export function Card(props) {
  const { data } = props;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const descriptionWords = data.description.split(" ");
  const truncatedDescription = descriptionWords.slice(0, 10).join(" ");
  const fullDescription = data.description;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src={data.thumbnail} alt={data.title} />
      <div className={styles.content}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.brand}>{data.brand}</p>
        <p className={styles.description}>
          {showFullDescription ? fullDescription : truncatedDescription}
          {descriptionWords.length > 10 && (
            <button
              className={styles.readMoreButton}
              onClick={toggleDescription}
            >
              {showFullDescription ? "Read less" : "See more"}
            </button>
          )}
        </p>
        <div className={styles.actions}>
          <button className={styles.editButton}>Edit</button>
          <button className={styles.deleteButton}>Delete</button>
          <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
