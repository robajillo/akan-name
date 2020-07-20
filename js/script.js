var maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function result(){


    var year = parseInt(document.getElementById("year").value);


    var month = parseInt(document.getElementById("month").value);

    var day = parseInt(document.getElementById("day").value);


    var male = document.getElementById("male")

    var female = document.getElementById("female")


    if(year<=1800||year>2020)
          alert("Input the correct year!");

      else if(month<=0||month>12)
          alert("Input correct month!");

      else if(day<=0||day>31)
          alert("Input correct day!");

      var date = new Date(year +month +  day);


      var birthDay = date.getDay();


  if(male.checked==true){
      alert("You were born on" +daysOfWeek[birthDay]+ "and your Akan name is" + maleNames[birthDay])
      }
  else if(female.checked==true){
      alert("You were born on"+ daysOfWeek[birthDay]+ "and your Akan name is" + femaleNames[birthDay])
    }
  }
