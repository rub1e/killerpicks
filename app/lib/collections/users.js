if (Meteor.isServer) {

  Meteor.publish('usersColl', function(){
    return Meteor.users.find({}, {fields : {profile : 0, emails : 0}});
  });
}
