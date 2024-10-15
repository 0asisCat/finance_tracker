const mainForm = document.querySelector("#form");
const monthOption = document.querySelector("#entry-dropdown");
const tableContainer = document.querySelector("#table-container");
const tableLabels = document.querySelector("#table-labels");

const weekBtn = document.querySelector("#week-btn")
const columnBtn = document.querySelector("#add-column");
let weekNo = 0;
let isFour = false;

function addWeek(){
    weekNo++;
    if (weekNo >= 5){
        weekBtn.style.display('none');
    }
    const HTMLString = `
    <fieldset id="table-box">
        <legend class="strong">Week ${weekNo}</legend>
        <table>
            <tr id="table-labels">
                <th>Item</th>
                <th>Number</th>
                <th>Cost</th>
            </tr>
        </table>
        <button id="add-column" type="button">Add</button>
    </fieldset>
    `;
    tableContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function addColumn(){ 
    const addColumnHTML = `
        <tr>
            <td><input type="text"></th>
            <td><input type="text"></th>
            <td><input type="text"></th>
        </tr>
    `
    tableLabels.insertAdjacentHTML('beforeend', addColumnHTML);
} // solve this shit

weekBtn.addEventListener("click", addWeek);
columnBtn.addEventListener("click", addColumn);

// create a table: for item, number, cost
// within fieldset create button to add rows and to add total cost, w/out losing the input
