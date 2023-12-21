// How to compare two JSON have the same properties without order?
// a. let obj1 = {name: "Person 1", age:5 };
// b. let obj2 = { age:5, name: "Person 1" };


let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

const areObjectsEqual = (obj1, obj2) => {

    const str1 = JSON.stringify(obj1);
    const str2 = JSON.stringify(obj2);


    return str1 === str2;
};

if (areObjectsEqual(obj1, obj2)) {
    console.log("The objects are equal.");
} else {
    console.log("The objects are not equal.");
}




// To display country flags in the console

// const loadCountryAPI = () => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then(res => res.json())
//       .then(data => displayFlags(data));
//   };

//   const displayFlags = countries => {
//     countries.forEach(country => logFlag(country));
//   };

//   const logFlag = country => {
//     const flagURL = country.flags.svg;
//     console.log(`Flag for ${country.name.common}: ${flagURL}`);
//   };

//   loadCountryAPI();



// Use the same rest countries and print all countries names, regions, sub-region and populations

const loadCountryAPI = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountryInfo(data));
};

const displayCountryInfo = countries => {
    countries.forEach(country => logCountryInfo(country));
};

const logCountryInfo = country => {
    const name = country.name.common;
    const region = country.region;
    const subregion = country.subregion;
    const population = country.population;

    console.log(`Country: ${name}`);
    console.log(`Region: ${region}`);
    console.log(`Subregion: ${subregion}`);
    console.log(`Population: ${population}`);
    console.log('----------------------');
};

loadCountryAPI();

