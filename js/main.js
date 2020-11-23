import populateExperienceInfo from './modules/experience.js';

function documentReady(callbackFunction){
  if(document.readyState != 'loading') {
    callbackFunction(event);
  }
  else {
    document.addEventListener("DOMContentLoaded", callbackFunction);
  }
}

documentReady(event => {
  //Years of experience
  var now = new Date();
  var start = new Date(2012, 5, 1);
  var years = new Date(now - start).getFullYear() - 1970;
  document.getElementById('experience-years').textContent = years;
  
  //Experience Module
  populateExperienceInfo();
});

//Feature checks
function featureCheck() {
  var results = true;

  if (!('content' in document.createElement('template'))) {
    results = false;
  } else if (NodeList.prototype.forEach === undefined) {
    results = false;
  }
  return results;
}

if (!featureCheck()) {
  window.location = "/unsupported.html";
}