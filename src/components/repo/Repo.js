import React from 'react'
import './repo.scss'

const Repo = (props) => {
    const repo = props.repo
    return (
        <div className='repo'>
            <div className="repo-header">
                <div className="repo-header-name">{repo.name}</div>
                <div className="repo-header-stars">{repo.stargazers.count}</div>
            </div>
            <div className="repo-last-commit">{repo.update_at}</div>
            <a href={repo.html_url} className='repo-link'>Ссылка на репотзиторий</a>
        </div>
    )
}

export default Repo
