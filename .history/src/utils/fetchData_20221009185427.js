export const exerciseOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': p,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};





export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}