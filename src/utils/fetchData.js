export const exerciseOptions =  {


 
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'b5b4703553mshb798e396afa1d10p14d44fjsn45100bca9a7e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions= {
  method: 'GET', 
  headers: {
    'X-RapidAPI-Key': 'b5b4703553mshb798e396afa1d10p14d44fjsn45100bca9a7e',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



     
  

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };

