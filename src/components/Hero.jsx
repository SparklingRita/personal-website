import profileImage from "../assets/profile.jpg"; 
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function ProfilePic({ className }) {
  return <img src={profileImage} className={className} />;
}


const Contacts = () => {
  return (
    <>
        <div className="contacts-wrapper">
            <a href="mailto:me@ritacmendes.com" target="_blank">
                <div className='contact-item'>
                    <div className="contact-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>    
                    <span className='contact-label'>me@ritacmendes.com</span>   
                </div>
            </a>
            
            <a href="https://github.com/SparklingRita" target="_blank">
                <div className='contact-item'>
                    <div className="contact-icon">
                        <FontAwesomeIcon icon={faGithub} />
                    </div>    
                    <span className='contact-label'>@SparklingRita</span>   
                </div>
            </a>

            <a href="https://LinkedIn.com/" target="_blank">
                <div className='contact-item'>
                    <div className="contact-icon">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>    
                    <span className='contact-label'>@LinkedIn</span>   
                </div>
            </a>
        </div>
    </>
  );
}



export default function Hero() { 
  return (
    <div className='page'>
        <div className='container'>
            <div className='container-text'>
                <p className='title'>
                    Olá :)<br />
                    I'm <span className="Rita">Rita,</span>           
                </p>
                <p className='text'>
                    Master in Electrical and Computer Engineering. Hybrid Athlete. Artist. <br />
                    Feel free to contact me!
                </p>
            </div>
            <div className='container-pic-contacts'>
                <ProfilePic className="profile-pic-hero" />
                <Contacts/>
            </div>
        </div>  
    </div>
  );
}