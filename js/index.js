const checkBoxes = document.querySelectorAll('input[type=checkbox]');
checkBoxes.forEach(checkBox => {
  checkBox.addEventListener('click', handleChecked)
});
let lastChecked;

function handleChecked(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkBoxes.forEach(checkBox => {
      if (checkBox === this || checkBox === lastChecked) {
        inBetween = !inBetween;
      }
      
      if (inBetween) {
        checkBox.checked = true;
      }
    })
  }
  lastChecked = this;
}