var guess = Math.floor(Math.random()*100) + 1

function calc()
{
  if(document.getElementById('in').value == "")
  {
      document.getElementById('out').innerHTML = 'Enter a number'
      return
  }
  var n = parseInt(document.getElementById('in').value)
  if(n === guess)
    document.getElementById('out').innerHTML = 'Congrats! You got it correctly!'
  else if(n > guess)
    document.getElementById('out').innerHTML = 'Guess a small number'
  else
    document.getElementById('out').innerHTML = 'Guess a greater number'
}