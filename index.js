import { fifaData } from './fifa.js'
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const wcf = fifaData.filter(match => match.Stage === 'Final' && match.Year === 2014)[0];
console.log(wcf[0]["homeName"]);
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(data) {

    const finals = data.filter(match => match.stage === 'final');
    return finals;
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
fuction getYears (cb, data) 
    return cb(data).map(match => match.Year);



console.log(getYears(getFinals, fifaData));






/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(cb)
const winners = cb(fifaData).map(match =>
    if (match['Home Team Goals'] > match["Away Team Goals"]) {
    {
        return match["Home Team name"];
    else

    return match["Away Team Name"];
}    
  
 getWinners (getFinals)


/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnerscb, yearcb) {
        const winners = winnerscb(getFinals);
        const year = yearscb(getFinals, fifaData);
        return years.map((year, index) => 'In ${year},${winners[index]}won the world cup');
    }

(getWinners, getYears));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    const winnerInitials = data.map(match => {
              if (match["Home Team Goals"] > match["Away Team Goals"]) {
              return { initials: match["Home Team Initials"], name: match["Home Team Name"] }
             } else {
                   return { initials: match["Away Team Initials"], name: match["Away Team Name"] }
                }
            })
         const winName = winnerInitials.filter(name => name.initials === teamInitials)
           return `${winName[0] ? winName[0].name : teamInitials} has ${winName.length} World Cup win${winName.length === 1 ? '.' : 's.'}`
         };

console.log(getCountryWins(getFinals( fifaData),"GER"));




/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    return total + Math.round(num)



};

getAverageGoals(data);


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
