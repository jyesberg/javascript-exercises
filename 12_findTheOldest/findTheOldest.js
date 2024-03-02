const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear()
    let newPeople = people;
    newPeople = people.sort(function(a, b) {
        if (a.yearOfDeath === undefined ) {
            a.yearOfDeath = currentYear;
        }
        if (b.yearOfDeath === undefined ) {
            b.yearOfDeath = currentYear;
        }
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    })
    return newPeople[0]
};

// Do not edit below this line
module.exports = findTheOldest;
