import "./index.css";
import { useContext, useState, useEffect, useCallback } from "react";

import { LockContext } from "../../../providers/lock.provider";
import PadlockClosed from "../../icons/padlockClosed";
import PadlockOpen from "../../icons/padlockOpen";

function Gif(props) {
  const { gif, index } = props;
  const { toggleLockGif } = useContext(LockContext);
  const [locked, setLocked] = useState(false);

  const handleLock = useCallback(() => {
    if (localStorage.getItem(index)) {
      setLocked(true);
    } else {
      setLocked(false);
    }
  }, [index]);

  useEffect(() => {
    handleLock();
  }, [handleLock]);

  return (
    <div
      className="gif--wraper"
      onClick={() => {
        toggleLockGif(gif, index);
        handleLock();
      }}
    >
      <img
        className="image"
        style={{ backgroundImage: `url(${gif.images.original.url})` }}
        alt=""
      />
      {locked ? (
        <div className="image--tip">
          <PadlockOpen className="padlock" />
          <span> Click to unlock</span>
        </div>
      ) : (
        <div className="image--tip">
          <PadlockClosed className="padlock" />
          <span> Click to lock</span>
        </div>
      )}
    </div>
  );
}

export default Gif;
