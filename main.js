
// const dataDayArray=[]
// const dataAmountArray=[]


// fetch('./data.json')
//   .then(response => response.json()) // Parse the JSON data
//   .then(data => {
//     // Import the JSON data in your JavaScript code
//     let n=0
//     while (n<7){
//          dataDay=data[n].day
//          dataAmount=data[n].amount
//     console.log(dataDay);   
//     console.log(dataAmount)

//     dataDayArray.push(dataDay)
//     console.log(dataDayArray)

//     dataAmountArray.push(dataAmount)
//     console.log(dataAmountArray)
//     console.log(`n = ${n}`)
//     n++
 

//     }

//   })

//   .catch(error => console.error('Error:', error));



// Statistics Chart 

  const ctx = document.getElementById("chart");
              
  // Chart js code
  new Chart(ctx, {


    type: "bar",
    data: {
      
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "",
          data: [12, 19, 3, 5, 2, 3, 8],
          borderWidth: 1,
        },
      ],
    },

    options: {
//  scales: {
//         xAxes: [{
//             gridLines: {
//                 display:false
//             }
//         }],
//         yAxes: [{
//             gridLines: {
//                 display:false
//             }   
//         }]
//     }
    },
  });

