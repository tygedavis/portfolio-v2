import React from 'react';
import './Credits.css';
import ExternalLink from '../components/ExternalLink';
import _ from 'lodash';

const Credits = () => {
    const linkValues = [
        {
            text: 'Menu icon by Icons8',
            link: 'https://icons8.com/icon/82749/menu'
        },
        {
            text: 'External Link icon by Icons8',
            link: 'https://icons8.com/icon/88586/external-link'
        },
        {
            text: 'Bootstrap Icons',
            link: 'https://icons.getbootstrap.com/'
        }
    ];

    return (
        <div className='creditsContainer'>
            <div className='creditsMain'>
                <h1>A Special Thanks to:</h1>
                {_.map(linkValues, (value, index) => {
                    return (<ExternalLink
                        text={value.text}
                        link={value.link}
                    />)
                })}
                <p>This page would not be possible without you!</p>
            </div>
        </div>
    );
};

export default Credits;