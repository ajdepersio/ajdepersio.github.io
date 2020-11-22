var m_jobs = [
    {
        Company: "RenPSG",
        Logo: "assets/companies/renpsg.png",
        Title: "Software Engineering Manager",
        Department: "IT - Development",
        StartDate: new Date(2019, 2, 1),
        Description: [
            "Design, execute, utilize and maintain software engineering applications.",
            "Prepare all required Technical Proposal pertinent to software engineering.",
            "Administer support for Business Development, Systems Engineering and IT Technical personnel.",
            "Supervise training and development of software engineering staff.",
            "Assign work to software engineering personnel and evaluate performance.",
            "Support to recruit engineering personnel, technical staffing and project teams formation.",
            "Supervise engineering deliverables.",
            "Manages continuing support and provide system metrics for client facing products.",
            "Present practical input for strategic technology decisions.",
            "Support preparation of Technology Roadmap.",
            "Present project management backup as required.",
            "Help translation of business requirements into technical needs and actions.",
            "Supervise reporting responsibility for independent software contractors, software engineers and outsourcing partners."
        ]
    },
    {
        Company: "RenPSG",
        Logo: "assets/companies/renpsg.png",
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
            "Discover training needs and provide coaching",
            "Listen to team members’ feedback and resolve any issues or conflicts",
            "Recognize high performance and reward accomplishments",
            "Encourage creativity and risk-taking",
            "Suggest and organize team building activities"
        ]
    },
    {
        Company: "RenPSG",
        Logo: "assets/companies/renpsg.png",
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
        Logo: "assets/companies/genesys-bubble.png",
        Title: "Software Engineer",
        Department: "Development Services",
        StartDate: new Date(2015, 6, 1),
        EndDate: new Date(2017, 5, 1),
        Description: [
            "Design, consultation, and development of custom applications, services, and web applications.",
            "Programming in C#/.NET, HTML/CSS/JS, and Ember.js",
            "Requirements gathering and FRS authoring"
        ]
    },
    {
        Company: "Interactive Intelligence",
        Logo: "assets/companies/inin-cloud.jpg",
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
        Logo: "assets/companies/inin-spiral.png",
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
        Logo: "assets/companies/ornl.png",
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

function populateJobInfo() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    for (let i = 0; i < m_jobs.length; i++) {
        var job = m_jobs[i];
        //nav-items
        var navItemTemplate = document.querySelector('#experience-nav-item-template').content;
        var anchor = navItemTemplate.querySelector('a');
        anchor.textContent = job.Label;
        anchor.href = "#job-" + i;
        document.querySelector('#experience-nav-bar').appendChild(
            document.importNode(navItemTemplate, true)
        );
        //tab-items
        var tabItemTemplate = document.querySelector('#experience-tab-item-template').content;
        var tabPane = tabItemTemplate.querySelector('.tabs-pane');
        tabPane.id = "job-" + i;

        var image = tabItemTemplate.querySelector('.experience-image');
        var company = tabItemTemplate.querySelector('.experience-company');
        var title = tabItemTemplate.querySelector('.experience-title');
        var department = tabItemTemplate.querySelector('.experience-department');
        var dates = tabItemTemplate.querySelector('.experience-dates');
        
        image.src = job.Logo;
        company.textContent = job.Company;
        title.textContent = job.Title;
        department.textContent = job.Department;
        dates.textContent = monthNames[job.StartDate.getMonth()] + ' ' + job.StartDate.getFullYear() + ' - ' + (job.EndDate === undefined ? "Present" : monthNames[job.EndDate.getMonth()] + ' ' + job.EndDate.getFullYear());
        //job description
        var ul = tabItemTemplate.querySelector('.tabs-pane ul');
        job.Description.forEach(description => {    
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(description));
            ul.appendChild(li);
        });
        
        
        document.querySelector('#experience-tabs').appendChild(
            document.importNode(tabItemTemplate, true)
        );
        //HACK: clear out the ul element from previous iterations, otherwise they duplicate across jobs
        ul.innerHTML = "";
    }
    document.querySelector('#experience-nav-bar a').classList.add("active");
    document.querySelector('#experience-tabs .tabs-pane').classList.add("active");
};