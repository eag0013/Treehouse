//Problem: User ineraction doesn't provide desired results.
//Solution: Add interactivity so user events trigger results on the page.

//VARIABLES
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completeTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//FUNCTIONS
//Add new tasks
var addTask = function() {
  console.log("Add task...");
}
  //When button is pressed
  //Create new list item with the text from #new-task:
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //modify and append elements

//Edit existing tasks
var editTask = function() {
  console.log("Edit task...");
}
  //When the edit button is pressed
  //if the class of the parent is .editMode
    //Switch from .editMode
    //label text become the input's value
  //else
    //Switch to .editMode
    //input value becomes the label's text

  //Toggle .editMode on the parent

//Delete existing tasks
var deleteTask = function() {
  console.log("Delete task...");
}
  //When the delete button is pressed
    //Remove the parent list item from the ul

//Mark tasks as completed
var taskCompleted = function() {
  console.log("Task complete...");
}
  //When the checkbox is checked
    //Append the task list item to the #completed-tasks

//Mark tasks as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
}
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks

//WIRING
//Set the click handler to the addTask function
addButton.onclick = addTask;
