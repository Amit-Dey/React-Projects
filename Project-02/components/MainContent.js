export default function MainContent() {
    return (
        <div className="main">
            <div className="titels">
                <h3>Amit Dey</h3>
                <h5>Frontend Developer</h5>
                <a className="a-github" href="https://github.com/Amit-Dey" target="_blank">
                    <p>github.com/Amit-Dey</p>
                </a>
            </div>
            <div className="social">
                <a className="a-email" href="mailto: amitdey9020@gmail.com">
                    <div className="email">
                        <img className="email-icon" src="./images/email_icon.png"></img>
                        <h4>Email</h4>
                    </div>
                </a>
                <a className="a-linkedin" href="https://www.linkedin.com/in/amit-dey-49246819a/" target="_blank">
                    <div className="linkedin">
                        <img className="linkedin-icon" src="./images/linkedin_icon.png"></img>
                        <h4>LinkedIn</h4>
                    </div>
                </a>
            </div>
            <div className="about">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="interests">
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}