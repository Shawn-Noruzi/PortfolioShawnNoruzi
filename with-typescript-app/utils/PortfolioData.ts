export type PortfolioData = {
  gitpay: {
    tags: {
      all: boolean;
      frontend: boolean;
      fullstack: boolean;
    };
    title: string;
    catchLine: string;
    images: string[];
    tech: string;
  };
  placespeak: {
    tags: {
      all: boolean;
      frontend: boolean;
      fullstack: boolean;
    };
    title: string;
    catchLine: string;
    images: string[];
    tech: string;
  };
  mentor: {
    tags: {
      all: boolean;
      frontend: boolean;
      fullstack: boolean;
    };
    title: string;
    catchLine: string;
    images: string[];
    tech: string;
  };
  custom: {
    tags: {
      all: boolean;
      frontend: boolean;
      fullstack: boolean;
    };
    title: string;
    catchLine: string;
    images: string[];
    tech: string;
  };
  portfolio: {
    tags: {
      all: boolean;
      frontend: boolean;
      fullstack: boolean;
    };
    title: string;
    catchLine: string;
    images: string[];
    tech: string;
  };
  social: {
    tags: {
      all: boolean;
      frontend: boolean;
      fullstack: boolean;
    };
    title: string;
    catchLine: string;
    images: string[];
    tech: string;
  };
  expense: {
    tags: {
      all: boolean;
      frontend: boolean;
      fullstack: boolean;
    };
    title: string;
    catchLine: string;
    images: string[];
    tech: string;
  };
};

export const jobData: PortfolioData = {
  portfolio: {
    tags: {
      all: true,
      frontend: true,
      fullstack: true,
    },
    title: "Portfolio",
    catchLine: "Showcases myself and my work",
    images: ["/static/images/Port1.PNG"],
    tech: "React, Next.js, Typescript, SWR, Material-UI",
  },

  placespeak: {
    tags: {
      all: true,
      frontend: true,
      fullstack: true,
    },
    title: "PlaceSpeak",
    catchLine: "Geolocation constituent consulting",
    images: ["/static/images/P1.PNG"],
    tech: "React, Bootstrap / CSS, Redux, JQuery, Django, RESTful",
  },
  gitpay: {
    tags: {
      all: true,
      frontend: true,
      fullstack: false,
    },
    title: "GitPay",
    catchLine: "Bounty website for developers to find paid work",
    images: ["/static/images/G1.PNG"],
    tech: "React, Bootstrap, Redux",
  },

  mentor: {
    tags: {
      all: true,
      frontend: true,
      fullstack: false,
    },
    title: "Open Mentorship",
    catchLine: "Tinder-Like mentor finding app.",
    images: ["/static/images/M1.PNG"],
    tech: "React, Bootstrap, Redux, Axios",
  },
  custom: {
    tags: {
      all: true,
      frontend: true,
      fullstack: false,
    },
    title: "Slider Portfolio",
    catchLine: "Innovative way to present portfolio data",
    images: ["/static/images/N1.PNG"],
    tech: "React, Material-UI, Awesome-Slider API, Next.js",
  },

  social: {
    tags: {
      all: true,
      frontend: true,
      fullstack: true,
    },
    title: "Shower Thoughts",
    catchLine: "Twitter-like social post app",
    images: ["/static/images/Soc1.PNG"],
    tech: "React, Redux,  Material-UI, Node.js, Firebase",
  },

  expense: {
    tags: {
      all: true,
      frontend: true,
      fullstack: true,
    },
    title: "Expense Tracker",
    catchLine: "Track spending habits",
    images: ["/static/images/Exp1.PNG"],
    tech: "React, Redux, SCSS, JEST, Webpack/Babel, Heroku",
  },
};

interface items {
  img: string;
  text: string;
  header: string;
}
export type ProjectData = [
  {
    id: string;
    client: string;
    techSkills: string[];
    content: items[];
    summary: string;
    website: string;
    title: string;
    catchLine: string;
    role: string;
    jobDescription: string[];
    images: string[];
    date: string;
    nextProject: string;
    nextProjectTitle: string;
  },
  {
    id: string;
    client: string;
    techSkills: string[];
    content: items[];
    summary: string;
    website: string;
    title: string;
    catchLine: string;
    role: string;
    jobDescription: string[];
    images: string[];
    date: string;
    nextProject: string;
    nextProjectTitle: string;
  },
  {
    id: string;
    client: string;
    techSkills: string[];
    content: items[];
    summary: string;
    website: string;
    title: string;
    catchLine: string;
    role: string;
    jobDescription: string[];
    images: string[];
    date: string;
    nextProject: string;
    nextProjectTitle: string;
  },
  {
    id: string;
    client: string;
    techSkills: string[];
    content: items[];
    summary: string;
    website: string;
    title: string;
    catchLine: string;
    role: string;
    jobDescription: string[];
    images: string[];
    date: string;
    nextProject: string;
    nextProjectTitle: string;
  },
  {
    id: string;
    client: string;
    techSkills: string[];
    content: items[];
    summary: string;
    website: string;
    title: string;
    catchLine: string;
    role: string;
    jobDescription: string[];
    images: string[];
    date: string;
    nextProject: string;
    nextProjectTitle: string;
  }
];

export const Projects: ProjectData = [
  {
    id: "gitpay",
    title: "GitPay",
    client: "GitPay",
    content: [
      { img: "/static/images/G1.PNG", header: "", text: "" },
      { img: "/static/images/G2.PNG", header: "", text: "" },
      { img: "/static/images/G3.PNG", header: "", text: "" },
    ],
    techSkills: ["React", "Redux", "CSS", "Bootstrap"],
    summary:
      "In 2020 I worked on 'bounties' for the site GitPay and was later hired as a consultant and Front End Engineer. I was tasked with modernizing the UX/UI based on mock ups, testing, documenting, fixing technical issues while providing support to other developers.",
    website: "https://gitpay.me/",
    catchLine: "Bounty website for developers to find paid work",
    role: "Front End Engineer",
    jobDescription: [
      "Reduced user flow issues through the improvement of UX/UI which increased CTR by 50% through the creation of a landing page using React, JavaScript and Bootstrap/CSS",
      "Increased browser support by 50% through an implementation of webpack and babel",
      "Provided on-demand developer support to create new or better solutions for bug fixes, design patterns and implementations resulting in more streamlined development/hotfixes",
    ],
    images: [
      "/static/images/G1.PNG",
      "/static/images/G2.PNG",
      "/static/images/G3.PNG",
    ],
    date: "2020 - Ongoing",
    nextProject: "placespeak",
    nextProjectTitle: "PlaceSpeak",
  },
  {
    id: "placespeak",
    title: "PlaceSpeak",
    client: "PlaceSpeak",
    content: [
      {
        img: "/static/images/PlaceSpeakMock.PNG",
        header: "Codebase, Debugging, Problem Solving, Documentation",
        text:
          "I familiarized myself with the code base and started working on the many bugs the site had to begin with. There were issues with data fetching, manipulation and display. There was a lack of documentation so I created it as I sifted through the code and I came out of this experience confident in my debugging and front end related problem solving skills.",
      },
      {
        img: "/static/images/PlaceSpeakMap.PNG",
        header: "Google Map API, Bringing Mockups To Life",
        text:
          "I got the opportunity to dive into the google map API and was able to create a react component allowing users to manipulate the map types using buttons. I passed on the user's decision to an end point so that the other pages that used the map would also be updated as per the user's settings. After addressing all the high priority bugs I got to style and create the layouts and designs that the UI artist had provided while adding my own personal touches to ensure the best user experience.      ",
      },
      {
        img: "/static/images/PlaceSpeakNetwork.PNG",
        header:
          "Data Flow/Pipeline, Data Fetching, React Lifecycle, Redux State Management",
        text:
          "Through data pipeline and flow tracing,life cycle events and proper usage of Redux state management I was able to address several issues where the data on render wasn't updating when the data was fetched.",
      },
    ],
    techSkills: ["React", "Redux", "CSS", "Bootstrap"],
    summary:
      "In 2019 I was hired as a contractor for PlaceSpeak as a Front End Engineer. I worked alongside a back end developer while in close communications with the design team, clients and management to meet weekly deliverables. I was tasked with modernizing the UX/UI based on mock ups, testing, documenting and fixing technical issues.",
    website: "https://placespeak.com/",
    catchLine: "Geolocation constituent consulting",
    role: "Front End Engineer",
    jobDescription: [
      "Overhauled all user interfaces which increased site traffic by more than 60%  using React, Redux, Bootstrap/CSS, JavaScript, and JQuery ",
      "Resolved bugs pertaining to asynchronous requests, data pipeline/flow, React/Redux state management and CSS issues resulting in 70% reduction of technical debt, improved usability and 50% increase in load times",
      "Tested and documented all produced code to ensure smooth deliverables",
    ],
    images: [
      "/static/images/P1.PNG",
      "/static/images/P2.PNG",
      "/static/images/P3.PNG",
    ],
    date: "2019 - 2020",
    nextProject: "mentor",
    nextProjectTitle: "Open Mentorship",
  },
  {
    id: "mentor",
    title: "Open Mentorship",
    client: "Open Mentorship",
    content: [
      { img: "/static/images/M1.PNG", header: "", text: "" },
      { img: "/static/images/M2.PNG", header: "", text: "" },
    ],
    techSkills: [
      "React",
      "Context",
      "Styled-Components",
      "Material-UI",
      "Axios",
    ],
    summary:
      "In early 2020 I joined a start up open source project with 4 others to create a Tinder-like matching app for software developers. The goal is to create meaningful connections between people starting out and those deep in the industry. As a Front End Engineer I oversaw development at all stages of the product life cycle and created most of the front end for the project.",
    website: "",
    catchLine: "Tinder-Like mentor finding app.",
    role: "Front End Engineer",
    jobDescription: [
      "Developed a mentor-mentee matching application for engineers with a projected reach of 100,000 initial users using React, Styled-Components/Material-UI/CSS, JavaScript, and Axios",
      "Collaborated closely with the team to support projects during all phases of delivery",
      "Identified innovative ideas and proof of concepts according to project requirements",
      "Tested to identify bugs and technical issues before and after deploying reducing technical debt",
      "Documented bug reports, tickets, and any code changes",
    ],
    images: ["/static/images/M1.PNG", "/static/images/M2.PNG"],
    date: "2020",
    nextProject: "custom",
    nextProjectTitle: "Sliding Portfolio",
  },
  {
    id: "custom",
    title: "Slider Portfolio",
    client: "GitPay",
    content: [
      { img: "/static/images/N1.PNG", header: "", text: "" },
      { img: "/static/images/N2.PNG", header: "", text: "" },
      { img: "/static/images/N3.PNG", header: "", text: "" },
    ],
    techSkills: ["React", "Material-UI", "Awesome-Slider", "Next.js"],
    summary:
      "Rush project to create a portfolio within 12 hours of work time using React, Next.js, Awesome-Slider API and Material-UI. Features onClick scrolling, a social media bar and page animations.",
    website: "https://noruzi.vercel.app/",
    catchLine: "Innovative way to present portfolio data",
    role: "Front End Engineer",
    jobDescription: [
      "Developed a 'slide' based visual presentation using AwesomeSlider, Next.js, React, Javascript, Material-UI.",
    ],
    images: [
      "/static/images/N1.PNG",
      "/static/images/N2.PNG",
      "/static/images/N3.PNG",
    ],
    date: "11/2020",
    nextProject: "gitpay",
    nextProjectTitle: "GitPay",
  },

  {
    id: "portfolio",
    title: "Portfolio",
    client: "Self Project",
    content: [
      {
        img: "/static/images/Port1.PNG",
        header: "Next.js and TypeScript",
        text:
          "I wanted to learn the Next.js framework and how I can leverage its server-side app capabilities. Its routing engine allowed for seemless navigation and I was able to use my component-logic of react to create the pages. I was able to use Next.js's Static Generation to fetch data at build time since the data is constant, keeping things highly performant. TypeScript added increased overhead in exchange for better debugging, type safety, easier understanding of data intake/output, less testing and less bugs. I look forward to doing all my projects in TypeScript from now on.",
      },
      {
        img: "/static/images/Port2.PNG",
        header: "Features",
        text: `Viewport visibility - I tried using VizSensor and useVisibility libraries to handle viewport visibility. I found that VizSensor was by far the more practicle and less buggy of the two. The visibility was then reference to the navbar triggering styling changes and also applying animations to each component as the user scrolls down a page.\n\nMapping data - using my own custom API to pull data from a local file, I then mapped and rendered the data. I also took note of how to use getInitialProps and getStaticProps to pull in API data on build rather than request for external API using applications.`,
      },
      {
        img: "/static/images/Port3.PNG",
        header: "More Features",
        text:
          "Conditional rendering - I used Terniary operators here but also noted how switch statements can be highly practical when there are many use cases for the data.\n\nResponsive design - I crafted the site with a mobile first approach as the target demographics are often mobile users for sites.\n\nState Management - using useState, useEffect and some prop handling I was able to create style changing user navigation, on scroll animations, as well as rendering of different data sets and components. ",
      },
      {
        img: "/static/images/Port4.PNG",
        header: "Site Analytics",
        text:
          "I initially planned to use google analytics to track user web and mobile usage until I found out Next's Vercel web app provides native analytics support.",
      },
    ],
    techSkills: ["React", "Next.js", "TypeScript", "Material-UI", "SWR"],
    summary:
      "After creating the slider portfolio, I wanted to make something a bit more conventional while also picking up a few new skils - mainly typescript. My focus was on creating a responsive, statically typed, easy to navigate and consume site that would utilize a single source of truth for its data to create many components.",
    website: "https://portfolio-shawn-noruzi.shawn-noruzi.vercel.app/",
    catchLine: "",
    role: "Front End Engineer",
    jobDescription: [
      "Designed and Developed a portfolio site to learn Typescript and explore the Next.js ecosystem.",
    ],
    images: [
      "/static/images/Port1.PNG",
      "/static/images/Port2.PNG",
      "/static/images/Port3.PNG",
    ],
    date: "2020",
    nextProject: "placespeak",
    nextProjectTitle: "PlaceSpeak",
  },
  {
    id: "social",
    title: "Shower Thoughts",
    client: "Self Project",
    content: [
      {
        img: "/static/images/Soc1.PNG",
        header: "Features",
        text:
          "User Authentication through tokens, middleware and private routes, Image uploading, CRUD'ing data, notifications through firebase subscriptions, Redux to handle data and project state management, and firebase deployment.",
      },
      {
        img: "/static/images/Soc2.PNG",
        header: "",
        text: "",
      },
    ],
    techSkills: [
      "React",
      "Redux",
      "Material-UI",
      "Firebase",
      "JEST",
      "Webpack",
    ],
    summary:
      "Full stack Twitter-clone where users can CRUD data, comment and rate each other. Served as a project to learn how to set up a backend, frontend with testing and bundling optimizations.",
    website: "https://socialapp-4c8c3.firebaseapp.com/",
    catchLine: "See everyone's shower thoughts",
    role: "Front End Engineer",
    jobDescription: [
      "Created with React/Redux, Material-UI , Firebase, Express, Node.js – features RESTful consumption, user login with authentication, image uploads, cloud functions, notifications, deployment to Firebase ",
      "Leveraged the concept of loose coupling for high cohesion using React and Redux to allow for the least amount of component reliance and most defined task contribution",
    ],
    images: ["/static/images/Soc1.PNG", "/static/images/Soc2.PNG"],
    date: "2019",
    nextProject: "expense",
    nextProjectTitle: "Expense Tracker",
  },

  {
    id: "expense",
    title: "Expense Tracker",
    client: "Self Project",
    content: [
      {
        img: "/static/images/Exp1.PNG",
        header: "",
        text: "",
      },
      {
        img: "/static/images/Exp2.PNG",
        header: "",
        text: "",
      },
    ],
    techSkills: [
      "React",
      "Redux",
      "SCSS",
      "Firebase",
      "Enzyme",
      "JEST",
      "Webpack",
    ],
    summary:
      "Expense tracker where a user can CRUD data, search through them by date, and sort  by amount or date",
    website: "https://socialapp-4c8c3.firebaseapp.com/",
    catchLine: "See everyone's shower thoughts",
    role: "Front End Engineer",
    jobDescription: [
      "Created with React/Redux, Firebase, tested with JEST and Enzyme, SCSS, built with Webpack and Babel for optimization and cross browser support, and deployed on Heroku",
    ],
    images: ["/static/images/Exp1.PNG", "/static/images/Exp2.PNG"],
    date: "2019",
    nextProject: "social",
    nextProjectTitle: "Shower Thoughts",
  },
];
