import { useContext } from 'react';
import { UserContext } from '../../context/user';

import Menu from '../../components/Menu'
import CompFollowing from '../../components/CompFollowing'

import * as Styles from './styles'

import Lottie from 'react-lottie';
import animationData from '../../lotties/animation.json';

export default function Follows() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    const { loading, followsData } = useContext(UserContext);

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
                        <span>{`${followsData.length} seguindo`}</span>
                    </Styles.Top>
                    {followsData.map((data, index) => {
                        return (
                            <CompFollowing 
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