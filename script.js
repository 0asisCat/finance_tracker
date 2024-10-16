const mainForm = document.querySelector("#form");
const monthOption = document.querySelector("#entry-dropdown");
const tableContainer = document.querySelector("#table-container");
const tableLabels = document.querySelector("#tables");

const weekBtn = document.querySelector("#week-btn")
const columnBtn = document.querySelector("#add-column");

let weekNo = 0;
let isFour = false;

function addWeek(){
    weekNo++;
    if (weekNo >= 5){
        weekBtn.style.display('none');
        weekBtn.style.background('gray'); // bro make this color change
    }
    const HTMLString = `
    <fieldset id="table-box">
        <legend class="strong">Week ${weekNo}</legend>
        <table id="tables">
            <tr>
                <th>Item</th>
                <th>Number</th>
                <th>Cost</th>
            </tr>
        </table>
        <button id="add-column" onclick="addColumn()">Add</button>
    </fieldset>
    `;
    tableContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function addColumn(){ 
    const addColumnHTML = `
        <tr>
            <td><input type="text" id="item"></th>
            <td><input type="text" id="number"></th>
            <td><input type="text" id="cost"></th>
        </tr>
    `;
    tableLabels.insertAdjacentHTML('beforeend', addColumnHTML);
} // solve this shit

weekBtn.addEventListener("click", addWeek);

// create a table: for item, number, cost = DONE
// button to add columns = fuking up
// within fieldset create button to add rows and to add total cost, w/out losing the input
