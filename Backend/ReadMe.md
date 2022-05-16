Project First Login System

This Project is Made With 
>> Node.js 
>> express.js

<!-- env variabels -->
PORT
DB_URI 
session_secret 

Api Requests 
 <!-- User Api Requests -->
 -- Register a new user 
 <!-- register data -->
 {
      firtname: "yourfname",
      lastname: "yourlname",
      age: "22",
      email: "youremail.com",
      password: "yourpassword"
      cpassword: "confirmpassword"
  }
/api/v1/user/register  <!-- post request with register data -->

-- login user 
<!-- login data -->
{
    email: "youremail"
    password: "yourpassword"
}
  /api/v1/user/login  <!-- post request with login data -->

--logout user
/api/v1/user/login  <!-- get request user is logout if user logedin -->

<!-- Admin Api Requrest -->
get all users 
 /api/v1/admin/user  <!--  get request -->

update users
 /api/v1/admin/users/update/:id/ <!--  post request with update data and _id -->

delete user  
 /api/v1/admin/users/delete/:id <!--  get request with  _id -->

create user 
 /api/v1/admin/users/create  <!--  post request with user data -->

<!-- if you want to see live project -->

https://node-ap.herokuapp.com/
