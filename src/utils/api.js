const getURL = (config) => {
  const base = process.env.REACT_APP_ENDPOINT;
  const key = process.env.REACT_APP_API_KEY;
  const query = Object.entries(config).reduce((acc, current, index, array) => {
    if (index === array.length - 1) {
      return acc + `${current[0]}=${current[1]}`;
    }
    return acc + `${current[0]}=${current[1]}&`;
  }, "");
  return `${base}/weather?${query}&appid=${key}`;
};

export default getURL;
