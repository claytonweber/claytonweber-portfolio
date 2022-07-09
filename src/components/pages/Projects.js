import React from 'react';
import ProjectCard from './cards/ProjectCard';
// import { Row, Col } from 'react-bootstrap';
import "../../App.css"


const projectsFolder = [
  {
    name: 'My Day or the Highway',
    githubLink: 'https://claytonweber.github.io/my-day-or-the-highway/'
  },
  {
    name: 'Still Travel',
    githubLink: 'https://github.com/b-e-christensen/travel-app'

  },
  {
    name: 'Bracket Bois',
    githubLink: 'https://github.com/christierney3/bracket-bois'
  },
  {
    name: 'Golf App',
    githubLink: 'https://github.com/cleave13/bracket-bois-v3'
  },
  {
    name: 'Oh Note You Didn\'t',
    githubLink: 'https://github.com/claytonweber/oh-note-you-didnt'

  }
]

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="container">
            {projectsFolder.map((project, index) => (
              <ProjectCard key={index} name={project.name} github={project.githubLink} />
            ))}
      </div>
    </div>
  );
}