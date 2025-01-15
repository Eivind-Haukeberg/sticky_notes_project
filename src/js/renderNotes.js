const renderNotes = ()=> {
    const notesList = JSON.parse(localStorage.getItem("notes"));
    const notesContainer = document.querySelector(".notes-container");

    if (notesList) {
        notesContainer.innerHTML = "";
        const reversedNotesArray = notesList.slice().reverse();

        reversedNotesArray.forEach(note => {
            // create elements
            const noteCard = document.createElement("div");
            const noteSubject = document.createElement("span");
            const noteDate = document.createElement("span");
            const detailsToolContainer = document.createElement("div")
            const dateSubjectContainer = document.createElement("div")
            const editButton = document.createElement("button");
            const deleteButton = document.createElement("button");
            const editDeleteContainer = document.createElement("div")
            const noteText = document.createElement("p");
            
            // Append Element
            notesContainer.append(noteCard);
            noteCard.append(detailsToolContainer);
            detailsToolContainer.append(dateSubjectContainer, editDeleteContainer);
            noteCard.append(noteText);
            dateSubjectContainer.append(noteSubject, noteDate);
            editDeleteContainer.append(editButton, deleteButton);

            //  inserting notes data
            noteSubject.textContent = note.subject;
            noteDate.textContent = note.date;
            noteText.textContent = note.text;
            deleteButton.textContent = "X";
            editButton.textContent = "...";
            
            // add classes
            noteCard.classList.add("note-card");
            detailsToolContainer.classList.add("note-card__details-tools-container");
            dateSubjectContainer.classList.add("note-card__details-container");
            editDeleteContainer.classList.add("note-card__tools-container");
            deleteButton.classList.add("note-card__delete-button");
            editButton.classList.add("note-card__edit-button");
            noteText.classList.add("note-card__text");

            // styling
            noteCard.style.transform = `rotate(${note.rotation}deg)`;
        });
    }
};

export default renderNotes;