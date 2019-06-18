var m_jobs = [
    {
        Company: "RenPSG",
        Logo: "assets/renpsg.png",
        Title: "Software Engineering Manager",
        Department: "IT - Development",
        StartDate: new Date(2019, 2, 1),
        Description: [
            "Design, execute, utilize and maintain software engineering applications.",
            "Prepare all required Technical Proposal pertinent to software engineering.",
            "Administer support for Business Development, Systems Engineering and SR Technical personnel.",
            "Supervise training and development of software engineering staff.",
            "Assign work to software engineering personnel and evaluate plus manages their performance.",
            "Support to recruit engineering personnel, technical staffing and project teams formation.",
            "Supervise engineering deliverables.",
            "Manages continuing support and provide system metrics for client facing products.",
            "Present practical input for strategic technology decisions.",
            "Support preparation of Technology Roadmap.",
            "Comply with all professional departmental as well as company best practices.",
            "Present project management backup as required.",
            "Help translation of business requirements into technical needs and actions.",
            "Supervise reporting responsibility for independent software contractors, software engineers and outsourcing partners.",
            "Ensure software engineering personnel is suitably trained to perform all job function and suitably use project and software related tools."
        ]
    },
    {
        Company: "RenPSG",
        Logo: "assets/renpsg.png",
        Title: "Software Engineering Team Lead",
        Department: "IT - Development",
        StartDate: new Date(2018, 5, 1),
        EndDate: new Date(2019, 2, 1),
        Description: [
            "Create an inspiring team environment with an open communication culture",
            "Set clear team goals",
            "Delegate tasks and set deadlines",
            "Oversee day-to-day operation",
            "Monitor team performance and report on metrics",
            "Motivate team members",
            "Discover training needs and provide coaching",
            "Listen to team members’ feedback and resolve any issues or conflicts",
            "Recognize high performance and reward accomplishments",
            "Encourage creativity and risk-taking",
            "Suggest and organize team building activities"
        ]
    },
    {
        Company: "RenPSG",
        Logo: "assets/renpsg.png",
        Title: "Senior Software Engineer",
        Department: "IT - Development",
        StartDate: new Date(2017, 5, 1),
        EndDate: new Date(2018, 5, 1),
        Description: [
            "Participate in requirements analysis",
            "Collaborate with internal teams to produce software design and architecture",
            "Write clean, scalable code using .NET programming languages",
            "Test and deploy applications and systems",
            "Revise, update, refactor and debug code",
            "Improve existing software",
            "Develop documentation throughout the software development life cycle (SDLC)",
            "Serve as an expert on applications and provide technical support"
        ]
    },
    {
        Company: "Genesys",
        Logo: "assets/genesys-bubble.png",
        Title: "Software Engineer",
        Department: "Development Services",
        StartDate: new Date(2015, 6, 1),
        EndDate: new Date(2017, 5, 1),
        Description: [
            "",
            "",
            ""
        ]
    },
    {
        Company: "Interactive Intelligence",
        Logo: "assets/inin-cloud.jpg",
        Title: "Senior Implementation Engineer",
        Department: "Professional Services",
        StartDate: new Date(2015, 1, 1),
        EndDate: new Date(2015, 6, 1),
        Description: [
            "Expansion Upon Prior Resonsibilities as Application Developer",
            "Design and Develop Reusable Packaged Solutions",
            "Develop Internal Applications in C#",
            "Lead Technical Project Management Roles"
        ]
    },
    {
        Company: "Interactive Intelligence",
        Logo: "assets/inin-spiral.png",
        Title: "Application Developer",
        Department: "Professional Services",
        StartDate: new Date(2012, 5, 1),
        EndDate: new Date(2015, 1, 1),
        Description: [
            "Design and Develop Custom IVR Solutions",
            "Configure CRM Integrations such as SalesForce, SAP, RightNow, etc.",
            "Technical Requirements Gathering and Authoring",
            "Provide Production Support"
        ]
    },
    {
        Company: "Oak Ridge National Laboratory",
        Logo: "assets/ornl.png",
        Title: "SULI Intern",
        Department: "Computational Sciences Research and Development",
        StartDate: new Date(2011, 4, 1),
        EndDate: new Date(2011, 7, 1),
        Description: [
            "Database Scalability Research",
            "Structural Health Monitoring Research",
            "Linux Virtual Machine Administration",
            "Programming in Perl and Fortran"
        ]
    }
];

m_jobs.forEach(job => {
    job.Label = job.Company + ": " + job.Title;
});

$.fn.populateJobInfo = function(){
    var header = '<div class="tabs"><div class="row">';
    var nav = '<div class="col-12 col-sm-4"><nav class="tabs-nav tabs-nav-block">';
    var content = '<div class="col-12 col-sm-8">';
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
                    '<div class="col-12 col-sm-2">' +
                        '<img src="' + job.Logo + '" height="100" width="100">' +
                    '</div>' +
                    '<div class="col-12 col-sm-10">' +
                        '<h4>' + job.Company + '</h4>' +
                        //'<h4>' + job.Title + ' - ' + job.Department +'</h4>' +
                        '<h6>' + job.Title +'</h6>' +
                        '<h6>' + job.Department +'</h6>' +
                        '<h6>' + monthNames[job.StartDate.getMonth()] + ' ' + job.StartDate.getFullYear() + ' - ' + (job.EndDate === undefined ? "Present" : monthNames[job.EndDate.getMonth()] + ' ' + job.EndDate.getFullYear()) +'</h6>' +
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