import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

const Intro = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{
            showCursor: true,
            //backDelay:1500,
            backDelay:500,
            backSpeed: 60,
            strings: ["Developer", "Microsoft Learn Student Ambassador", "Google Developer Student Club Lead"],
        });
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/william-monroy.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>William Monroy</h1>
                    <h3>&gt; <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
