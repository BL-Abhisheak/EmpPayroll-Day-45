function navtoaddemp() {
    window.location.href = "index.html";
}


function navtodisp(){
    window.location.href = "empl-display.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector(".emp-table tbody");
    tableBody.innerHTML = "";

    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    employees.forEach(emp => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td class="name-cell">
                <img src="images/${emp.profile}" />
                ${emp.name}
            </td>
            <td>${emp.gender}</td>
            <td>
                ${emp.departments.map(d => `<span class="tag">${d}</span>`).join("")}
            </td>
            <td>₹ ${emp.salary}</td>
            <td>${emp.startDate}</td>
            <td class="actions">✏️ 🗑️</td>
        `;

        tableBody.appendChild(row);
    });
});



function deleteemp(){
    
}

