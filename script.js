document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('confirmation-modal');
    const closeModal = document.querySelector('.close');
    const bookButtons = document.querySelectorAll('.book-btn');
    const bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        showModal();
    });

    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            showModal();
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function showModal() {
        const today = new Date();
        const bookingDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
        document.getElementById('booking-date').textContent = bookingDate;

        modal.style.display = 'block';
        setTimeout(() => {
            generateConfetti();
        }, 1000);
    }

    function generateConfetti() {
        const confettiContainer = document.getElementById('confetti');
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confettiContainer.appendChild(confetti);
        }
    }
});
