import React from 'react';
import './Home.css';
import HomeSocialLinks from '../components/HomeSocialLinks';

//Images

const Home = () => {
    return (
        <div className='homeContainer' /*style={ { backgroundImage: 'url(../images/home_backdrop.png)'} }*/>
            <div className='homeName'>
                <h1>Tyge Davis</h1>
            </div>
            <div className='homeMain'>
                <div className='homeImage'>
                    {/*<img className='headshot' src={headshot} alt='Tyge Davis, the developer' />*/}
                </div>
                <div className='socialLinks'>
                    <HomeSocialLinks />
                </div>
            </div>
        </div>
    );
};

export default Home;