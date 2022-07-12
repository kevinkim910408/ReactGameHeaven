import { useState, useEffect } from "react";

const useGetLocation = (playerRef: React.RefObject<HTMLDivElement>) => {
  const [bulletX, setBulletX] = useState<number | undefined>(0);
  const [bulletY, setBulletY] = useState<number | undefined>(0);
  const x = playerRef.current?.getBoundingClientRect().left;
  const y = playerRef.current?.getBoundingClientRect().top;

  useEffect(() => {
    if (x) {
      setBulletX(x + 40);
      setBulletY(y);
    }
  }, [x, y]);
  return { bulletX, bulletY };
};

export default useGetLocation;
