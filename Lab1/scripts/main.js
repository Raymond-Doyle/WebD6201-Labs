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
function DisplayContactList() {
    if (localStorage.length > 0) {
        let contactList = document.getElementById("contactList") // Our contact list in the table of the contact-list page

        let data = "" // Add data to this variable. Append deserialized data from localStorage to data
        let keys = Object.keys(localStorage) // Return a String Array of keys

        let index = 1 // Count number of keys

        // for every key in the keys collection
        for (const key of keys) {
            let contactData = localStorage.getItem(key) // Get localStorage data value related to the key
            let contact = new Contact()
            
            contact.deserialize(contactData)

            // Inject repeatable row into the contactList
            data += `<tr>
                <th scope="row" class="text-center">${ index }</th>
                <td class="text-center">${ contact.Name }</td>
                <td class="text-center">${ contact.ContactNumber }</td>
                <td class="text-center">${ contact.EmailAddress }</td>
                <td class="text-center"></td>
                <td class="text-center"></td>
            </tr>
            `

            index++
        }

        contactList.innerHTML = data
    }
}

    function Start(){
        console.log("App Started!")
    
        switch (document.title){
            case "Homepage - WEBD6201 Lab 1":
                DisplayButton()
                break
            case "Products - WEBD6201 Lab 1":
                DisplayButton()
                break
            case "Contact - WEBD6201 Lab 1":
                DisplayContactList()
                break
        }

    }


    window.addEventListener("load", Start)
})()