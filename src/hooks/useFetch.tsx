import { useState } from "react";
import Axios from "../services/apiClient";

const useFetch = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const doFetch = (url: string, options = {}) => {
    setLoading(true);

    fecthData(url, options);
  };

  const fecthData = async (url: string, options: any) => {
    try {
      const response = await Axios(url, options);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, doFetch };
};

export default useFetch;

// Use Effect version.
// method 1 : we call doFetch and doFetch calls FetchData and provides result.
// method 2 : we call doFetch it will set the options,loading,url, useEffect is listening at that options
// via dependency array and it will call fetch data and provide result

// import { useEffect, useState } from "react";
// import Axios from "../services/apiClient";

// const useFetch = () => {
//   const [data, setData] = useState<any>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<any>(null);
//   const [options, setOptions] = useState<any>({});
//   const [url, setUrl] = useState<string>("");

//   const doFetch = (url: string, options = {}) => {
//     setLoading(true);
//     setOptions(options);
//     setUrl(url);
//   };

//   useEffect(() => {
//     const fecthData = async () => {
//       if (!loading || url == "") return;
//       try {
//         const response = await Axios(url, options);
//         console.log(response, "in response");
//         setData(response);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fecthData();
//   }, [loading,options,url]);

//   return { data, loading, error, doFetch };
// };

// export default useFetch;
