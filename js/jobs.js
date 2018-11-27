var m_jobs = [{
        Company: "RenPSG",
        Logo: "assets/renpsg.png",
        Title: "Software Engineering Team Lead, DFX",
        Department: "IT - Development",
        StartDate: new Date(2017, 5, 19),
        EndDate: new Date(),
        Description: [""]
    },
    {
        Company: "RenPSG",
        Logo: "assets/renpsg.png",
        Title: "Senior Software Engineer",
        Department: "IT - Development",
        StartDate: new Date(2017, 5, 19),
        EndDate: new Date(),
        Description: [""]
    },
    {
        Company: "Genesys",
        Logo: "assets/genesys-bubble.png",
        Title: "Software Engineer",
        Department: "Development Services",
        StartDate: new Date(2017, 5, 19),
        EndDate: new Date(),
        Description: [""]
    },
    {
        Company: "Interactive Intelligence",
        Logo: "assets/inin-cloud.png",
        Title: "Senior Implementation Engineer",
        Department: "Professional Services",
        StartDate: new Date(2017, 5, 19),
        EndDate: new Date(),
        Description: [""]
    },
    {
        Company: "Interactive Intelligence",
        Logo: "assets/inin-spiral.png",
        Title: "Application Engineer",
        Department: "Professional Services",
        StartDate: new Date(2017, 5, 19),
        EndDate: new Date(),
        Description: [""]
    },
    {
        Company: "Oak Ridge National Laboratory",
        Logo: "assets/ornl.png",
        Title: "SULI Intern",
        Department: "Computational Sciences Research and Development",
        StartDate: new Date(2017, 5, 19),
        EndDate: new Date(),
        Description: [""]
    }
];

m_jobs.forEach(job => {
    job.Label = job.Company + ": " + job.Title;
});

$.fn.populateJobInfo = function(){
    var header = '<div class="tabs"><div class="row">';
    var nav = '<div class="col-4"><nav class="tabs-nav tabs-nav-block">';
    var content = '<div class="col-8">';

    //Add content
    var navItem;
    var contentItem;
    var contentId;
    for (let i = 0; i < m_jobs.length; i++) {
        var job = m_jobs[i];
        contentId = 'job-' + i;
        navItem = '<a href="#' + contentId + '" class="orange">' + job.Label + '</a>';
        contentItem = '<div class="tabs-pane" id="' + contentId + '"><h4>' + job.Department + '</h4></div>';
        
        nav = nav + navItem;
        content = content + contentItem;
    }
    
    var contentClose = '</div>';
    var navClose = '</nav></div>';
    var footer = '</div></div>';

    var ele = header + nav + navClose + content + contentClose + footer;

    $('#experience-container').append(ele);
};