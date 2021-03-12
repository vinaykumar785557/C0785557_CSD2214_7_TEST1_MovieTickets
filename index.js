var selectBox = form.fieldname;
var selectedValue = selectBox.options[selectBox.selectedIndex].value
var selectedText = selectBox.options[selectBox.selectedIndex].text

function checkForm(form)
  {
    if(form.checkboxfield.checked) {
      alert("You selected seat");
    } else {
      alert("The seat that you are looking is already reserved");
    }
    return false;
  }