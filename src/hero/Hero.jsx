import './hero.scss';

const Hero = () => {
    return (
        <div className="hero">
            <div className="left">
                <h4>CS Student</h4>
                <h3>Hi there!</h3>
                <h2>I'm William Monroy</h2>
                <p className="text">Web Developer</p>
                <p className="text">Microsoft Learn Student Ambassador</p>
                <button>Contact me</button>
            </div>
            <div className="right">

                <svg viewBox="0 0 500 500" width="92%" id="blobSvg">
                    <path id="blob" d="M397,281.5Q360,313,364.5,385Q369,457,309.5,472.5Q250,488,207.5,442.5Q165,397,115,377Q65,357,53,303.5Q41,250,51.5,195.5Q62,141,112,119Q162,97,206,69.5Q250,42,298.5,62Q347,82,365,127.5Q383,173,408.5,211.5Q434,250,397,281.5Z" fill="#2F2C4B">
                    </path>
                    <svg viewBox="0 0 500 500" width="95%" id="blobSvg1">
                        <path id="blob" d="M397,281.5Q360,313,364.5,385Q369,457,309.5,472.5Q250,488,207.5,442.5Q165,397,115,377Q65,357,53,303.5Q41,250,51.5,195.5Q62,141,112,119Q162,97,206,69.5Q250,42,298.5,62Q347,82,365,127.5Q383,173,408.5,211.5Q434,250,397,281.5Z" fill="#423D5B">
                        </path>
                    </svg>
                </svg>
                <img src="assets/william-monroy.png" id="profile" alt="" srcset="" />
                <div className="bubble">
                    <img src="assets/firebase.png" id="firebase" alt="img" srcset="" />
                </div>
                <div className="bubble">
                    <img src="assets/react.png" id="react" alt="img" srcset="" />
                </div>
                <div className="bubble">
                    <img src="assets/js.png" id="js" alt="img" srcset="" />
                </div>
                <div className="card" id="card1">
                    <img src="assets/github.png" id="github" alt="img" srcset="" />
                    <div className="card-right">
                        <h3>GitHub</h3>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div className="card" id="card2">
                    <h2>10</h2>
                    <p>Completed projects</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
