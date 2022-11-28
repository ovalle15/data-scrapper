const fetchVideos = async (successFn, errorFn) => {
  return fetch('http://localhost:9000/videos')
      .then((response) => {
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError("Oops, we haven't got JSON!");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data ====> ", data)
        try {
          successFn(data)
          console.log("data has been processed" + data)
        } catch {
          console.log("Error in setBody")
        }
      })
      .catch((error) => console.error(error));
  }

export default fetchVideos;
