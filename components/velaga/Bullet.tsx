import React from "react";

interface BulletLocation {
  bulletX?: number;
  bulletY?: number;
}

const Bullet = ({ bulletX, bulletY }: BulletLocation) => {
  return (
    <>
      <span className="text-white bulletStart">0</span>
      <style jsx>
        {`
          .bulletStart {
            position: fixed;
            top: ${bulletY}px;
            left: ${bulletX}px;
          }
        `}
      </style>
    </>
  );
};

export default Bullet;
