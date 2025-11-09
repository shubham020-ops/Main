// Jab poora page load ho jaaye tab ye code chalega
document.addEventListener("DOMContentLoaded", function() {

    // === Notification Dot Logic ===
    const bellIcon = document.querySelector('[data-bs-target="#notificationsPanel"]');
    const notificationDot = document.getElementById('notification-dot');

    if (bellIcon && notificationDot) {
        // Shuru mein dot dikhaane ke liye (demo)
        // Aap backend se check karke isse show/hide kar sakte hain
        notificationDot.style.display = 'block';

        // Jab user bell icon pe click kare
        bellIcon.addEventListener('click', function() {
            // Dot ko hide kar do (kyunki user ne notifications dekh liye)
            notificationDot.style.display = 'none';
        });
    }

    // === Product 'Buy Now' Button Logic (Demo) ===
    const buyButtons = document.querySelectorAll('.btn-buy');

    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Page ko reload hone se rokna
            
            // Product ka naam paas waale 'h5' tag se lena
            const cardBody = this.closest('.card-body');
            const productName = cardBody.querySelector('.product-name').innerText;

            // Alert dikhana
            alert(productName + " ko khareedne ke liye backend setup (payment gateway aur invoice) zaroori hai. Ye abhi sirf design hai.");
            
            // Asli website mein, yahan user ko cart ya checkout page par bhejte hain
            // window.location.href = '/checkout?product_id=123';
        });
    });

    // === Social Login Button Logic (Demo) ===
    // Ye check karega ki hum login page par hain ya nahi
    const googleBtn = document.querySelector('.btn-google');
    const facebookBtn = document.querySelector('.btn-facebook');

    if (googleBtn) {
        googleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Google Login ke liye Google API aur backend server setup ki zaroorat hai.');
        });
    }

    if (facebookBtn) {
        facebookBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Facebook Login ke liye Facebook Developer setup aur backend server ki zaroorat hai.');
        });