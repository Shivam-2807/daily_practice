const darkmode = document.querySelector('#darkmode');
const asid = document.querySelector('.asid');
const hero = document.querySelector('.hero');
const b1 = document.querySelector('#b1');
const form1 = document.querySelector('.form1');
const closebtn = document.querySelector('#closebtn');
const taskForm = document.querySelector('.form1 form');
const tasksContainer = document.querySelector('.tasks-container');
const grandparent = document.querySelector('#grandparent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

// --- 1. Theme Switcher ---
darkmode.addEventListener('click', () => {
    asid.classList.toggle('dark-active');
    hero.classList.toggle('dark-active');
    
    const isDark = hero.classList.contains('dark-active');
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    console.log(`Theme toggled. Attribute data-theme = "${document.body.getAttribute('data-theme')}"`);
});


b1.addEventListener('click', () => {
   form1.style.display = 'flex';
});

closebtn.addEventListener('click', () => {
    form1.style.display = 'none';
});

// --- 3. Handle Form Submission & Create Dynamic Cards ---
taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    const taskText = document.querySelector('#data-id').value;
    const taskCategory = document.querySelector('#data-category').value;
    

    const taskId = `task-${Date.now()}`;
    
    
    const cardHTML = `
        <div class="card" data-id="${taskId}" data-category="${taskCategory}">
            <div>
                <input type="checkbox" class="task-checkbox">
            </div>
            <h3>${taskText} <span style="font-size: 12px; opacity: 0.6;">(${taskCategory})</span></h3>
            <div>
                <button class="delete-btn">Delete</button>
                <button class="update-btn">Update</button>
            </div>
        </div>
    `;
    
    
    tasksContainer.insertAdjacentHTML('beforeend', cardHTML);

    form1.style.display = 'none';
    taskForm.reset();
});


tasksContainer.addEventListener('change', (event) => {
    if (event.target.classList.contains('task-checkbox')) {
        const card = event.target.closest('.card');
        const taskHeading = card.querySelector('h3');
        
        if (event.target.checked) {
            taskHeading.classList.add('completed');
        } else {
            taskHeading.classList.remove('completed');
        }
    }
});

tasksContainer.addEventListener('click', (event) => {
    
    // --- DELETE LOGIC ---
    if (event.target.classList.contains('delete-btn')) {
        const card = event.target.closest('.card');
        card.remove();
    }

    if (event.target.classList.contains('update-btn')) {
        const card = event.target.closest('.card');
        const taskHeading = card.querySelector('h3');
        
        const currentText = taskHeading.firstChild.textContent.trim();
        const newText = prompt("Update your task name:", currentText);
        
        if (newText !== null && newText.trim() !== "") {
            taskHeading.firstChild.textContent = newText + " ";
        }
    }
});
grandparent.addEventListener('click', () => {
    console.log('1. CAPTURING: Grandparent Box Clicked');
}, { capture: true });

parent.addEventListener('click', () => {
    console.log('2. CAPTURING: Parent Box Clicked');
}, { capture: true });

child.addEventListener('click', () => {
    console.log('3. CAPTURING: Child Box Clicked (Target Element)');
}, { capture: true });


// BUBBLING PHASE (Travels Up: Child -> Parent -> Grandparent -> Window)
grandparent.addEventListener('click', () => {
    console.log('6. BUBBLING: Grandparent Box Clicked');
});

parent.addEventListener('click', () => {
    console.log('5. BUBBLING: Parent Box Clicked');
});

child.addEventListener('click', () => {
    console.log('4. BUBBLING: Child Box Clicked (Target Element)');
});