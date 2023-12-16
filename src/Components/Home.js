import React, { useEffect } from 'react';
import Typed from 'typed.js';


function Home() {
    const TypedText = () => {
        useEffect(() => {
            // Options for Typed.js
            const options = {
                strings: ['&rArr; Front-End Developer', '&rArr; Back-End Develper Coming Soon', '&rArr; Full Stack Developer Coming Soon'],
                typeSpeed: 50,
                backSpeed: 40,
                loop: true,
            };

            // Target the element where Typed.js will be applied
            const targetElement = document.getElementById('typed-text');

            // Create a new instance of Typed.js
            const typed = new Typed(targetElement, options);

            // Clean up the Typed.js instance on component unmount
            return () => {
                typed.destroy();
            };
        }, []); // Empty dependency array ensures useEffect runs only once after initial render

        return <span id="typed-text"></span>;
    };
    return (
        <>
            <div className='intro-text'>
                <h1>Hi, I'm <span> Noman Ansari</span>.</h1>
            </div>
            <div>
                <TypedText />
            </div>
            <div className='Info-Details'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem unde blanditiis debitis iusto natus hic corporis, tenetur sunt distinctio ipsam? which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
            </div>
            <button type="button" className="btn1">Hire Me</button>
            <button type="button" className="btn2">Let's Talk</button>

            <div className='Icons'>
                <a href='https://www.facebook.com/profile.php?id=100018035178162' rel="noopener"><i className='bx bxl-facebook-circle'></i></a>
                <a href='https://twitter.com/i/flow/login?redirect_after_login=%2FNoman_Ansari07' rel="noopener"><i className='bx bxl-twitter' ></i></a>
                <a href='https://www.linkedin.com/in/noman-ansari-15237028a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' rel="noopener"><i className='bx bxl-linkedin-square' ></i></a>
            </div>
        </>
    )
}

export default Home
