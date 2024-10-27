# Account Verification System by Srujit Varasala

A modern verification system featuring a 6-digit code input interface with real-time validation and user-friendly design. Built with HTML5, CSS3, and vanilla JavaScript.
A modern, user-friendly account verification system with a sleek UI and advanced features. This project provides a robust verification code input system with timing, email editing capabilities, and helpful user guidance.

## Features

### Core Functionality
- Six-digit verification code input
- Real-time input validation
- Automatic focus progression
- Clipboard paste support
- Countdown timer with visual progress bar

### User Interface
- Clean, modern design
- Responsive layout for all devices
- Smooth animations and transitions
- Visual feedback for user actions
- Progress indication

### Advanced Features
- Email address editing capability
- Help system with common solutions
- Code expiration countdown
- Resend code functionality
- Error handling and validation
- Mobile-responsive design

## Installation

1. Clone the repository:
```bash
git clone https://github.com/srujit12091997/Verify_account.git
```

2. Navigate to the project directory:
```bash
cd account-verification
```

3. Open the project:
- Open `index.html` in your web browser
- Or serve it using a local server:
  ```bash
  python -m http.server 8000
  # or
  php -S localhost:8000
  ```

## File Structure

```
account-verification/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Usage

### Basic Implementation
1. Open the verification page
2. Enter the 6-digit code received via email
3. Click "Verify Code" to submit

### Advanced Features
- **Edit Email**: Click the edit icon next to the email address
- **Need Help**: Access the help modal via the "Need Help?" button
- **Resend Code**: Request a new code after the timer expires
- **Paste Code**: Support for pasting the entire code at once

## Technical Details

### Dependencies
- Font Awesome 6.0.0 (CDN)
- Google Fonts: Inter

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Responsive Breakpoints
- Mobile: < 500px
- Desktop: ≥ 500px

## Customization

### Colors
The main colors used in the project:
```css
:root {
    --primary-color: #4CAF50;
    --background-color: #f5f7fa;
    --text-color: #333;
    --border-color: #ddd;
}
```

### Timing
Modify timing variables in `script.js`:
```javascript
let timeLeft = 300; // Verification code expiration time (in seconds)
```

## Security Considerations

1. **Rate Limiting**: Implement rate limiting on the backend
2. **Code Expiration**: Codes automatically expire after 5 minutes
3. **Input Validation**: Client-side validation for all inputs
4. **Error Handling**: Comprehensive error handling system

## Best Practices

1. Keep the verification code length at 6 digits
2. Provide clear error messages
3. Allow code pasting for better UX
4. Include a countdown timer
5. Offer resend functionality
6. Provide help documentation

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Srujit Varasala
- Email: srujit.v@gmail.com
- GitHub: [@srujit12091997](https://github.com/srujit12091997)
- Project Link: [https://github.com/srujit12091997/Verify_account](https://github.com/srujit12091997/Verify_account)

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Modern CSS Reset