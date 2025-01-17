import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<Error />}>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
