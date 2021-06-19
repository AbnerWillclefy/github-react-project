import { useContext } from "react";
import { UserContext } from "../../context/user";

import Lottie from 'react-lottie';
import animationData from '../../lotties/animation.json';

import Menu from '../../components/Menu'

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
                    <Styles.Repo>
                    {reposData[1].name}
                    </Styles.Repo>
                </Styles.Container>
                <Menu />
            </>
        )
    }
}