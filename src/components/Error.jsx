
import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err);

  return (
    <div>
      <div>Something went wrong</div>
      <div>{err.statusText}</div>
    </div>
  );
};

export default Error;
