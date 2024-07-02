// Code your solution here
// Function to find drivers that match the given name (case-insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers that start with the given letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // Function to find drivers by name within an array of driver objects
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  