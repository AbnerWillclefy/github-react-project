import * as Styles from './styles'
import history from '../../services/history'
import { UserContext } from '../../context/user';
import { useContext } from 'react';

export default function Menu() {
    const { gotoRepos, gotoFollowers, gotoFollows } = useContext(UserContext);
    

    return (
        <Styles.Menu>
            <Styles.Option onClick={() => {history.push('/user')}}>
                <img src='assets/home.png' alt='Home icon'/>
                <span>Inicio</span>
            </Styles.Option>
            <Styles.Option onClick={() => {history.push('/repositories'); gotoRepos()}}>
                <img src='assets/github-logo.png' alt='Github icon'/>
                <span>Repos</span>
            </Styles.Option>
            <Styles.Option onClick={() => {history.push('/followers'); gotoFollowers()}}>
                <img src='assets/users.png' alt='Followers'/>
                <span>Seguidores</span>
            </Styles.Option>
            <Styles.Option onClick={() => {history.push('/following'); gotoFollows()}}>
                <img src='assets/users.png' alt='Followings'/>
                <span>Seguindo</span>
            </Styles.Option>
        </Styles.Menu>
    )
}