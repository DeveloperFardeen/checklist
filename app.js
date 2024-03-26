document.addEventListener('DOMContentLoaded', function() {
    const addItemInput = document.getElementById('addItemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const checklist = document.getElementById('checklist');
    const countSpan = document.getElementById('count');
  
    // function showSavedData() {
    //     checklist.innerHTML = localStorage.getItem('checklist24032024');
    // }
    // showSavedData();
    // Uncomment the above code after first execution of complete file
    
    countSpan.textContent = checklist.children.length;

    // Function to create a new checklist item
    function createChecklistItem(text) {
      const li = document.createElement('li');

      const textSpan = document.createElement('span');
      textSpan.className = 'item-name';
      textSpan.textContent = text;
      li.appendChild(textSpan);

      const editBtn = document.createElement('span');
      editBtn.textContent = '✎';
      editBtn.className = 'editBtn';
      li.appendChild(editBtn);

      const deleteBtn = document.createElement('span');
      deleteBtn.textContent = '❌';
      deleteBtn.className = 'deleteBtn';
      li.appendChild(deleteBtn);

      return li;
    }

    checklist.addEventListener('click', function(e) {
        if (e.target.classList.contains('editBtn')) {
          const li = e.target.parentElement;
          const newText = prompt('Enter new text:');
          if (newText !== null) {
            li.querySelector('.item-name').textContent = newText;
          }

        } else if (e.target.classList.contains('deleteBtn')) {
          e.target.parentElement.remove();

        } else if (e.target.tagName === 'LI') {
          e.target.classList.toggle('checked');
          if (e.target.classList.contains('checked')) {
            checklist.appendChild(e.target);
          } else {
            checklist.insertBefore(e.target, checklist.firstChild);
          }
        }
        saveData();
        countSpan.textContent = checklist.children.length;
    }, false);
      

  
    // Function to add a new item to the checklist
    function addItem() {
      const text = addItemInput.value.trim();
      if (text !== '') {
        const li = createChecklistItem(text);
        checklist.appendChild(li);
        addItemInput.value = '';
      } else {
        alert('Please enter a valid item.');
      }
      saveData();
      countSpan.textContent = checklist.children.length;
    }
  
    // Event listener for add item button
    addItemBtn.addEventListener('click', addItem);
  
    // Event listener for Enter key
    addItemInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addItem();
      }
    });

    function saveData() {
        localStorage.setItem('myChecklistData', checklist.innerHTML);
    }
});
  