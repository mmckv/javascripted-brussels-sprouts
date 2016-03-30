var gameInfo = function() {
  return [{
    home_team: "Patriots",
    away_team: "Broncos",
    home_score: 7,
    away_score: 3
  }, {
    home_team: "Broncos",
    away_team: "Colts",
    home_score: 3,
    away_score: 0
  }, {
    home_team: "Patriots",
    away_team: "Colts",
    home_score: 11,
    away_score: 7
  }, {
    home_team: "Steelers",
    away_team: "Patriots",
    home_score: 7,
    away_score: 21
  }];
};

var gameData = gameInfo();
// YOUR CODE HERE
function team(name, rank, wins, losses) {
  this.name = name;
  this.rank = 0;
  this.wins = 0;
  this.losses = 0;
}

var teamName = function(array) {
  var allTeams = [];
  var uniqueTeams = [];
  for (i = 0; i < array.length; i++) {
    allTeams.push(array[i].home_team);
    allTeams.push(array[i].away_team);
  }

  for (var i in allTeams) {
    if (uniqueTeams.indexOf(allTeams[i]) === -1) {
      uniqueTeams.push(allTeams[i]);
    }
  }

  var teams = [];
  for (i = 0; i < uniqueTeams.length; i++) {
    teams.push(new team(name = uniqueTeams[i]));
  }
  return teams;
};

var teamObjects = teamName(gameInfo());

var winsLosses = function(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < teamObjects.length; j++) {
      if (array[i].home_score > array[i].away_score && teamObjects[j].name === array[i].home_team) {
        teamObjects[j].wins++;
      } else if (array[i].home_score > array[i].away_score && teamObjects[j].name === array[i].away_team) {
        teamObjects[j].losses++;
      }

      if (array[i].home_score < array[i].away_score && teamObjects[j].name === array[i].home_team) {
        teamObjects[j].losses++;
      } else if (array[i].home_score < array[i].away_score && teamObjects[j].name === array[i].away_team) {
        teamObjects[j].wins++;
      }
    }
  }
  return teamObjects;
};

var teamSort = winsLosses(gameData).slice(0);

teamSort.sort(function(a, b) {
  return b.wins - a.wins || a.losses - b.losses;
});

var rank = function() {
  for (var i = 0; i < teamSort.length; i++) {
    teamSort[i].rank = i + 1;
  }
  return teamSort;
};

console.log(rank(teamSort));
