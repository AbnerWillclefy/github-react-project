import { useContext } from "react";
import { UserContext } from '../context/user'
import { Redirect, Route } from "react-router-dom";

export default function CustomRoute({ signed, isPrivate, ...rest}) {
    const { setSigned } = useContext(UserContext);

    if(isPrivate && !signed) {
        setSigned(false);
        return <Redirect to='/' />
    }

    return <Route {...rest} />
}