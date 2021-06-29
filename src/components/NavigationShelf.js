import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationShelf.css';
import { connect } from 'react-redux';
import _ from 'lodash';
import store from '../redux/store';

const NavigationShelf = (props) => {
    const shouldShowOnMobile = window.innerWidth < 1280 ? null : "none";
    const styles = {
        headerContainerStyle: {
            top: props.navigationMobileDisplay ? -500 : 0
        }
    };

    function handleCloseShelf() {
        store.dispatch({ type: 'navigation/toggleNavigationShelfMobile', payload: !_.get(props, 'navigationMobileDisplay') });
    }

    return (
        <div id="header-container" style={styles.headerContainerStyle}>
            <p
                className="close-button"
                style={{ display: shouldShowOnMobile, cursor: 'pointer' }}
                onClick={handleCloseShelf}
            >X</p>
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/projects" className="link">My Work</Link>
            <Link to="/contacts" className="link">Contact</Link>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        navigationMobileDisplay: _.get(state, 'cardDisplays.shouldShowNavigationMobileDisplay')
    };
}

export default connect(mapStateToProps)(NavigationShelf);