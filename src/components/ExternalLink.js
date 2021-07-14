import React from 'react';
import openExternalLink from '../images/externalLink.svg';
import _ from 'lodash';
import './ExternalLink.css';

const ExternalLink = (props) => {
    return (
        <div className='externalLinkContainer'>
            <a href={_.get(props, 'link')} target='_blank' rel='noopener noreferrer'
            >{_.get(props, 'text')}
                <span className='externalLinkImageContainer'>
                    <img
                        src={openExternalLink}
                        alt='External link graphic'/>
                </span>
            </a>
        </div>
    );
};

export default ExternalLink;