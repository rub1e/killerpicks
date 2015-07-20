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
