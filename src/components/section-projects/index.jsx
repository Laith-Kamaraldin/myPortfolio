import React from 'react';
import Section from '../section';
import{ repos,} from "../config.js"
import Project from "./Project.jsx";
import "../../scss/custom.scss";
import * as serviceWorker from "../../serviceWorker";


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const SectionProjects =  React.forwardRef(() => {
  return (
    <Section title="Projects">
      {repos.show && (
      <Project
      heading={repos.heading}
      username={repos.gitHubUsername}
      length={repos.reposLength}
      specfic={repos.specificRepos}
    />
  )}
       
    </Section>
  );
});



export default SectionProjects;
