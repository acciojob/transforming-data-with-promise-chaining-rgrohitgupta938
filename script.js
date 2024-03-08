document.getElementById("btn").addEventListener("click", () => {
  const inputValue = document.getElementById("ip").value;

  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputValue);
    }, 2000);
  });

  promise1
    .then((res) => {
      document.getElementById("output").textContent = `Result : ${res}`;
      return res;
    })
    .then((res) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const updatedValue = res * 2;
          document.getElementById(
            "output"
          ).textContent = `Result : ${updatedValue}`;
          resolve(updatedValue);
        }, 1000);
      });
    })
    .then((res) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const updatedValue = res - 3;
          document.getElementById(
            "output"
          ).textContent = `Result : ${updatedValue}`;
          resolve(updatedValue);
        }, 1000);
      });
    })
    .then((res) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const updatedValue = res / 2;
          document.getElementById(
            "output"
          ).textContent = `Result : ${updatedValue}`;
          resolve(updatedValue);
        }, 1000);
      });
    })
    .then((res) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const updatedValue = res + 10;
          document.getElementById(
            "output"
          ).textContent = `Result : ${updatedValue}`;
          resolve(updatedValue);
        }, 1000);
      });
    })
    .then((res) => {
      document.getElementById("output").textContent = `Final Result : ${res}`;
    });
});
