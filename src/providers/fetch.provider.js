import { useCallback, useState, createContext } from "react";

import Moment from "moment";
import { term } from "../app/mock";

const FetchContext = createContext({});

function FetchProvider({ children }) {
  const [gifs, setGifs] = useState([]);
  const [error, setErroor] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const api_key = "t39qoAals7xJSbthvAVYoQ9rQ4CHAQwW";
  const getRandom = (int) => Math.floor(Math.random() * int);

  const getGifs = useCallback(async () => {
    setIsLoading(true);
    const randomSearchTerm = term[getRandom(20)];
    try {
      let results = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${randomSearchTerm}&limit=12`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await results.json();

      const sortedArray = data.data.sort(
        (a, b) =>
          new Moment(b.import_datetime).format("YYYYMMDDHHmmss") -
          new Moment(a.import_datetime).format("YYYYMMDDHHmmss")
      );

      const result = sortedArray.map((gif, index) => {
        if (localStorage.getItem(index)) {
          return JSON.parse(localStorage.getItem(index));
        } else {
          return gif;
        }
      });

      setGifs(result);
    } catch (e) {
      setErroor("Something went wrong! Unable to get Gifs");
      console.log(await e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <FetchContext.Provider value={{ getGifs, gifs, isloading, error }}>
      {children}
    </FetchContext.Provider>
  );
}

export { FetchProvider, FetchContext };
