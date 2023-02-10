(function (){

function LogInfo(email, number, comments, name){
    console.log(email);
    console.log(number);
    console.log(comments);
    console.log(name);
    
}

function DisplayHomepage() {

    let mainContent  = document.getElementsByTagName("main")[0]

        mainContent.setAttribute("class", "container")
        documentBody = document.body

        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3 container")

        mainParagraph.textContent = `Hello, and welcome to our website (and shrine). Here you will find a gateway to examples of JavaScript and how to implement JavaScript into an HTML website.`

        mainContent.before(mainParagraph)


}

function DisplayProducts(){

}

function DisplayProjects(){

}


function DisplayContacts() {
    console.log("Contact Us Page")

    let submitButton = document.getElementById("submitButton")
    let email = document.getElementById("emailAddress")
    let fullName = document.getElementById("fullName")
    let comments = document.getElementById("comments")
    let contactNumber = document.getElementById("contactNumber")


    submitButton.addEventListener("click", function() {

        console.log("Name: " + fullName)
        console.log("Info")

        //LogInfo(email, contactNumber, comments, fullName)
    })
}

function DisplayServices() {
    
    let mainContent  = document.getElementsByTagName("main")[0]

    mainContent.setAttribute("class", "container")
    documentBody = document.body

    let heading1 = document.createElement("h3")
    heading1.setAttribute("id", "heading1")
    heading1.setAttribute("class", "mt-3 container")

    let skill1 = document.createElement("p")
    skill1.setAttribute("id", "skill1")
    skill1.setAttribute("class", "mt-3 container")

    let skillImage1 = document.createElement("img")
    skillImage1.setAttribute("src", "./Content/Backend.png")
    skillImage1.setAttribute("alt", "Backend Development")
    skillImage1.setAttribute("width", "20%")

    let heading2 = document.createElement("h3")
    heading2.setAttribute("id", "heading2")
    heading2.setAttribute("class", "mt-3 container")

    let skill2 = document.createElement("p")
    skill2.setAttribute("id", "skill2")
    skill2.setAttribute("class", "mt-3 container")

    let skillImage2 = document.createElement("img")
    skillImage2.setAttribute("src", "./Content/database.jpg")
    skillImage2.setAttribute("alt", "Database Development")
    skillImage2.setAttribute("width", "20%")

    let heading3 = document.createElement("h3")
    heading3.setAttribute("id", "heading3")
    heading3.setAttribute("class", "mt-3 container")

    let skill3 = document.createElement("p")
    skill3.setAttribute("id", "skill3")
    skill3.setAttribute("class", "mt-3 container")

    let skillImage3 = document.createElement("img")
    skillImage3.setAttribute("src", "./Content/codingLanguages.png")
    skillImage3.setAttribute("alt", "Programming Languages")
    skillImage3.setAttribute("width", "20%")

    heading1.textContent = `Skill #1 - Back-end Development`
    skill1.textContent = `We excel at building structured code to support the rest of the program. We are able to improve efficiency and ensure that all logic flows through a simple, understandable, and efficient method.`
    heading2.textContent = `Skill #2 - Database Development`
    skill2.textContent = `Throughout our experience at Durham College we have developed our SQL and databasing skills and can create structured databases that contain well broken down tables to properly store any data a client may need.`
    heading3.textContent = `Skill #3 - Java and C# Coding`
    skill3.textContent = `While learning the Object-Oriented Programming structure our primary and secondary languages were Java and C#. This allowed us to become very familiar and efficient and coding in both of these languages.`

    mainContent.append(heading1)
    mainContent.append(skill1)
    mainContent.append(skillImage1)
    mainContent.append(heading2)
    mainContent.append(skill2)
    mainContent.append(skillImage2)
    mainContent.append(heading3)
    mainContent.append(skill3)
    mainContent.append(skillImage3)

}

function DisplayAbout(){

    let mainContent = document.getElementsByTagName("main")[0]

    mainContent.setAttribute("class", "container")
    documentBody = document.body

    let partner1 = document.createElement("h3")
    partner1.setAttribute("id", "partner1")
    partner1.setAttribute("class", "mt-3 container")

    let raymondProfile = document.createElement("img")
    raymondProfile.setAttribute("src", "./Content/Raymond.jpeg")
    raymondProfile.setAttribute("alt", "Raymond Profile Picture")
    raymondProfile.setAttribute("width", "20%")

    let raymondEducation = document.createElement("p")
    raymondEducation.setAttribute("id", "raymondEducation")
    raymondEducation.setAttribute("class", "mt-3 container")

    let raymondAge = document.createElement("p")
    raymondAge.setAttribute("id", "raymondAge")
    raymondAge.setAttribute("class", "mt-3 container")

    let raymondResume = document.createElement("a")
    raymondResume.setAttribute("href", "https://www.linkedin.com/in/raymond-doyle/")
    raymondResume.setAttribute("class", "mt-3 container")

    partner1.textContent = `Raymond Doyle`
    mainContent.append(partner1)
    mainContent.append(raymondProfile)
    raymondEducation.textContent = `Education: Durham College, Computer Programming and Analysis Student`
    mainContent.append(raymondEducation)
    raymondAge.textContent = `Age: 19`
    mainContent.append(raymondAge)
    raymondResume.textContent = `Linked In Account`
    mainContent.append(raymondResume)


    //Terry About Us Section
    //Fill in information here

    let partner2 = document.createElement("h3")
    partner2.setAttribute("id", "partner2")
    partner2.setAttribute("class", "mt-3 container")

    let terryProfile = document.createElement("img")
    terryProfile.setAttribute("src", "./Content/Terry.jpeg")
    terryProfile.setAttribute("alt", "Terry Profile Picture")
    terryProfile.setAttribute("width", "20%")

    let terryEducation = document.createElement("p")
    terryEducation.setAttribute("id", "terryEducation")
    terryEducation.setAttribute("class", "mt-3 container")

    let terryAge = document.createElement("p")
    terryAge.setAttribute("id", "terryAge")
    terryAge.setAttribute("class", "mt-3 container")

    let terryResume = document.createElement("a")
    terryResume.setAttribute("href", "https://www.linkedin.com/in/terry-sages/")
    terryResume.setAttribute("class", "mt-3 container")

    partner2.textContent = `Terry Sagas`
    mainContent.append(partner2)
    mainContent.append(terryProfile)
    terryEducation.textContent = `Education: Durham College, Computer Programming and Analysis Student`
    mainContent.append(terryEducation)
    terryAge.textContent = `Age: 19`
    mainContent.append(terryAge)
    terryResume.textContent = `Linked In Account`
    mainContent.append(terryResume)
}



function ResetLinkSelected(){

    let mainContent = document.getElementsByName("productsLink")[0]
    let linkChange = document.createElement("a")
    linkChange.setAttribute("href", "./projects.html")
    linkChange.setAttribute("class", "nav-link active")
    linkChange.setAttribute("aria-current", "page")
    linkChange.innerHTML = '<i class="fa-solid fa-bars-progress"></i> Projects'
    
    mainContent.parentNode.insertBefore(linkChange, mainContent)
    mainContent.parentNode.removeChild(mainContent)

}

function ResetLinkUnselected(){

    let mainContent = document.getElementsByName("productsLink")[0]
    let linkChange = document.createElement("a")
    linkChange.setAttribute("href", "./projects.html")
    linkChange.setAttribute("class", "nav-link")
    linkChange.innerHTML = '<i class="fa-solid fa-bars-progress"></i> Projects'
    
    mainContent.parentNode.insertBefore(linkChange, mainContent)
    mainContent.parentNode.removeChild(mainContent)

}



    function Start(){
        console.log("App Started!")
    
        switch (document.title){
            case "Homepage - WEBD6201 Lab 1":
                DisplayHomepage()
                ResetLinkUnselected()
                break
            case "Products - WEBD6201 Lab 1":
                DisplayProducts()
                ResetLinkSelected()
                break
            case "Projects - WEBD6201 Lab 1":
                DisplayProjects()
                ResetLinkSelected()
                break
            case "Contact - WEBD6201 Lab 1":
                DisplayContacts()
                ResetLinkUnselected()
                break
            case "Services - WEBD6201 Lab 1":
                DisplayServices()
                ResetLinkUnselected()
                break
            case "About - WEBD6201 Lab 1":
                DisplayAbout()
                ResetLinkUnselected()
                break
        }


    }


    window.addEventListener("load", Start)
})()