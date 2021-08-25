import { useState } from "react";

// Custom Hook for reusable fetch api calling
const useFetch = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to be used to make the api request
  const sendRequest = async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      let response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? requestConfig.body : null,
      });

      if (!response.ok) {
        throw new Error("API Request Error");
      }

      response = await response.json();

      applyData(response);
    } catch (error) {
        setError(error);
    }
    setIsLoading(false);
  };

  return {
    error,
    isLoading,
    sendRequest,
  };
};

export default useFetch;
