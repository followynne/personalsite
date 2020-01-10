import $ from 'jquery'
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

$(document).ready(() => {
    $('.scroll').on('click', (e) => {
        e.preventDefault();
        let link = $(event.target).attr('href');
        if ($(event.target).is('img')) {
            let node = $(event.target).parentsUntil();
            node.each((index) => {
                if ($(node[index]).is('a')) {
                    link = $(node[index]).attr('href');
                }
            });
        }
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 'slow');
    })
    let date = new Date();
    $("#yearr").append(date.getFullYear());

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    $('#itsCourse').popover({
        content: ".NET Framework/C#, 106hr"
            + "</br>PHP PROGRAMMING, 106hr"
            + "</br>FONDAMENTI DI PROGRAMMAZIONE, 75hr"
            + "</br>PROGRAMMAZIONE IN JAVA, 70hr"
            + "</br>PROGRAMMAZIONE WEB-FRONT-END(HTML, CSS, Javascript), 70hr"
            + "</br>CLOUD SERVICES, 70hr"
            + "</br>FONDAMENTI DI BASI DI DATI, 60hr"
            + "</br>Microsoft SQL Server, 68hr"
            + "</br>BASI DI DATI NON RELAZIONALI (NOSQL), 25hr"
            + "</br>FONDAMENTI DI DATA WAREHOUSING E DATA ANALYTICS, 20hr"
            + "</br>ARCHITETTURE SOFTWARE PER MOBILE E WEB, 18hr"
            + "</br>RETI DI CALCOLATORI, 20hr"
            + "</br>SICUREZZA INFORMATICA, 20hr"
            + "</br>SVILUPPO BACK-END IN NODE.JS, 58hr"
            + "</br>INTERACTION DESIGN, VISUAL DESIGN E PROGETTAZIONE CONCETTUALE, 44hr"
            + "</br>PIATTAFORMA E-COMMERCE MAGENTO, 75hr"
            + "</br>FONDAMENTI DI PROGRAMMAZIONE DI APPLICAZIONI MOBILE (ANDROID/IOS), 60hr"
            + "</br>METODOLOGIE E STRUMENTI DI PROJECT MANAGEMENT, 30hr"
            + "</br>COPYRIGHT E NORME GIURIDICHE DEL MONDO DIGITALE, 20hr"


    })

})
