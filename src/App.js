import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, City } from "./pages/exports";

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:cityName" component={City} />
      </Switch>
    </Router>
  </>
);

export default App;
