import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";


const Modal = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    for (let i = 0; i <= 100; i++) {
      setProgress(i);
    }
  }, [isLoading]);
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center transition-opacity duration-500 ">
        <div className="w-[600px] h-[400px] p-4">
          <LoadingBar
            color="blue"
            progress={progress}
            onLoaderFinished={() => {
              setProgress(0);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
