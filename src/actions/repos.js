import axios from 'axios'
import {setIsFethcing, setRepos} from '../reducers/reposReducer'

export const getRepos = (searchQuery = 'stars:%3E1') => {
    return async (dispatch) => {
        if (searchQuery == 0) {
            searchQuery = 'stars:%3E1'
        }
        dispatch(setIsFethcing(true))
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
        dispatch(setRepos(response.data))
    }
}




