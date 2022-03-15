const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

const printPorfileData = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
    
};

printPorfileData(profileDataArgs);
