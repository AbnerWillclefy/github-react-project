import * as Styles from './style'

const CompFollowing = ({ src, login }) => {
    return(
        <Styles.CompFollowing>
            <Styles.Yellow>{}</Styles.Yellow>
            <Styles.Avatar src={src}/>
            <Styles.Name>{`#${login}`}</Styles.Name>
        </Styles.CompFollowing>
    )
}

export default CompFollowing;