var nameEl = document.getElementById('name');
var bodyEl = document.getElementById('body');
var subEl = document.getElementById('submit');

nameEl.addEventListener('keyup', function(e) {
  var nameElValue = nameEl.value;
  var bodyElValue = bodyEl.value;
  if(nameElValue && bodyElValue) {
    subEl.disabled = false;
  } else {
    subEl.disabled = true;
  }
});

bodyEl.addEventListener('keyup', function(e) {
  var nameElValue = nameEl.value;
  var bodyElValue = bodyEl.value;
  if(nameElValue && bodyElValue) {
    subEl.disabled = false;
  } else {
    subEl.disabled = true;
  }
});
