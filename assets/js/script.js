var numberArray = []; 

function show()
{
  let num;
  num = parseInt(document.getElementById("enternumber").value);

  if (isNaN(num)) {
    alert("Please enter a valid number.");
    return; 
  }
  
  numberArray.push(num); 
  document.getElementById("Array").textContent = "Array = " + numberArray.join(', ');

  //  sum, average, largest, and smallest numbers.
  let sum = 0;
  let largest = numberArray[0];
  let smallest = numberArray[0];

  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
    if (numberArray[i] > largest) {
      largest = numberArray[i];
    }
    if (numberArray[i] < smallest) {
      smallest = numberArray[i];
    }
  }

  let average = sum / numberArray.length;

  document.getElementById("Sum").textContent = "Sum = " + sum;
  document.getElementById("Average").textContent = "Average = " + average;
  document.getElementById("Largest").textContent = "Largest = " + largest;
  document.getElementById("Smallest").textContent = "Smallest = " + smallest;
}

// Clear the array.

function reset() {
    document.getElementById("enternumber").value = "";
    numberArray = []; 
    document.getElementById("Array").textContent = "Array = ";
    document.getElementById("Sum").textContent = "Sum = ";
    document.getElementById("Average").textContent = "Average = ";
    document.getElementById("Largest").textContent = "Largest = ";
    document.getElementById("Smallest").textContent = "Smallest = ";
  }

