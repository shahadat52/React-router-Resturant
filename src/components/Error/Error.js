import React from "react";

const Error = () => {
  return (
    <div className="grid bg-red-600 h-screen place-items-center text-white text-center">
      <div>
        <p className="text-2xl font-extrabold mb-10">Oops!</p>
        <p className="mb-10 font-semibold">
          Sorry, an unexpected error has occurred.
        </p>
        <small>File not Found</small>
      </div>
    </div>
  );
};

export default Error;
