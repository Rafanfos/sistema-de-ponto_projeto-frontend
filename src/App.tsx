import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"
import { AuthProvider } from "./context/AuthContext";
import RoutesMain from "./routes";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
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
