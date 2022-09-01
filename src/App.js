import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="colored"
        draggable
        pauseOnHover
      />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
