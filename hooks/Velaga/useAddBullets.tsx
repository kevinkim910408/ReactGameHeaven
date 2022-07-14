import React, { useState, useEffect } from "react";
import Bullet from "../../components/velaga/Bullet";

interface BulletLocation {
  bulletX?: number;
  bulletY?: number;
}

const useAddBullets = ({ bulletX, bulletY }: BulletLocation) => {
  // 총알 만드는 배열
  const [arr, setArr] = useState(["0"]);
  // 배열에 값 추가하기
  const addArr = () => {
    if (arr.at(-1) === "0") {
      const newArr = arr.concat("1");
      setArr(newArr);
    } else if (arr.at(-1) === "1") {
      const newArr = arr.concat("0");
      setArr(newArr);
    }
  };
  // 배열에 값 삭제하기
  const deleteArr = () => {
    arr.shift();
    setArr(arr);
  };

  // 렌더링 하기위해서 state 활용
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
      addArr();
    }, 1000);

    return () => clearInterval(interval);
  }, [arr]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     deleteArr();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [arr]);

  // 총알 생성 map함수
  const addBullets = arr?.slice(0, count).map((val, idx) => {
    console.log(arr);
    return <Bullet key={idx} bulletX={bulletX} bulletY={bulletY} text={val} />;
  });

  return { addBullets };
};

export default useAddBullets;
