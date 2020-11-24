import Technology from '../models/technology.js';

const TechnologyData = {
    DOTNET: new Technology (".NET", "Programming Language", "assets/technology/dotnet.svg"),
    EMBERJS: new Technology ("Ember.js", "Frontend Framework", "assets/technology/ember.svg"),
    GIT: new Technology ("Git", "Version Control", "assets/technology/git.svg")
};

export default TechnologyData;