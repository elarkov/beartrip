
import * as functions from "./modules/functions.js";
import * as sideMenu from "./modules/side-menu.js";
import * as phoneinput from "./modules/phoneinput.js";
import * as slider from "./modules/slider.js";
import * as popup from "./modules/popup.js";
import * as dropdown from "./modules/dropdown.js";
import * as select from "./modules/select.js";
import * as quantity from "./modules/quantity.js";


document.addEventListener('DOMContentLoaded', function () { //dom is ready
  functions.isWebp();
  sideMenu.sideMenu();
  phoneinput.phoneInput();
  slider.renderSlider();
  popup.renderPopup();
  dropdown.dropDown();
  select.select();
  quantity.quantity();
});




