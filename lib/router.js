Router.configure ({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  //TODO notFoundTemplate: '',
  //TODO waitOn: function () { return Meteor.subscribe ();}
});

Router.onBeforeAction ('loading');

Router.route ('/', function () {
  this.render ('home');
}, {
  name: 'home',
});
