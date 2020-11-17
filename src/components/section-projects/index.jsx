import React from 'react';
import Section from '../section';
import{ repos,} from "../config.js"
import Project from "./Project.jsx";
import "../../scss/custom.scss";

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
