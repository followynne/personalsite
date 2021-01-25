import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

const printDate = () => {
    let date = new Date();
    $('#currentYearPrint').append(date.getFullYear());
};

(() => {
  $('.scroll').on('click', (e) => {
    e.preventDefault();
    let link = $(e.target).attr('href');
    if ($(e.target).is('img')) {
      let node = $(e.target).parentsUntil();
      node.each((index) => {
        if ($(node[index]).is('a')) {
          link = $(node[index]).attr('href');
        }
      });
    }
    $('html, body').animate(
      {
        scrollTop: $(link).offset().top,
      },
      1200,
    );
  });

  printDate();

  $(function () {
    $('[data-toggle="popover"]').popover();
  });

  $('#itsCourse').popover({
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
})();
