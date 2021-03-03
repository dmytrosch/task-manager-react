import React, { useEffect, useRef } from "react";

const useTitle = (title = "") => {
  const titleRef = useRef(document.title);
  document.title = title
  useEffect(() => {
    return (document.title = titleRef.current);
  }, []);
};

export default useTitle;
