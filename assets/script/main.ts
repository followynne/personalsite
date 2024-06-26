import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import { Popover } from 'bootstrap';

const printDate = () => {
  const date = new Date().getFullYear();
  document.getElementById('currentYearPrint')?.append(date.toString());
};

(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      if (anchor && typeof anchor?.getAttribute === 'function') {
        e.preventDefault();
        const attribute = anchor?.getAttribute('href');
        if (!attribute) return;

        document.querySelector(attribute)?.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });

  printDate();

  const popoverItem = document.getElementById('itsCourse');
  if (popoverItem) {
    new Popover(popoverItem, {
      placement: 'auto',
      trigger: 'hover',
      content:
        '.NET Framework / C#, 106hrs' +
        '</br>PHP PROGRAMMING, 106hr' +
        '</br>Programming Fundamentals, 75hr' +
        '</br>JAVA Development, 70hr' +
        '</br>WEB-FRONT-END Development (HTML, CSS, Javascript), 70hr' +
        '</br>CLOUD SERVICES, 70hr' +
        '</br>Databases Fundamentals, 60hr' +
        '</br>Microsoft SQL Server, 68hr' +
        '</br>Non-relational Databases Fundamentals (on MongoDB), 25hr' +
        '</br>DATA WAREHOUSING & DATA ANALYTICS Basics, 20hr' +
        '</br>Mobile & Web Software architecture, 18hr' +
        '</br>Computer Networks, 20hr' +
        '</br>Cyber Security, 20hr' +
        '</br>BACK-END development with Node.Js, 58hr' +
        '</br>INTERACTION DESIGN, VISUAL DESIGN Basics, 44hr' +
        '</br>PROJECT MANAGEMENT Basics, 30hr',
    });
  }
})();
