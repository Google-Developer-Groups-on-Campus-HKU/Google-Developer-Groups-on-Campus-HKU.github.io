/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Google Developer Groups on Campus HKU",
  description:
    "Google Developer Groups on Campus HKU is a community of students passionate about technology and innovation. We organize workshops, hackathons, and events to foster learning and collaboration among students.",
  og: {
    title: "Google Developer Groups on Campus HKU",
    type: "website",
    url: "https://Google-Developer-Groups-on-Campus-HKU.github.io",
  },
};

//Home Page
const greeting = {
  fullname: "Google Developer Groups on Campus HKU",
  title: "Google Developer Groups",
  university_name: "on Campus The University of Hong Kong",
  logo_name: "DIU",
  subTitle: "A Google Developers program for university students to learn mobile and web development skills, design thinking skills and leadership skills.",
  portfolio_repository: "https://github.com/Google-Developer-Groups-on-Campus-HKU/Google-Developer-Groups-on-Campus-HKU.github.io",
  discord_link: "https://discord.gg/6cNcQreWj9",
  githubProfile: "https://github.com/Google-Developer-Groups-on-Campus-HKU",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Google-Developer-Groups-on-Campus-HKU",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/xxx/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Discord",
    link: "https://discord.gg/6cNcQreWj9",
    fontAwesomeIcon: "fa-discord", // Reference https://fontawesome.com/icons/discord?style=brands
    backgroundColor: "#7289DA", // Reference https://simpleicons.org/?q=discord
  }
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "ArtificialIntelligenceImg",
      skills: [
        "🚀 Each year, we explore groundbreaking advancements in Data Science and Artificial Intelligence. Our sessions focus on the latest techniques and tools, helping you stay ahead in developing scalable models and applying cutting-edge methods in Computer Vision and Natural Language Processing.",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Google Cloud AI",
          fontAwesomeClassname: "logos-google-cloud",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Google Colab", 
          fontAwesomeClassname: "devicon:googlecolab",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Mobile Development",
      fileName: "MobileDevImg",
      skills: [
        "📱 Every year, we dive into the latest innovations in mobile development, empowering you to create dynamic applications. Join our sessions to master Flutter and Kotlin, and learn how to build responsive interfaces while seamlessly integrating backend services.",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#7F52FF",
          },
        },
      ],
    },
    {
      title: "Cloud Infrastructure & Architecture",
      fileName: "WebDevelopmentImg",
      skills: [
        "☁️ As technology evolves, so do the best practices in cloud infrastructure. Our sessions cover the essentials of Google Cloud, from hosting and managing applications to deploying deep learning models. Stay informed on the latest strategies for setting up efficient cloud architectures and leveraging Firebase for real-time applications.",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud Platform (GCP)",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Google Kubernetes Engine (GKE)",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

const members = {
  members: [
    {
      name: "Alice Lee",
      role: "Team Lead",
      github: "AliceLee103",
      social: [
        {
          name: "Github",
          link: "https://github.com/AliceLee103",
          fontAwesomeIcon: "fa-github",
          backgroundColor: "#181717",
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/aliceytlee/",
          fontAwesomeIcon: "fa-linkedin-in",
          backgroundColor: "#0077B5",
        }
      ]
    },
    {
      name: "Pun King Fung",
      role: "Core Team Member",
      github: "Fung1117",
      social: [
        {
          name: "Github",
          link: "https://github.com/Fung1117",
          fontAwesomeIcon: "fa-github",
          backgroundColor: "#181717",
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/king-fung-pun/",
          fontAwesomeIcon: "fa-linkedin-in",
          backgroundColor: "#0077B5",
        }
      ]
    },
  ]
}


export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  members,
};
