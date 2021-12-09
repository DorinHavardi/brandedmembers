import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataContextProvider from "./DataContext";
import Homepage from "./components/Homepage";
import Store from "./components/Store";
import Header from "./components/Header";
import Admin from "./components/Admin";
import Members from "./components/Members";

function App() {
  // const {counterCartItems} = useContext(DataContext);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <DataContextProvider>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Store" component={Store} />
            <Route exact path="/Admin" component={Admin} />
            <Route exact path="/Members" component={Members} />
          </DataContextProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
