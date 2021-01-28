const SET_REPOS = 'SET_REPOS'
const SET_IS_FETHCING = 'SET_IS_FETCHING'


const defaultState = {
    items: [],
    isFetching: true,

}

export default function (state = defaultState, action) {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items:action.payload.items
            }

        default:
            return state
    }
}

export const setRepos = (repos) => ({type:SET_REPOS,payload:repos})
export const setIsFethcing = (bool) => ({type:SET_IS_FETHCING,payload:bool})
