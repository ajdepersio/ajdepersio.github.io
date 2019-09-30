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

function populateTechInfo() {
    m_technologies.forEach(tech => {
        var carouselItemTemplate = document.querySelector('#carousel-item-template').content;
        var image = carouselItemTemplate.querySelector('img');
        var header = carouselItemTemplate.querySelector('h6');

        image.src = tech.Logo;
        image.alt = tech.Title;
        header.textContent = tech.Title;

        document.querySelector('#carousel').appendChild(
            document.importNode(carouselItemTemplate, true)
        );
    });
}