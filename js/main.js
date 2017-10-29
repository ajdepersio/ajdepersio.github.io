var m_experience = [
  {
    Company = "RenPSG",
    Logo = "assets/renpsg.png",
    Title = "<p><strong>Senior Software Engineer -</strong> IT</p>",
    StartDate = new Date(2017, 5, 19),
    EndDate = new Date(),
    Description = "Blah blah blah blah blah, \nsome stuff that I did \nA new line"
  },
  {
    Company = "Genesys",
    Logo = "assets/genesys-bubble.png",
    Title = "<p><strong>Senior Software Engineer -</strong> IT</p>",
    StartDate = new Date(2017, 5, 19),
    EndDate = new Date(),
    Description = "Blah blah blah blah blah, \nsome stuff that I did \nA new line"
  },
  {
    Company = "Interactive Intelligence",
    Logo = "assets/inin-cloud.png",
    Title = "<p><strong>Senior Software Engineer -</strong> IT</p>",
    StartDate = new Date(2017, 5, 19),
    EndDate = new Date(),
    Description = "Blah blah blah blah blah, \nsome stuff that I did \nA new line"
  },
  {
    Company = "Oak Ridge National Laboratory",
    Logo = "assets/ornl.png",
    Title = "<p><strong>SULI Intern -</strong> Computational Sciences Research and Development</p>",
    StartDate = new Date(2017, 5, 19),
    EndDate = new Date(),
    Description = "Blah blah blah blah blah, \nsome stuff that I did \nA new line"
  }
];

function populateJobExperience() {
  var container = $('#experience-row');
  
  var ele;
  for (var i = 0; i < m_experience.Count; i++) {
    ele = "<div";
  }
};

var onResize = function() {
  // apply dynamic padding at the top of the body according to the fixed navbar height
  $("#document_container").css("padding-top", $(".navbar-fixed-top").height());
};

// attach the function to the window resize event
$(window).resize(onResize);

// call it also when the page is ready after load or reload
$(function() {
  onResize();
});

var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);