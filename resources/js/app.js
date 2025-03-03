import './bootstrap';
import './time_date';
import './weather';
import './greeting';

//My Tasks page popup
document.addEventListener("DOMContentLoaded", function () {
    const popButtons = document.querySelectorAll(".pop");

    popButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents immediate closing when clicking the button
            const popup = this.nextElementSibling; // Selects the next sibling popup

            // Close all other popups before opening the clicked one
            document.querySelectorAll(".popup").forEach(p => {
                if (p !== popup) {
                    p.classList.remove("active");
                }
            });

            // Toggle the popup's active class
            popup.classList.toggle("active");
        });
    });

    // Close popups when clicking outside
    document.addEventListener("click", function () {
        document.querySelectorAll(".popup").forEach(p => {
            p.classList.remove("active");
        });
    });
});
