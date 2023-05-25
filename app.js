var welcomeNav = document.querySelector('#welcome-nav');
var welcomeContainer = document.querySelector('#welcome-container');

var personaldevelopmentNav = document.querySelector('#studies-nav');
var personaldevelopmentContainer = document.querySelector('#studies-container');

var knowmeNav = document.querySelector('#knowme-nav');
var knowmeContainer = document.querySelector('#knowme-container');

var projectsNav = document.querySelector('#projects-nav');
var projectsContainer = document.querySelector('#projects-container');

welcomeNav.onclick=function() {showWelcomeContainer()}
personaldevelopmentNav.onclick=function() {showPersonaldevelopmentContainer()}
knowmeNav.onclick=function() {showKnowmeContainer()}
projectsNav.onclick=function() {showProjectsContainer()}

showWelcomeContainer();

function showWelcomeContainer() {
    welcomeNav.classList.add("selected-item");
    personaldevelopmentNav.classList.remove("selected-item");
    knowmeNav.classList.remove("selected-item");
    projectsNav.classList.remove("selected-item");
    welcomeContainer.classList.remove("ocultar");
    personaldevelopmentContainer.classList.add("ocultar");
    knowmeContainer.classList.add("ocultar");
    projectsContainer.classList.add("ocultar");
}

function showPersonaldevelopmentContainer() {
    personaldevelopmentNav.classList.add("selected-item");
    welcomeNav.classList.remove("selected-item");
    knowmeNav.classList.remove("selected-item");
    projectsNav.classList.remove("selected-item");
    personaldevelopmentContainer.classList.remove("ocultar");
    welcomeContainer.classList.add("ocultar");
    knowmeContainer.classList.add("ocultar");
    projectsContainer.classList.add("ocultar");
}

function showKnowmeContainer() {
    knowmeNav.classList.add("selected-item")
    welcomeNav.classList.remove("selected-item")
    personaldevelopmentNav.classList.remove("selected-item")
    projectsNav.classList.remove("selected-item")
    knowmeContainer.classList.remove("ocultar");
    welcomeContainer.classList.add("ocultar");
    personaldevelopmentContainer.classList.add("ocultar");
    projectsContainer.classList.add("ocultar");
}

function showProjectsContainer() {
    projectsNav.classList.add("selected-item")
    knowmeNav.classList.remove("selected-item")
    personaldevelopmentNav.classList.remove("selected-item")
    welcomeNav.classList.remove("selected-item")
    projectsContainer.classList.remove("ocultar");
    knowmeContainer.classList.add("ocultar");
    welcomeContainer.classList.add("ocultar");
    personaldevelopmentContainer.classList.add("ocultar");
}