import { useState, useCallback, useEffect } from "react";

//accepts a URL, returns state
const useFectch = (url) => {
  //set initial data to empty array
  const [data, setData] = useState([]);
  //the URL of the data we want to fetch
  const [fetchUrl, setFetchUrl] = useState(url);

  //this fetches and prepares the data asynchronously
  const fetchData = useCallback(async () => {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    setData(data);
  }, [fetchUrl]);

  useEffect(fetchData, [fetchUrl]);

  return [data, setFetchUrl];
};

export default useFectch;
