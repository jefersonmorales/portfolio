var imgLogo = document.querySelector('#logo')
var imgKnowme = document.querySelector('#image-knowme-page')
var imgProjects = document.querySelector('#image-projects-page')
var imgStudies = document.querySelector('#image-studies-page')

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
    imgLogo.classList.remove("ocultar")
    imgKnowme.classList.add("ocultar")
    imgProjects.classList.add("ocultar")
    imgStudies.classList.add("ocultar")
    welcomeNav.classList.add("selected-item");
    studiesNav.classList.remove("selected-item");
    knowmeNav.classList.remove("selected-item");
    projectsNav.classList.remove("selected-item");
    welcomeContainer.classList.remove("ocultar");
    studiesContainer.classList.add("ocultar");
    knowmeContainer.classList.add("ocultar");
    projectsContainer.classList.add("ocultar");
}

function showKnowmeContainer() {
    imgLogo.classList.add("ocultar")
    imgKnowme.classList.remove("ocultar")
    imgProjects.classList.add("ocultar")
    imgStudies.classList.add("ocultar")
    knowmeNav.classList.add("selected-item")
    welcomeNav.classList.remove("selected-item")
    studiesNav.classList.remove("selected-item")
    projectsNav.classList.remove("selected-item")
    knowmeContainer.classList.remove("ocultar");
    welcomeContainer.classList.add("ocultar");
    studiesContainer.classList.add("ocultar");
    projectsContainer.classList.add("ocultar");
}

function showstudiesContainer() {
    imgLogo.classList.add("ocultar")
    imgKnowme.classList.add("ocultar")
    imgProjects.classList.add("ocultar")
    imgStudies.classList.remove("ocultar")
    studiesNav.classList.add("selected-item");
    welcomeNav.classList.remove("selected-item");
    imgProjects.classList.add("ocultar")
    knowmeNav.classList.remove("selected-item");
    projectsNav.classList.remove("selected-item");
    studiesContainer.classList.remove("ocultar");
    welcomeContainer.classList.add("ocultar");
    knowmeContainer.classList.add("ocultar");
    projectsContainer.classList.add("ocultar");
}

function showProjectsContainer() {
    imgLogo.classList.add("ocultar")
    imgKnowme.classList.add("ocultar")
    imgProjects.classList.remove("ocultar")
    imgStudies.classList.add("ocultar")
    projectsNav.classList.add("selected-item")
    knowmeNav.classList.remove("selected-item")
    studiesNav.classList.remove("selected-item")
    welcomeNav.classList.remove("selected-item")
    projectsContainer.classList.remove("ocultar");
    knowmeContainer.classList.add("ocultar");
    welcomeContainer.classList.add("ocultar");
    studiesContainer.classList.add("ocultar");
}