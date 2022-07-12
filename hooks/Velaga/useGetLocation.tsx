import { useState, useEffect } from "react";

const useGetLocation = (playerRef: React.RefObject<HTMLDivElement>) => {
  const x = playerRef.current?.getBoundingClientRect().left;
  const y = playerRef.current?.getBoundingClientRect().top;
  const [bulletX, setBulletX] = useState<number | undefined>(x);
  const [bulletY, setBulletY] = useState<number | undefined>(y);

  useEffect(() => {
    if (x) {
      setBulletX(x + 40);
      setBulletY(y);
    }
  }, [x, y]);
  return { bulletX, bulletY };
};

export default useGetLocation;
