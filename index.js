

/***************ACCORDIONS********************/

//Accordion code from https://www.w3schools.com/howto/howto_js_accordion.asp

var accordions = document.getElementsByClassName("accordion");
var i;

/*//activates accordions
function setAccordionActive( accordion) {
    accordion.classList.toggle("active");
}
*/

/*
 TODO:
  //make function that activates accordions and deactivates accordions
    //check whether or not accordion is "active" if it is then do the relevant toggle to make it active vs inactive
  //put these functions in the relevant spots such that you only OPEN accordions on hash change, not close them !!
 */
for (i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
        panel.style.display = "none";
        window.location.hash = ""; // Update the URL hash to be nothing when panels are closed

    } else {
      panel.style.display = "block";
      }   

  });
}

/********************ACCORDION OPENING*************************/

//shoutout to TMDesigns here https://forums.concretecms.org/t/open-accordion-sections-with-anchor-links/8050
// for writing some code that actually helped me understand all this!! i've adapted their bootstrap code to here :)

function openAccordionByHash() {
    var hash = window.location.hash.replace("#", ""); // Get the hash from the URL, and removing the # from the string
    if (hash) {

        const target = document.getElementById(hash); // Find the element with the ID matching the hash

        //TODO: make accordion display panel!!!
        target.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = target.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

//accordions are opened if the page is loaded with a hash
document.addEventListener("DOMContentLoaded", function () {
    // Function to open accordion based on URL hash
    //function  

    // Check if there's a hash on page load and open the corresponding accordion
    openAccordionByHash();

    
});

//accordions are also opened if a hash is added or changed
window.addEventListener("hashchange", function () {
    // Function to open accordion based on URL hash
   
    // Check if there's a hash on page load and open the corresponding accordion
    openAccordionByHash();


});

/***************DATE LAST UPDATED********************/
window.onload = function () {
    var disclaimer = "<hr/><i> This website does not constitute legal, medical, or official government advice. It is not affiliated with Pluslife, nor their distributors Altruan or Ngaio Diagnostics. Last updated ";
    var date = "28 Oct 2025.</i>"
    var footerText = disclaimer + date;

    document.getElementById('footer').innerHTML = footerText;
};
