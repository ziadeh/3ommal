function _goToStep(wizard, options, state, index)
{
    return paginationClick(wizard, options, state, index);
}

$.fn.steps.setStep = function (step)
{

    var options = getOptions(this),
        state = getState(this);

    return _goToStep(this, options, state, step);

};


// document.querySelector(".myDate").valueAsDate = new Date();
$("#wizard").steps({
headerTag: "h5",
bodyTag: "section",
contentContainerTag: "div",
actionContainerTag: "div",
stepsContainerTag: "div",
cssClass: "wizard",

/* Templates */
titleTemplate: "#title#",
loadingTemplate: '<span class="spinner"></span> #text#',

/* Behaviour */
autoFocus: true,
enableKeyNavigation: false,
enablePagination: false,
startIndex: 0,

/* Transition Effects */
transitionEffectSpeed: 200,
transitionEffect: "slideLeft",
onStepChanged: function (event, currentIndex, priorIndex) {
  
  let section  = $("#wizard").steps("getCurrentStep");

//   if (currentIndex >= 1) {
//     $(".btn-home").hide();
//     $("#previous").show();
//   } else {
//     $(".btn-home").show();
//     $("#previous").hide();
//   }
},
});

$("a[href=#]").click(function (e) {
e.preventDefault(); 
});