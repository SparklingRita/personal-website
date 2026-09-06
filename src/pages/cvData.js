export const cvData = {
  lastUpdated : {
    month: 'September',
    year: '2026',
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
    github: 'ritacmendes',
    githubLink: 'https://github.com/ritacmendes',
    linkedin: 'Rita Mendes',
    linkedinLink: 'https://linkedin.com/in/rita-c-mendes',
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
  interests: [
    {name: 'Endurance sports'},
    {name: 'Videography'},
  ],

  aboutMe: [
    "Master in Electrical and Computer Engineering at Instituto Superior Técnico, specializing in Control, Robotics, and Artificial Intelligence. My main professional interest lies in Machine Learning and Data Science, with a particular focus in biomedical and healthcare applications.",
    "I also enjoy Web Development and have developed several projects as a personal interest."
  ],
  education: [
    {
      title: "Bachelor's in Electrical and Computer Engineering",
      date: '2020-2023',
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
        date: '2024-2025, 1st semester',
        location: "KTH Royal Institute of Technology, Stockholm, Sweden",
        description: [
          {
            text:"Focused on Robotics, Reinforcement Learning and Machine Learning.",
          }, 
        ],
    },
    {
        date:'2023-2025',
        location:"Instituto Superior Técnico, Lisbon, Portugal",
        title:"Master's in Control, Robotics and Artificial Intelligence",
        description: [
          {
            text: "Minor in Computer Science.",
          },
          {
            text: "Thesis focused on multi-modal data fusion and temporal data integration using Transformers for predicting cancer survival outcomes."
          },      
        ],
    }
   
  ],
  experience: [
    {
      title: 'Sales and Operations Assistant',
      date: '2020-2025',
      location: 'Livraria e Papelaria Espaço',
      description: [
        {
          text:"Managed customer orders, inventory tracking, and sales records using Excel and internal systems for a local library. Developed organizational skills in a retail environment, providing customer service and ensuring smooth day-to-day operations.",
        },
      ]
    },
    {
      title: 'Machine Learning Researcher for Healthcare',
      date: '2026-Present',
      location: 'Institute for Systems and Robotics, Instituto Superior Técnico',
      description: [
        {
          text:"Focused on Transformer-based models for multi-modal fusion of healthcare data, dealing with heavily missing data scenarios as well as temporal integration."
        },
        {
          parts: [
            { text: 'Contributed to the ' },
            { text: 'NextGen EU project', link: 'https://www.nextgentools.eu/' },
            { text: '.' }
          ]
        }
      ]
    },
  ],

  conferences: [
    {
      title: 'NextGen EU Horizon Europe',
      date: '2026',
      location: 'Helsinki, Finland',
      link: "https://www.nextgentools.eu/",
      description: [
        {
          text: "Developed and documented Transformer-based methods for multimodal data integration and missing data handling, enabling their adaptation to NextGen's cardiovascular use cases. Participated in the NextGen consortium meeting in Helsinki, Finland (February 2026).",
        }
      ],
    },
    {
      title: 'LARSys Annual Meeting - Laboratory for Robotics and Systems',
      
      location: 'Lisbon, Portugal',
      link: "https://larsys.pt/",
      description: [
        {
          text: 'Presented a 2-minute research pitch, titled "Multi-Modal Fusion Using Transformers."'
        }
      ]
    },
    {
      title: 'ECCV DCA-MI Workshop',
      date: 'September, 2026',
      location: 'Malmö, Sweden',
      link: 'https://dca-in-mi.github.io/#home',
      description: [
        {
          text: 'Paper accepted for presentation: "Real-World Multi-Modal and Longitudinal Lung Cancer Dataset." First-author research and curation of a real-world multimodal and longitudinal lung cancer dataset.',
        }
      ]
    }
  ],

  papers: [
    {
      title: 'Real-World Multi-Modal and Longitudinal Lung Cancer Dataset',
      //subtitle: "MMIST-LUNG",
      date: 'September, 2026',
      venue: 'ECCV 2026 - DCA-MI Workshop',
      venueLink: 'https://dca-in-mi.github.io/#home',
      pdf: 'papers/Real-World Multi-Modal and Longitudinal Lung Cancer Dataset.pdf',
      //link: "Coming soon...",
      description: [
        {
          text:'First-author paper presenting a publicly available multimodal and longitudinal lung cancer dataset of 1,365 patients, comprising clinical, imaging, transcriptomic, treatment, and follow-up data. The dataset captures real-world missingness and enables benchmarking of multimodal fusion, missing-data handling, longitudinal modeling, and survival analysis.'
        }
      ]
    },
  ],

  projects: [
    {
      title: 'Hybrid',
      link: 'https://hybrid.ritacmendes.com/',
      subtitle: 'React · JavaScript',
      description: [
        {
          text:"Developed a personal analytics dashboard to visualize my running performance statistics using the Strava API."+
          "The project is currently inactive following changes to Strava API access requirements."
        }
      ],
    }
  ],

  extra: [
    'Advent of Code Participant',
    'Member of HackerSchool student group at IST',
    'Mentor at IST Erasmus Mentoring Programme',
    'NOS Data&OpenAI Open Day Participation',
    'Many small coding projects',
  ]
};
