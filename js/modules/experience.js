import Experience from '../models/experience.js';
import ExperienceData from '../data/experience-data.js';

ExperienceData.forEach(x => {
    console.log(x.Label);
});

function populateExperienceInfo() {
    for (let i = 0; i < ExperienceData.length; i++) {
        var experience = ExperienceData[i];
        
        //nav-items
        var navItemTemplate = document.querySelector('#experience-nav-item-template').content;
        var anchor = navItemTemplate.querySelector('a');
        anchor.textContent = experience.Label;
        anchor.href = "#experience-" + i;
        document.querySelector('#experience-nav-bar').appendChild(
            document.importNode(navItemTemplate, true)
        );
        
        //tab-items
        var tabItemTemplate = document.querySelector('#experience-tab-item-template').content;
        var tabPane = tabItemTemplate.querySelector('.tabs-pane');
        tabPane.id = "experience-" + i;

        var image = tabItemTemplate.querySelector('.experience-image');
        var company = tabItemTemplate.querySelector('.experience-company');
        var title = tabItemTemplate.querySelector('.experience-title');
        var department = tabItemTemplate.querySelector('.experience-department');
        var dates = tabItemTemplate.querySelector('.experience-dates');
        
        image.src = experience.Logo;
        company.textContent = experience.Company;
        title.textContent = experience.Title;
        department.textContent = experience.Department;
        dates.textContent = experience.Tenure;
        
        //experience description
        var ul = tabItemTemplate.querySelector('.tabs-pane ul');
        experience.Description.forEach(description => {    
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(description));
            ul.appendChild(li);
        });
        
        document.querySelector('#experience-tabs').appendChild(
            document.importNode(tabItemTemplate, true)
        );
        
        //HACK: clear out the ul element from previous iterations, otherwise they duplicate across experiences
        ul.innerHTML = "";
    }
    document.querySelector('#experience-nav-bar a').classList.add("active");
    document.querySelector('#experience-tabs .tabs-pane').classList.add("active");    
}

export default populateExperienceInfo;