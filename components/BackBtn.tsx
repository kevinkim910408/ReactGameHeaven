import { useRouter } from "next/router";

const BackBtn = () => {
  const router = useRouter();
  return (
    <button className="fixed top-5 left-5" onClick={() => router.back()}>
      <h3 className=" text-white">뒤로 가기</h3>
    </button>
  );
};

export default BackBtn;
