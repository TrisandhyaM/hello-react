import React, { useState, useEffect } from "react";

export default function PromisesMail() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <h1>Promises</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data?.map((item) => (
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              margin: "10px",
            }}
            key={item.id}
          >
            {item.name}
            <a target="_blank" href={"mailto:" + item.email}>
              ↗️
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}