module.exports = {
  pathPrefix: "/myPortfolio",
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Laith Kamaraldin',
    // Main Site Title
    title: `Laith Kamaraldin | Graduate Software Developer`,
    // Description that goes under your name in main bio
    description: ` +447889560359 | Laithkamaral@gmail.com | London United Kingdom`,
    // Optional: Twitter account handle
    // Optional: Github account URL
    github: `https://github.com/Laith-Kamaraldin`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/laith-kamaraldin/`,

    author: `@rfitzio`,

    // Content of the About Me section
    about: `I’m a passionate Computer Science graduate, with work experience in  software development and consulting. I’m a self-motivated learner who enjoys taking on new projects and learning new skills, who is looking for an organization that will fully utilize my drive and ambition whilst providing career advancement opportunities.`,
  //  Optional: List your projects, they must have `name` and `description`. `link` is optional.
    
   // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Duco Technology',
        description: 'Software Engineer Intern, July 2019 - September 2019',
        link: 'https://du.co/',
      },
      {
        name: 'Goldsmiths University of London',
        description: 'Computer Science BSc, September 2017 - July 2020',
        link: 'https://www.gold.ac.uk/ug/bsc-computer-science/',
      },
      // {
      //   name: 'Hooli',
      //   description: 'Full-Stack Developer, May 2015 - December 2017',
      //   link: 'https://github.com/RyanFitzgerald/devfolio',
      // },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, Python, JavaScript, React, Ruby on Rails, HTML/CSS, Android Development',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, GIT, Agile / Scrum, JIRA',
      },
    ],

     projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
     ],

  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },

    

    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    ],
};
