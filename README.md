# Student_Enrollment_Form
Micro Project - A simple student enrollment form using JsonPowerDB

### Description
This project is a simple **Student Enrollment Form** that used JsonPowerDB as the database. The form initially takes user input for the *Roll-No* which is the primary key while all other input keys and buttons are disabled. Then the system checks if the entered Roll-No is present in the database or not.
1. If the *Roll-No* is present in the database, the cursor moves to the next field and, *Update* and *Reset* buttons are enabled and the *Roll-No* field is disabled. The user can now change data in other fields and save them. This option is to update existing student data.
2. If the *Roll-No* is not present in the database, the cursor moves to the next field and, *Save* and *Reset* buttons are enabled. The user will now need to enter values in all other fields and save it. This option is to create new user entry. \
*__Reset__ button will send the form to the initial stage.* \
The form was created using *HTML*, *Bootstrap3* and *JavaScript*.

### Benefits of using JsonPowerDB
* Can store all types of data and bigdata.
* It requires Low-Code and easy to use from any technology via HTTP Rest API.
* Available as a DBaaS.
* Provides Multi-Layer Security.
* Built on top of fast and real-time data indexing engine - PowerIndeX.
* Supports querying multiple databases.
* Syncs data in real time and is highly available.
* Provides Pluggable Drive and Import APIs.

### Screenshots
<img width="960" alt="image" src="https://user-images.githubusercontent.com/127473091/224249203-4f0f643c-ea3b-4574-8974-ec7ecbffab51.png">

<img width="960" alt="image" src="https://user-images.githubusercontent.com/127473091/224249385-b62434de-ed41-488e-967d-01d84c71e2ef.png">

### Release History
* Initial release V-1.0 - 10-03-2023
