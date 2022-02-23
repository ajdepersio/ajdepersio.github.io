import Experience from '../models/experience.js';

const ExperienceData = [
    new Experience(
        "Indiana University Health",
        "assets/companies/iu-health.png",
        "Senior Software Engineer",
        "Enterprise Business Applications",
        new Date(2021, 0, 1),
        undefined, [
            "Did some stuff",
            "Did some other stuff"
        ]
    ),
    new Experience(
        "RenPSG",
        "assets/companies/renpsg.png",
        "Software Engineering Manager",
        "IT - Development",
        new Date(2019, 2, 1),
        new Date(2021, 0, 1), [
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
    ),
    new Experience(
        "RenPSG",
        "assets/companies/renpsg.png",
        "Software Engineering Team Lead",
        "IT - Development",
        new Date(2018, 5, 1),
        new Date(2019, 2, 1), [
            "Create an inspiring team environment with an open communication culture",
            "Set clear team goals",
            "Delegate tasks and set deadlines",
            "Oversee day-to-day operation",
            "Monitor team performance and report on metrics",
            "Discover training needs and provide coaching",
            "Listen to team member feedback and resolve any issues or conflicts",
            "Recognize high performance and reward accomplishments",
            "Encourage creativity and risk-taking",
            "Suggest and organize team building activities"
        ]
    ),
    new Experience(
        "RenPSG",
        "assets/companies/renpsg.png",
        "Senior Software Engineer",
        "IT - Development",
        new Date(2017, 5, 1),
        new Date(2018, 5, 1), [
            "Participate in requirements analysis",
            "Collaborate with internal teams to produce software design and architecture",
            "Write clean, scalable code using .NET programming languages",
            "Test and deploy applications and systems",
            "Revise, update, refactor and debug code",
            "Improve existing software",
            "Develop documentation throughout the software development life cycle (SDLC)",
            "Serve as an expert on applications and provide technical support"
        ]
    ),
    new Experience(
        "Genesys",
        "assets/companies/genesys-bubble.png",
        "Software Engineer",
        "Development Services",
        new Date(2015, 6, 1),
        new Date(2017, 5, 1), [
            "Design, consultation, and development of custom applications, services, and web applications.",
            "Programming in C#/.NET, HTML/CSS/JS, and Ember.js",
            "Requirements gathering and FRS authoring"
        ]
    ),
    new Experience(
        "Interactive Intelligence",
        "assets/companies/inin-cloud.jpg",
        "Senior Implementation Engineer",
        "Professional Services",
        new Date(2015, 1, 1),
        new Date(2015, 6, 1), [
            "Expansion Upon Prior Resonsibilities as Application Developer",
            "Design and Develop Reusable Packaged Solutions",
            "Develop Internal Applications in C#",
            "Lead Technical Project Management Roles"
        ]
    ),
    new Experience(
        "Interactive Intelligence",
        "assets/companies/inin-spiral.png",
        "Application Developer",
        "Professional Services",
        new Date(2012, 5, 1),
        new Date(2015, 1, 1), [
            "Design and Develop Custom IVR Solutions",
            "Configure CRM Integrations such as SalesForce, SAP, RightNow, etc.",
            "Technical Requirements Gathering and Authoring",
            "Provide Production Support"
        ]
    ),
    new Experience(
        "Oak Ridge National Laboratory",
        "assets/companies/ornl.png",
        "SULI Intern",
        "Computational Sciences Research and Development",
        new Date(2011, 4, 1),
        new Date(2011, 7, 1), [
            "Database Scalability Research",
            "Structural Health Monitoring Research",
            "Linux Virtual Machine Administration",
            "Programming in Perl and Fortran"
        ]
    )
];

export default ExperienceData;