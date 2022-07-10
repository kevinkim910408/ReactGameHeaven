import React from "react";
import Image from "next/image";
import reactLogo from "../public/main/reactLogo.png";

const signIn = () => {
  return (
    <div className="wrapper border-blue">
      <Image src={reactLogo} />
      <h2>사용하실 닉네임을 입력해주세요.</h2>
      <h3 className="mt-2">(2~6글자로 입력해주세요.)</h3>
      <form className="w-full">
        <div className="w-full space-x-20 flex items-center justify-center mt-10">
          <input
            pattern=".{2,6}"
            className=" w-1/2 bg-black border-10 border-white text-white p-10 text-60 text-center"
            required
          />
          <button
            type="submit"
            className="bg-black border-10 border-white text-white text-60 text-center py-10 px-16 placeholder-white"
          >
            GO
          </button>
        </div>
      </form>
    </div>
  );
};

export default signIn;
