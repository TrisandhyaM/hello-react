import React, { useEffect } from "react";
const Covid = () => {

  const effect = async () => {
    try {
      const res = await fetch('https://data.covid19india.org/data.json');
      const actualData  = await res.json();
      console.log(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    effect();
  }, []);

  return (
    <>
    <section>
      <h1> 🔴Live</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>

      <ul>
        <li className="card">
          <div className="card_main">
           <div className="card_inner">
            <p className="card_name"><span>OUR</span> COUNTRY</p>
            <p className="card_total card_small">INDIA</p>
           </div>
          </div>
        </li>
      </ul>
      </section>
    </>
  )
}

export default Covid;