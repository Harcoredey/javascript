function sumPopulationBelowTemperatureLimit(array, temperatureLimit) {
    // Flatten the 2D array into a 1D array of objects
    const flattenedArray = array.flat();

    // Filter regions where temperature is less than or equal to temperatureLimit
    const filteredRegions = flattenedArray.filter(region => region.temperature <= temperatureLimit);

    // Sum the populations of the filtered regions
    const totalPopulation = filteredRegions.reduce((sum, region) => sum + region.population, 0);

    return totalPopulation;
}

// Example usage
const regions = [
    [
        { temperature: 5, population: 1000 },
        { temperature: 15, population: 2000 }
    ],
    [
        { temperature: 8, population: 1500 },
        { temperature: 12, population: 2500 }
    ]
];

const temperatureLimit = 10;
const totalPopulation = sumPopulationBelowTemperatureLimit(regions, temperatureLimit);

console.log(`Total population in regions with temperature <= ${temperatureLimit}°C is ${totalPopulation}`);
