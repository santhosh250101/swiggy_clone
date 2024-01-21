import { useRouteError } from "react-router-dom";
function Error() {
  const err = useRouteError();
  return (
    <div>
      <div>Error page {err.statusText}</div>
    </div>
  );
}

export default Error;
