//ADD YOUR CODE HERE
//Addition
addButton = document.getElementById("plus")
addButton.addEventListener("click", () => {
  firstInput = document.getElementById("no1").value
  secondInput = document.getElementById("no2").value
  result = parseFloat(firstInput) + parseFloat(secondInput)
  document.getElementById("answer").innerText = result
})

//subtraction
minus = document.getElementById("minus")
minus.addEventListener("click",() =>{
  firstInput = document.getElementById("no1").value
  secondInput = document.getElementById("no2").value
  result = parseFloat(firstInput) - parseFloat(secondInput)
  document.getElementById("answer").innerText = result
})

//multiply

multiply = document.getElementById("multiply")
multiply.addEventListener("click",() =>{
  firstInput = document.getElementById("no1").value
  secondInput = document.getElementById("no2").value
  result = parseFloat(firstInput) * parseFloat(secondInput)
  document.getElementById("answer").innerText = result
})

//equals
equals = document.getElementById("equals")
equals.addEventListener("click",() =>{
  firstInput = document.getElementById("no1").value
  secondInput = document.getElementById("no2").value
  result = parseFloat(firstInput) / parseFloat(secondInput)
  document.getElementById("answer").innerText = result
})