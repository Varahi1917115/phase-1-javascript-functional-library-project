const fi = (function () {
    return {
        libraryMethod: function () {
            return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
        },

        each: function (collection, callback) {
            for (let accessor in collection) {
                callback(collection[accessor])
            }

            return collection;
        },

        map: function (collection, callback) {
            letmodifiedArray = []

            for (let accessor in collection) {
                modifiedArray.push(callback(collection[accessor]))
            }

            return modifiedArray;
        },

        reduce: function (collection, callback, acc) { 
            let copy = [...collection]
            acc = acc || copy.shift(); 
            for (let accessor in copy) {
                acc = callback(acc, copy[accessor], copy)
            }

            return acc;
        },

        find: function (collection, callback) {
            for (let accessor in collection) {
                let element = collection[accessor];
                if (callback(element)) {
                    return element;
                }
            }
        },

        filter: function(collection, callback){
            let selectedArray = [];

            for (let accessor in collection) {
                let element = collection[accessor];
                if (callback(element)) {
                    selectedArray.push(element);
                }
            }

            return selectedArray;
        },

        size: function(collection) {
            return Object.keys(collection).length
        },

         first: function(collection, n = 1) {
             let count = 1;
             let array = [];
             
            for(let accessor in collection) {
               if(count <= n) {
                   array.push(collection[accessor]);
                   count++
               }
            }
            
             return array.length > 1 ? array : array[0]
         },

         last: function(collection, n = 1) {
            let startingIndex = collection.length -n;
           
            return n > 1 ? collection.slice(startingIndex, collection.length) : collection
            [startingIndex];
         },  

         compact: function(collection) {
             return collection.filter(element => element)
         },

         sortBy: function (array, callback) {
            return [...array].sort((a, b) => callback(a) - callback(b));
         },

         flatten: function (array, onelevel) {
             if (oneLevel) {
                 return array.flat();
             }

             const stack = [...array];
             const res = [];
             while (stack.length) {

                const next = stack.pop();
                if (Array.isArray(next)) {

                    stack.push(...next);
                } else {
                    res.push(next);
                }
             }

             return res.reverse();
         },

         uniq: function (collection, isSorted, callback) {
             let newArray = []

             let callbackReturn = [];

                 for (let i = 0; i < collection.length; i++) {
                     const element = collection[i];
                     if (!newArray.includes(element)) {
                         if(callback) {
                            cn = callback(element);
                            if(!callbackReturn.includes(cn)) {
                                callbackReturn.push(cn);
                                newArray.push(element);
                         }
                         
                        } else {
                            newArray.push(element);
 
                         }
                     }
                 }
                 
                 return newArray;
             },
  
        functions: function () {

        },
    
    }
})

