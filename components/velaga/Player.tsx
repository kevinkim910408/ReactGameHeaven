import React, { useRef } from "react";
import Image from "next/image";
import player from "../../public/velaga/playerVSCode.png";
import useGetLocation from "hooks/Velaga/useGetLocation";
import Bullet from "./Bullet";

const Player = ({ positionX }: { positionX: number }) => {
  // 총알 시작하는 좌표 구하는 커스텀 훅
  const playerRef = useRef<HTMLDivElement>(null);
  const { bulletX, bulletY } = useGetLocation(playerRef);
  // 총알 만드는 배열
  const arr = ["0", "1"];

  return (
    <div className="w-full h-full flex justify-center">
      <>
        {arr.map((val, idx) => (
          <Bullet key={idx} bulletX={bulletX} bulletY={bulletY} text={val} />
        ))}
      </>
      {/* <Bullet bulletX={bulletX} bulletY={bulletY} text="0" />; */}
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
