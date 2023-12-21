
// Get all the countries from Asia continent /region using Filter function


// const loadCountryAPI = () => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then(res => res.json())
//       .then(data => displayAsianCountries(data));
//   };

//   const displayAsianCountries = countries => {
//     const asianCountries = countries.filter(country => country.region === "Asia");
//     asianCountries.forEach(country => logFlag(country));
//   };

//   const logFlag = country => {
//     const flagURL = country.flags.svg;
//     console.log(`Flag for ${country.name.common}: ${flagURL}`);
//   };

//   loadCountryAPI();


//   Get all the countries with a population of less than 2 lakhs using Filter function

// const loadCountryAPI = () => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then(res => res.json())
//       .then(data => displayCountriesWithLowPopulation(data));
//   };

//   const displayCountriesWithLowPopulation = countries => {
//     const lowPopulationCountries = countries.filter(country => country.population < 200000);
//     lowPopulationCountries.forEach(country => logPopulation(country));
//   };

//   const logPopulation = country => {
//     const population = country.population;
//     console.log(`Population of ${country.name.common}: ${population}`);
//   };

//   loadCountryAPI();



// Print the following details name, capital, flag, using forEach function


// const loadCountryAPI = () => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then(res => res.json())
//       .then(data => displayCountryDetails(data));
//   };

//   const displayCountryDetails = countries => {
//     countries.forEach(country => logCountryDetails(country));
//   };

//   const logCountryDetails = country => {
//     const name = country.name.common;
//     const capital = country.capital[0] || "N/A"; 
//     const flagURL = country.flags.svg;

//     console.log(`Country: ${name}`);
//     console.log(`Capital: ${capital}`);
//     console.log(`Flag: ${flagURL}`);
//     console.log('----------------------');
//   };

//   loadCountryAPI();


// Print the total population of countries using reduce function


// const loadCountryAPI = () => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then(res => res.json())
//       .then(data => displayTotalPopulation(data));
//   };

//   const displayTotalPopulation = countries => {
//     const totalPopulation = countries.reduce((acc, country) => acc + (country.population || 0), 0);
//     console.log(`Total Population of All Countries: ${totalPopulation}`);
//   };

//   loadCountryAPI();


// Print the country that uses US dollars as currency.

// const loadCountryAPI = () => {
//     fetch("https://restcountries.com/v3.1/all")
//         .then(res => res.json())
//         .then(data => displayCountriesUsingUSD(data));
// };

// const displayCountriesUsingUSD = countries => {
//     const usdCountries = countries.filter(country => {
//         const currencies = country.currencies || {};


//         return Object.keys(currencies).some(currencyCode => currencies[currencyCode].code === "USD");
//     });

//     if (usdCountries.length > 0) {
//         console.log("Countries using USD:");
//         usdCountries.forEach(country => logCountryDetails(country));
//     } else {
//         console.log("No countries found using USD as currency.");
//     }
// };

// const logCountryDetails = country => {
//     const name = country.name.common;
//     const capital = country.capital[0] || "N/A";
//     const flagURL = country.flags.svg;

//     console.log(`Country: ${name}`);
//     console.log(`Capital: ${capital}`);
//     console.log(`Flag: ${flagURL}`);
//     console.log('----------------------');
// };

// loadCountryAPI();




