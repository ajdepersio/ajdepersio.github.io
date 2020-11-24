import Project from '../models/project.js';
import TechnologyData from './technology-data.js';

const ProjectData = [
    new Project(
        "TestTitle",
        ["assets/ballstate.png", "assets/headshot.jpg"],
        "https://google.com",
        "https://github.com",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n quis nostrud exercitation ullamco \t\tlaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        [TechnologyData.DOTNET, TechnologyData.GIT]
    ),
    new Project(
        "TestTitle2",
        ["assets/ballstate.png", "assets/headshot.jpg"],
        "https://google.com",
        "https://github.com",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n quis nostrud exercitation ullamco \t\tlaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        [TechnologyData.DOTNET, TechnologyData.GIT]
    )
];

export default ProjectData;