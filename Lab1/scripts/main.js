(function (){

    function DisplayButton(){
        let randomButton = document.getElementById("randomButton")
        randomButton.addEventListener("click", function(){
            location.href = './projects.html'
        })
        let mainContent  = document.getElementsByTagName("main")[0]
        //console.log(mainContent)
        mainContent.setAttribute("class", "container")
        documentBody = document.body

        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3 container")

        let firstString = "This is a "
        let secondString = `${firstString} paragraph that we added through javascript`
        mainParagraph.textContent = secondString

        mainContent.before(mainParagraph)
    
    }

function LogInfo(email, number, comments, name){
    console.log(email);
    console.log(number);
    console.log(comments);
    console.log(name);
    
}

function DisplayHomepage() {

    document.body.style.backgroundImage = "url('https://www.cnet.com/a/img/resize/dfd7a35e25a073bca0471407d8c0addb00b4f7f3/hub/2022/02/23/dbc979d5-4fd1-4bc0-8fdf-c938403b134a/elden-ring-30.jpg?auto=webp&fit=crop&height=675&width=1200')"

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
    function Start(){
        console.log("App Started!")
    
        switch (document.title){
            case "Homepage - WEBD6201 Lab 1":
                DisplayHomepage()
                break
            case "Products - WEBD6201 Lab 1":
                DisplayButton()
                break
            case "Contact - WEBD6201 Lab 1":
                DisplayContacts()
                break
        }

    }


    window.addEventListener("load", Start)
})()