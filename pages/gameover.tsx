import Stars from "components/velaga/Stars";
import useRouteHandler from "hooks/useRouteHandler";
import Image from "next/image";

const gameover = (props: { img: string }) => {
  const route = useRouteHandler();
  return (
    <div className="wrapper">
      <Stars />
      <div>
        {props.img === "velaga" ? (
          <Image
            //   src="/gitFriends/gitCat.png"
            src="/velaga/enemyError.png"
            alt=""
            width={300}
            height={300}
            layout="intrinsic"
            className="absolute bottom-[50%] left-[25%] animate-bounce"
          />
        ) : (
          <>
            <Image
              src="/gitFriends/gitCat.png"
              alt=""
              width={200}
              height={200}
              layout="intrinsic"
              className="absolute bottom-[50%] left-[25%] animate-bounce"
            />
          </>
        )}
      </div>
      <span className="text-[120px] text-white ">게임 오버!</span>
      <span
        className="text-[50px] text-white hover:opacity-70 mt-20"
        onClick={() => route("/gameList")}
      >
        메인화면으로 돌아가기
      </span>
    </div>
  );
};

export default gameover;
