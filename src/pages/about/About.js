import React from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Me from './Me'
import Company from './Company'
import makeFlat from '../../common/code-split'

const About = (props) => {
    makeFlat([1, [2, [3, [4]], 5]]).then( arr => console.log(arr))
    return (
        <>
            { props.location.pathname === '/about' &&
                <>
                    <div>About page</div>
                    <ul>
                        <li>
                            <Link to={`${props.match.url}/me`}>About Me</Link>
                        </li>
                        <li>
                            <Link to={`${props.match.url}/company`}>About Company</Link>
                        </li>
                    </ul>
                </>
            }
            <Route path={`${props.match.url}/me`} component={Me} />
            <Route path={`${props.match.url}/company`} component={Company} />
        </>
    );
};

export default About;