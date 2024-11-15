<h3>Merging obj with combined values</h3>
<h3>custom merging function allows you to retain all values from both objects when there are overlapping keys.</h3>
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

const mergeObjects = (obj1, obj2) => {
    const result = { ...obj1 }; // Start with a shallow copy of obj1

    for (const key in obj2) {
        if (result.hasOwnProperty(key)) {
            // If the key exists in both objects, combine the values into an array
            result[key] = [].concat(result[key], obj2[key]);
        } else {
            // If the key does not exist in result, just assign it
            result[key] = obj2[key];
        }
    }

    return result;
};

const combinedObject = mergeObjects(object1, object2);
console.log(combinedObject); // Outputs: { a: 1, b: [2, 3], c: 4 }
