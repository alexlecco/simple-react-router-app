import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center p-5">
                <div className="col-lg-4 col-md-4 col-sm-8">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h3 className="card-title text-center">Login</h3>
                            <form>
                                <fieldset>
                                    <div className="form-group">
                                    <label> Email </label>
                                    <input
                                        type="email"
                                        className="form-control form-control-sm"
                                    />
                                    </div>
                                    <div className="form-group">
                                    <label> Password </label>
                                    <input
                                        type="password"
                                        className="form-control form-control-sm"
                                    />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-sm btn-block">
                                        Submit
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                        <Link to="/" className="btn btn-sm btn-block btn-outline-secondary my-link">Volver al home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login