import HomePage from "./Pages/HomePage";

import NewComment from "./Pages/NewComment/NewComment";
import NotFound from "./Pages/NotFound";
import FullComment from "./Pages/FullComment/FullComment";

const routes = [
  { path: "/comment/:id", component: FullComment },
  { path: "/new-comment", component: NewComment },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;
