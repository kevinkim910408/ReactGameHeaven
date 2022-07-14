import React, { useState, useEffect } from "react";
import Bullet from "../../components/velaga/Bullet";

interface BulletLocation {
  bulletX?: number;
  bulletY?: number;
}

const useAddBullets = ({ bulletX, bulletY }: BulletLocation) => {
  // 총알 만드는 배열
  const arr = ["0", "1", "0", "1"];
  // 배열에 값 추가하기
  // const addArr = () => {
  //   if (arr.at(-1) === "0") {
  //     arr.push("1");
  //   } else if (arr.at(-1) === "1") {
  //     arr.push("0");
  //   }
  // };
  // // 배열에 값 삭제하기
  // const deleteArr = () => {
  //   arr.shift();
  // };
  // 배열 값 추가, 삭제 실행
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     addArr();
  //     console.log(arr);
  //   }, 3000);
  //   // return clearInterval(interval);
  // }, []);
  // 렌더링 하기위해서 state 활용
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [arr]);
  console.log(count);

  // 총알 생성 map함수
  const addBullets = arr.slice(0, count).map((val, idx) => {
    return <Bullet key={idx} bulletX={bulletX} bulletY={bulletY} text={val} />;
  });

  return { addBullets };
};

export default useAddBullets;
