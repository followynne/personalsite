/* eslint-disable @typescript-eslint/no-unused-vars */
import * as bts from 'bootstrap';

const dropdownElementList = [].slice.call(
  document.querySelectorAll('.dropdown-toggle'),
);
const dropdownList = dropdownElementList.map(
  (dropdownToggleEl) => new bts.Dropdown(dropdownToggleEl),
);

const scrollSpy = new bts.ScrollSpy(document.body, {
  target: '#navbar-toc',
});
