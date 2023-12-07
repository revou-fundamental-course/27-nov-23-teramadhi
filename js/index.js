// animated collapsibles
var coll = document.getElementsByClassName("collapsible");
var indexColl;

for (indexColl = 0; indexColl < coll.length; indexColl++) 
{
  coll[indexColl].addEventListener("click", function() 
  {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight)
    {
      content.style.maxHeight = null;
    }
    else 
    {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//validasi inputField
const inputField = document.getElementById("input-tinggi")
const buttonHitungLuasSegitiga = document.getElementById("hitungLuasSegitiga")
const buttonHitungKelilingSegitiga = document.getElementById("hitungKelilingSegitiga")

inputField.addEventListener('input', function()
{
  var textInput = inputField.value.trim()
  if (validateInput(textInput))
  {
    buttonHitungLuasSegitiga.disabled = false
    buttonHitungKelilingSegitiga.disabled = false
  }
  else
  {
    buttonHitungLuasSegitiga.disabled = true
    buttonHitungKelilingSegitiga.disabled = true
  }
  console.log(textInput)
})

function validateInput(inputValue) {
  const floatRegex = /^-?\d+$/;
  return floatRegex.test(inputValue)
}

// hitung Luas Segitiga
var tinggiSegitiga = document.getElementById("input-tinggi");
var alasSegitiga = document.getElementById("input-alas");
var luasSegitiga = document.getElementById("hasilLuasSegitiga");
let rumusLuasSegitiga = "L=1/2 x a x t";

document.getElementById("hitungLuasSegitiga").addEventListener("click", function() 
{
  luasSegitiga.value = parseFloat(tinggiSegitiga.value) * parseFloat(alasSegitiga.value) /2 ;
});

function textRumusLuasSegitiga(){
  document,getElementById("rumusLuasSegitiga").innerHTML = "L=1/2 x a x t";
}

//Ulangi hitung Luas Segitiga
document.getElementById("ulangiLuasSegitiga").addEventListener("click", function()
{
  tinggiSegitiga.value = "";
  alasSegitiga.value = "";
  luasSegitiga.value = "";
  rumusLuasSegitiga,value = "";
});

// hitung Keliling Segitiga
var sisiA = document.getElementById("input-sisiA");
var sisiB = document.getElementById("input-sisiB");
var sisiC = document.getElementById("input-sisiC");
var kelilingSegitiga = document.getElementById("hasilKelilingSegitiga");

document.getElementById("hitungKelilingSegitiga").addEventListener("click", function() 
{
  kelilingSegitiga.value = parseFloat(sisiA.value) + parseFloat(sisiB.value) + parseFloat(sisiC.value);
});

//Ulangi hitung Keliling Segitiga
document.getElementById("ulangiKelilingSegitiga").addEventListener("click", function()
{
  sisiA.value = "";
  sisiB.value = "";
  sisiC.value = "";
  kelilingSegitiga.value = "";
});