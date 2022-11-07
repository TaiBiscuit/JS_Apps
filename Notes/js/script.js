const addBox = document.querySelector('.add-b');
const popBox = document.querySelector('.pop-up-box');
const popBoxTitle = document.querySelector('.head p');
const closeIcon = document.querySelector('.head i');
const titleTag = document.querySelector('input');
const descripTag = document.querySelector('textarea');
const addBtn = document.querySelector('button');
const content = document.querySelector('content');
const monthName =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const notes = JSON.parse(localStorage.getItem("notes") || "[]");                                                                                  //gets localstorage note if exist else pass an empty array

let isUpdate = false, updateId;

addBox.addEventListener('click',() =>{
    titleTag.focus();
    popBox.classList.add('show');                                                                                                                  //adds the show class to the popup
})

closeIcon.addEventListener('click', () =>{
    titleTag.value = '';
    descripTag.value = '';
    addBtn.innerText ='Add Note';
    popBoxTitle.innerText = 'New a new Note!';
    isUpdate = false;
    popBox.classList.remove('show'); 
})

function showNotes(){
    document.querySelectorAll('.note').forEach(note => note.remove());                                                                              //removes duplicates when creating a new note
    notes.forEach((note, index) => {
        let liTag =`<li class="note">
                        <div class="details">
                            <p>${note.title}</p>
                            <span>${note.description}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${note.date}</span>
                            <div class="sett">
                                <i onclick= "showMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="menu">
                                    <li onclick= "edNote(${index}, '${note.title}', '${note.description}')">Edit</li>
                                    <li onclick="delNote(${index})">Delete</li>
                                </ul>
                            </div> 
                        </div>
                    </li> `;
        addBox.insertAdjacentHTML("afterend", liTag);
    })
}

showNotes();

function edNote(noteId, title, description) {
    isUpdate = true;
    updateId= noteId;
    addBox.click();
    titleTag.value = title;
    descripTag.value = description;
    addBtn.innerText="Update Note";
    popBoxTitle.innerText="Update a Note";
    console.log(noteId, title, description);
}

function delNote(noteId){
    notes.splice(noteId, 1);
    localStorage.setItem("notes", JSON.stringify(notes));  
    showNotes();
}

function showMenu(elem){
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != elem){
            elem.parentElement.classList.remove("show");
        }
    })
}

addBtn.addEventListener('click', e =>{  
    e.preventDefault();
    let noteTitle = titleTag.value,                                                                                                                  //gets the values and stores them
    noteDesc = descripTag.value;

    if(noteDesc || noteTitle){
        let dateObj = new Date();
        year = dateObj.getFullYear();
        month = monthName[dateObj.getMonth()];                                                                                                       //gets the month from the array
        day =dateObj.getDate();
        let noteInfo = {
            title: noteTitle, description: noteDesc,
            date: `${month} ${day}, ${year}`
        }
        if(!isUpdate){
            notes.push(noteInfo);                                                                                                                        //adds new note to notes
        } else{
            notes [updateId] = noteInfo;                //updates specified note
            isUpdate = false;
        }

        localStorage.setItem("notes", JSON.stringify(notes));                                                                                        //saves the data
        closeIcon.click();
        showNotes();
    }
})


