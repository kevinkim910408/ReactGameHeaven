import React, { useEffect, useState } from "react";

interface BulletLocation {
  bulletX?: number;
  bulletY?: number;
  text: string;
}

const Bullet = ({ bulletX, bulletY, text }: BulletLocation) => {
  const [arr, setArr] = useState([0]);
  const [transitionY, setTransitionY] = useState(bulletY);
  const [transitionX, setTransitionX] = useState(bulletX);

  useEffect(() => {
    setTransitionY(bulletY);
    setTransitionX(bulletX);
  }, [bulletY]);

  // 총알 움직이기(Y축)
  const bulletTransitionY = () => {
    if (transitionY) {
      setTransitionY(transitionY - 50);
    }
  };

  useEffect(() => {
    const interval = setInterval(bulletTransitionY, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [transitionY]);

  return (
    <>
      <div className="text-white bulletStart">{text}</div>

      <style jsx>
        {`
          .bulletStart {
            position: fixed;
            top: ${transitionY}px;
            left: ${transitionX}px;
          }
        `}
      </style>
    </>
  );
};

export default Bullet;
