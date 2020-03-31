import React from 'react'
import { Link } from 'react-router-dom'

const Collection = () => {
    return (
        <div className="container">
            <div>Collection</div>
            <Link to="/products/slack" className="btn btn-sm btn-block btn-outline-secondary my-link">Slack</Link>
            <Link to="/products/twitch" className="btn btn-sm btn-block btn-outline-secondary my-link">Twitch</Link>
            <Link to="/products/paymo" className="btn btn-sm btn-block btn-outline-secondary my-link">Paymo</Link>
        </div>
    )
}

export default Collection