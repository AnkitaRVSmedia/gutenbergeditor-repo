// script.js
document.addEventListener('DOMContentLoaded', function () {
    const accordionTitles = document.querySelectorAll('.accordion-title');

    accordionTitles.forEach((title) => {
        title.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isOpen = content.classList.contains('open');

            // Close all items
            document.querySelectorAll('.accordion-content').forEach((item) => {
                item.classList.remove('open');
                item.classList.add('closed');
            });

            // Toggle the clicked item
            if (!isOpen) {
                content.classList.remove('closed');
                content.classList.add('open');
            }
        });
    });
});
