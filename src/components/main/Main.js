/* eslint-disable no-unused-expressions */
import React, {useEffect, useState} from 'react'
import './main.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getRepos} from '../../actions/repos'
import Repo from '../repo/Repo'

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFethcing)
    const [searchValue, setSearchValue] = useState('')


    useEffect(() => {
        dispatch(getRepos())
            , []
    })


    const searchHandler = () => {
        dispatch(getRepos(searchValue))
    }

    return (
        <div>
            <div className='search'>
                <input
                    type='text'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className='search-input'
                />
                <button
                    onClick={() => searchHandler()}
                    className='search-btn'>Search
                </button>
            </div>
            {isFetching === false
                ?
                repos.map((repo) => {
                    return <Repo repo={repo}/>
                })
                :
                <div className='fethcing'>
                </div>
            }
        </div>
    )
}

export default Main
