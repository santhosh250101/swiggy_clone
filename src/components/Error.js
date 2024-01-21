import { useRouteError } from "react-router-dom";
function Error() {
  const err = useRouteError();
  console.log(err);
  return <div>
    <div>
        Error page {err.statusText}
    </div>
  </div>;
}

export default Error;
