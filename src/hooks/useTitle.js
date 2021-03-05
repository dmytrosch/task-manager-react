import { useEffect } from "react";

const useTitle = (title = "") => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "Task manager";
    };
  }, [title]);
};

export default useTitle;
