var m_technologies = [
    //Languages
    {
        Title: ".NET/C#",
        Logo: "assets/tech-icons/dotnet.svg",
    },
    {
        Title: "Node.js",
        Logo: "assets/tech-icons/nodejs.svg"
    },
    {
        Title: "Perl",
        Logo: "assets/tech-icons/perl.svg"
    },
    {
        Title: "Java",
        Logo: "assets/tech-icons/java.svg"

        //Databases
    },
    {
        Title: "MySQL",
        Logo: "assets/tech-icons/mysql.svg"

        //Frameworks
    },
    {
        Title: "Express.js",
        Logo: "assets/tech-icons/express.svg"
    },
    {
        Title: "GTK",
        Logo: "assets/tech-icons/gtk.svg"
    },
    {
        Title: "Slick",
        Logo: "assets/tech-icons/slick.svg"
    }
    //Version Control
    //Platform
];

m_technologies.forEach(tech => {
    tech.Html =
        '<div>' +
        '<img src="' + tech.Logo + '" alt="' + tech.Title + '">' +
        '<h6 class="align-center">' + tech.Title + '</h6>' +
        '</div>';
});

$.fn.populateTechInfo = function () {
    var ele = "";
    m_technologies.forEach(tech => {
        ele += tech.Html;
    });
    $(this).append(ele);
};