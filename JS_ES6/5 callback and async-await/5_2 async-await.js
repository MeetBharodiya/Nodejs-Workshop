// Promise
let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("I love JavaScript !!");
    }, 3000);
});

// Async Function
async function myDisplay() {
    let result = await myPromise; //Awaiting for the promise to resolve
    console.log("I am called asynchronously");
    console.log(result);
}

myDisplay();