/*****************************************************************************/
/* Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
  "createLeague" : function(name, week, finance){
    var user = Meteor.userId();
    if(finance === ""){
      finance = 0;
    }
    return Leagues.insert({
      leagueName: name,
      created: new Date(),
      starting: new Date(week),
      status: "pending",
      round: 1  ,
      payment : finance,
      players: [{playerId : user, livesLeft : 3, roundDied : 0, choices : []}],
      winners : []
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
    var entry = Leagues.findOne({_id : code});
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
        players : {playerId : user, livesLeft : 3, roundDied : 0, choices : []}
      }}, function(err, res){
        return Meteor.users.update({_id : user}, {$push : {
           "profile.leaguesMemberOf" : code
        }}, function(err, res){
          if(entry.round === 0){
            Leagues.update({_id : code}, {$set:{
              round : 1
            }});
          }
        });
      });
    } else {return "no league";}
  },

  "playerLeaguesArray" : function(){
    var user = Meteor.userId();
    var userLeagues = Meteor.users.find({_id:user}).fetch()[0].profile.leaguesMemberOf;
    var objArr = Leagues.find({_id : {$in : userLeagues}}).fetch();
    return objArr;
  },

  "makeChoice" : function(team, leagueId){
    var user = Meteor.userId();
    Leagues.update({_id : leagueId, "players.playerId" : user}, {$push : {
       "players.$.choices" : team
    }});
  },

  "declareSingleWinner" : function(league, playerId){
    console.log("league ", league, "player ", playerId);
    Leagues.update({_id : league}, {$push: {
      winners : playerId
    }});
    Leagues.update({_id : league}, {$set : {
      status : "ended"
    }});
  },

  "declareManyWinners" : function(league, playersArray){
    console.log("league ", league, "players ", playersArray);
    for(var i = 0; i < playersArray.length; i += 1){
      Leagues.update({_id : league}, {$push: {
        winners : playersArray[i].playerId
      }});
    }
    Leagues.update({_id : league}, {$set : {
      status : "ended"
    }});
  },

  "inputGames" : function(obj) {
    Reality.insert(obj);
  },

  "getPlayerName" : function(id){
    var entry = Meteor.users.findOne({_id : id},{fields : {"profile.firstName" : 1, "profile.lastName" : 1}}, function(err, res){
      return res.profile.firstName + " " + res.profile.lastName;
    });
    console.log("entry", entry);
    return entry;
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
