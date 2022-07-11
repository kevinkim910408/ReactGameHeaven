import Image from "next/image";
import player from "../../public/velaga/playerVSCode.png";

const Player = ({ positionX }: { positionX: number }) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className={"w-[80px] h-full transition"}>
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
