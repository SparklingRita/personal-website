import './CV.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ProfilePic } from '../components/Hero'

function CVContacts() {
    return (
        <div className='cv-contacts-container'>
            <a href="https://ritacmendes.com" target="_blank">
                <div>
                    <FontAwesomeIcon icon={faGlobe} />
                    <span>ritacmendes.com</span>   
                </div>
            </a>

            <a href="mailto:me@ritacmendes.com" target="_blank">
                <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>me@ritacmendes.com</span>   
                </div>
            </a>
            
            <a href="https://github.com/SparklingRita" target="_blank">
                <div>
                    <FontAwesomeIcon icon={faGithub} />
                    <span>@SparklingRita</span>   
                </div>
            </a>

            <a href="https://LinkedIn.com/" target="_blank">
                <div>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>@LinkedIn</span>   
                </div>
            </a>
        </div>
    );
}

function Level({level}) {
    const maxLevel=5;
    const dots = [];

    for (let i=0; i < maxLevel; i++) {
        const color = i < level ? 'red' : 'white';
        dots.push(
            <div 
            key={i}
            style={{
                backgroundColor: color,
                height: '10px',
                width: '10px',
                borderRadius: '50%',
                     
                }}
            />
        )
    }
    return <div style={{ display: 'flex', gap: '5px' }}>{dots}</div>;                
}

function Skills() {
    return (
    <div className='skills-container'>
        <ul>
            <i>Programming</i>
            <li>Python <Level level={5}/></li>
            <li>Excel <Level level={5}/></li>
            <li>HTML/CSS <Level level={4}/></li>
            <li>Matlab <Level level={4}/></li>
            <li>Arduino <Level level={4}/></li>
            <li>React <Level level={4}/></li>
            <li>C <Level level={3}/></li>
            <i>Other</i>
            <li>Git <Level level={4}/></li>
            <li>Windows <Level level={5}/></li>
            <li>Linux <Level level={4}/></li>
        </ul>
    </div>
    )
}

function Languages() {
    return(
        <div className='languages-container'>
            <ul>
                <li>Portuguese</li>
                <li>English</li>
            </ul>
        </div>
    )
}

function AboutMe(){
    return (
        <div>
            Master in Electrical and Computer Engineering at Instituto Superior Técnico, specializing in Control, Robotics, and AI.
            My main professional interest lies in Machine Learning and Web Development, and I'm eager to continue learning and growing in these fields.
            Beyond engineering, I am a hybrid athlete and have a strong passion for the arts, including traditional drawing, playing guitar and also video editing, with extensive experience in Adobe Photoshop, Lightroom, Premiere Pro, and DaVinci Resolve.
        </div>
    )
}

function Extra() {
    return (
        <div className='extra-container'>
            <ul>
                <li>Advent of Code Participant</li>
                <li>Member of HackerSchool student group at IST</li>
                <li>Mentor at IST Erasmus Mentoring Programme</li>
                <li>Many small coding projects</li>
            </ul>
        </div>
    )
}

function Entry( {date, location, title, description} ){
    return(
        <div className='entry-item'>
            <h2>
                {title}  
            </h2>
            <div>
                <FontAwesomeIcon icon={faCalendar}/>
                {date}  
            </div>
            <div>
                <FontAwesomeIcon icon={faLocationDot}/>
                {location}  
            </div>
            <p>
                {description}
            </p>
        </div>    
    )

}

export default function CV() {
  return (
    <>
    <div>
        <button onClick={downloadPDF()}>PDF</button>
    </div>
    <div className='container'>
        <div className='left'>
            <ProfilePic className={'profile-pic-cv'}/>
            <div>
                Rita Mendes
            </div>
            <div className='cv-contacts-wrapper'>
                <h2>Contacts</h2>
                <CVContacts/>
            </div>
            <div className='skills-wrapper'>
                <h2>Skills</h2>
                <Skills/>
            </div>
            <div className='languages-wrapper'>
                <h2>Languages</h2>
                <Languages/>
            </div>
                     
            <footer>Last updated in November 2025.</footer>
        </div>
        <div className='right'>
            <div className='about-me'>
                <h1>About Me</h1>
                <AboutMe/>
            </div>
            <div className='education-wrapper'>
                <h1>Education</h1>
                <Entry
                    date="2020-2023"
                    location="Instituto Superior Técnico, Lisbon, Portugal"
                    title="Bachelor's in Electrical and Computer Engineering"
                    description="Final Average: 14.21 Focused on signal processing, robotics, and embedded systems."
                />
                <Entry
                    date="2024-2025, 1st semester"
                    location="KTH Royal Institute of Technology, Stockholm, Sweden"
                    title="Erasmus Programme"
                    description="Focused on Robotics and Machine Learning."
                />
                <Entry
                    date="2023-2025 (expected)"
                    location="Instituto Superior Técnico, Lisbon, Portugal"
                    title="Master's in Control, Robotics and Artificial Intelligence"
                    description="Minor in Computer Science"
                />
            </div>
            <div className='experience-wrapper'>
                <h1>Experience</h1>
                <Entry
                    date="2020-Present"
                    location="Livraria e Papelaria Espaço"
                    title="Sales and Operations Assistant"
                    description="Managed customer orders, inventory tracking, and sales records using Excel and internal systems. Developed organizational skills in a retail enviroment, providing customer service and ensuring smooth day-to-day operations."
                />
            </div>
            <div className='extra-wrapper'>
                <h1>Extra Curriculars</h1>
                <Extra/>
            </div>
        </div>
        
    </div>
    </>
  );
}
