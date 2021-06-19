import { createContext, useState } from 'react';
import api from '../services/api'

const UserContext = createContext();

function UserProvider({ children }) {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [reposData, setReposData] = useState({});
    const [gotRepos, setGotRepos] = useState(false);
    const [followersData, setFollowersData] = useState({});
    const [gotFollowers, setGotFollowers] = useState(false)

    function gotoRepos() {
        if(gotRepos === false) {
            getRepos();
            setGotRepos(true);
        }
    }

    function gotoFollowers() {
        if(gotFollowers === false) {
            getFollowers();
            setGotFollowers(true);
        }
    }
    
    async function getUser() {
        try {
            setLoading(true);
            setGotRepos(false);
            const { data } = await api.get(username);

            setUser({name: data.name, 
                     login: data.login,
                     email: data.email,
                     location: data.location,
                     company: data.company,
                     bio: data.bio,
                     avatar: data.avatar_url,
                     followers_url: data.followers_url,
                     following_url: data.following_url,
                     organizations_url: data.following_url,
                     starred_url: data.starred_url,
                     repos: data.public_repos,
                     gist: data.public_gists,
                     followers: data.followers,
                     following: data.following})
            setLoading(false);
        } catch(err) {
            console.log(err)}
        }

    async function getRepos() {
        setLoading(true)
        setGotRepos(false);
        try {
            const { data } = await api.get(`${username}/repos`)

            setReposData(data);

        } catch(err) {
            console.log(err)
        }
        setLoading(false)
    }

    async function getFollowers() {
        setLoading(true)
        setGotFollowers(false);
        try {
            const { data } = await api.get(`${username}/followers`)

            setFollowersData(data);

        } catch(err) {
            console.log(err)
        }
        setLoading(false)
    }

    return (
        <UserContext.Provider value={{username, 
                                      setUsername, 
                                      getUser, 
                                      user, 
                                      loading, 
                                      setUser, 
                                      setLoading, 
                                      getRepos, 
                                      reposData,
                                      gotoRepos,
                                      followersData,
                                      gotoFollowers, }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };