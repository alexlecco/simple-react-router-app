import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const status = this.props.isAuth ? 'autenticado' : 'no autenticado';

        return(
            <div className="header">
                <p>Header</p>
                <p className="header-status" onClick={() => this.props.changeAuth(!this.props.isAuth)}>{ status }</p>
            </div>
        )
    }
}