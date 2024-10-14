const mainForm = document.querySelector("#form");
const weekBtn = document.querySelector("#week-btn")
const monthOption = document.querySelector("#entry-dropdown");
let weekNo = 0;
let isFour = false;

function addWeek(){
    weekNo++;
    if (weekNo >= 5){
        weekBtn.style.display('none');
    }
    const HTMLString = `
    <fieldset>
        <legend>Week ${weekNo}</legend>
        <table>
            <tr>
                <th>Item</th>
                <th>Number</th>
                <th>Cost</th>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td> </td>
            </tr>
        </table>
    </fieldset>
    `;
    mainForm.insertAdjacentHTML('beforeend', HTMLString);
}

weekBtn.addEventListener("click", addWeek);

// create a table: for item, number, cost
// within fieldset create button to add rows and to add total cost, w/out losing the input
