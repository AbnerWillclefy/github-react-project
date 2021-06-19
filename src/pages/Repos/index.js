import { useContext } from "react";
import { UserContext } from "../../context/user";

import Lottie from 'react-lottie';
import animationData from '../../lotties/animation.json';

import Menu from '../../components/Menu'
import Repo from '../../components/Repo'

import * as Styles from './styles'

export default function Repos() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    const {loading, reposData } = useContext(UserContext);


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
                        <span>{`${reposData.length} repositórios`}</span>
                    </Styles.Top>
                    {reposData.map((data, index) => {
                        return (
                            <Repo 
                                title={data.name} 
                                description={data.description}
                                stars={data.stargazers_count} 
                                isPrivate={data.private} 
                                key={index}/>
                        )
                    })}
                </Styles.Container>
                <Menu />
            </>
        )
    }
}