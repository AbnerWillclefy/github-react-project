import { useContext } from 'react';
import { UserContext } from '../../context/user';

import Menu from '../../components/Menu'
import CompFollowers from '../../components/CompFollowers'

import * as Styles from './styles'

import Lottie from 'react-lottie';
import animationData from '../../lotties/animation.json';

export default function Followers() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    const { loading, followersData, user } = useContext(UserContext);

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
                    <Styles.Top>
                        <span>{`${user.followers} seguidores`}</span>
                    </Styles.Top>
                    {followersData.map((data, index) => {
                        return (
                            <CompFollowers 
                                src={data.avatar_url}
                                login={data.login}
                                key={index}/>
                        )
                    })}
                </Styles.Container>
                <Menu />
            </>
        )
    }
}