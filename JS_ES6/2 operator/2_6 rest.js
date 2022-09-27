// 

function showName(firstName, lastName, ...titles) {
    console.log(firstName + ' ' + lastName); // Julius Caesar

    // the rest go into titles array
    // i.e. titles = ["Developer", "Designer"]
    console.log(titles[0]); // Consul
    console.log(titles[1]); // Imperator
    console.log(titles.length); // 2
}

// pass to function all parameters except the first two
showName("Julius", "Caesar", "Developer", "Designer");

/*
If you need to specify a parameter (or parameters)
alongside a rest parameter, ensure that the
rest parameter is last in your function definition.
*/

// function showName2(firstItem, ...items, lastItem) {
//     console.log(firstItem); // 1
//     console.log(items); // 2, 3, 4, 5
//     console.log(lastItem); // 6
// }

// Error: Rest parameter must be last formal parameter
// showName2(1, 2, 3, 4, 5, 6);
