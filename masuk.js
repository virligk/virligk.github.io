function myFunction() {

            var x = document.getElementById("myTopnav");

            if (x.className === "topnav") {

                x.className += " responsive";

            } else {

                x.className = "topnav";

            }

        }

        function validasi() {

		var username = document.getElementById("username").value;

		var password = document.getElementById("password").value;

        console.log(username);

		if (username == "" && password =="") {

            alert("Data Kosong");

			return false;

		}else if(username !="" && password !=""){

			alert("Yeayy Masuk");

            window.location.href="index.html";

		}

        else{

            alert("Data Kosong");

            return false;

        }

	 }