// Correct implementation using async/await
async function fetchData() {
  try {
    const snapshot = await db.ref('path/to/data').once('value');
    const data = snapshot.val();
    // Process the data
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately
  }
}

// Another example using promises
db.ref('path/to/data').once('value').then(snapshot => {
    const data = snapshot.val();
    // Process the data
}).catch(error => {
    console.error('Error fetching data:', error);
    // Handle the error
});