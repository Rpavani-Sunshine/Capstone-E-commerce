$(document).ready(function() {
    // Loaded the content of the header.html file
    $("#headertab").load("header.html", function(){
    });
    // Loaded the content of the footer.html file
    $("#footertab").load("footer.html", function(){
    });
});
function displayloginform(){
    document.getElementById("login").style.display="block";
    document.getElementById("signin").style.display="none";
}
function displaysigninform(){
    document.getElementById("signin").style.display="block";
    document.getElementById("login").style.display="none";
}
function loginsubmit(data){
    if(data.userid.value == 'pavani123' && data.password.value == '123456'){
        alert("Login successful");
    }
    else{
        alert("Incorrect userid or password");
    }
}
function signinsubmit(data){
    alert("Account Registration Success");
}
function sumbitcontactform(data){
    if(data.name.value == ""){
        document.getElementById("nameerror").style.display = "block";
    }
    if(data.name.value != ""){
        document.getElementById("nameerror").style.display = "none";
    }
    if(data.email.value == ""){
        document.getElementById("emailerror").style.display = "block";
    }
    if(data.email.value != ""){
        document.getElementById("emailerror").style.display = "none";
    }
    if(data.contact.value == ""){
        document.getElementById("contacterror").style.display = "block";
    }
    if(data.contact.value != ""){
        document.getElementById("contacterror").style.display = "none";
    }
    if(data.message.value == ""){
        document.getElementById("messageerror").style.display = "block";
    }
    if(data.message.value != ""){
        document.getElementById("messageerror").style.display = "none";
    }
    if(data.name.value!="" && data.email.value!="" && data.contact.value!="" && data.message.value!=""){
        alert("Details Submitted Successfully");
        
    }
}
// Scripte code for cartfile
// funtionally for delete button
function deleteitem(){
    document.getElementById("itemcount").value = 0;
    document.getElementById("pro_cost").value = 0;
    document.getElementById("shi_cost").value = 0;
    document.getElementById("tot_cost").value = 0;
    alert("Deleted Successfully");
}
// function for increase item count
let count = 1;
let pro_cost = 699;
let shi_cost = 50;
let tot_cost = pro_cost + shi_cost;
function increaseitem(){
    count = count + 1;
    document.getElementById("itemcount").value = count;
    document.getElementById("cartvalue").innerText = count;

    // increment in item price
    let c1 = pro_cost * count;
    document.getElementById("pro_cost").value = c1;
    let c2 = shi_cost * count;
    document.getElementById("shi_cost").value = c2;
    let c3 = tot_cost * count;
    document.getElementById("tot_cost").value =c3;

}
// function for decrease item count
function decreaseitem(){
    count = document.getElementById("itemcount").value;
    count = count - 1;
    document.getElementById("itemcount").value = count;
    document.getElementById("cartvalue").innerText = count;

    // decrease in item price
    document.getElementById("pro_cost").value -= pro_cost;
    document.getElementById("shi_cost").value -= shi_cost;
    document.getElementById("tot_cost").value -= tot_cost;
}

// mssg to display booking done after checkout
function booking(){
    alert("ITEM BOOKED SUCCESSFULLY \n Thank You to shop with Laxmi's Plaza of Fashion");
}