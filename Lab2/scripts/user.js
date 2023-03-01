class User {
    
    constructor(firstName, lastName, emailAddress, password, loggedIn){
    
            this.FirstName = firstName;
            this.LastName = lastName;
            this.EmailAddress = emailAddress;
            this.Password = password;
            this.LoggedIn = loggedIn;
    
        }
    
        get FirstName() {
            return this.m_firstName;
        }

        set FirstName(firstName){
            this.m_firstName = firstName;
        }
    
        get LastName() {
            return this.m_lastName;
        }

        set LastName(lastName){
            this.m_lastName = lastName;
        }
    
        get EmailAddress() {
            return this.m_emailAddress;
        }

        set EmailAddress(emailAddress){
            this.m_emailAddress = emailAddress;
        }
    
        get Password() {
            return this.m_password;
        }

        set Password(password){
            this.m_password = password;
        }

        get LoggedIn() {
            return this.m_loggedIn;
        }

        set LoggedIn(loggedIn){
            this.m_loggedIn = loggedIn;
        }

    //Public Utility Method
    serialize(){
        if (this.FirstName !== "" && this.LastName !== "" && this.EmailAddress !== "" && this.Password !== "" && this.LoggedIn !== ""){
            return `${ this.FirstName }, ${ this.LastName }, ${ this.EmailAddress }, ${ this.Password }, ${ this.LoggedIn }`
        }

        console.error("One or more properties or fields of the Contact Object are missing or invalid!")
        return null
    }

    deserialize(data){

        let propertyArray = data.split(", ")
        this.FirstName = propertyArray[0]
        this.LastName = propertyArray[1]
        this.EmailAddress = propertyArray[2]
        this.Password = propertyArray[3]
        this.LoggedIn = propertyArray[4]

    }


    //Public Override Method
    toString(){
        return `Full Name is ${ this.FirstName + this.LastName } \nEmail Address is ${ this.EmailAddress } \nPassword is ${ this.Password }`
    }
}