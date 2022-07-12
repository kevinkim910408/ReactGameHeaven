import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import player from "../../public/velaga/playerVSCode.png";
import useGetLocation from "hooks/Velaga/useGetLocation";

const Player = ({ positionX }: { positionX: number }) => {
  // 총알 시작하는 좌표 구하기

  const playerRef = useRef<HTMLDivElement>(null);
  const { bulletX, bulletY } = useGetLocation(playerRef);

  // 총알 생성

  return (
    <div className="w-full h-full flex justify-center">
      <div className={"w-[80px] h-full transition"} ref={playerRef}>
        <Image src={player} layout="responsive" objectFit="contain" />
      </div>
      <style jsx>
        {`
          .transition {
            transform: translateX(${positionX}px);
          }
          .bulletLocation {
            position: fixed;
            top: ${bulletY};
            left: ${bulletX}px;
          }
          @keyframes bulletAnimation {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-1000px);
            }
          }
          .bulletTransition {
            animation: bulletAnimation 5s;
            animation-fill-mode: forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Player;
