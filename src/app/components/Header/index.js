import "./index.css";
import { useContext, useEffect, useCallback } from "react";

import { FetchContext } from "../../../providers/fetch.provider";
import Button from "../Button";
import IconInfo from "../../icons/Info";

function Header() {
  const { getGifs } = useContext(FetchContext);

  const downHandler = useCallback(
    (e) => {
      if (e.code === "Space") {
        getGifs();
      }
    },
    [getGifs]
  );

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [downHandler]);

  return (
    <header className="header">
      <div className="container">
        <h5 className="name">Testhy</h5>
        <div className="info">
          <IconInfo className="info--icon" />
          <span className="info--text">
            Press <span className="info--text--highlight">spacebar</span> to
            shuffle or
          </span>
          <Button onClick={() => getGifs()}>Click here</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
