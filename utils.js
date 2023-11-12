const fetchData = (URL) => {
  return fetch(URL)
    .then((response) => response.text())
    .then((data) => data)
    .catch((err) => console.log("Error:", err));
};

module.exports = fetchData;
