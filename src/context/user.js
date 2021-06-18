import { createContext, useState } from 'react';
import api from '../services/api'

const UserContext = createContext();

function UserProvider({ children }) {
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    
    async function getUser() {
        try {
            setLoading(true);
            const { data } = await api.get(name);

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

    return (
        <UserContext.Provider value={{name, setName, getUser, user, loading}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };