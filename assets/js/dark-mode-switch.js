/*!
* Dark Mode Switch
* https://github.com/coliff/dark-mode-switch
* Released under the MIT License.
* Modified by hawkeye116477
* Thanks for https://github.com/popoway/dark-mode-switch/commit/c11cd31f39056d47cdd354e6796dcc2bc4c7b921
*/

const systemPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const darkThemeSelected =
  localStorage.getItem('darkSwitch') !== null &&
  localStorage.getItem('darkSwitch') === 'dark';
const lightThemeSelected =
  localStorage.getItem('darkSwitch') !== null &&
  localStorage.getItem('darkSwitch') === 'light';
if (darkThemeSelected) {
  document.body.setAttribute('data-theme', 'dark');
}
else if (systemPrefersDarkMode && !lightThemeSelected) {
  document.body.setAttribute('data-theme', 'dark');
}
else {
  document.body.removeAttribute('data-theme');
}


window.addEventListener('load', () => {
  var darkSwitch = document.getElementById('darkSwitch');
  if (darkSwitch) {
    if (darkThemeSelected) {
      darkSwitch.checked = true;
      darkSwitch.bootstrapToggle('on');
    }
    else if (systemPrefersDarkMode && !lightThemeSelected) {
      darkSwitch.checked = true;
      darkSwitch.bootstrapToggle('on');
    }
    else {
      darkSwitch.checked = false;
    }
    darkSwitch.addEventListener('change', () => {
      resetTheme();
    });
  }
});

/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}
 */
function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkSwitch', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('darkSwitch', 'light');
  }
}
