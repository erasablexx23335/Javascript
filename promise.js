console.log('This is promise');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5){
        reject("No random number was not supporting you");
    }
    else{

        setTimeout (() => {
              console.log('Yes, i am done');
              resolve("Rat")
          }, 3000);
    }
        
  })

  let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5){
        reject("Please, try again");
    }
    else{

        setTimeout (() => {
              console.log('Yes, i am done');
              resolve("Rat")
          }, 3000);
    }
        
  })

  let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5){
        reject("Your console aren't working properly ");
    }
    else{

        setTimeout (() => {
              console.log('Yes, i am done');
              resolve("Rat")
          }, 3000);
    }
        
  })

//   prom1.then ((a) => {
//     console.log(a)
//   }).catch ((err) => {
//     console.log(err)
//   })

// let p4 = Promise.reject("ARE YOU CONSOLE")([prom1, prom2, prom3])
let p4 = Promise.all([prom1, prom2, prom3])
// let p4 = Promise.allSettled([prom1, prom2, prom3])
// let p4 = Promise.race([prom1, prom2, prom3])
// let p4 = Promise.any([prom1, prom2, prom3])
// let p4 = Promise.resolve([prom1, prom2, prom3])
p4.then ((a) => {
  console.log(a)
}).catch ((err) => {
  console.log(err)
})

  
  

