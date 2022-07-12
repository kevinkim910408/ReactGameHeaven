import React, { useCallback, useRef } from "react";
import Image from "next/image";
import player from "../../public/velaga/playerVSCode.png";
import useGetLocation from "hooks/Velaga/useGetLocation";
import Bullet from "./Bullet";

const Player = ({ positionX }: { positionX: number }) => {
  // 총알 시작하는 좌표 구하기

  const playerRef = useRef<HTMLDivElement>(null);
  const { bulletX, bulletY } = useGetLocation(playerRef);

  // 총알 생성

  return (
    <div className="w-full h-full flex justify-center">
      <Bullet bulletX={bulletX} bulletY={bulletY} />
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
