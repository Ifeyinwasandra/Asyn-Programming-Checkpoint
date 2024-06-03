// Question 1:

// Write an async function iterateWithAsyncAwait that takes an 
// array of values and logs each value with a delay of 1 second between logs.

const fruitsToGet = [apple, grape, pear];

// using the filter loop() mrthod.

const filterLoop = async _ => {
    console.log(Start);
    
   const promises = await fruitsToGet.map(fruit => getNumFruit(fruit));
    const numFruits = await Promise.all(promises);
    
   const moreThan20 = fruitsToGet.filter((fruit, index) => {
    const numFruit = numFruits[index];
    return numFruit > 20;
    });
    
   console.log(moreThan20);
    console.log(End);
   };

//    using the forEach() Loop method.

  const forEachLoop = _ => {
    console.log(Start);
    
   fruitsToGet.forEach(async fruit => {
    const numFruit = await getNumFruit(fruit);
    console.log(numFruit);
    });
    
   console.log(End);
   };


//    Question 2:

// Create an async function awaitCall that simulates fetching data from an API. 
// Use await to wait for the API response and then log the data.

async function postData() {
    try {
      const response = await fetch('https://api.example.com/post', {
        method: 'POST',
        body: JSON.stringify({ key: 'value' }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  postData();

//   Question 3:

// Modify the awaitCall function to handle errors gracefully. 
// If the API call fails, catch the error and log a user-friendly error message.

async function getUser(userId) {
    try {
      const response = await fetch(`/users/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }