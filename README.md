"# Book-Management" 
# Book Management System - Login Page

This is a simple login page for a Book Management System where users can log in using their name, email, and a One-Time Password (OTP). The system generates an OTP which the user enters to complete the login process. Upon successful login, the user is redirected to the main page of the Book Management System.

## Features

- **OTP Generation**: Users can generate a one-time password (OTP) that is valid for a short time.
- **OTP Verification**: Users must enter the correct OTP to log in.
- **Login Form**: Users are prompted for their name, email, and OTP to gain access.
- **Responsive Design**: The login page adjusts its layout based on the screen size (mobile-friendly).

## Technologies Used

- **HTML**: Markup language used for structuring the login page.
- **CSS**: Styling for the login page and form elements.
- **JavaScript**: OTP generation, validation, and login form handling.
  
## File Structure


## How It Works

1. **Login Process**:
    - The user provides their **name**, **email**, and the **OTP**.
    - When the "Generate OTP" button is clicked, an OTP is generated and displayed on the screen. The OTP input field is enabled, and the user has to enter the OTP within a specific time.
    - After entering the correct OTP, the user can click the "Login" button to be redirected to the main page (`Management.html`).
    - If the OTP is incorrect or expired, the login is denied.

2. **OTP Expiration**:
    - The OTP is only valid for 100 seconds. After that, the user is required to generate a new OTP.

3. **Responsive Design**:
    - The page is mobile-friendly, and the layout adjusts for smaller screen sizes.

## Setup Instructions

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/book-management-system.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd book-management-system
    ```

3. **Open the `index.html` File**:
    - Simply open `index.html` in any modern web browser to view and test the login page.

4. **Ensure Files Are in the Same Directory**:
    - Make sure the `index.html`, `styles.css`, and `Management.html` files are in the same folder so that the links and redirections work correctly.

## Screenshots

### Login Page

![Login Page Screenshot](screenshots/login_page.png)

### OTP Message

![OTP Message Screenshot](screenshots/otp_message.png)

## Contributions

Feel free to fork the project and submit pull requests for any improvements or bug fixes.

## License

This project is open-source and available under the [MIT License](LICENSE).
