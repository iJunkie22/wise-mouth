
function getID(id_str) {
  return document.getElementById(id_str);
}



var btnSubmit = getID("btnSubmit");
var divGame = getID("game");


btnSubmit.addEventListener('click', validateThenSubmit, false);

function validateThenSubmit(evt) {
    var targetForm = evt.target.form;
    var isValid = true;
    //targetForm.resetErrorState();

    evt.preventDefault();

    //isValid = readForms(targetForm);

    if (isValid) {
      targetForm.addClassName("displaynone");
      divGame.removeClassName("displaynone");
        //sendRequest(JSON.stringify(isValid));
        // targetForm.submit()
        
    }
}


