
let WelcomeMessage = "Welcome to Amazon Shopping" + "\n\nWhat are you shopping today? Please, select a category"
console.log(WelcomeMessage)
let categoryMessage = "\nChoose a Category from our available Categoty below"

let productCategory = {
    "categoryName" : ["","Men", "Women", "Kids"],
    //Products in Men category
    "productsInMen" : {
        "Sneaker": {
            "wt": "8kg",
            "price": "$200"
        },
        "Pants": {
            "wt": ".15kg",
            "price": "$50"
        },
        "Briefcase": {
            "wt": "12kg",
            "price": "$500"
        },
        "Tie": {
            "wt": "0.1",
            "price": "$100"
        },

    },
    //Products in Women category
    "productsInWomen" : {
        "Leggings": {
            "wt": "0.23kg",
            "price": "$900"
        },
        "Wig": {
            "wt": "0.9kg",
            "price": "$250"
        },
        "Purse": {
            "wt": "3kg",
            "price": "$1000"
        },
        "handFan": {
            "wt": "2kg",
            "price": "$100"
        },

    },
    //Products in Kids category
    "productsInKids" : {
        "SchoolBag": {
            "wt": "5kg",
            "price": "$150"
        },
        "ExerciseBook": {
            "wt": "0.56",
            "price": "$50"
        },
        "FillingBottle": {
            "wt": "3kg",
            "price": "$300"
        },
        "Shoe": {
            "wt": "5kg",
            "price": "$800"
        },

    }
}

//Displays all the categories avalaible
for (let i=1; i< productCategory.categoryName.length; i++) {
    console.log(productCategory.categoryName[i])
}

//Let's the user to choose the category he wants to shop in
function catCall(){
    console.log("") 

    let select = prompt(categoryMessage).toLocaleLowerCase()
    let errorMessage = "Try again! \n\nThe field cannot be empty!"

    //loops through to check the product selected
    function switchPdt(productOne, productTwo, productThree, productFour){
    let selectedProduct; 
        return(function pickPdt(Weight, Price){
        selectedProduct = prompt("Please, Select a Product").toLocaleLowerCase()
            switch(selectedProduct){
                case (productOne):
                    console.log(" ")
                    console.log("You selected " + productOne)
                    console.log(Price + "\n" +  Weight)
                    var checkout = prompt("Enter 1 to add to Cart and checkout or 0 to cancel")
                    if(checkout == ""){
                        alert(errorMessage )
                    }else if( checkout === "1"){
                        console.log("You have successfully bought a " + productOne + "of " + Weight + " for " + Price)
                        alert("Purchase Successfull!")
                        console.log(
                            `%c\nThanks for your patronage`,
                            "font-weight: bold; color: green",
                        )  
                        
                    }else{
                        console.log("Purchase aborted! Thanks for your patronage")
                    }
                    return;

                case (productTwo):
                    console.log(" ")
                    console.log("You selected " + productTwo)
                    console.log(Price + "\n" +  Weight)
                    var checkout = prompt("Enter 1 to add to Cart and checkout or 0 to cancel")
                    if(checkout == ""){
                        alert(errorMessage)
                    }else if( checkout === "1"){
                        console.log("You have successfully bought a " + productTwo + " of " + Weight + " for " + Price)
                        alert("Purchase Successfull!")
                        console.log(
                            `%c\nThanks for your patronage`,
                            "font-weight: bold; color: green",
                        )  
                        
                    }else{
                        console.log("Purchase aborted! Thanks for your patronage")
                    }
                    return;
                    
                case (productThree):
                    console.log(" ")
                    console.log("You selected " + productThree)
                    console.log(Price + "\n" +  Weight)
                    var checkout = prompt("Enter 1 to add to Cart and checkout or 0 to cancel")
                    if(checkout == ""){
                        alert(errorMessage)
                    }else if( checkout === "1"){
                        console.log("You have successfully bought a " + productThree + " of " + Weight + " for " + Price)
                        alert("Purchase Successfull!")
                        console.log(
                            `%c\nThanks for your patronage`,
                            "font-weight: bold; color: green",
                        )  
                    }else{
                        console.log("Purchase aborted! Thanks for your patronage")
                    }
                    return;

                case (productFour):
                    console.log(" ")
                    console.log("You selected " + productFour)
                    console.log(Price + "\n" +  Weight)
                    var checkout = prompt("Enter 1 to add to Cart and checkout or 0 to cancel")
                    if(checkout == ""){
                        alert(errorMessage)
                    }else if( checkout === "1"){
                        console.log("You have successfully bought a " + productFour + " of " + Weight + " for " + Price)
                        alert("Purchase Successfull!")
                        console.log(
                            `%c\nThanks for your patronage`,
                            "font-weight: bold; color: green",
                        )  
                    }else{
                        console.log("Purchase aborted! Thanks for your patronage")
                    }

                    return;
                
                default: 
                alert("The Product you selected might be out of stock or invalid. \nAvailable Products are hoisted at the top")
                console.log(
                    `%c\nThanks for your patronage`,
                    "font-weight: bold; color: green",
                )  
            }
        })
    }
    //--------------------------------------------------------------------------------

    //When the user Leaves the field empty
    if (select == ""){
        alert(errorMessage)

    //When the user selects Men Category   
    }else if(select === ( "men")) {
        console.log("Here is a list of products in " + select.toLocaleUpperCase() + " category. Please, select the product you want to buy")
        for (let x in productCategory.productsInMen){
            console.log(x)
        }   
        //loops through to check the product selected in Men Category
        switchPdt("sneaker") (productCategory.productsInMen.Sneaker.wt, productCategory.productsInMen.Sneaker.price )
    
    //When the user selects Women Category
    }else if(select === ( "women")){
        console.log("Here is a list of products in " + select.toLocaleUpperCase() + " category. Please, select the product you want to buy")
        for (let x in productCategory.productsInWomen){
            console.log(x)
        }
        //loops through to check the product selected in Women Category
        switchPdt("leggings")(productCategory.productsInWomen.Leggings.wt, productCategory.productsInWomen.Leggings.price )

    //When the user selects Kids Category   
    }else if (select === ( "kids")){
        console.log("Here is a list of products in " + select.toLocaleUpperCase() + " category. Please, select the product you want to buy")
        for (let x in productCategory.productsInKids){
            console.log(x)
        }
        //loops through to check the product selected in Kids Category
        switchPdt("schoolbag") (productCategory.productsInKids.SchoolBag.wt, productCategory.productsInKids.SchoolBag.price )

    //When the user Fails to select any Category
    }else{
        console.log(
            `%cPlease, select a valid Category!`,
            "font-weight: bold; color: red",
        )      
    }
}
catCall()