import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Administrator application</h1>
                <p>Using React, Redux to build this application.</p>
                <Link to="about" className="btn btnp-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;