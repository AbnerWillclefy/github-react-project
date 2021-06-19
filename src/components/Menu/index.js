import * as Styles from './styles'
import history from '../../services/history'
import { UserContext } from '../../context/user';
import { useContext, useState } from 'react';

export default function Menu() {
    const { gotoRepos } = useContext(UserContext);
    

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
            <Styles.Option onClick={() => {history.push('/followers')}}>
                <img src='assets/users.png' alt='Followers'/>
                <span>Seguidores</span>
            </Styles.Option>
            <Styles.Option onClick={() => {history.push('/following')}}>
                <img src='assets/users.png' alt='Followings'/>
                <span>Seguindo</span>
            </Styles.Option>
        </Styles.Menu>
    )
}