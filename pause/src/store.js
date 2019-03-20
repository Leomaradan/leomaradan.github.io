const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const clearItem = (key) => {
    localStorage.removeItem(key);
}
/*const getArray = (key) => {
    return 
}*/

const pushArrayItem = (key, item) => {
    let array = getItem(key);
    if (array === null) {
        array = [];
    }

    if (!Array.isArray(array)) {
        array = [array];
    }

    array.push(item);
    setItem(key, array);
};

const getArrayLastItem = (key) => {
    let array = getItem(key);
    if (array === null) {
        array = [];
    }

    if (!Array.isArray(array)) {
        array = [array];
    }

    return array[array.length - 1];
};

const updateArrayLastItem = (key, item) => {
    let array = getItem(key);
    if (array === null) {
        array = [];
    }

    if (!Array.isArray(array)) {
        array = [array];
    }

    array[array.length - 1] = item;

    setItem(key, array);
}

export default {
    getItem,
    setItem,
    clearItem,
    pushArrayItem,
    getArrayLastItem,
    updateArrayLastItem
};