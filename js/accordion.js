document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const accordionContents = document.querySelectorAll('.accordion-content');

    accordionHeaders.forEach((header) => {

        const button = header.querySelector('button.fas');

        button.addEventListener('click', () => {
            const accordionItem = header.closest('.accordion-item');
            const accordionContent = accordionItem.querySelector('.accordion-content');

            // Remove other accordion content if they are active
            accordionContents.forEach((content) => {
                if (content !== accordionContent && content.classList.contains('active')) {
                    content.classList.remove('active');
                    content.style.display = 'none';
                }
            });

            // Remove other buttons if they are active
            accordionHeaders.forEach((otherHeader) => {
                const otherButton = otherHeader.querySelector('button.fas');
                if (otherButton !== button && otherButton.classList.contains('active')) {
                    otherButton.classList.remove('active', 'fa-minus');
                    otherButton.classList.add('fa-plus');
                    otherButton.style.color = '';
                    otherHeader.classList.remove('active-header');
                    otherHeader.style.backgroundColor = ''; // Reset background color
                    otherHeader.style.color = ''; // Reset text color
                }
            });

            // Toggle active class for the button and content
            button.classList.toggle('active');
            accordionContent.classList.toggle('active');

            if (button.classList.contains('active')) {
                button.classList.remove('fa-plus');
                button.classList.add('fa-minus');
                button.style.color = 'var(--bg-black-100)';
                header.classList.add('active-header');
                header.style.backgroundColor = 'var(--skin-color)'; // Change background color to red
                header.style.color = 'var(--bg-black-100)'; // Change text color to white
                accordionContent.style.display = 'block';
            } else {
                button.classList.add('fa-plus');
                button.classList.remove('fa-minus');
                button.style.color = '';
                header.classList.remove('active-header');
                header.style.backgroundColor = ''; // Reset background color
                header.style.color = ''; // Reset text color
                accordionContent.style.display = 'none';
            }
        });
    });

    const contactForm = document.forms['accordion-contact-form'];
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const fullname = contactForm.elements['fullname'].value;
        const email = contactForm.elements['email'].value;
        const message = contactForm.elements['message'].value;

        if (fullname === '' || email === '' || message === '') {
            window.alert('You can\'t submit an empty form');
        }
    });
});
