export type PortfolioData = {
  gitpay: {
    tags: {
      all: boolean;
      web: boolean;
      responsive: boolean;
      fullstack: boolean;
      restful: boolean;
    };
    title: string;
    catchLine: string;
    role: string;
    jobDescription: string[];
    images: string[];
    date: string;
  };
  placespeak: {
    tags: {
      all: boolean;
      web: boolean;
      responsive: boolean;
      fullstack: boolean;
      restful: boolean;
    };
    title: string;
    catchLine: string;
    role: string;
    jobDescription: string[];
    images: string[];
    date: string;
  };
  mentor: {
    tags: {
      all: boolean;
      web: boolean;
      responsive: boolean;
      fullstack: boolean;
      restful: boolean;
    };
    title: string;
    catchLine: string;
    role: string;
    jobDescription: string[];
    images: string[];
    date: string;
  };
  custom: {
    tags: {
      all: boolean;
      web: boolean;
      responsive: boolean;
      fullstack: boolean;
      restful: boolean;
    };
    title: string;
    catchLine: string;
    role: string;
    jobDescription: string[];
    images: string[];
    date: string;
  };
};

export const jobData: PortfolioData = {
  gitpay: {
    tags: {
      all: true,
      web: true,
      responsive: true,
      fullstack: false,
      restful: true,
    },
    title: "GitPay",
    catchLine: "Bounty website for developers",
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
  },
  placespeak: {
    tags: {
      all: true,
      web: true,
      responsive: true,
      fullstack: true,
      restful: true,
    },
    title: "PlaceSpeak",
    catchLine: "Geolocation based constituent consulting app",
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
  },
  mentor: {
    tags: {
      all: true,
      web: true,
      responsive: true,
      fullstack: false,
      restful: true,
    },
    title: "Open Mentorship",
    catchLine:
      "Find the Mentor you always wanted on this Tinder-Like mentor finding app.",
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
  },
  custom: {
    tags: {
      all: true,
      web: true,
      responsive: true,
      fullstack: false,
      restful: true,
    },
    title: "Custom Slider Portfolio",
    catchLine: "Innovative new way to present portfolio data",
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
  },
};
