const giveItBackLater = (value, callback) => {
    const loadComplete = () => callback(value)
    setTimeout(loadComplete, 50)
}

const addSomePromises = (somePromise) => {
    return new Promise((resolve, reject) => {
            if (somePromise === "foo") {
                resolve(somePromise.concat(somePromise))
            }  else if (somePromise === "bar") {
                reject(somePromise.concat(somePromise).concat(somePromise))
            }

    })
}


function promiseToGiveItBackLater(value) {
    return new Promise((resolve) => {
        giveItBackLater(value, resolve)
    })
}

addSomePromises('foo')
    .then(somePromise => promiseToGiveItBackLater(somePromise))
    .then(somePromise => console.log(somePromise))
    .catch(error => console.log(error))



module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }