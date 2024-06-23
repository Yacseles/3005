let currentPair = 1;  // Track the current pair of princesses being displayed

// Function to handle princess selection (can be customized further)
function choosePrincess(choice) {
    console.log(`User selected Princess ${choice}`);
    alert(`You selected Princess ${choice}.`);
}

// Function to proceed to the next pair of princesses
function nextPair() {
    currentPair++;  // Increment the current pair index

    // Update princess images and button texts for the next pair
    let princess1 = document.querySelector('.princessPair img:nth-of-type(1)');
    let princess2 = document.querySelector('.princessPair img:nth-of-type(2)');
    let button1 = document.querySelector('.princessPair button:nth-of-type(1)');
    let button2 = document.querySelector('.princessPair button:nth-of-type(2)');

    switch (currentPair) {

        case 3:
            princess1.src = 'images/mulan.jpeg';
            princess2.src = 'images/jasmine.jpeg';
            button1.textContent = 'Select Princess 5';
            button2.textContent = 'Select Princess 6';
            break;
        case 4:
            princess1.src = 'images/baymax.jpeg';
            princess2.src = 'images/brave.jpeg';
            button1.textContent = 'Select Princess 7';
            button2.textContent = 'Select Princess 8';
            break;
        default:
            // Handle any other cases or finalize action after all pairs are shown
            alert('Thank you for selecting your favorite princesses!');
            window.location.href = 'final_page.html'; // Navigate to the final page
            break;
    }
}
