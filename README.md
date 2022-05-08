# GT-Employee-Tracker

The Employee tracker is a command line application tha inteacts with MySQL database to keep track of departments, roles, employees, and orgaizes them to keep track of pay and roles. 

# Description

The application uses Node.js to create a databse used to track epmloyees in a company. It does sos by creating tables by department, roles and employees that all linked together to keep track of pay,roles, and departments they work in. You can update the roles and remove them also.

# Installation

 To run the application, first install all of the packages needed:

 npm i

 Next in the db folder in the terminal login to Mysql using the following command.

 mysql -u root -p -

 After inputting your password, create the database and seed it with data if you like using the SOURCE command:

 SOURCE schema.sql;

 SOURCE seeds.sql;
 Finally, start the application with node.

 node index.js

 # Acknowlegements 

 Seamona Stewart

 Brian Samuels

 Noah Brunner

 Anthony Chang

 James Edwards

 Several people on ask BCS helping 

# Links