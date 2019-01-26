var m_jobs = [{
        Company: "RenPSG",
        Logo: "assets/renpsg.png",
        Title: "Software Engineering Team Lead, DFX",
        Department: "IT - Development",
        StartDate: new Date(2018, 5, 1),
        EndDate: new Date(),
        Description: ["Did some stuff", "Some other stuff"]
    },
    {
        Company: "RenPSG",
        Logo: "assets/renpsg.png",
        Title: "Senior Software Engineer",
        Department: "IT - Development",
        StartDate: new Date(2017, 5, 1),
        EndDate: new Date(2018, 5, 1),
        Description: [""]
    },
    {
        Company: "Genesys",
        Logo: "assets/genesys-bubble.png",
        Title: "Software Engineer",
        Department: "Development Services",
        StartDate: new Date(2015, 6, 1),
        EndDate: new Date(2017, 5, 1),
        Description: [""]
    },
    {
        Company: "Interactive Intelligence",
        Logo: "assets/inin-cloud.png",
        Title: "Senior Implementation Engineer",
        Department: "Professional Services",
        StartDate: new Date(2015, 1, 1),
        EndDate: new Date(2015, 6, 1),
        Description: [""]
    },
    {
        Company: "Interactive Intelligence",
        Logo: "assets/inin-spiral.png",
        Title: "Application Developer",
        Department: "Professional Services",
        StartDate: new Date(2012, 5, 1),
        EndDate: new Date(2015, 1, 1),
        Description: [""]
    },
    {
        Company: "Oak Ridge National Laboratory",
        Logo: "assets/ornl.png",
        Title: "SULI Intern",
        Department: "Computational Sciences Research and Development",
        StartDate: new Date(2011, 4, 1),
        EndDate: new Date(2011, 7, 1),
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
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    //Add content
    var navItem;
    var contentId;
    var contentItem;
    for (let i = 0; i < m_jobs.length; i++) {
        var job = m_jobs[i];
        contentId = 'job-' + i;
        navItem = '<a href="#' + contentId + '" class="orange' + (i === 0 ? ' active' : '') + '">' + job.Label + '</a>';
        contentItem = 
            '<div class="tabs-pane' + (i === 0 ? ' active' : '') + '" id="' + contentId + '">' + 
                '<div class="row">' +
                    '<div class="col-2">' +
                        '<img src="' + job.Logo + '" height="100" width="100">' +
                    '</div>' +
                    '<div class="col-10">' +
                        '<h4>' + job.Company + '</h4>' +
                        //'<h4>' + job.Title + ' - ' + job.Department +'</h4>' +
                        '<h6>' + job.Title +'</h6>' +
                        '<h6>' + job.Department +'</h6>' +
                        '<h6>' + monthNames[job.StartDate.getMonth()] + ' ' + job.StartDate.getFullYear() + ' - '+ monthNames[job.EndDate.getMonth()] + ' ' + job.EndDate.getFullYear() +'</h6>' +
                    '</div>' +
                '</div>' +
                '<div class="hr-slim">' +
                    '<hr>' +
                '</div>'
                '<div class="row">' +
                    '<ul>';
        job.Description.forEach(description => {
            contentItem += '<li>' + description + '</li>';
        });
        contentItem += 
                    '</ul>' +
                '</div>';
        
        nav = nav + navItem;
        content = content + contentItem;
    }
    
    var contentClose = '</div>';
    var navClose = '</nav></div>';
    var footer = '</div></div>';

    var ele = header + nav + navClose + content + contentClose + footer;

    $('#experience-container').append(ele);
};