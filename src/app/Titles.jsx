"use client"
import React, { useEffect, useState } from 'react';

const getTitles = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api`, { cache: "no-store" });

  if (!res.ok) {
    console.log("Failed to fetch the titles");
    return []; // Return an empty array if fetching fails
  }

  const dataFlow = await res.json();
  console.log(dataFlow.topics);
  return dataFlow.topics;
};

const Titles = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTitles = await getTitles();
      setTitles(fetchedTitles);
    };

    fetchData(); // Call the async function inside useEffect
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h1>Hello</h1>
      {titles.map((item, index) => (
        <div key={index}>
          <h1>{item.title} : {item.description}</h1>
          
        </div>
      ))}
    </div>
  );
};

export default Titles;
