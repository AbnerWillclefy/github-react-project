import { Switch, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";

export default function Routes() {
    return (
        <Switch>
            <Route path ='/user' component={Profile} exact/>
            <Route path='/' component={SignIn} exact/>
        </Switch>
    )
}