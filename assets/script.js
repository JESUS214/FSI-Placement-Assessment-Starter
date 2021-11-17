// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Jesus Flores" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {

{
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
        gb++
        document.querySelector('#qty-gb').textContent = gb
        myTotal()
    }
})

document.getElementById('minus-gb').addEventListener('click', function()
 {
    {
        // HINT: You can delete this console.log after you no longer need it!
        console.log('Gingerbread + button was clicked!')
    
        // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
            if(gb > 0)
            {
              gb--
              document.querySelector('#qty-gb').textContent = gb
              myTotal()
            }
        }
})

document.getElementById('add-cc').addEventListener('click', function()
{
    {
        // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
            cc++
            document.querySelector('#qty-cc').textContent = cc
            myTotal()
        }
    })

    document.getElementById('minus-cc').addEventListener('click', function()
 {
    {
            if(cc > 0)
            {
              cc--
              document.querySelector('#qty-cc').textContent = cc
              myTotal()
            }
        }
})

document.getElementById('add-sugar').addEventListener('click', function()
{
    {
        // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
            sugar++
            document.querySelector('#qty-sugar').textContent = sugar
            myTotal()
        }
    })

    document.getElementById('minus-sugar').addEventListener('click', function()
 {
    {
            if(sugar > 0)
            {
              sugar--
              document.querySelector('#qty-sugar').textContent = sugar
              myTotal()
            }
        }
})
function myTotal()
{
    total = gb + cc + sugar
    document.querySelector('#qty-total').textContent = total
}