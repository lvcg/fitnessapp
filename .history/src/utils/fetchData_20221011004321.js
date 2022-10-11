export const exerciseOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

const options = {
  method: 'GET',
 
  
  headers: {
    'X-RapidAPI-Key': '40e00adec5msh5ef48899a566b8dp178e8ajsnc27c607076ba',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};






export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}