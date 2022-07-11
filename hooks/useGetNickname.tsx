import { useState, useEffect } from "react";

const useGetNickname = () => {
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    const localStorageNickname = localStorage.getItem("nickname");
    if (localStorageNickname !== null) {
      setNickname(localStorageNickname);
    }
  }, []);
  return nickname;
};

export default useGetNickname;
