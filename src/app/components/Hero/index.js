import "./index.css";
import { useContext, useEffect } from "react";

import { FetchContext } from "../../../providers/fetch.provider";
import Gif from "../Gif";

function Hero() {
  const { getGifs, gifs, isloading, error } = useContext(FetchContext);

  useEffect(() => {
    getGifs();
  }, [getGifs]);

  return (
    <section className="hero">
      <div className="container">
        {isloading && (
          <div className="loading">
            <p>Loading...</p>
          </div>
        )}
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
        {gifs.map((gif, index) => (
          <Gif key={index} gif={gif} index={index}></Gif>
        ))}
      </div>
    </section>
  );
}

export default Hero;
