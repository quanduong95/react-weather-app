import React, { useRef, useEffect, useState } from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";

function Inputs({ setCity }) {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const handleInput = (value) => {
    setInput(value);
  };

  const handleClick = () => {
    if (input === '' || input === undefined) {
      alert('city name can\' be blank')
      return;
    }
    setCity(input);
    setInput("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [input]);

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          ref={inputRef}
          value={input}
          onChange={(e) => handleInput(e.target.value)}
          placeholder="Search for city here ..."
          className="text-xl font-light p-2 w-full shadow-xl focus: outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          onClick={handleClick}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilMapMarker
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
    </div>
  );
}

export default Inputs;
