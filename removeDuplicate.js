
function removeNames(duplicateNames) {
    const uniqueNames = [];

    for(const name of duplicateNames) {
        if(uniqueNames.includes(name) !== true) {
            uniqueNames.push(name);
        }
    }
    return uniqueNames;

}


const duplicateNames = ["Tasin", "Mahin", "Tasin", "Siam", "Joy", "Emon"];

const duplicateNumbers = [21, 22, 22, 14, 21, 43, 45, 14];

const uniqueNames =  removeNames(duplicateNames);

console.log(uniqueNames);

