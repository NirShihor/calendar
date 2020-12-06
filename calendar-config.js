// Generate 3d array for the months days and year
function calcTable(year) {
  let arr = new Array(12); //12 - number of months in years
  for (let x = 0; x < arr.length; x++) {
    arr[x] = new Array(6); //6 - because a months can strech over upto 6 sun-sat periods
  }

  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      arr[x][y] = new Array(7); //7 - days in a weeks
    }
  }

  for (let month = 0; month < arr.length; month++) {
    //   Calculate which day in a week does a specific month start
    let startDayInWeek = new Date(year, month, 0).getDay() + 1;
    // Calculate month's length
    let monthLong = new Date(year, month + 1, 0).getDate() + 1;

    let beforCount = 0;
    // The counter represents any month that starts at day one
    let counter = 1;
    // Figure which day in the week to start counting days
    let startCount = false;

    for (let x = 0; x < arr[month].length; x++) {
      for (let y = 0; y < arr[month][x].length; y++) {
        if (beforCount == startDayInWeek) {
          startCount = true;
        } else {
          beforCount++;
        }

        if (startCount == true) {
          arr[month][x][y] = counter;
          counter++;
        } else {
          arr[month][x][y] = "";
        }

        if (counter > monthLong) {
          arr[month][x][y] = "";
        }
      }
    }
  }

  return arr;
}

module.exports = calcTable;
