//your JS code here. If required.
document.querySelector("input[type='button']").addEventListener("click", function () {
    // Get the dropdown list
    const select = document.getElementById("colorSelect");

    // Get the selected option
    const selectedOption = select.options[select.selectedIndex];

    // Remove the selected option if it exists
    if (selectedOption) {
        select.remove(select.selectedIndex);
    }
});
