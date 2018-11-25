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
    var now = new Date().toISOString();
    var rowId = "row-" + now;
    //build base tab column
    var navId = "nav-" + now;
    $(this).append('<div class="tabs"><div id="' + rowId + '" class="row"><div class="col-4"><nav id="' + navId + '" class="tab-nav tabs-nav-block"></nav></div></div></div>');

    //build base content column
    var contentId = "content-" + now;
    $('#' + rowId).append('<div id="' + contentId + '" class="col-8"></div>');

    //Add content
    var ele;
    var navEle = $('#' + navId);
    m_jobs.forEach(job => {
        ele = "<a href='tab1'>" + job.Label + "</a>";
        $(navEle).append(ele);
    });
};