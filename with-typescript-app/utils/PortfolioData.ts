export type PortfolioData = {
  gitpay: {
    tags: {
      all: boolean;
      frontend: boolean;
      fullstack: boolean;
    };
    title: string;
    catchLine: string;
    role: string;
    jobDescription: string[];
    images: string[];
    date: string;
    nextProject: string;
  };
  placespeak: {
    tags: {
      all: boolean;
      frontend: boolean;
      fullstack: boolean;
    };
    title: string;
    catchLine: string;
    role: string;
    jobDescription: string[];
    images: string[];
    date: string;
    nextProject: string;
  };
  mentor: {
    tags: {
      all: boolean;
      frontend: boolean;
      fullstack: boolean;
    };
    title: string;
    catchLine: string;
    role: string;
    jobDescription: string[];
    images: string[];
    date: string;
    nextProject: string;
  };
  custom: {
    tags: {
      all: boolean;
      frontend: boolean;
      fullstack: boolean;
    };
    title: string;
    catchLine: string;
    role: string;
    jobDescription: string[];
    images: string[];
    date: string;
    nextProject: string;
  };
};

export const jobData: PortfolioData = {
  gitpay: {
    tags: {
      all: true,
      frontend: true,
      fullstack: false,
    },
    title: "GitPay",
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
    date: "05/2020 - 11/2020",
    nextProject: "placespeak",
  },
  placespeak: {
    tags: {
      all: true,
      frontend: true,
      fullstack: true,
    },
    title: "PlaceSpeak",
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
    date: "06/2019 - 01/2020",
    nextProject: "mentor",
  },
  mentor: {
    tags: {
      all: true,
      frontend: true,
      fullstack: false,
    },
    title: "Open Mentorship",
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
    date: "05/2020 – 11/2020",
    nextProject: "custom",
  },
  custom: {
    tags: {
      all: true,
      frontend: true,
      fullstack: false,
    },
    title: "Slider Portfolio",
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
];
