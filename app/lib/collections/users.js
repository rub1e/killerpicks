if (Meteor.isServer) {

  Meteor.publish('usersColl', function(){
    return Meteor.users.find({}, {fields : {"profile.firstName" : 1, "profile.lastName" : 1}});
  });
}
