// Navigation Bar SECTION


// Main Body SECTION
// const mainBody = {
//   gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
//   firstName: "Hashir",
//   middleName: "",
//   lastName: "Shoaib",
//   message: " Passionate about changing the world with technology. ",
//   icons: [
//     {
//       image: "fa-github",
//       url: "https://github.com/hashirshoaeb",
//     },
//     {
//       image: "fa-facebook",
//       url: "https://www.facebook.com/hashirshoaeb",
//     },
//     {
//       image: "fa-instagram",
//       url: "https://www.instagram.com/hashirshoaeb/",
//     },
//     {
//       image: "fa-linkedin",
//       url: "https://www.linkedin.com/in/hashirshoaeb/",
//     },
//     {
//       image: "fa-twitter",
//       url: "https://www.twitter.com/hashirshoaeb/",
//     },
//   ],
// };

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",



// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  //heading: "Recent Projects",
  gitHubUsername: "Laith-Kamaraldin", //i.e."johnDoe12Gh"
  reposLength: 5,
  specificRepos: [],
};

// Leadership SECTION




// Blog SECTION
// const blog = {
//   show: false,
// };

export { repos };
