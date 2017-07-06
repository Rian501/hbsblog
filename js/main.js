'use strict';

let $ = require('jquery');
let Handlebars = require('hbsfy/runtime');

let testTemplate = require('../templates/test.hbs');
let blogTemplate = require('../templates/blog.hbs');


//$(".output").append(testTemplate());


$.ajax({
	url: `data/blog.json`
})
.done( function(data) {
	console.log("ajax came back", data);
  $(".output").append(blogTemplate(data));
});

Handlebars.registerPartial("nav", require('../templates/partials/navbar.hbs'));
Handlebars.registerPartial("footer", require('../templates/partials/footer.hbs'));
