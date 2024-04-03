import React, { useEffect } from "react";

export function Dashboard() {

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(console.log);
  }, []);
  
  return <div>Dashboard</div>;
}
