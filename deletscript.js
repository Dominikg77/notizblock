let trashtitels = [];
let trashnotes = [];
load()



function render() {

    if (trashtitels.length <= 40) {
        let content = document.getElementById(`filIn`);
        content.innerHTML = ``;
        for (let i = 0; i < trashtitels.length; i++) {
            content.innerHTML += /*html*/ `
        <div class="note">
        <h2> ${trashtitels[i]}</h2><hr> 
        ${trashnotes[i]}<br>
        </div>
        `;
        }
    } else {
        alert(`Notziblock ist voll`)
    }

}

function save() {
    let titelAsTexts = JSON.stringify(trashtitels);
    let noteAsTexts = JSON.stringify(trashnotes);
    localStorage.setItem(`trashtitels`, titelAsTexts);
    localStorage.setItem(`trashnotes`, noteAsTexts);
}

function load() {
    let titelAsTexts = localStorage.getItem(`trashtitels`)
    let noteAsTexts = localStorage.getItem(`trashnotes`)
    if (titelAsTexts && noteAsTexts) {
        trashtitels = JSON.parse(titelAsTexts);
        trashnotes = JSON.parse(noteAsTexts);
    }
}