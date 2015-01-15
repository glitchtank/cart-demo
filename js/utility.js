
//find index of an object in an array based on a property
function arrayObjectIndexOf(arr, property, searchTerm) {
    for(var i = 0, len = arr.length; i < len; i++) {
        if (arr[i][property] === searchTerm) return i;
    }
    return -1;
}