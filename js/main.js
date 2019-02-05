$(document).ready(function() {
  //Years of experience
  var now = new Date();
  var start = new Date(2012, 5, 1);
  var years = new Date(now - start).getFullYear() - 1970;
  $('#experience-years').text(years);

  $('#experience-container').populateJobInfo();
});