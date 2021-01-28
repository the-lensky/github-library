import axios from 'axios'
import {setRepos} from '../reducers/reposReducer'

export const getRepos = (searchQuery="github-library") => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.github.com/search/repositories?${searchQuery}&sort=stars`)
        dispatch(setRepos(response.data))
    }
}