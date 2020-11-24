import Project from '../models/project.js';
import ProjectData from '../data/project-data.js';

function populateProjectInfo() {
    for (let i = 0; i < ProjectData.length; i++) {
        var project = ProjectData[i];
        
        //nav-items
        var navItemTemplate = document.querySelector('#projects-nav-item-template').content;
        var anchor = navItemTemplate.querySelector('a');
        anchor.textContent = project.Title;
        anchor.href = "#projects-" + i;
        document.querySelector('#projects-nav-bar').appendChild(
            document.importNode(navItemTemplate, true)
        );
        
        //tab-items
        var tabItemTemplate = document.querySelector('#projects-tab-item-template').content;
        var tabPane = tabItemTemplate.querySelector('.tabs-pane');
        tabPane.id = "projects-" + i;

        var title = tabItemTemplate.querySelector('.projects-title');
        var technologyIcon = tabItemTemplate.querySelector('.projects-technology-icon');
        var url = tabItemTemplate.querySelector('.projects-url');
        var source = tabItemTemplate.querySelector('.projects-source');
        var description = tabItemTemplate.querySelector('.projects-description');
        var technology = tabItemTemplate.querySelector('.projects-technology');
        var image = tabItemTemplate.querySelector('.projects-image');
        
        title.textContent = project.Title;
        technologyIcon.src = project.Technologies[0].Image;
        url.textContent = project.Url;
        url.href = project.Url;
        source.textContent = project.Source;
        description.textContent = project.Description;
        technology.textContent = project.Technologies[0].Name //TODO: Multiple tech and images
        image.src = project.Images[0];  //TODO: Multiple images
        
        
        document.querySelector('#projects-tabs').appendChild(
            document.importNode(tabItemTemplate, true)
        );
    }
    document.querySelector('#projects-nav-bar a').classList.add("active");
    document.querySelector('#projects-tabs .tabs-pane').classList.add("active");    
}

export default populateProjectInfo;