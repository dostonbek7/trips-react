import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import "./TripList.css";
import Loader from "./Loader";
import { motion } from "framer-motion"


function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending, error } = useFetch(url);

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

  return (
    <div>
      <h1>TripList</h1>
      {isPending && <Loader/>}
      {error && (<div><h3>{error}</h3></div>)}
      <ul>
        {trips &&
          trips.map((trip) => {
            const {img, alt_img, title, price, loc } = trip;
            return (
              <motion.li key = {title}
              className="container"
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 120
              }}
              >
                <img className="image" src={img} alt={alt_img} width={250} height={300} />
                <h3>{title}</h3>
                <h3>Price: {price}</h3>
                <h3>Location: {loc}</h3>
              </motion.li>
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
            setUrl("http://localhost:3000/trips?loc=Asia");
          }}
        >
          Asian trips
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
