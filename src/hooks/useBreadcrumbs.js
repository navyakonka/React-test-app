import { useHistory } from "react-router-dom";

const useBreadcrumbs = () => {
  const history = useHistory();
  const path = history.location.pathname;

  const links = path.split("/");
  return links;
};

export default useBreadcrumbs;
