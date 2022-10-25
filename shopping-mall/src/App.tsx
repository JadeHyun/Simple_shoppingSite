import { useRoutes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { routes } from "./routes";
import { getClient } from "./queryClient";

const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      {elem}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
