// Elements
const codes = document.querySelectorAll('.code');
const verifyBtn = document.getElementById('verifyBtn');
const resendBtn = document.getElementById('resendBtn');
const progressBar = document.querySelector('.progress');
const emailModal = document.getElementById('emailModal');
const helpModal = document.getElementById('helpModal');
const countdown = document.getElementById('countdown');

let timeLeft = 300; // 5 minutes in seconds
let progressWidth = 0;
let countdownInterval;

// Initialize the verification page
function init() {
    codes[0].focus();
    startCountdown();
    updateProgress();
}

// Handle code input
codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = '';
            setTimeout(() => {
                if (idx < codes.length - 1) {
                    codes[idx + 1].focus();
                }
                checkComplete();
            }, 10);
        } else if (e.key === 'Backspace') {
            setTimeout(() => {
                if (idx > 0) {
                    codes[idx - 1].focus();
                }
                checkComplete();
            }, 10);
        }
    });

    code.addEventListener('paste', (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, codes.length);
        
        if (/^\d+$/.test(pastedData)) {
            pastedData.split('').forEach((digit, i) => {
                if (i < codes.length) {
                    codes[i].value = digit;
                }
            });
            codes[codes.length - 1].focus();
            checkComplete();
        }
    });
});

// Check if all codes are filled
function checkComplete() {
    const completed = Array.from(codes).every(code => code.value !== '');
    verifyBtn.disabled = !completed;
    
    if (completed) {
        verifyBtn.classList.add('active');
    } else {
        verifyBtn.classList.remove('active');
    }
}

// Timer functionality
function startCountdown() {
    updateCountdown();
    countdownInterval = setInterval(() => {
        timeLeft--;
        updateCountdown();
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            resendBtn.disabled = false;
            verifyBtn.disabled = true;
            codes.forEach(code => {
                code.disabled = true;
            });
        }
    }, 1000);
}

function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdown.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    updateProgress();
}

function updateProgress() {
    progressWidth = ((300 - timeLeft) / 300) * 100;
    progressBar.style.width = `${progressWidth}%`;
}

// Handle verification
verifyBtn.addEventListener('click', () => {
    const code = Array.from(codes).map(input => input.value).join('');
    // Simulate verification
    verifyBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
    
    setTimeout(() => {
        if (code === '123456') { // Demo correct code
            showSuccess();
        } else {
            showError();
        }
    }, 1500);
});

function showSuccess() {
    verifyBtn.innerHTML = '<i class="fas fa-check"></i> Verified!';
    verifyBtn.style.backgroundColor = '#4CAF50';
    progressBar.style.backgroundColor = '#4CAF50';
    clearInterval(countdownInterval);
}

function showError() {
    verifyBtn.innerHTML = 'Verify Code <i class="fas fa-arrow-right"></i>';
    verifyBtn.style.backgroundColor = '';
    codes.forEach(code => {
        code.value = '';
        code.style.borderColor = '#ff4444';
        setTimeout(() => {
            code.style.borderColor = '#ddd';
        }, 1000);
    });
    codes[0].focus();
}

// Email editing functionality
document.getElementById('editEmail').addEventListener('click', () => {
    emailModal.style.display = 'flex';
});

document.getElementById('cancelEmail').addEventListener('click', () => {
    emailModal.style.display = 'none';
});

document.getElementById('saveEmail').addEventListener('click', () => {
    const newEmail = document.getElementById('newEmail').value;
    if (validateEmail(newEmail)) {
        document.getElementById('email').textContent = newEmail;
        emailModal.style.display = 'none';
    } else {
        document.getElementById('newEmail').style.borderColor = '#ff4444';
    }
});

// Help modal functionality
document.getElementById('needHelpBtn').addEventListener('click', () => {
    helpModal.style.display = 'flex';
});

document.getElementById('closeHelp').addEventListener('click', () => {