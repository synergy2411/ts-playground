// Producer Code
function display(url) {
  const promise = new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        return response.json();
      }).then(result => {
        console.log("RESULT : ", result);
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });

  return promise;
}

// Consumer Code

const url = "https://jsonplaceholder.typicode.com/posts";

display(url).then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
