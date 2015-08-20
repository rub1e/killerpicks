Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/reality', function () {
  if(Roles.userIsInRole(Meteor.user(), "admin")) {
    this.render('InputReality');
  } else {
    this.render("NoPermission");
  }
});

Router.route('/winners', function () {
  if(Roles.userIsInRole(Meteor.user(), "admin")) {
    this.render('Winners');
  } else {
    this.render("NoPermission");
  }
});
