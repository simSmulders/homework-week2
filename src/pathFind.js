module.exports.pathFind = function(path, object) {
    const pathFind = object.filter(path => {
        if(object.includes(path)){
           return true
        } else {
          return false 
        }
    })
    .map(path => {
        return path.name
    })
          
    return pathFind
}

