console.log("Rishabh is a good boy")
console.log("Gaurav is a good boy")


// cle = setInterval (() => f

const callback = (arg) => {
  console.log(arg)
}

const loadscript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Rishabh")
  document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)



