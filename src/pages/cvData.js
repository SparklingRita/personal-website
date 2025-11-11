export const cvData = {
  lastUpdated : {
    month: 'November',
    year: '2025',
  },
  name: 'Rita Mendes',
  location: {
    city:'Lisbon',
    country:'Portugal',
  },
  contacts: {
    website: 'ritacmendes.com',
    websiteLink: 'https://www.ritacmendes.com',
    email: 'me@ritacmendes.com',
    emailLink: 'mailto:me@ritacmendes.com',
    github: 'SparklingRita',
    githubLink: 'https://github.com/SparklingRita',
    linkedin: 'RitaMendes',
    linkedinLink: 'https://linkedin.com',
  },
  skills: {
    programming: [
      { name: 'Python', level: 5 },
      { name: 'Pandas', level: 5},
      { name: 'Excel', level: 5 },
      { name: 'HTML/CSS', level: 4 },
      { name: 'Matlab', level: 4 },
      { name: 'Arduino', level: 4 },
      { name: 'React', level: 4 },
      { name: 'C', level: 3 },
    ],
    other: [
      { name: 'Windows', level: 5},
      { name: 'Linux', level: 4},
      { name: 'Git', level: 4},
    ]
  },
  languages: [
    { lang:'Portuguese', level: 'Native' },
    { lang:'English', level: 'Fluent' }
  ],

  aboutMe: [
    "Master in Electrical and Computer Engineering at Instituto Superior Técnico, specializing in Control, Robotics, and AI. My main professional interest lies in Machine Learning and Web Development, and I'm eager to continue learning and growing in these fields.",
    "Beyond engineering, I am a hybrid athlete and have a strong passion for the arts, including traditional drawing, playing guitar and also video editing, with extensive experience in Adobe Photoshop, Lightroom, Premiere Pro, and DaVinci Resolve.",
  ],
  education: [
    {
      title: "Bachelor's in Electrical and Computer Engineering",
      date: '2020–2023',
      location: 'Instituto Superior Técnico, Lisbon, Portugal',
      description: [
          {
            text: 'Awarded Academic Merit Diploma (2022/2023).',
            link: '../../public/certificates/AcademicMeritIST_2022-2023.pdf'
          },
      ],
    },
    {
        title: "Erasmus Programme",
        date: "2024-2025, 1st semester",
        location: "KTH Royal Institute of Technology, Stockholm, Sweden",
        description: [
          {
            text:"Focused on Robotics, Reinforcement Learning and Machine Learning.",
          }, 
        ],
    },
    {
        date:"2023-2025",
        location:"Instituto Superior Técnico, Lisbon, Portugal",
        title:"Master's in Control, Robotics and Artificial Intelligence",
        description: [
          {
            text: "Minor in Computer Science.",
          },
          {
            text: "Thesis focused on multimodal data fusion and temporal data integration using Transformers for predicting cancer survival outcomes."
          },      
        ],
    }
   
  ],
  experience: [
    {
      title: 'Sales and Operations Assistant',
      date: '2020–Present',
      location: 'Livraria e Papelaria Espaço',
      description: [
        {
          text:"Managed customer orders, inventory tracking, and sales records using Excel and internal systems. Developed organizational skills in a retail enviroment, providing customer service and ensuring smooth day-to-day operations.",
        },
      ]
    },
  ],
  extra: [
    'Advent of Code Participant',
    'Member of HackerSchool student group at IST',
    'Mentor at IST Erasmus Mentoring Programme',
    'NOS Data&OpenAI Open Day Participation',
    'Many small coding projects',
  ]
};
