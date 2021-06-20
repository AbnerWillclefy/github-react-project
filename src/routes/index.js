import { Switch } from "react-router-dom";
import Profile from "../pages/Profile";
import Repos from "../pages/Repos";
import SignIn from "../pages/SignIn";
import Followers from "../pages/Followers";
import Follows from "../pages/Follows";

import CustomRoute from './routes'
import { useContext } from "react";
import { UserContext } from "../context/user";

export default function Routes() {
    const { signed } = useContext(UserContext);

    return (
        <Switch>
            <CustomRoute path ='/user' component={Profile} exact isPrivate signed={signed}/>
            <CustomRoute path ='/repositories' component={Repos} exact isPrivate signed={signed}/>
            <CustomRoute path ='/followers' component={Followers} exact isPrivate signed={signed}/>
            <CustomRoute path ='/following' component={Follows} exact isPrivate signed={signed}/>
            <CustomRoute path='/' component={SignIn} exact/>
        </Switch>
    )
}