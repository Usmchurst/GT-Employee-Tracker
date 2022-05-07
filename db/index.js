const { prompt } = require("inquirer");
const { connection, createDepartment } = require("./db");
const db = require("./db");


// init();


function init() {
loadMainPrompts();
}  
 

function loadMainPrompts() {
  prompt([
    {
      type: "list",
      name: "Options",
      message: "Welcome to the Ultimate Employee Database?",
      choices: [
         "View All Employees",
         "View all Departments",
         "Add a Department",
         "Add Employee",
         "Update Employee Role",
         "View All Roles",
          "Add Role",
          "Update Employee Role",
          "Remove Employee",
      ],    
    }
  ]).then(res => {
    let choice = res.Options;
    // Call the appropriate function depending on what the user chooses
    console.log(res);
    switch (choice) {
      case "View All Employees":
        displayEmployees();
        break;
      case "View all Departments":
        displayAllDepartments();
        break;
      case "Add a Department":
        createDepartment();
        break;  
      case "Add Employees":
        createEmployee();
        break;
      case "UPDATE_EMPLOYEE_ROLE":
        DisplayEmployeeRole();
        break;
      case "View Roles":
        DisplayRoles();
        break;
      case "Add Role":
        CreateRole();
        break;
      case "UPDATE_EMPLOYEE_Role":
        ModifyEmployeeRole();
        break;
       case "REMOVE_EMPLOYEE":
         RemoveEmployee();
         break; 
    }
  }
  )


  function displayEmployees(){
     console.log("display")
     db.findAllEmployees()
     .then(([table]) => {
       let employees = table
       console.table(employees)
     })
  } 

    
  function displayAllDepartments() {
     console.log("display")
      db.findAllDepartments()
    .then(([table]) => {
      let departments = table;
      console.table(departments);
         
      })

       prompt([
        {
          name: "departmentId",
          type: "list",
          message: "Please make a selection from the list of departments",
          choices: ['Microbiology','Chemistry','Physics','Legal']
        }])
        

     .then(res => db.findAllEmployeesByDepartment(res.departmentID))
     .then(([rows]) => {
       let departments = rows;
       console.log(departments)
        .then(() => loadMainPrompts())
      })     
  };
  
    
  function createDepartment() {
    prompt([
      { 
        name: "name",
        type: "input",
        message: "what is the name of the department you want to create?",
        choices: ["Microbiology","Chemistry","Physics",] 
      }
    ])
    .then(function (input) {
      let name = connection.query("INSERT INTO department SET ?", { name: input.AddaDepartment},
      
      function (res) {
        console.log("new department created");

      })
      console.log(input.sql)
    })
  }

  //add employee
  function createEmployee() {
    prompt([
    { 
      name: "first name",
      mesage: "What is the first name if the employee?"
    },
    {
      name: "last name",
      message: "What is the last name if the employee?"
    } 
    ]) 

  }    

  function DisplayEmployeeRole() {
    prompt([
    { 
      
    }  
    ])
  }
// //   function DisplayEmployees(){
// //     console.log("display")
// //      db.findAllDepartments()
// //    .then(([table]) => {
// //         let AddEmployees = table
// //         console.table(employees)
// //        })
  
// //       prompt([
// //       {
// //        name: "employees",
// //        type: "list",
// //        message: "Please make a selsction from the list of employees",
// //        choices: employeeChoices
// //       }
// //     ])

// //     .then(res => db.findAllEmployeesByDepartment(res.departmentID))
// //     .then(([rows]) => {
// //       let  = rows;
// //       console.log(people)  
// //      })
// //      .then(() => loadMainPrompts(() 
// //    });
// //  }  
 
// //  function DisplayEmployeeRole(){
// //   console.log("display")
// //    db.findAllDepartments()
// //  .then(([table]) => {
// //       let UpdateEmployeeRole = table
// //       console.table(employees)
// //      })

// //     prompt([
// //     {
// //      name: "employeeId",
// //      type: "list",
// //      message: "Please make a selsction from the list of Id's",
// //      choices: IdChoices
// //     }
// //   ])

// //   .then(res => db.findAllEmployeesByDepartment(res.departmentID))
// //   .then(([rows]) => {
// //     let  = rows;
// //     console.log(people)  
// //    })
// //    .then(() => loadMainPrompts(() 
// //  });
// // }  

// // function DisplayRoles(){
// //   console.log("display")
// //    db.findAllDepartments()
// //  .then(([table]) => {
// //       let ViewRoles = table
// //       console.table(employees)
// //      })

// //     prompt([
// //     {
// //      name: "roleId",
// //      type: "list",
// //      message: "what is the role of the employee?",
// //      choices: roleChoices
// //     }
// //   ])

// //   .then(res => db.findAllEmployeesByDepartment(res.departmentID))
// //   .then(([rows]) => {
// //     let  = rows;
// //     console.log(people)  
// //    })
// //    .then(() => loadMainPrompts(() 
// //  });
// // }  
   
// function AddRole(){
//   console.log("display")
//    db.findAllDepartments()
//  .then(([table]) => {
//       let CreateRole = table
//       console.table(employees)
//      })

//     prompt([
//     {
//      name: "Createrole",
//      type: "list",
//      message: "what is the role do you want to create?",
//      choices: roleChoices
//     }
//   ])

//   .then(res => db.findAllEmployeesByDepartment(res.departmentID))
//   .then(([rows]) => {
//     let  = rows;
//     console.log(people)  
//    })
//    .then(() => loadMainPrompts(() 
//  });
// } 

// function Quit(){
//   console.log('seeYa');
//   process.exit();

}
  init();  