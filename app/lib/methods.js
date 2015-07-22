/*****************************************************************************/
/* Client and Server Methods */
/*****************************************************************************/
Meteor.methods({
  "createLeague" : function(name, week){
    return Leagues.insert({
      leagueName: name,
      players: [{playerId : this.userId, livesLeft : 3, choices : []}],
      created: new Date(),
      starting: new Date(week),
      status: "pending"
    });
  },

  "enterLeague" : function(code){
    var entry = Leagues.find({_id : code}).fetch()[0];
    var players;

    if(entry) {
      players = entry.players;

      for(var i = 0; i < players.length; i += 1) {
        if (players[i].playerId === this.userId) {
          return "already in league";
        }
      }

      return Leagues.update({_id : code}, {$push:{
        players : {playerId : this.userId, livesLeft : 3, choices : []}
      }}, function(err, res){
        return "added";
      });
    } else {return "no league";}
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
