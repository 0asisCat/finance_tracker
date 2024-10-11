const mainForm = document.querySelector("#form");
const weekButton = document.querySelector("#week-button")

weekButton.onclick = addWeek();

function addWeek(){
    const weekNo = 0
    const HTMLString = `
    <fieldset>
        <legend>Week ${weekNo}</legend>
    </fieldset>
    `;
}
