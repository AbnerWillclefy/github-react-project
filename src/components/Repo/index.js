import * as Styles from './styles.js'

const Repo = ({ title, description, stars, isPrivate }) => {
    return (
    <Styles.Repo>
        <Styles.Name>
            <Styles.Yellow>{}</Styles.Yellow>
            <span>{title}</span>
        </Styles.Name>
        <Styles.Description>
            <span>{description}</span>
        </Styles.Description>
        <Styles.BottomInfo>
            <Styles.Starred>
                <img src='assets/star.png' alt='star icon'/>
                <span>{stars}</span>
            </Styles.Starred>
            <img src={isPrivate ? 'assets/lock-closed.png' : 'assets/lock-open.png'} alt='lock'/>
        </Styles.BottomInfo>
    </Styles.Repo>
    )
}

export default Repo;