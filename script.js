document.querySelectorAll('.social-icon').forEach(item => {
    item.addEventListener('click', event => {
        console.log(`Navigating to ${event.currentTarget.href}`);
    });
});

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
        const content = faq.querySelector('.content');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});