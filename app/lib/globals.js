pLTeams = ["Arsenal", "Aston Villa", "Bournemouth", "Chelsea", "Crystal Palace", "Everton", "Leicester City", "Liverpool", "Manchester City", "Manchester United", "Newcastle United", "Norwich City", "Southampton", "Stoke City", "Sunderland", "Swansea City", "Tottenham Hotspur", "Watford", "West Bromwich Albion", "West Ham United"];

pLTeamsAbbrev = {"Arsenal" : "ARS", "Aston Villa" : "AVL", "Bournemouth" : "BOU", "Chelsea" : "CHE", "Crystal Palace" : "CPL", "Everton" : "EVE", "Leicester City" : "LEI", "Liverpool" : "LIV", "Manchester City" : "MCI", "Manchester United" : "MUN", "Newcastle United" : "NEW", "Norwich City" : "NOR", "Southampton" : "SOU", "Stoke City" : "STK", "Sunderland" : "SUN", "Swansea City" : "SWA", "Tottenham Hotspur" : "TOT", "Watford" : "WAT", "West Bromwich Albion" : "WBA", "West Ham United" : "WHU"};

pLGameweeks = ["2015-Aug-08",
"2015-Aug-16",
"2015-Aug-23",
"2015-Aug-30",
"2015-Sep-06",
"2015-Sep-13",
"2015-Sep-20",
"2015-Sep-27",
"2015-Oct-04",
"2015-Oct-11",
"2015-Oct-18",
"2015-Oct-25",
"2015-Nov-01",
"2015-Nov-08",
"2015-Nov-15",
"2015-Nov-22",
"2015-Nov-29",
"2015-Dec-06",
"2015-Dec-13",
"2015-Dec-20",
"2015-Dec-27",
"2016-Jan-03",
"2016-Jan-10",
"2016-Jan-17",
"2016-Jan-24",
"2016-Jan-31",
"2016-Feb-07",
"2016-Feb-14",
"2016-Feb-21",
"2016-Feb-28",
"2016-Mar-06",
"2016-Mar-13",
"2016-Mar-20",
"2016-Mar-27",
"2016-Apr-03",
"2016-Apr-10",
"2016-Apr-17",
"2016-Apr-24",
"2016-May-01",
"2016-May-08",
"2016-May-15",
"2016-May-22",
"2016-May-29",
"2016-Jun-05"];

currentGameweek = function(){
  return pLGameweeks.filter(function(a){
    return Date.parse(a) + 86300000 > Date.now();
  })[0];
};

nextGameweek = function(){
  return pLGameweeks.filter(function(a){
    return Date.parse(a) + 86300000 > Date.now();
  })[1];
};
