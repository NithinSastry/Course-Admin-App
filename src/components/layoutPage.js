import React, { PropTypes } from 'react';
import Header from './common/header'

class LayoutPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>

        );
    }
}

LayoutPage.propTypes = {
    children: PropTypes.object.isRequired
};

export default LayoutPage;