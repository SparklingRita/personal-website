import "./CV.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faLocationDot,
  faDownload,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import { PDFDownloadLink } from "@react-pdf/renderer";
import CVDocument from "./CVDocument";
import { cvData } from "./cvData";
import { href } from "react-router-dom";

const ProfilePic = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <img src="profile-CV.jpg" className="profile-pic-cv" />
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

function Interests() {
  const { interests } = cvData;
  return (
    <ul>
      {interests. map((interest,i) => (
        <li key={i}>
          <span>{interest.name}</span>
        </li>
      ))}
    </ul>
  )
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

function Entry({ date, location, link, title, subtitle, description, venue, pdf, bullets = true }) {
  return (
    <div className="cv-entry-item">
      <h2>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "inherit",
              textDecoration: "underline",
              textDecorationStyle: "dotted",
              textUnderlineOffset: "3px",
            }}
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h2>

      { subtitle && (
        <div>
          <span style={{ color: "var(--cv-main)" }}>{subtitle}</span>
        </div>
      )}

      {date && (
        <div>
          <FontAwesomeIcon
            style={{ color: "var(--cv-accent)" }}
            icon={faCalendar}
          />
          <span style={{ color: "var(--cv-main)" }}>{date}</span>
        </div>
      )}

      {location && (
        <div>
          <FontAwesomeIcon
            style={{ color: "var(--cv-accent)" }}
            icon={faLocationDot}
          />
          <span style={{ color: "var(--cv-main)" }}>{location}</span>
        </div>
      )}

      {pdf && (
        <a
          href={pdf}
          download
          className="paper-download"
        >
          <FontAwesomeIcon icon={faDownload} />
          Download PDF
        </a>
      )}

      {venue && (
        <div>
          <FontAwesomeIcon
            style={{ color: "var(--cv-accent)" }}
            icon={faFileCircleCheck}
          />
          <span style={{ color: "var(--cv-main)" }}>{venue}</span>
        </div>
      )}

      { description && (
        <div style={{ marginTop: "5px" }}>
          <ul
            style={{
              paddingLeft: "20px",
              margin: 0,
              listStyleType: bullets ? "disc" : "none",
            }}
          >
            {description.map((desc, j) => (
              <li key={j}>
                {desc.parts
                  ? desc.parts.map((part, k) =>
                      part.link ? (
                        <a
                          key={k}
                          href={part.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {part.text}
                        </a>
                      ) : (
                        part.text
                      )
                    )
                  : desc.text}
              </li>
            ))}
          </ul>
        </div>
      )}
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
            href="https://github.com/ritacmendes/personal-website"
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
            <div className="cv-languages-wrapper">
              <h2>Personal Interests</h2>
              <Interests />
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
            {/*
              <div className="cv-experience-wrapper">
                <h1>Conferences</h1>
                {cvData.conferences.map((e, i) => (
                  <div key={i} style={{ listStyle: "none" }}>
                    <Entry
                      date={e.date}
                      location={e.location}
                      link={e.link}
                      title={e.title}
                      description={e.description}
                      bullets={false}
                    />
                  </div>
                ))}
              </div>
            */}

            <div className="cv-experience-wrapper">
              <h1>Publications</h1>
              {cvData.papers.map((e, i) => (
                <div key={i} style={{ listStyle: "none" }}>
                  <Entry
                    date={e.date}
                    subtitle = {e.subtitle}
                    venue={e.venue}
                    pdf = {e.pdf}
                    location={e.location}
                    title={e.title}
                    bullets={false}
                  />
                </div>
              ))}
            </div>

            <div className="cv-experience-wrapper">
              <h1>Personal Projects</h1>
              {cvData.projects.map((e, i) => (
                <div key={i} style={{ listStyle: "none" }}>
                  <Entry
                    link = {e.link}
                    date={e.date}
                    venue={e.venue}
                    pdf = {e.pdf}
                    subtitle = {e.subtitle}
                    location={e.location}
                    title={e.title}
                    description={e.description}
                    bullets={false}
                  />
                </div>
              ))}
            </div>
            
            {/*
              <div>
                <h1>Extra</h1>
                <Extra />
              </div>
            */}
            <div style={{ marginBottom: "5%" }}></div>
          </div>
        </div>
        
        <div style={{ paddingTop: "20px", color: "var(--cv-secondary)", fontWeight: "100" }}>
          This webpage contains my Curriculum Vitae, built with JSX components and rendered as HTML. This approach makes it easy to maintain and scale as my experience and projects evolve. Feel free to download my CV as a PDF or explore the source code on GitHub.
        </div>

      </div>
    </>
  );
}
