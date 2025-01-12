
// Write a JavaScript program to find the leap years in a given range of years.

const getLeapYear = (startYear, endYear) => {
        let leapYears = [];
        for (let year = startYear; year <= endYear; year++) {
                if (year % 4 === 0 && (year % 100 !== 0 ||
                        year % 400 === 0)) {
                        leapYears.push(year);
                }
        }
        return leapYears;
}
// Test the function
const startYear = 2000;
const endYear = 2020;
console.log(getLeapYear(startYear, endYear));
// [2000, 2004, 2008, 2012, 2016, 2020]
