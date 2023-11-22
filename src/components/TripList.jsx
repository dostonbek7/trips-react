import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import "./TripList.css";

function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending, error } = useFetch(url);

  return (
    <div className="trip-list">
      <h1>TripList</h1>
      {isPending && (<div><h3>Loading...</h3></div>)}
      {error && (<div><h3>{error}</h3></div>)}
      <ul>
        {trips &&
          trips.map((trip) => {
            const { title, price } = trip;
            return (
              <li key={title}>
                <h2>{title}</h2>
                <p>{price}</p>
              </li>
            );
          })}
      </ul>
      <div className="filters">
        <button
          onClick={() => {
            setUrl("http://localhost:3000/trips?loc=Europe");
          }}
        >
          Europan trips
        </button>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/trips");
          }}
        >
          All trips
        </button>
      </div>
    </div>
  );
}

export default TripList;
