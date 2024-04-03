import React from "react";
import styles from "../styles/homepage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Our CRM Application</h1>
        <p>
          We provide powerful tools to manage your users and products
          efficiently.
        </p>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2>Summary Statistics</h2>
          <p>Here are some key statistics about your business:</p>
          <ul>
            <li>Total Users: 500</li>
            <li>Total Products: 1000</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Recent Activities</h2>
          <p>Check out what's been happening:</p>
          <ul>
            <li>John Doe updated user profile for Jane Smith.</li>
            <li>Sarah Johnson added a new user, Michael Brown.</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Quick Access Links</h2>
          <p>Easily navigate to important sections:</p>
          <ul>
            <li>Manage Users</li>
            <li>Manage Products</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
