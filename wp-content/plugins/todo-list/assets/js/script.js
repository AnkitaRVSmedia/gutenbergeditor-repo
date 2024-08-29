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

                 // Hide icons in closed content
                 const icons = item.previousElementSibling.querySelector('.gutenberg-accordion-icon');
                 if (icons) {
                     const closedIcons = icons.querySelectorAll('.icon-closed');
                     closedIcons.forEach((icon) => {
                         icon.classList.remove('hidden');
                     });
 
                     const openIcons = icons.querySelectorAll('.icon-opened');
                     openIcons.forEach((icon) => {
                         icon.classList.add('hidden');
                     });
                 }
            });


            // Toggle the clicked item
            if (!isOpen) {
                content.classList.remove('closed');
                content.classList.add('open');

                // Show icons in the opened content
                const icons = this.querySelector('.gutenberg-accordion-icon');
                if (icons) {
                    const closedIcons = icons.querySelectorAll('.icon-closed');
                    closedIcons.forEach((icon) => {
                        icon.classList.add('hidden');
                    });

                    const openIcons = icons.querySelectorAll('.icon-opened');
                    openIcons.forEach((icon) => {
                        icon.classList.remove('hidden');
                    });
                }
            }
        });
    });
});



