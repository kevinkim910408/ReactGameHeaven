import { useRouter } from "next/router";

const useRouteHandler = () => {
  const route = useRouter();
  const onRouteHandler = (text: string) => {
    route.push(text);
  };
  return onRouteHandler;
};

export default useRouteHandler;
