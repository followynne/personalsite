/* eslint-disable @typescript-eslint/no-unused-vars */
import * as bts from 'bootstrap';

const dropdownElementList = [].slice.call(
  document.querySelectorAll('.dropdown-toggle'),
);
const _ = dropdownElementList.map(
  (dropdownToggleEl) => new bts.Dropdown(dropdownToggleEl),
);

const __ = new bts.ScrollSpy(document.body, {
  target: '#navbar-toc',
});
