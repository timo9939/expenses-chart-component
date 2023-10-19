fetch('./data.json')
  .then(response => response.json()) // Parse the JSON data
  .then(data => {
    // Use the JSON data in your JavaScript code
    let n=0
    while (n<7){
         let dataString=data[n].day
         let dataAmount=data[n].amount
    console.log(dataString);   
    console.log(dataAmount)
    n++
    }

  })
  .catch(error => console.error('Error:', error));