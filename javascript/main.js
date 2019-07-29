import $ from 'jquery'
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

$(document).ready(()=>{
    $('.scroll').on('click', (e) =>  {
        e.preventDefault();
        let link = $(event.target).attr('href');
        if ($(event.target).is('img')){
            let node = $(event.target).parentsUntil();
            node.each((index) => {            
                if ($(node[index]).is('a')){
                        link = $(node[index]).attr('href');
                    }
            });
        }
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 'slow');
    })
})
