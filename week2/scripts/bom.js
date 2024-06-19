// Select the input, button, and list elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

// Function to add a chapter
button.addEventListener('click', function() {
  // Get the value from the input and trim any extra spaces
  const chapter = input.value.trim();
  
  // Check if the input is not empty
  if (chapter !== '') {
    // Create a new list item (li) element
    const li = document.createElement('li');
    
    // Set the text content of the list item to the chapter value
    li.textContent = chapter;
    
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    
    // Append the delete button to the list item
    li.append(deleteButton);
    
    // Append the list item to the list
    list.append(li);
    
    // Clear the input field
    input.value = '';
    
    // Add event listener to delete button to remove the chapter
    deleteButton.addEventListener('click', function() {
      list.removeChild(li);
      input.focus(); // Set focus back to the input field
    });
  }
  
  // Set focus back to the input field, regardless of whether the input was empty
  input.focus();
});
