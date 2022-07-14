import React, { useRef, useState } from "react";
import Image from "next/image";
import player from "../../public/velaga/playerVSCode.png";
import useGetLocation from "hooks/Velaga/useGetLocation";
import BulletContainer from "components/velaga/BulletContainer";

const Player = () => {
  // 키보드 누를 때 이벤트
  const [positionX, setPositionX] = useState<number>(0);
  const handleKeyPress = (e: React.KeyboardEvent) => {
    e.preventDefault();
    const key = e.code;
    switch (key) {
      case "ArrowLeft": {
        if (positionX > -350) {
          setPositionX(positionX - 20);
        } else {
          setPositionX(-350);
        }
        break;
      }
      case "ArrowRight": {
        if (positionX < 350) {
          setPositionX(positionX + 20);
        } else {
          setPositionX(350);
        }
        break;
      }
    }
  };
  // 총알 시작하는 좌표 구하는 커스텀 훅
  const playerRef = useRef<HTMLDivElement>(null);
  const { bulletX, bulletY } = useGetLocation(playerRef);

  return (
    <div
      className="w-full h-full flex justify-center"
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <BulletContainer bulletX={bulletX} bulletY={bulletY} />
      <div className={"w-[80px] h-full transition"} ref={playerRef}>
        <Image src={player} layout="responsive" objectFit="contain" />
      </div>
      <style jsx>
        {`
          .transition {
            transform: translateX(${positionX}px);
          }
        `}
      </style>
    </div>
  );
};

export default Player;
