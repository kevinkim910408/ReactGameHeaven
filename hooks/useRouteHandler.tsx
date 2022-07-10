import { useRouter } from "next/router";

const useRouteHandler = () => {
  const route = useRouter();
  const onRouteHandler = (text: string) => {
    route.push(text);
  };
  return onRouteHandler;
};

export default useRouteHandler;

// 사용법
// import useRouteHandler from "hooks/useRouteHandler";
// const route = useRouteHandler();
// onClick={() => route("/주소이름")}
