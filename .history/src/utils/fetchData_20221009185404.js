export const exerciseOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': 'f198b1f51cmsh678f55da22750e4p1eb753jsn3ee0e422fc14',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};





export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}