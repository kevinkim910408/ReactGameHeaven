import Stars from "components/velaga/Stars";
import useRouteHandler from "hooks/useRouteHandler";

const gameList = () => {
  const route = useRouteHandler();
  return (
    <div className="wrapper border-blue">
      <Stars />
      <span className="text-100 text-white">게임</span>
      <div
        className="flex flex-col items-center justify-center w-[1000px] h-[150px] text-white border-white border-4 mt-10 hover:bg-white hover:text-black"
        onClick={() => route("/velagaMain")}
      >
        <span className="text-50">V E L A G A</span>
      </div>
      <div className="flex flex-col items-center justify-center w-[1000px] h-[150px] text-white border-white border-4 mt-10 hover:bg-white hover:text-black">
        <span className="text-50">지금 준비중 입니다...</span>
      </div>
      <div className="flex flex-col items-center justify-center w-[1000px] h-[150px] text-white border-white border-4 mt-10 hover:bg-white hover:text-black">
        <span className="text-50">지금 준비중 입니다...</span>
      </div>
    </div>
  );
};

export default gameList;
