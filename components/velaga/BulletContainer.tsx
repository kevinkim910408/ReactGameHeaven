import React from "react";
import useAddBullets from "hooks/Velaga/useAddBullets";

interface BulletLocation {
  bulletX?: number;
  bulletY?: number;
}

const BulletContainer = ({ bulletX, bulletY }: BulletLocation) => {
  // 총알 생성하는 custom hook
  const { addBullets } = useAddBullets({ bulletX, bulletY });

  return <>{addBullets}</>;
};

export default BulletContainer;
