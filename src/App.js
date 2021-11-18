import { useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Component1 from "./Components/Component1/Component1";
import Component2 from "./Components/Component2/Component2";

const Routing = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/component1");
  });

  return (
    <Switch>
      <Route exact path="/component1">
        <Component1 />
      </Route>
      <Route exact path="/component2">
        <Component2 />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
