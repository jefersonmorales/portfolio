var welcomeNav = document.querySelector('#welcome-nav');
var welcomeContainer = document.querySelector('#welcome-container');

var studiesNav = document.querySelector('#studies-nav');
var studiesContainer = document.querySelector('#studies-container');

var nameToKnowmeContainer = document.querySelector('#direct-to-knowme');
var knowmeNav = document.querySelector('#knowme-nav');
var knowmeContainer = document.querySelector('#knowme-container');

var projectsNav = document.querySelector('#projects-nav');
var projectsContainer = document.querySelector('#projects-container');

welcomeNav.onclick=function() {showWelcomeContainer()}
studiesNav.onclick=function() {showstudiesContainer()}
nameToKnowmeContainer.onclick=function() {showKnowmeContainer()}
knowmeNav.onclick=function() {showKnowmeContainer()}
projectsNav.onclick=function() {showProjectsContainer()}

showWelcomeContainer();

function showWelcomeContainer() {
    welcomeNav.classList.add("selected-item");
    studiesNav.classList.remove("selected-item");
    knowmeNav.classList.remove("selected-item");
    projectsNav.classList.remove("selected-item");
    welcomeContainer.classList.remove("ocultar");
    studiesContainer.classList.add("ocultar");
    knowmeContainer.classList.add("ocultar");
    projectsContainer.classList.add("ocultar");
}

function showstudiesContainer() {
    studiesNav.classList.add("selected-item");
    welcomeNav.classList.remove("selected-item");
    knowmeNav.classList.remove("selected-item");
    projectsNav.classList.remove("selected-item");
    studiesContainer.classList.remove("ocultar");
    welcomeContainer.classList.add("ocultar");
    knowmeContainer.classList.add("ocultar");
    projectsContainer.classList.add("ocultar");
}

function showKnowmeContainer() {
    knowmeNav.classList.add("selected-item")
    welcomeNav.classList.remove("selected-item")
    studiesNav.classList.remove("selected-item")
    projectsNav.classList.remove("selected-item")
    knowmeContainer.classList.remove("ocultar");
    welcomeContainer.classList.add("ocultar");
    studiesContainer.classList.add("ocultar");
    projectsContainer.classList.add("ocultar");
}

function showProjectsContainer() {
    projectsNav.classList.add("selected-item")
    knowmeNav.classList.remove("selected-item")
    studiesNav.classList.remove("selected-item")
    welcomeNav.classList.remove("selected-item")
    projectsContainer.classList.remove("ocultar");
    knowmeContainer.classList.add("ocultar");
    welcomeContainer.classList.add("ocultar");
    studiesContainer.classList.add("ocultar");
}