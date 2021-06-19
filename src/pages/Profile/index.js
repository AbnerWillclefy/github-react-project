import { useContext } from "react"
import { UserContext } from "../../context/user"

import Menu from '../../components/Menu'

import Lottie from 'react-lottie';
import animationData from '../../lotties/animation.json';

import * as Styles from './styles'

import history from '../../services/history'

export default function Profile() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    const { user, loading, setUsername, setUser } = useContext(UserContext);

    function left() { 
        setUser({});
        setUsername('');
        history.push('/');
    }

    if(loading) {
        return (
            <Styles.Loading>
                <Lottie 
                options={defaultOptions}
                height={400}
                width={400}/>
            </Styles.Loading>
        )
    } else {
        return(
            <>
            <Styles.Container>
                <Styles.Avatar src={user.avatar} />
                <Styles.Top>
                    <span>{`#${user.login}`}</span>
                    <div>
                        <Styles.Left onClick={() => left()}>Sair</Styles.Left>
                    </div>
                </Styles.Top>

                <Styles.Bottom>
                    <Styles.Info>
                        <Styles.Yellow></Styles.Yellow>
                        <Styles.PersonalInfo>
                            <Styles.Name>{user.name}</Styles.Name>
                            <span>{user.email}</span>
                            <span>{user.location}</span>
                        </Styles.PersonalInfo>
                    </Styles.Info>

                    <Styles.Numbers>
                        <Styles.Cards>
                            <Styles.NumberInfo>{user.followers}</Styles.NumberInfo>
                            <span>Seguidores</span>
                        </Styles.Cards>
                        <Styles.Cards>
                            <Styles.NumberInfo>{user.following}</Styles.NumberInfo>
                            <span>Seguindo</span>
                        </Styles.Cards>
                        <Styles.Cards>
                            <Styles.NumberInfo>{user.repos}</Styles.NumberInfo>
                            <span>Repos</span>
                        </Styles.Cards>
                    </Styles.Numbers>

                    <Styles.BioName>
                        <Styles.Yellow>{}</Styles.Yellow>
                        <Styles.Name>BIO</Styles.Name>
                    </Styles.BioName>
                    <Styles.Bio>{user.bio}</Styles.Bio>
                </Styles.Bottom>
            </Styles.Container>
            <Menu />
            </>
        )
    }
}