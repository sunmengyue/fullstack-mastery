// Your Mission

// As input, you are given a list of scores. Coding Score can be anywhere between 300 and 850. For the purpose of this task, levels are defined in the following way:

// Poor: 300-599
// Fair: 600-699
// Good: 700-749
// Excellent: 750-799
// Elite: 800+
// Calculate how many users are there in each level, then return a list of strings where each string represents a level and the percentage of users who fall within that range, formatted like LevelName: XX.XX%. Percentages should be displayed with two decimal points of precision. Levels should be sorted in decreasing order of those numbers, omitting any levels that have no users. In case of a tie, the higher level should appear first.

// For example, if you had this input...

//   [330, 723, 730, 825]
// ...then you should return the following:

// [
//   'Good: 50.00%',
//   'Elite: 25.00%',
//   'Poor: 25.00%'
// ]
// [execution time limit] 4 seconds (js)

// [input] array.integer scores

// An array of integers in the range [300, 850].

// [output] array.string

// An array of strings formatted like LevelName: XX.XX%.

// function codingScoreReportPercent(scores) {
//   //  return string
// }
// complete in 1 hour

function codingScoreReportPercent(scores) {
  // return string
  let persentiles = [0, 0, 0, 0, 0];
  let grade;
  let levels = ['poor', 'fair', 'good', 'excellent', 'elite'];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 300 && scores[i] <= 599) {
      grade = levels[0];
      persentiles[0] += 1;
    } else if (scores[i] >= 600 && scores[i] <= 699) {
      grade = levels[1];
      persentiles[1] += 1;
    } else if (scores[i] >= 700 && scores[i] <= 749) {
      grade = levels[2];
      persentiles[2] += 1;
    } else if (scores[i] >= 750 && scores[i] <= 799) {
      grade = levels[3];
      persentiles[3] += 1;
    } else {
      grade = levels[4];
      persentiles[4] += 1;
    }
    console.log(scores[i], grade);
  }
  console.log(persentiles);
  for (let j = 0; j < persentiles.length; j++) {
    persentiles[j] =
      levels[j] +
      ': ' +
      ((persentiles[j] / scores.length) * 100).toFixed(2) +
      '%';
    // persentiles[j] = (persentiles[j]/scores.length)
  }
  console.log(persentiles);
}
codingScoreReportPercent([300, 509, 485, 788, 639, 490, 826]);
