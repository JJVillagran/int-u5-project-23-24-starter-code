// Declare your arrays here
let imageContainer = document.querySelector("#imageContainer");
console.log("imageContainer");

let comedyURLs = ["https://res.cloudinary.com/jerrick/image/upload/v1610578424/5fff79f883f7a1001c77abaa.jpg", "https://ntvb.tmsimg.com/assets/p192248_v_h10_am.jpg?w=1280&h=720"];
console.log("comedyURLs");

let actionURLs = ["https://cdn.theplaylist.net/wp-content/uploads/2024/01/25085443/RDHS_2024_DigitalOneSheet_JakeChair_1944x2880_PRE_NoDimple_PV_FINAL_en-US_CPS-750x400.jpg", "https://newsdio.com/wp-content/uploads/2021/12/The-Batman.jpg"];
console.log("actionURLs");

let dramaURLs = ["https://www.thestreambible.com/wp-content/uploads/2023/05/Whiplash.png", "https://m.media-amazon.com/images/S/pv-target-images/be2840ef36f2b03b421e464207d33f462418caf42a025cecb5f7055c244193df.jpg"];
console.log("dramaURLs");

let userInput = ["comedy", "action", "drama"];
console.log("userInput");

// Make sure to declare your HTML elements as variables! 
// Submit Button 
let submitButton = document.querySelector(".boton");

submitButton.addEventListener("click", function() {
    let userInput = document.querySelector(".submission").value;
    console.log("userInput");

    if (userInput === "comedy") {
        comedyURLs.forEach(function(x) {
            let pic = document.createElement("img");
            console.log(pic);
            pic.src = x;
            console.log(pic);
            imageContainer.appendChild(pic);
            console.log(imageContainer);
        });
    } else if (userInput === "action") {
        actionURLs.forEach(function(x) {
            let pic = document.createElement("img");
            console.log(pic);
            pic.src = x;
            console.log(pic);
            imageContainer.appendChild(pic);
            console.log(imageContainer);
        });
    } else if (userInput === "drama") {
        dramaURLs.forEach(function(x) {
            let pic = document.createElement("img");
            console.log(pic);
            pic.src = x;
            console.log(pic);
            imageContainer.appendChild(pic);
            console.log(imageContainer);
        });
    };
});