let titels = [];
let notes = [];
let trashtitels = [];
let trashnotes = [];
load()



function render() {

    if (titels.length <= 20) {
        let content = document.getElementById(`filIn`);
        content.innerHTML = ``;
        for (let i = 0; i < titels.length; i++) {
            content.innerHTML += /*html*/ `
        <div class="note">
        <h2> ${titels[i]}</h2><hr> 
        ${notes[i]}<br>
        <div class="img-delet" >
        <img  onclick="deletNote(${i})" src="img/papierkorb-50.png"></div>
        </div>
        `;
        }
    } else {
        alert(`Notziblock ist voll`)
    }

}

function addNote() {
    let titeltText = document.getElementById(`titel`).value;
    let noteText = document.getElementById(`note`).value;
    if (titeltText == `` || noteText == ``) {
        alert(`Bitte Titel und Notiz eingen eingeben`)
    } else {
        titels.push(titeltText);
        notes.push(noteText);
        render();
        save();
        document.getElementById(`titel`).value = ``;
        document.getElementById(`note`).value = ``;
    }
}

function deletNote(i) {
    trashtitels.push(titels[i]); //in ein neuen Array laden trashtitels beim Button deletNote
    trashnotes.push(notes[i]); // trashnotes ist der neue Array // notes[i] ist der Alte vom dem die Information übergeben wird
    titels.splice(i, 1); //danach löschen 
    notes.splice(i, 1);
    render();
    save();
}

function save() {
    let titelAsText = JSON.stringify(titels);
    let noteAsText = JSON.stringify(notes);
    localStorage.setItem(`titels`, titelAsText);
    localStorage.setItem(`notes`, noteAsText);
    //
    let titelAsTexts = JSON.stringify(trashtitels);
    let noteAsTexts = JSON.stringify(trashnotes);
    localStorage.setItem(`trashtitels`, titelAsTexts);
    localStorage.setItem(`trashnotes`, noteAsTexts);
}

function load() {
    let titelAsText = localStorage.getItem(`titels`)
    let noteAsText = localStorage.getItem(`notes`)
    if (titelAsText && noteAsText) {
        titels = JSON.parse(titelAsText);
        notes = JSON.parse(noteAsText);
    }
    //
    let titelAsTexts = localStorage.getItem(`trashtitels`)
    let noteAsTexts = localStorage.getItem(`trashnotes`)
    if (titelAsTexts && noteAsTexts) {
        trashtitels = JSON.parse(titelAsTexts);
        trashnotes = JSON.parse(noteAsTexts);
    }
}