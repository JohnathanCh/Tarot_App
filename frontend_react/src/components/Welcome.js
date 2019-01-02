import React from 'react';
import { Route } from 'react-router'
import Signup from '../login_signup/Signup';


export default class Welcome extends React.Component {

    render() {
        return (
            <div>

            <img src="http://media.beliefnet.com/~/media/photos-with-attribution/spiritual/tarotcardscreditShutterstockcom.jpg?as=1" className="bg"/>

            <Route path="/" component={Signup}/>
            
            </div>
        )
    }
}