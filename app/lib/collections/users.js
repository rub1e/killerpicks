if (Meteor.isServer) {

  Meteor.publish('usersColl', function(){
    return Meteor.users.find({}, {fields : {profile : 0, emails : 0, username : 0, services : 0}});
  });
}
