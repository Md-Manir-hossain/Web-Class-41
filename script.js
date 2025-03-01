function calCulateGrade() 
{
    event.preventDefault();

    let marks = document.getElementById("marks").value;
    let convertedMarks = parseFloat(marks);

    if(convertedMarks > 100) {
        console.log("Invalid");
        document.getElementById("result").innerHTML = "GPA or Grade calculate only 1-100 Numbers. Please try again later.";  
    }

    else if (convertedMarks < 0 ) {
        console.log("Invalid");
    document.getElementById("result").innerHTML = "GPA or Grade calculate only 1-100 Numbers. Please try again later.";
    }

    else if (convertedMarks >= 80 ){
            console.log("A+");
            document.getElementById("result").innerHTML = "You have got GPA-5.00, out of GPA-5";
    }

    else if (convertedMarks >= 70 ){
            console.log("A");
            document.getElementById("result").innerHTML = "You have got GPA-4.75 out of GPA-5";
    }

    else if (convertedMarks >= 60 ){
            console.log("A-");
            document.getElementById("result").innerHTML = "You have got GPA-3.75 out of GPA-5";
    }

    else if (convertedMarks >= 50 ){
            console.log("B");
            document.getElementById("result").innerHTML = "You have got GPA-2.75 out of GPA-5";
    }

    else if (convertedMarks >= 40 ){
            console.log("C");
            document.getElementById("result").innerHTML = "You have got GPA-1.80 out of GPA-5";
    }

    else if (convertedMarks >= 33 ){
            console.log("D");
            document.getElementById("result").innerHTML = "You have got GPA-1.20 out of GPA-5";
    }

    else{
        console.log("F");
        document.getElementById("result").innerHTML = "F";
        }

}