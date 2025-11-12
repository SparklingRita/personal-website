import "./CV.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faLocationDot,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

import { PDFDownloadLink } from "@react-pdf/renderer";
import CVDocument from "./CVDocument";
import { cvData } from "./cvData";
import { href } from "react-router-dom";

const ProfilePic = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <img src="profile-1.3.10.jpg" className="profile-pic-cv" />
    </div>
  );
};

function CVContacts() {
  return (
    <div className="cv-contacts-container">
      <a
        href={cvData.contacts.websiteLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <FontAwesomeIcon
            style={{ color: "var(--cv-accent)" }}
            icon={faGlobe}
          />
          <span>{cvData.contacts.website}</span>
        </div>
      </a>

      <a
        href={cvData.contacts.emailLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <FontAwesomeIcon
            style={{ color: "var(--cv-accent)" }}
            icon={faEnvelope}
          />
          <span>{cvData.contacts.email}</span>
        </div>
      </a>

      <a
        href={cvData.contacts.githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <FontAwesomeIcon
            style={{ color: "var(--cv-accent)" }}
            icon={faGithub}
          />
          <span>{cvData.contacts.github}</span>
        </div>
      </a>

      <a
        href={cvData.contacts.linkedinLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <FontAwesomeIcon
            style={{ color: "var(--cv-accent)" }}
            icon={faLinkedin}
          />
          <span>{cvData.contacts.linkedin}</span>
        </div>
      </a>
    </div>
  );
}

function Level({ level }) {
  const maxLevel = 5;
  const dots = [];

  for (let i = 0; i < maxLevel; i++) {
    const color = i < level ? "var(--cv-accent)" : "var(--cv-secondary)";
    dots.push(
      <div
        key={i}
        style={{
          backgroundColor: color,
          height: "10px",
          width: "10px",
          borderRadius: "50%",
        }}
      />
    );
  }
  return <div style={{ display: "flex", gap: "5px" }}>{dots}</div>;
}

function Skills() {
  const { skills } = cvData;
  return (
    <div className="cv-skills-container">
      <ul>
        <li style={{ color: "var(--cv-secondary)", fontWeight: "100" }}>
          Programming
        </li>
        {skills.programming.map((s, i) => (
          <li key={`prog-${i}`}>
            {s.name} <Level level={s.level} />
          </li>
        ))}

        <li
          style={{
            marginTop: "15px",
            color: "var(--cv-secondary)",
            fontWeight: "100",
          }}
        >
          Other
        </li>
        {skills.other.map((s, i) => (
          <li key={`other-${i}`}>
            {s.name} <Level level={s.level} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Languages() {
  const { languages } = cvData;
  return (
    <ul>
      {languages.map((lang, i) => (
        <li key={i}>
          <span>{lang.lang}</span>
          <span>{lang.level}</span>
        </li>
      ))}
    </ul>
  );
}

function AboutMe() {
  return (
    <div
      style={{
        textAlign: "justify",
        margin: "10px 20px",
        color: "var(----cv-secondary)",
      }}
    >
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {cvData.aboutMe.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

function Extra() {
  return (
    <div className="cv-extra-container">
      <ul>
        {cvData.extra.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

function Entry({ date, location, title, description, bullets = true }) {
  return (
    <div className="cv-entry-item">
      <h2>{title}</h2>
      <div>
        <FontAwesomeIcon
          style={{ color: "var(--cv-accent)" }}
          icon={faCalendar}
        />
        <span style={{ color: "var(--cv-main)" }}>{date}</span>
      </div>
      <div>
        <FontAwesomeIcon
          style={{ color: "var(--cv-accent)" }}
          icon={faLocationDot}
        />
        <span style={{ color: "var(--cv-main)" }}>{location}</span>
      </div>
      <div style={{ marginTop: "5px" }}>
        <ul
          style={{
            paddingLeft: "20px",
            margin: 0,
            listStyleType: bullets ? "disc" : "none",
          }}
        >
          {description.map((desc, j) =>
            desc.link ? (
              <li key={j}>
                <a href={desc.link} target="_blank" rel="noopener noreferrer">
                  {desc.text}
                </a>
              </li>
            ) : (
              <li key={j}>{desc.text}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default function CV() {
  return (
    <>
      <div className="full-container">
        <div className="cv-top-buttons">
          <>
            <PDFDownloadLink
              document={<CVDocument />}
              fileName="RitaMendesCV.pdf"
            >
              {
                <div>
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Download PDF</span>
                </div>
              }
            </PDFDownloadLink>
          </>
          <a
            href="https://github.com/SparklingRita/personal-website/tree/main/src/pages"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>Source Code</span>
            </div>
          </a>
        </div>

        <div className="cv-container">
          <div className="cv-left">
            <ProfilePic />
            <div>
              <h2
                style={{
                  justifyContent: "center",
                  marginBottom: "0px",
                  marginTop: 0,
                  paddingTop: 0,
                }}
              >
                {cvData.name}
              </h2>
              <div
                style={{
                  gap: "3px",
                  display: "inline-block",
                  marginBottom: "10px",
                }}
              >
                <FontAwesomeIcon
                  style={{ color: "var(--cv-accent)" }}
                  icon={faLocationDot}
                />
                {cvData.location.city}, {cvData.location.country}
              </div>
            </div>
            <div className="cv-contacts-wrapper">
              <h2>Contacts</h2>
              <CVContacts />
            </div>
            <div className="cv-skills-wrapper">
              <h2>Skills</h2>
              <Skills />
            </div>
            <div className="cv-languages-wrapper">
              <h2>Languages</h2>
              <Languages />
            </div>

            <div className="footer">
              Last updated in {cvData.lastUpdated.month}{" "}
              {cvData.lastUpdated.year}.
            </div>
          </div>
          <div className="cv-right">
            <div className="cv-about-me">
              <h1>About Me</h1>
              <AboutMe />
            </div>
            <div className="cv-education-wrapper">
              <h1>Education</h1>
              {cvData.education.map((e, i) => (
                <div key={i}>
                  <Entry
                    date={e.date}
                    location={e.location}
                    title={e.title}
                    description={e.description}
                  />
                </div>
              ))}
            </div>
            <div className="cv-experience-wrapper">
              <h1>Experience</h1>
              {cvData.experience.map((e, i) => (
                <div key={i} style={{ listStyle: "none" }}>
                  <Entry
                    date={e.date}
                    location={e.location}
                    title={e.title}
                    description={e.description}
                    bullets={false}
                  />
                </div>
              ))}
            </div>
            <div className="cv-extra-wrapper">
              <h1>Extra</h1>
              <Extra />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
