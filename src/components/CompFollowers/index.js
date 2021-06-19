import * as Styles from './style'

const CompFollowers = ({ src, login }) => {
    return(
        <Styles.CompFollowers>
            <Styles.Yellow>{}</Styles.Yellow>
            <Styles.Avatar src={src}/>
            <Styles.Name>{`#${login}`}</Styles.Name>
        </Styles.CompFollowers>
    )
}

export default CompFollowers;