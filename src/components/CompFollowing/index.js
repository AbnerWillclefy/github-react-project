import { useContext } from 'react';
import { UserContext } from '../../context/user'

import history from '../../services/history'

import * as Styles from './style'

const CompFollowing = ({ src, login }) => {
    const { getUser, setUsername } = useContext(UserContext);
    
    function changeUser(value) {
        getUser(value);
        setUsername(value);
        history.push('/user');
    }

    return(
        <Styles.CompFollowing>
            <Styles.Yellow>{}</Styles.Yellow>
            <Styles.Avatar src={src}/>
            <Styles.Name>{`#${login}`}</Styles.Name>
            <Styles.Arrow onClick={() => changeUser(login)}><img src='assets/arrow.png' alt='arrow'/></Styles.Arrow>
        </Styles.CompFollowing>
    )
}

export default CompFollowing;