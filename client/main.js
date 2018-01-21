import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/header.html';
import '../imports/hp.html';
import '../client/aboutUs.html';
import '../client/team.html';
import '../client/FAQ.html';
import '../imports/footer.html';

// import '../imports/team.html';


$(document).ready(function(){
  $(".dropdown-button").dropdown();
  $('.collapsible').collapsible();

});

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
