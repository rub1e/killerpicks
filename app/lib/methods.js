/*****************************************************************************/
/* Client and Server Methods */
/*****************************************************************************/
Meteor.methods({
  "createLeague" : function(name, week){
    var user = Meteor.userId();

    return Leagues.insert({
      leagueName: name,
      players: [{playerId : user, livesLeft : 3, choices : []}],
      created: new Date(),
      starting: new Date(week),
      status: "pending",
      round: 0
    }, function(err, res){
      if(!err){
        Meteor.users.update({_id : user}, {$push : {
           "profile.leaguesMemberOf" : res
        }}, function(error, result){
          return res;
        });
      }
    });
  },

  "enterLeague" : function(code){
    var entry = Leagues.find({_id : code}).fetch()[0];
    var user = Meteor.userId();
    var players;

    if(entry) {
      players = entry.players;

      for(var i = 0; i < players.length; i += 1) {
        if (players[i].playerId === user) {
          return "already in league";
        }
      }

      return Leagues.update({_id : code}, {$push:{
        players : {playerId : user, livesLeft : 3, choices : []}
      }}, function(err, res){
        return Meteor.users.update({_id : user}, {$push : {
           "profile.leaguesMemberOf" : code
        }}, function(err, res){
          console.log("error", err);
        });
      });
    } else {return "no league";}
  },

  "playerLeaguesArray" : function(){
    var user = Meteor.userId();
    var userLeagues = Meteor.users.find({_id:user}).fetch()[0].profile.leaguesMemberOf;
    console.log("userLeagues", userLeagues);

    var objArr = Leagues.find({_id : {$in : userLeagues}}).fetch();
    console.log("objArr", objArr);
    return objArr;
  }
});



/*
 * Example:
 *
 * '/app/items/insert': function (item) {
 *  if (this.isSimulation) {
 *    // do some client stuff while waiting for
 *    // result from server.
 *    return;
 *  }
 *
 *  // server method logic
 * }
 */
