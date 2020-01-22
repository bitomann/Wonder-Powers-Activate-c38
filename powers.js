// vvv FLIGHT vvv //
const flightHandlerFunction = () => {
    flightControls.classList.remove("disabled")
    flightControls.classList.add("enabled")
}
document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

const flightControls = document.querySelector("#flight")

// Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements vvv //
// vvv MINDREADING vvv //
const  mindReadingHandlerFunction = () => {
    mindReadingSection.classList.remove("disabled")
    mindReadingSection.classList.add("enabled")
}
document.querySelector("#activate-mindreading").addEventListener("click", mindReadingHandlerFunction)

const mindReadingSection = document.querySelector("#mindreading")

// vvv X-RAY vvv //
const xrayHandlerFunction = () =>  {
    xraySection.classList.remove("disabled")
    xraySection.classList.add("enabled")
}
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

const xraySection = document.querySelector("#xray")

// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.
// vvv DEACTIVATE ALL vvv //
    function disableAll () {
    for (let i = 0; i < disableAllSections.length; i++) {
        disableAllSections[i].classList.remove("enabled")
        disableAllSections[i].classList.add("disabled");
       }
    }
document.querySelector("#deactivate-all").addEventListener("click", disableAll)

const disableAllSections = document.querySelectorAll(".disabled")


// vvv ACTIVATE ALL vvv //
function enableAll () {
for (let i = 0; i < enableAllSections.length; i++) {
    enableAllSections[i].classList.add("enabled");
    enableAllSections[i].classList.remove("disabled")
   }
}
document.querySelector("#activate-all").addEventListener("click", enableAll)

const enableAllSections = document.querySelectorAll(".disabled")
