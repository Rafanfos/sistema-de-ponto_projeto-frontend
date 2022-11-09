import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import RoutesMain from "./routes";

const App = () => {
  return (
    <div className="App">
      <RoutesMain />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
