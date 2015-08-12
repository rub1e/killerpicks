pLTeams = ["Arsenal", "Aston Villa", "Bournemouth", "Chelsea", "Crystal Palace", "Everton", "Leicester City", "Liverpool", "Manchester City", "Manchester United", "Newcastle United", "Norwich City", "Southampton", "Stoke City", "Sunderland", "Swansea City", "Tottenham Hotspur", "Watford", "West Bromwich Albion", "West Ham United"];

pLTeamsAbbrev = {"Arsenal" : "ARS", "Aston Villa" : "AVL", "Bournemouth" : "BOU", "Chelsea" : "CHE", "Crystal Palace" : "CPL", "Everton" : "EVE", "Leicester City" : "LEI", "Liverpool" : "LIV", "Manchester City" : "MCI", "Manchester United" : "MUN", "Newcastle United" : "NEW", "Norwich City" : "NOR", "Southampton" : "SOU", "Stoke City" : "STK", "Sunderland" : "SUN", "Swansea City" : "SWA", "Tottenham Hotspur" : "TOT", "Watford" : "WAT", "West Bromwich Albion" : "WBA", "West Ham United" : "WHU"};

pLGameweeks = ["2015-Aug-08",
"2015-Aug-14",
"2015-Aug-22",
"2015-Aug-29",
"2015-Sep-05",
"2015-Sep-12",
"2015-Sep-19",
"2015-Sep-26",
"2015-Oct-03",
"2015-Oct-10",
"2015-Oct-17",
"2015-Oct-24",
"2015-Oct-31",
"2015-Nov-07",
"2015-Nov-14",
"2015-Nov-21",
"2015-Nov-28",
"2015-Dec-05",
"2015-Dec-12",
"2015-Dec-19",
"2015-Dec-26",
"2016-Jan-02",
"2016-Jan-09",
"2016-Jan-16",
"2016-Jan-23",
"2016-Jan-30",
"2016-Feb-06",
"2016-Feb-13",
"2016-Feb-20",
"2016-Feb-27",
"2016-Mar-05",
"2016-Mar-12",
"2016-Mar-19",
"2016-Mar-26",
"2016-Apr-02",
"2016-Apr-09",
"2016-Apr-16",
"2016-Apr-23",
"2016-Apr-30",
"2016-May-07",
"2016-May-14",
"2016-May-21",
"2016-May-28",
"2016-Jun-04"];

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
