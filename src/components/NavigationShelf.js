import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationShelf.css';
import { connect } from 'react-redux';
import _ from 'lodash';
import store from '../redux/store';

const NavigationShelf = (props) => {
    const shouldShowOnMobile = window.innerWidth < 1280;

    function handleToggleShelf() {
        store.dispatch({ type: 'navigation/toggleNavigationShelfMobile', payload: !_.get(props, 'navigationMobileDisplay') });
    }

    return (
        props.navigationMobileDisplay || !shouldShowOnMobile ?
            (<div id="header-container">
            <p
                className="close-button"
                style={{ display: shouldShowOnMobile ? null : 'none', cursor: 'pointer' }}
                onClick={handleToggleShelf}
            >X</p>
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/projects" className="link">My Work</Link>
            <Link to="/contacts" className="link">Contact</Link>
            <Link to="/credits" className="link">Credits</Link>
        </div>)
            :
            (<div id="navigation-open-container" onClick={handleToggleShelf}>
                <img className="navigation-open-icon" src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/>
            </div>)
    );
};

//Todo: Credit for the Hamburger icon creator
//<a href="https://icons8.com/icon/82749/menu">Menu icon by Icons8</a>

function mapStateToProps(state) {
    return {
        navigationMobileDisplay: _.get(state, 'cardDisplays.shouldShowNavigationMobileDisplay')
    };
}

export default connect(mapStateToProps)(NavigationShelf);