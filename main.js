var avg = items.reduce(function(a, b) {
    return (a + b.price)
}, 0)

var avg = (avg / items.length) 
var avg = avg.toFixed(2)
document.querySelector('#answer1').innerHTML = `The average price is $${avg}`

////////////////////////////////

var fltr = items.filter(function(a) {
    if (a.price > 14.00 && a.price < 18.00)
      return true 
      else {
          return false
      }
}).map(function(a) {
    return a.title
})
document.querySelector('#answer2').innerHTML = fltr.join(`\n\n`)

/////////////////////////////////////

var gbp = items.filter(function(a) {
    if (a.currency_code === "GBP")
     return true
     else {
        return false
     }
})
document.querySelector('#answer3').innerHTML = `${gbp[0].title} costs &pound; ${gbp[0].price}`

//////////////////////////////////////

var wood = items.filter(function(a) {
    if (a.materials.includes('wood')) 
        return true
}).map(function(a) {
    return a.title
}).join(`\n\n`)

document.querySelector('#answer4').innerHTML = wood

///////////////////////////////////////

var eight = items.filter(function(a) {
    if (a.materials.length >= 8) 
      return true
      else {
        return false
      }
}).map(function(a) {
    return `${a.title} has ${a.materials.length} materials:\n\n${a.materials.join("\n")}\n\n`
    })


document.querySelector('#answer5').innerHTML = eight

////////////////////////////////////////////

var made = items.filter(function(a) {
    if (a.who_made === "i_did") {
        return true
     } else {
            return false
        }
    })
document.querySelector('#answer6').innerHTML = `${made.length} were made by their sellers`