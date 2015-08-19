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

  "playerLeaguesArray" : function(playerId){
    var user = playerId ? playerId : Meteor.userId();
    var userLeagues = Meteor.users.find({_id:user}).fetch()[0].profile.leaguesMemberOf;
    var objArr = Leagues.find({_id : {$in : userLeagues}}).fetch();
    return objArr;
  },

  "makeChoice" : function(team, leagueId, playerId){
    var user = playerId ? playerId : Meteor.userId();
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
    var deadlineDate = new Date(obj.gameWeek).setHours(obj.deadline[0], obj.deadline[1]);
    var entry = obj;
    entry.deadline = deadlineDate;
    Reality.insert(entry, function(err, res){
      var wait = deadlineDate - Date.now();
      console.log("wait", wait);
      Meteor.setTimeout(Meteor.call("afterDeadline"), wait);
    });
  },

  "getFullName" : function(id){
    var userEntry = Meteor.users.findOne({_id : id},{fields : {"profile.firstName" : 1, "profile.lastName" : 1}});
    return userEntry.profile.firstName + " " + userEntry.profile.lastName;
  },

  "sendMandrillEmail" : function(email, content) {
    Mandrill.messages.sendTemplate({
      "template_name" : email.template,
      "template_content" : [{}],
      "message" : {
        "to" : email.recipients,
        "global_merge_vars" : content.globalMergeVars,
        "track_clicks" : true,
        "track_opens" : true
      }
    });
  },

  "setViewChoice" : function(bool){
    Status.upsert({}, {$set : {displayChoices : bool}});
  },

  "afterDeadline" : function(deadline){
    console.log("afterDeadline");
    Meteor.call("randomPickSweep", function(err, res){
      Meteor.call("setViewChoice", true);
    });
  },

  "randomPickSweep" : function(){
    var allActiveLeagues = Leagues.find({status : "active"}, {fields : {players : 1, round : 1}}).fetch();
    var allActiveLeaguesLength = allActiveLeagues.length;

    //cycle through all active leagues
    for(var i = 0; i < allActiveLeaguesLength; i += 1) {
      var league = allActiveLeagues[i];
      var round = league.round;
      //cycle through players in leagues
      for(var j = 0; j < league.players.length; j += 1) {
        var player = league.players[j];
        var choices = player.choices;
        //check if alive players have made their choices
        if(round > choices.length && player.roundDied === 0) {
          //get list of unchosen teams
          var teamsLeft = pLTeams.filter(function(a){
            return choices.indexOf(a) < 0;
          });
          var randomIndex = Math.round(Math.random() * (teamsLeft.length - 1));
          var randomChoice = teamsLeft[randomIndex];
          Meteor.call("makeChoice", randomChoice, league._id, player.playerId);
        }
      }
    }
  },

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
