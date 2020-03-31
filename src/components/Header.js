import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const status = this.props.isAuth ? <p className="auth">autenticado</p> : <p className="no-auth">no autenticado</p>;

        return(
            <div className="header">
                <p>Header</p>
                <p className="header-status" onClick={() => this.props.changeAuth(!this.props.isAuth)}>
                    { status }
                </p>
            </div>
        )
    }
}