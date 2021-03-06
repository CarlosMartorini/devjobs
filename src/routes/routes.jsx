import { Switch } from "react-router-dom";
import Route from "./route";
import { Home } from "../pages/Home";
import Search from "../pages/Search";
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/PageNotFound";
import UserLogin from "../pages/UserLogin";
import Register from "../pages/UserRegister";
import CompanyRegister from "../pages/CompanyRegister";
import Messages from "../pages/Messages";
import VisualizationResume from "../pages/ResumeVisualization";
import CompanyLogin from "../pages/CompanyLogin";
import Resume from "../pages/Resume";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={Search} />
      <Route path="/login" exact component={UserLogin} />
      <Route path="/register" exact component={Register} />
      <Route path="/companyRegister" exact component={CompanyRegister} />
      <Route path="/companyLogin" exact component={CompanyLogin} />
      <Route isPrivate={true} path="/messages" exact component={Messages} />
      <Route isPrivate={true} path="/resume" exact component={Resume} />
      <Route
        isOpen={true}
        path="/visualizationResume"
        exact
        component={VisualizationResume}
      />
      <Route isPrivate={true} path="/dashboard" exact component={Dashboard} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
