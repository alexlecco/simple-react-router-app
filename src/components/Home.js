import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return(
            <Fragment>
                <p>Home</p>
                <Link to="/collection" className="btn btn-sm btn-block btn-outline-secondary my-link">Collection</Link>
            </Fragment>
        )
    }
}