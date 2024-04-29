
import React from 'react';

import Navbar from '../../components/Navbar/Navbar';

import './AboutPage.css';

const AboutUsPage = () => {
    return (
        <>
            <Navbar />
            <div className='ab_contain'>
                <div className='ab_wrp'>
                    <h2 className='ab_title'>
                        Our Mission
                    </h2>
                    <p className='ab_desc'>
                        We are driven by a singular mission - <i>to engage users in the art of debate.</i>
                        <br/>
                        <br/>
                        We believe in creating an environment that not only encourages discourse,
                        <br/>
                        but also fosters learning and critical thinking.
                        <br/>
                        <br/>
                        Debate is not just a conversation; it's an exploration of ideas, a journey towards understanding diverse perspectives, and a catalyst for intellectual growth. Our platform is designed to be a vibrant hub where users can delve into meaningful discussions, challenge assumptions, and broaden their perspectives.
                        <br/>
                        <br/>
                        We envision a community that embraces the power of dialogue to stimulate intellectual curiosity and nurture a culture of lifelong learning. By providing a space for open and respectful debate, we aim to empower individuals to think critically, communicate effectively, and contribute meaningfully to the world of ideas.
                        <br/>
                        <br/>
                        Join us on this exciting journey as we embark on a mission to cultivate a community where the art of debate becomes a catalyst for positive change.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutUsPage;