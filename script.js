//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const inputValue = document.getElementById("ip").value;

  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputValue);
    }, 2000);
  });

  promise1
    .then((result) => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return result;
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result * 2);
        }, 1000);
      });
    })
    .then((result) => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return result - 3;
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result / 2);
        }, 1000);
      });
    })
    .then((result) => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return result + 10;
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result);
        }, 1000);
      });
    })
    .then((result) => {
      document.getElementById("output").textContent = `Final Result: ${result}`;
    });
});
