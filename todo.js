const todolist = [{
    name:'make' ,
    dueDate:'20-12-20'
},{
    name:'wash',
    dueDate:'20-12-20'
}];

renderTodoList();

function renderTodoList(){
    let todolistHTML = '';

    for (let i=0 ; i<todolist.length; i++){
        const todoObject = todolist[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
       
        const html = 
        `<p> 
        ${name} ${dueDate}
        <button onclick ="
         todolist.splice(${i},1);
         renderTodoList();
        ">Delete
        </button>
        </p>`;
        todolistHTML += html;
    }

    document.querySelector('.js-todo-list')
    .innerHTML = todolistHTML;
}
function addTodo(){
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;

   todolist.push({
    name:name,
    dueDate:dueDate
    });

   inputElement.value = ' ';

   renderTodoList();

}