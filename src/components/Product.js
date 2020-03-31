import React from 'react'
import { Link } from 'react-router-dom'
import slack from '../images/slack.png'
import twitch from '../images/twitch.png'
import paymo from '../images/paymo.png'
import not from '../images/not.png'

const Product = ({ match }) => {
    let img = paymo;
    switch (match.params.product) {
        case 'slack':
            img = slack
            break
        case 'twitch':
            img = twitch
            break
        case 'paymo':
            img = paymo
            break
        default:
            img = not
            break;
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm">
                        <img className="image-container" src={img} alt="Slack" />
                        
                        <h4 className="text-center p-2">{ match.params.product } {img === not ? 'not found' : ''}</h4>
                        
                        <div className="card-body">
                            <Link to="/" className="btn btn-sm btn-block btn-outline-secondary my-link">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product