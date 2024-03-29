import { useState } from "react"

export function TwitterFollowBans ({ children, userName = 'unknown', initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'zx-tw-followban-seguir is-following' 
    : 'zx-tw-followban-seguir'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="zx-tw-followban">
            <header className="zx-tw-followban-header">
                <img className="zx-tw-followban-avatar" 
                alt="avatar X" 
                src={`https://unavatar.io/${userName}`}/>
                <div className="zx-tw-followban-info">
                    <strong>{children}</strong>
                    <span className="zx-tw-followban-user">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}