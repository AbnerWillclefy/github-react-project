import { useContext } from "react"
import { UserContext } from "../../context/user"

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

    const { user, loading} = useContext(UserContext);

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
            <Styles.Container>
                <Styles.Avatar src={user.avatar} />
                <Styles.Top>
                    <span>{`#${user.login}`}</span>
                    <div>
                        <span onClick={() => history.push('/')}>Sair</span>
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
                            <div>{user.followers}</div>
                            <span>Seguidores</span>
                        </Styles.Cards>
                        <Styles.Cards>
                            <div>{user.following}</div>
                            <span>Seguindo</span>
                        </Styles.Cards>
                        <Styles.Cards>
                            <div>{user.repos}</div>
                            <span>Repos</span>
                        </Styles.Cards>
                    </Styles.Numbers>
                </Styles.Bottom>

            </Styles.Container>
        )
    }
}