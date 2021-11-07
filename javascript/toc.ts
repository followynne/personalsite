// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Dropdown, ScrollSpy } from 'bootstrap';

const dropdownElementList = [].slice.call(
  document.querySelectorAll('.dropdown-toggle'),
);
const dropdownList = dropdownElementList.map(
  (dropdownToggleEl) => new Dropdown(dropdownToggleEl),
);

const scrollSpy = new ScrollSpy(document.body, {
  target: '#navbar-toc',
});
