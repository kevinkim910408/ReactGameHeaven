import React from "react";
import Image from "next/image";
import velagaLogo from "../public/velaga/velagaLogo.png";
import BackBtn from "components/BackBtn";

const velagaRanking = () => {
  return (
    <div className="wrapper w-full">
      <BackBtn />
      <div className="w-full flex flex-col justify-center items-center space-y-12">
        <Image src={velagaLogo} />
        <div className="flex items-center justify-center w-full">
          <hr className="text-white border-dashed border-8 w-1/5" />
          <h2 className="px-16">R A N K I N G</h2>
          <hr className="text-white border-dashed border-8 w-1/5" />
        </div>
      </div>
      <table className="text-white table-auto w-3/4 h-full border-separate [border-spacing:2rem] text-center">
        <thead>
          <tr>
            <th>
              <h2></h2>
            </th>
            <th>
              <h2 className="text-yellow">NICKNAME</h2>
            </th>
            <th>
              <h2 className="text-yellow">SCORE</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h2>001</h2>
            </td>
            <td>
              <h2>영근짱짱</h2>
            </td>
            <td>
              <h2>23123</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2>002</h2>
            </td>
            <td>
              <h2>준호바보</h2>
            </td>
            <td>
              <h2>2313</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2>002</h2>
            </td>
            <td>
              <h2>준호바보</h2>
            </td>
            <td>
              <h2>2313</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default velagaRanking;
