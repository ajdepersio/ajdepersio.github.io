//Feature checks
function supportsTemplate() {
  return 'content' in document.createElement('template');
}

if (supportsTemplate()) {
  //alert('Templates supported');
} else {
  // Use old templating techniques or libraries.
  //alert('Templates not supported');
}

$(document).ready(function() {
  $('#carousel').populateTechInfo();
  $('#carousel').slick({
    arrows: false,
    slidesToShow: 7,
    autoplay: true,
    slidesToScroll: 3,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }
    ]
  });
    
  //Years of experience
  var now = new Date();
  var start = new Date(2012, 5, 1);
  var years = new Date(now - start).getFullYear() - 1970;
  $('#experience-years').text(years);

  $('#experience-container').populateJobInfo();
  
});