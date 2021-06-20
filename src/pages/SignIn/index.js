import { useContext, useState } from 'react'
import { UserContext } from '../../context/user'

import history from '../../services/history'

import * as Styles from './styles'

export default function SignIn() {

    const { username, setUsername, getUser } = useContext(UserContext);
    const [written, setWritten] = useState(true);

    function handleGetUser() {
        if(username === '') {
            setWritten(false)
        } else {
            getUser(username);
            history.push('/user');
        }
    }

    return (
        <Styles.Page>
            <Styles.Logo src='assets/github.svg' alt='Github Logo'/>  
            <Styles.Login>
                <Styles.Input 
                        type='text' 
                        placeholder='Usuário' 
                        value={username} 
                        onChange={(event) => {setUsername(event.target.value); setWritten(true)}}/> 

                <Styles.Span written={written}>Campo obrigatório</Styles.Span>            
            </Styles.Login>
            <Styles.Button onClick={() => handleGetUser()}>ENTRAR</Styles.Button>
        </Styles.Page>
    )
}