//1
document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Section";
    toggleButton.classList.add("toggle-button"); 

    var footer = document.querySelector("footer");
    footer.appendChild(toggleButton);
    
    var experienceSection = document.getElementById("experience");
    var educationSection = document.getElementById("education");
    var aboutSection = document.getElementById("about");
    var skillsSection = document.getElementById("skills");

    toggleButton.addEventListener("click", function() {
        if (experienceSection.style.display === "none") {
            experienceSection.style.display = "block";
        } else {
            experienceSection.style.display = "none";
        }
        if (educationSection.style.display === "none") {
            educationSection.style.display = "block";
        } else {
            educationSection.style.display = "none";
        }
        if (aboutSection.style.display === "none") {
            aboutSection.style.display = "block";
        } else {
            aboutSection.style.display = "none";
        }
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        } else {
            skillsSection.style.display = "none";
        }
    });
});

//2
document.addEventListener("DOMContentLoaded", function() {
    var changeColorButton = document.createElement("button");
    changeColorButton.textContent = "Toggle Background Color";
    changeColorButton.classList.add("toggle-button");

    var isGrey = true;
    var footer = document.querySelector("footer");
    footer.appendChild(changeColorButton);
    changeColorButton.addEventListener("click", function() {
        if (isGrey) {
            document.body.style.backgroundColor = "#ffffff";
        } else {
            document.body.style.backgroundColor = "#ddddd3";
        }
        isGrey = !isGrey;
    });
});


//3
document.addEventListener("DOMContentLoaded", function() {
    var addSkillButton = document.getElementById("addSkillButton");
    var newSkillInput = document.getElementById("newSkill");
    var skillCounter = document.getElementById("skillCount");

    var count = 0;

    addSkillButton.addEventListener("click", function() {
        var newSkill = newSkillInput.value.trim();
        if (newSkill !== "") {
            var skillList = document.getElementById("skills").querySelector("ul");
            var skillItem = document.createElement("li");
            skillItem.textContent = newSkill;
            skillList.appendChild(skillItem);
            count++;
            skillCounter.textContent = count;
            newSkillInput.value = "";
        }
    });
});


//4
document.addEventListener("DOMContentLoaded", function() {
    var newTitleInput = document.getElementById("newTitleInput");
    var updateTitleButton = document.getElementById("updateTitleButton");
    var resumeTitle = document.querySelector("title");

    updateTitleButton.addEventListener("click", function() {
        var newTitle = newTitleInput.value.trim();
        if (newTitle !== "") {
            resumeTitle.textContent = newTitle;
            newTitleInput.value = "";
        }
    });
});



//7
document.addEventListener("DOMContentLoaded", function() {
    var fontSizeSelector = document.getElementById("fontSizeSelector");

    fontSizeSelector.addEventListener("change", function() {
        var selectedFontSize = fontSizeSelector.value;
        var textElements = document.querySelectorAll("body *");
        textElements.forEach(function(element) {
            element.style.fontSize = selectedFontSize + "px";
        });
    });
});