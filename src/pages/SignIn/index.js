import * as Styles from './styles'

export default function SignIn() {
    return (
        <Styles.Page>
            <Styles.Logo src='assets/github.svg' alt='Github Logo'/>  
            <Styles.Input type='text' placeholder='Usuário'/>            
            <Styles.Button>ENTRAR</Styles.Button>
        </Styles.Page>
    )
}