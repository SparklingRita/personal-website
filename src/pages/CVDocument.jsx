import { Page, Text, View, Document, StyleSheet, Link, Image, Font } from '@react-pdf/renderer';
import { cvData } from './cvData';
import { faEnvelope, faGlobe, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FontAwesomeIcon from './FontAwesomeIcon';

const leftColor = '#585c71ff';
const rightColor = '#1F2232';
const titleColor = 'white';
const textColor = 'rgba(211, 211, 211, 0.84)';
const iconColor = 'aqua';
const imgSize = '130';

Font.register({
  family: 'Roboto',
  fonts: [
    { src: '../public/fonts/Roboto-Bold.ttf', fontWeight: 700 }, // Bold
    { src: '../public/fonts/Roboto-Regular.ttf', fontWeight: 400 }, // Bold
    { src: '../public/fonts/Roboto-Light.ttf', fontWeight: 100 }, // Thin
  ],
});


const styles = StyleSheet.create({
  page: { flexDirection: 'row', padding: 20, fontSize: 10, color:textColor, fontFamily:'Roboto', margin:0, padding:0},
  left: { width: '30%', height: '100%', padding: 10, backgroundColor: leftColor},
  right: { width: '70%', height: '100%', padding: 10, backgroundColor: rightColor},
  section: { marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 700, marginBottom: 2, color: titleColor},
  subtitle: { fontSize: 14, marginBottom: 2 , color: titleColor},
  subtitleBold: { fontSize: 14, marginBottom: 2, fontWeight: 700 , color: titleColor},
  entry: { marginBottom: 20, color: titleColor },
  contactEntry: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4 },
  educationEntry: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4,  fontWeight:100},
  icon: { height: 10, width: 10, color:iconColor},
  contacts: {textDecoration: 'none', color:titleColor},
  image: {width:imgSize, height:imgSize, borderRadius:imgSize/2, objectFit:'cover'},
  line: { height: 2, backgroundColor: textColor, flexGrow:1, marginLeft: 6,},
  titleLine: { flexDirection: 'row', alignItems: 'center', width: '100%', gap: 4, color: titleColor},
  description: {color: textColor},
},
);

export default function CVDocument() {
    
  return (
    <Document>
      <Page size="B5" style={styles.page}>
        <View style={styles.left}>
            <View style={{alignItems:'center'}}>
                <Image
                    style={styles.image}
                    src="../public/profile.jpg"
                />
                {/* --- NAME SECTION --- */}
                <View style={styles.section}>
                    <Text style={{ fontSize: 16, fontWeight: 700, color: titleColor }}>{cvData.name}</Text>
                    <View style={styles.contactEntry}>
                        <FontAwesomeIcon
                            faIcon={faLocationDot}
                            style={styles.icon}
                        />
                        <Text>{cvData.location.city}, {cvData.location.country}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                {/* --- CONTACTS SECTION --- */}
                <Text style={styles.subtitleBold}>Contacts</Text>
                <View style={styles.contactEntry}>
                    <FontAwesomeIcon
                        faIcon={faGlobe}
                        style={styles.icon}
                    />
                    <Link src={cvData.contacts.websiteLink} style={styles.contacts}> 
                        {cvData.contacts.website}
                    </Link>
                </View>
                
                <View style={styles.contactEntry}>
                    <FontAwesomeIcon
                        faIcon={faEnvelope}
                        style={styles.icon}
                    />
                    <Link src={cvData.contacts.emailLink} style={styles.contacts}> 
                        {cvData.contacts.email}
                    </Link>
                </View>

                <View style={styles.contactEntry}>
                    <FontAwesomeIcon
                        faIcon={faGithub}
                        style={styles.icon}
                    />
                    <Link src={cvData.contacts.githubLink} style={styles.contacts}> 
                        {cvData.contacts.github}
                    </Link>
                </View>

                <View style={styles.contactEntry}>
                    <FontAwesomeIcon
                        faIcon={faLinkedin}
                        style={styles.icon}
                    />
                    <Link src={cvData.contacts.linkedinLink} style={styles.contacts}> 
                        {cvData.contacts.linkedin}
                    </Link>
                </View>
            </View>

            {/* SKILLS SECTION */}
            <View style={styles.section}>
                <Text style={styles.subtitleBold}>Skills</Text>

                <Text style={{fontWeight:400, marginBottom:2}}>Programming</Text>

                {cvData.skills.programming.map(skill => (
                    <View
                        key={skill.name}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', marginBottom: 3 }}
                    >
                        {/* Skill name */}
                        <Text style={{ color: titleColor, marginRight: 6 }}>{skill.name}</Text>

                        {/* Level as circles */}
                        <View style={{ flexDirection: 'row', gap: 2 }}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <View
                            key={i}
                            style={{
                                width: 6,
                                height: 6,
                                borderRadius: 3, // circle
                                backgroundColor: i < skill.level ? iconColor : textColor, // filled or empty
                            }}
                            />
                        ))}
                        </View>
                    </View>
                    ))}

                <Text style={{fontWeight:400, marginBottom:2, marginTop: 5}}>Other</Text>
                {cvData.skills.other.map(skill => (
                    <View
                        key={skill.name}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', marginBottom: 3 }}
                    >
                        {/* Skill name */}
                        <Text style={{ color: titleColor, marginRight: 6}}>{skill.name}</Text>

                        {/* Level as circles */}
                        <View style={{ flexDirection: 'row', gap: 2 }}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <View
                            key={i}
                            style={{
                                width: 6,
                                height: 6,
                                borderRadius: 3, // circle
                                backgroundColor: i < skill.level ? iconColor : textColor, // filled or empty
                            }}
                            />
                        ))}
                        </View>
                    </View>
                    ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitleBold}>Languages</Text>
                {cvData.languages.map(lang => (
                    <View
                    key={lang.lang}
                    style={{ 
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        marginBottom: 3 
                    }}
                    >
                    <Text style={{ color: titleColor }}>{lang.lang}</Text>
                    <Text style={{ color: titleColor }}>{lang.level}</Text>
                    </View>
                ))}
            </View>
        
            <View style={{ position: 'absolute', bottom: 10, left: 0, right: 0 }}>
                <Text style={{ textAlign: 'center', color: textColor, fontWeight: 100, fontSize: 8 }}>
                    Last updated in {cvData.lastUpdated.month} {cvData.lastUpdated.year}
                </Text>
            </View>
        </View>

        <View style={styles.right}>
            {/*About Me Section*/}
            <View style={styles.section}>
                <View style={styles.titleLine}>
                    <Text style={styles.title}>About Me</Text>
                    <View style={styles.line}/>
                </View>
                <View>
                    {cvData.aboutMe.map((a, i) => (
                        <Text key={i} style={styles.description}>
                            {a}
                        </Text>
                    ))}
                </View>
            </View>

            {/*Education Section*/}
            <View style={styles.section}>
                <View style={styles.titleLine}>
                    <Text style={styles.title}>Education</Text>
                    <View style={styles.line}/>
                </View>
                {cvData.education.map(e => (
                <View key={e.title} style={styles.entry}>
                    <Text style={styles.subtitle}>{e.title}</Text>
                    <View>  
                        <View style={styles.educationEntry}>
                            <FontAwesomeIcon
                                faIcon={faCalendar}
                                style={styles.icon}
                            />
                            <Text>{e.date}</Text>
                        </View>
                        
                        <View style={styles.educationEntry}>
                            <FontAwesomeIcon
                                faIcon={faLocationDot}
                                style={styles.icon}
                            />
                            <Text>{e.location}</Text>
                        </View>
                        
                        {e.description.map((p, i) => (
                            <Text key={i} style={styles.description}>
                                •{p.text}
                            </Text>
                        ))}
                    </View>
                </View>
                ))}
            </View>

          <View style={styles.section}>
            <View style={styles.titleLine}>
                    <Text style={styles.title}>Experience</Text>
                    <View style={styles.line}/>
                </View>
            {cvData.experience.map(e => (
              <View key={e.title} style={styles.entry}>
                <Text style={styles.subtitle}>{e.title}</Text>
                <View>
                    <View style={styles.educationEntry}>
                            <FontAwesomeIcon
                                faIcon={faCalendar}
                                style={styles.icon}
                            />
                            <Text>{e.date}</Text>
                        </View>
                    <View style={styles.educationEntry}>
                            <FontAwesomeIcon
                                faIcon={faLocationDot}
                                style={styles.icon}
                            />
                            <Text>{e.location}</Text>
                        </View>
                    {e.description.map((p, i) => (
                        <Text key={i} style={styles.description}>
                            {p.text}
                        </Text>
                    ))}
                </View>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <View style={styles.titleLine}>
                    <Text style={styles.title}>Extra</Text>
                    <View style={styles.line}/>
                </View>
            {cvData.extra.map(item => <Text style={{marginBottom:2}} key={item}>• {item}</Text>)}
          </View>
        </View>
      </Page>
    </Document>
  );
}
