import Stars from "components/velaga/Stars";

const gameList = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black relative">
      <Stars />
      <span className="text-100 text-white">게임</span>
      <div className="flex flex-col items-center justify-center w-[1000px] h-[150px] text-white border-white border-4 mt-10 hover:bg-white hover:text-black ">
        <span className="text-50">V E L A G A</span>
      </div>
      <div className="flex flex-col items-center justify-center w-[1000px] h-[150px] text-white border-white border-4 mt-10 hover:bg-white hover:text-black ">
        <span className="text-50">지금 준비중 입니다...</span>
      </div>
      <div className="flex flex-col items-center justify-center w-[1000px] h-[150px] text-white border-white border-4 mt-10 hover:bg-white hover:text-black ">
        <span className="text-50">지금 준비중 입니다...</span>
      </div>
    </div>
  );
};

export default gameList;
