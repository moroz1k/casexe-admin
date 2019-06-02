export const getDataFromObject = (response) => response.hasOwnProperty('data') && response.data

export const getResultsFromData = (data) => data.hasOwnProperty('results') && data.results
