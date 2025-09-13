document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('reservationForm');

    form.addEventListener('submit', e =>{
        e.preventDefault();
        let valid = true;

        //Clear errors
        document.querySelectorAll('.error').forEach(error => error.textContent = '');

        //Name validation
        const name = document.getElementById('name').value.trim();
        const nameError = document.getElementById('nameError');
        if(!name){
            nameError.textContent = 'Name is required';
            valid = false;
        }
        else if(name.length < 2){
            nameError.textContent = 'Name must be atleast two characters';
            valid = false
        }

        //Email validation
        const email = document.getElementById('email').value.trim();
        const emailError = document.getElementById('emailError');
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!email){
            emailError.textContent = 'Email is required';
            valid = false;
        }
        else if(!re.test(email)){
            emailError.textContent = 'Enter a valid email';
            valid = false;
        }

        //Date Validation
        const dateInput = document.getElementById('date').value;
        const dateError = document.getElementById('dateError');
        const today = new Date();
        today.setHours(0,0,0,0); //reset time part

        if(!dateInput){
            dateError.textContent = 'Please select a date';
            valid = false;
        }
        else{
            const selectedDate = new Date(dateInput);
            if(selectedDate < today){
                dateError.textContent = 'Date cannot be in the past';
                valid = false;
            }
        }

        //Time Validation
        const timeInput = document.getElementById('time').value;
        const timeError = document.getElementById('timeError');
        if(!timeInput){
            timeError.textContent = 'Please select a time';
            valid = false;
        }
        else{
            const [hours,minutes] = timeInput.split(':').map(Number);
            if(hours < 9 || (hours >= 21 && minutes > 0) || hours > 21){
                timeError.textContent = 'Time must be between 09:00 and 21:00';
                valid = false;
            }
        }
        if(valid){
            alert('Reservation successful');
            form.reset();
        }
    });
});