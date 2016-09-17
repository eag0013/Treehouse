//Problem: User ineraction doesn't provide desired results.
//Solution: Add interactivity so user events trigger results on the page.

//Add new tasks
  //When button is pressed
  //Create new list item with the text from #new-task:
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //modify and append elements

//Edit existing tasks
  //When the edit button is pressed
  //if the class of the parent is .editMode
    //Switch from .editMode
    //label text become the input's value
  //else
    //Switch to .editMode
    //input value becomes the label's text

  //Toggle .editMode on the parent

//Delete existing tasks
  //When the delete button is pressed
    //Remove the parent list item from the ul

//Mark tasks as completed
  //When the checkbox is checked
    //Append the task list item to the #completed-tasks

//Mark tasks as incomplete
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
