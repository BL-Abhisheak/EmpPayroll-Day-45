document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("payrolldataform");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("ipname").value;

        const profile = document.querySelector("input[name='profile']:checked")?.value || "";

        const gender = document.querySelector("input[name='gender']:checked")?.value || "";

        const departments = [];
        document.querySelectorAll(".dept-box input[type='checkbox']:checked")
            .forEach(cb => departments.push(cb.value));

        const salary = document.getElementById("salary").value;

        const day = document.getElementById("day").value;
        const month = document.getElementById("month").selectedOptions[0].text;
        const year = document.getElementById("year").value;

        const startDate = `${day} ${month} ${year}`;

        const employee = {
            name,
            profile,
            gender,
            departments,
            salary,
            startDate
        };

        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.push(employee);

        localStorage.setItem("employees", JSON.stringify(employees));

        window.location.href = "empl-display.html";
    });

});



const salarySlider = document.getElementById("salary");
const salaryOutput = document.getElementById("salary-output");

salarySlider.addEventListener("input", () => {
    salaryOutput.textContent = salarySlider.value;
});

