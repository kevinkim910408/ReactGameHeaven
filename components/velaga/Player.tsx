import React, { useCallback, useState } from "react";
import Image from "next/image";
import player from "../../public/velaga/playerVSCode.png";

const Player = ({ positionX }: { positionX: number }) => {
  console.log(positionX);

  return (
    <div className={`w-[80px] h-full translate-x-[${positionX}px]`}>
      <Image src={player} layout="responsive" objectFit="contain" />
    </div>
  );
};

export default Player;
