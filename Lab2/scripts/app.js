/**
 * Names: Raymond Doyle and Terry Sagas
 * Student ID #1: 100831420
 * Student ID #2: 100827547
 * Date Completed: Feb. 12, 2023
 */


(function (){


/***
 * function to display all text and background images for the homepages design
 */
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

/***
 * function to display the Products page design
 */
function DisplayProducts(){

}

/***
 * function to display the text and images for the Projects page design
 */
function DisplayProjects(){

    //Create a variable to allow the insertion of text and images
    let mainContent  = document.getElementsByTagName("main")[0]

    //center the main method text
    mainContent.setAttribute("class", "container")
    documentBody = document.body

    //Create a heading
    let heading1 = document.createElement("h3")
    heading1.setAttribute("id", "heading1")
    heading1.setAttribute("class", "mt-3 container")

    //Create a paragraph
    let project1 = document.createElement("p")
    project1.setAttribute("id", "project1")
    project1.setAttribute("class", "mt-3 container")

    //Create an image
    let projectImage1 = document.createElement("img")
    projectImage1.setAttribute("src", "./Content/brickBreaker.jpg")
    projectImage1.setAttribute("alt", "Brick Breaker")
    projectImage1.setAttribute("width", "20%")

    //Create a heading
    let heading2 = document.createElement("h3")
    heading2.setAttribute("id", "heading2")
    heading2.setAttribute("class", "mt-3 container")

    //Create a paragraph
    let project2 = document.createElement("p")
    project2.setAttribute("id", "project2")
    project2.setAttribute("class", "mt-3 container")

    //Create an image
    let projectImage2 = document.createElement("img")
    projectImage2.setAttribute("src", "./Content/connect4.jpg")
    projectImage2.setAttribute("alt", "Connect 4")
    projectImage2.setAttribute("width", "20%")

    //Create an image
    let projectImage3 = document.createElement("img")
    projectImage3.setAttribute("src", "./Content/AI.jpg")
    projectImage3.setAttribute("alt", "A.I.")
    projectImage3.setAttribute("width", "20%")

    //Create a heading
    let heading3 = document.createElement("h3")
    heading3.setAttribute("id", "heading3")
    heading3.setAttribute("class", "mt-3 container")

    //Create a paragraph
    let project3 = document.createElement("p")
    project3.setAttribute("id", "project3")
    project3.setAttribute("class", "mt-3 container")

    //Create an image
    let projectImage4 = document.createElement("img")
    projectImage4.setAttribute("src", "./Content/duckhunt.jpeg")
    projectImage4.setAttribute("alt", "Duck Hunt")
    projectImage4.setAttribute("width", "20%")

    //Place text within the created HTML elements
    heading1.textContent = `Project #1 - Brick Breaker`
    project1.textContent = `In high school I created a replica to brick breaker with levels, hit detection, and lives. This project allowed me to become familiar loops, image creation, and many basic coding practices in an interesting way.`
    heading2.textContent = `Project #2 - Connect 4 A.I.`
    project2.textContent = `Within a grade 12 final project we were tasked with coding a A.I. for a connect 4 game that the prof provided. This game taught us about the power of recursions and how to efficiently write if conditions.`
    heading3.textContent = `Project #3 - Duck Hunt`
    project3.textContent = `I created a Duck Hunt game using python (pygame lib) which allow the user to shoot the ducks moving randomly on the screen and stack up points`

    //Append the HTML elements to the main element in the HTML page
    mainContent.append(heading1)
    mainContent.append(project1)
    mainContent.append(projectImage1)
    mainContent.append(heading2)
    mainContent.append(project2)
    mainContent.append(projectImage2)
    mainContent.append(projectImage3)
    mainContent.append(heading3)
    mainContent.append(project3)
    mainContent.append(projectImage4)
}

/***
 * Moves user to the homepage 
 */
function timer(){
    // Function for when the timer hits 0
    window.location.href = './index.html'
}

function DisplayContacts() {
    /*
    function to display the users information to the log
    when text is entered into the text boxes and when the button 
    is clicked after 3 seconds the user will be transferred
    */
    console.log("Contact Us Page")
    let submitButton = document.getElementById("submitButton")
    // Event to check when the button is clicked
    submitButton.addEventListener("click", function() {
        // logging the full name of the user to the console
        console.log(document.getElementById("fullName").value)
        // Loggging the contact number to the console
        console.log(document.getElementById("contactNumber").value)
        // Logging the email to the console
        console.log(document.getElementById("emailAddress").value)
        // Logging the comments to the console
        console.log(document.getElementById("comments").value)
        // Timer for redirect
        setTimeout(timer, 3000)
    })
}

function DisplayServices() {
    /*
    this funciton displays the text on the services page
    this will display our skills as a group on the page
    and format, using java script
    */
    let mainContent  = document.getElementsByTagName("main")[0]

    mainContent.setAttribute("class", "container")
    documentBody = document.body

    // Creating the first heading
    let heading1 = document.createElement("h3")
    heading1.setAttribute("id", "heading1")
    heading1.setAttribute("class", "mt-3 container")
    
    // Creating the first element for the skills paragraph
    let skill1 = document.createElement("p")
    skill1.setAttribute("id", "skill1")
    skill1.setAttribute("class", "mt-3 container")

    // Setting the image for the first skill
    let skillImage1 = document.createElement("img")
    skillImage1.setAttribute("src", "./Content/Backend.png")
    skillImage1.setAttribute("alt", "Backend Development")
    skillImage1.setAttribute("width", "20%")

    //Creates a heading
    let heading2 = document.createElement("h3")
    heading2.setAttribute("id", "heading2")
    heading2.setAttribute("class", "mt-3 container")

    //Creates a paragraph
    let skill2 = document.createElement("p")
    skill2.setAttribute("id", "skill2")
    skill2.setAttribute("class", "mt-3 container")

    //Creates an image
    let skillImage2 = document.createElement("img")
    skillImage2.setAttribute("src", "./Content/database.jpg")
    skillImage2.setAttribute("alt", "Database Development")
    skillImage2.setAttribute("width", "20%")

    //Creates a heading
    let heading3 = document.createElement("h3")
    heading3.setAttribute("id", "heading3")
    heading3.setAttribute("class", "mt-3 container")

    //Creates a paragraph
    let skill3 = document.createElement("p")
    skill3.setAttribute("id", "skill3")
    skill3.setAttribute("class", "mt-3 container")

    //Creates an image
    let skillImage3 = document.createElement("img")
    skillImage3.setAttribute("src", "./Content/codingLanguages.png")
    skillImage3.setAttribute("alt", "Programming Languages")
    skillImage3.setAttribute("width", "20%")

    //Inserting text into the HTML elements
    heading1.textContent = `Skill #1 - Back-end Development`
    skill1.textContent = `We excel at building structured code to support the rest of the program. We are able to improve efficiency and ensure that all logic flows through a simple, understandable, and efficient method.`
    heading2.textContent = `Skill #2 - Database Development`
    skill2.textContent = `Throughout our experience at Durham College we have developed our SQL and databasing skills and can create structured databases that contain well broken down tables to properly store any data a client may need.`
    heading3.textContent = `Skill #3 - Java and C# Coding`
    skill3.textContent = `While learning the Object-Oriented Programming structure our primary and secondary languages were Java and C#. This allowed us to become very familiar and efficient and coding in both of these languages.`

    //Appends the main element in the HTML with the created HTML elements
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

/***
 * function to display the text and images for the About page design
 */
function DisplayAbout(){

    //sets the variable to the main element in the HTML
    let mainContent = document.getElementsByTagName("main")[0]
    mainContent.setAttribute("class", "container")
    documentBody = document.body

    //Creates a heading
    let partner1 = document.createElement("h3")
    partner1.setAttribute("id", "partner1")
    partner1.setAttribute("class", "mt-3 container")

    //Creates an image 
    let raymondProfile = document.createElement("img")
    raymondProfile.setAttribute("src", "./Content/Raymond.jpeg")
    raymondProfile.setAttribute("alt", "Raymond Profile Picture")
    raymondProfile.setAttribute("width", "20%")

    //Creates a paragraph
    let raymondEducation = document.createElement("p")
    raymondEducation.setAttribute("id", "raymondEducation")
    raymondEducation.setAttribute("class", "mt-3 container")

    //Creates a paragraph
    let raymondAge = document.createElement("p")
    raymondAge.setAttribute("id", "raymondAge")
    raymondAge.setAttribute("class", "mt-3 container")

    //Creates a hyperlink
    let raymondResume = document.createElement("a")
    raymondResume.setAttribute("href", "https://www.linkedin.com/in/raymond-doyle/")
    raymondResume.setAttribute("class", "mt-3 container")

    //Fill HTML elements with text and append them to the main element
    partner1.textContent = `Raymond Doyle`
    mainContent.append(partner1)
    mainContent.append(raymondProfile)
    raymondEducation.textContent = `Education: Durham College, Computer Programming and Analysis Student`
    mainContent.append(raymondEducation)
    raymondAge.textContent = `Age: 19`
    mainContent.append(raymondAge)
    raymondResume.textContent = `Linked In Account`
    mainContent.append(raymondResume)

    //Creates a heading
    let partner2 = document.createElement("h3")
    partner2.setAttribute("id", "partner2")
    partner2.setAttribute("class", "mt-3 container")

    //Creates an image
    let terryProfile = document.createElement("img")
    terryProfile.setAttribute("src", "./Content/terry.jpeg")
    terryProfile.setAttribute("alt", "Terry Profile Picture")
    terryProfile.setAttribute("width", "20%")

    //Creates a paragraph
    let terryEducation = document.createElement("p")
    terryEducation.setAttribute("id", "terryEducation")
    terryEducation.setAttribute("class", "mt-3 container")

    //Creates a paragraph
    let terryAge = document.createElement("p")
    terryAge.setAttribute("id", "terryAge")
    terryAge.setAttribute("class", "mt-3 container")

    //Creates a hyperlink 
    let terryResume = document.createElement("a")
    terryResume.setAttribute("href", "https://www.linkedin.com/in/terrysagas/")
    terryResume.setAttribute("class", "mt-3 container")

    //Insert text into the HTML elements and append them to the main element
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


/***
 * Function to change the products page to projects
 * when the projerct page is selected
 */
function ResetLinkSelected(){
    // Grabbing the element by the name
    let mainContent = document.getElementsByName("productsLink")[0]
    // Creating the a element
    let linkChange = document.createElement("a")
    // Setting the link
    linkChange.setAttribute("href", "./projects.html")
    // Setting it as the active link
    linkChange.setAttribute("class", "nav-link active")
    linkChange.setAttribute("aria-current", "page")
    // adding the image and name to the nav bar
    linkChange.innerHTML = '<i class="fa-solid fa-bars-progress"></i> Projects'
    mainContent.parentNode.insertBefore(linkChange, mainContent)
    mainContent.parentNode.removeChild(mainContent)

}

/***
 * Function to change the products page to projects
 * when the project page is not selected
 */
function ResetLinkUnselected(){
    // Grabbing the element by the name
    let mainContent = document.getElementsByName("productsLink")[0]
    // Setting the link
    let linkChange = document.createElement("a")
    linkChange.setAttribute("href", "./projects.html")
    // Setting it as not active link
    linkChange.setAttribute("class", "nav-link")
    // adding the image and name to the nav bar
    linkChange.innerHTML = '<i class="fa-solid fa-bars-progress"></i> Projects'
    
    mainContent.parentNode.insertBefore(linkChange, mainContent)
    mainContent.parentNode.removeChild(mainContent)

}

/*** 
* Function to create nav at the
* bottom of each page displaying the 
* copyright year 
*/
function BottomNav(){
    
    let mainBody = document.getElementsByTagName("body")[0]
    // Creating the nav element
    let nav = document.createElement("nav")
    // Setting the attributes of the nav to make sure that the nav is at the bottom
    nav.setAttribute("class", "navbar fixed-bottom navbar-light bg-light")
    // Creating element for the test
    let textTag = document.createElement("p")
    // Inserting the copyright into the p tag
    textTag.innerHTML = `&#169; Copyright 2023`
    // Creating break tags to make sure that the nav does not cover the screen
    mainBody.appendChild(document.createElement("br"))
    mainBody.appendChild(document.createElement("br"))
    mainBody.appendChild(document.createElement("br"))
    // Appending the nav bar to the site
    mainBody.appendChild(nav)
    // Appending the p tag to the site
    nav.appendChild(textTag)    
}


/*** 
* Runs when the page is started and routes the user to the proper display function based on their current page
*/
    function Start(){
        //Log a message to show that the webpage has been loaded
        console.log("App Started!")
    
        //Based on the page title run the repective display function
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

        
        //Create a new Human Resources Nav Bar and place it in between Contacts and About us
        let aboutUsList = document.getElementsByName("aboutUsList")[0]
        let newList = document.createElement("li")
        newList.setAttribute("class", "nav-item")

        aboutUsList.parentNode.insertBefore(newList, aboutUsList)

        let newLink = document.createElement("a")
        newLink.setAttribute("href", "./humanResources.html")
        newLink.setAttribute("class", "nav-link")
        newLink.innerHTML = '<i class="fa-solid fa-users"></i> Human Resources'

        newList.append(newLink)

        BottomNav()
    }


    window.addEventListener("load", Start)
})()