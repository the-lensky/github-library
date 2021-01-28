/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react'
import './main.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getRepos} from '../../actions/repos'
import Repo from '../repo/Repo'

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)

    useEffect(() => {
        dispatch(getRepos())
            , []
    })
console.log(repos)
    return (
        <div>
            {repos.map((repo) => {
                    return <Repo repo={repo}/>
                }
            )}
        </div>
    )
}

export default Main
