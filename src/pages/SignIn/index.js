import { useContext, useState } from 'react'
import { UserContext } from '../../context/user'
import * as Styles from './styles'

export default function SignIn() {

    const { name, setName, getUser } = useContext(UserContext);
    const [written, setWritten] = useState(true);

    function handleGetUser() {
        if(name === '') {
            setWritten(false)
        } else {
            getUser();
        }
    }

    return (
        <Styles.Page>
            <Styles.Logo src='assets/github.svg' alt='Github Logo'/>  
            <Styles.Login>
                <Styles.Input 
                        type='text' 
                        placeholder='Usuário' 
                        value={name} 
                        onChange={(event) => {setName(event.target.value); setWritten(true)}}/> 

                <Styles.Span written={written}>Campo obrigatório</Styles.Span>            
            </Styles.Login>
            <Styles.Button onClick={() => handleGetUser()}>ENTRAR</Styles.Button>
        </Styles.Page>
    )
}