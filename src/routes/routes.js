import { Switch, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Repos from "../pages/Repos";
import SignIn from "../pages/SignIn";
import Followers from "../pages/Followers";
import Follows from "../pages/Follows";

export default function Routes() {
    return (
        <Switch>
            <Route path ='/user' component={Profile} exact/>
            <Route path ='/repositories' component={Repos} exact/>
            <Route path ='/followers' component={Followers} exact/>
            <Route path ='/following' component={Follows} exact/>
            <Route path='/' component={SignIn} exact/>
        </Switch>
    )
}