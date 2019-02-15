'use strict';

var clicks = 0;

document.addEventListener('click', function (some_cool_click) {
    if (some_cool_click.target.tagName === 'H2') {
        clicks++;
        console.log(clicks);
    }
    // console.log(some_cool_click);
});

var handle_mouse_over = function (e) {
    console.log(e.target);
};

// document.addEventListener('mouseover', handle_mouse_over);

var input = document.getElementById('input-to-change');

input.addEventListener('change', function (form_event) {
    console.log(form_event.target.value);
});



button.addEventListener('click', handle_button_press);


//event fires off and chrome tracks it as an object
// finds functions tied to it;
// gives the event to those functions as their first argument;


// =============================

var form = document.getElementById; ("survay")

form.addEventListener('submit', function (formSubmit) {
    formSubmit.preventDefault();
    console.log(formSubmit);
    console.log(formSubmit.target.survay.value);
    var visit = formSubmit.target.visit.value;
    var quality = formSubmit.target.quality.value;
    var emp = formSubmit.target.emp.value;
    var clenliness = formSubmit.target.clenliness.value;
    console.log({
        visit: visit,
        quality: quality,
        emp: emp,
        clenliness: clenliness,
    });
});

var handle_form_imput = function (form_event) {
    form_event.preventDefault();
    
    var name = event.target.name.value
    var min_cust= event.target.min_customers.value;
    var max_cust = event.target.max_customers.value;
    var opentime = event.target.opentime.value;
    var closetime = event.target.closetime.value;
    var Avg_cookies_cust = event.target.Avg_cookies_cust.value;

    var newstore = new Store(name, location, min_cust, max_cust, opentime , closetime , Avg_cookies_cust)
}