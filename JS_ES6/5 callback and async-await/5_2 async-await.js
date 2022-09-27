async function myDisplay() {
    console.log("I am called asynchronously");
    let myPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("I love JavaScript !!");
        }, 3000);
    });
    let result = await myPromise;
    console.log(result);
}

myDisplay();