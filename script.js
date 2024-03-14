document.getElementById("reservationForm").addEventListener("submit"), function(event)
 {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
  
    // You can perform validation here
    
    // For demonstration purposes, log the values
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Number of Guests:", guests);
 }