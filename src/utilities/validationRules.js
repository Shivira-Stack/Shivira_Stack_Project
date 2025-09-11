// Password regex: 8–12 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,12}$/;

export const validationRules = {
    email: {
        required: "Enter your email to continue.",
        pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            message: "Invalid email format. Please use only lowercase letters.",
        },
    },

    password: {
        required: "Enter your password to continue.",
        pattern: {
            value: passwordPattern,
            message:
                "Your password must be 8–12 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
        },
    },

    newpassword: {
        required: "Enter your new password to continue.",
        pattern: {
            value: passwordPattern,
            message:
                "Your new password must be 8–12 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
        },
    },

    confirmpassword: {
        required: "Re-enter your password to confirm it.",
        validate: (value, formValues) =>
            value === formValues.newpassword || "New password and confirm password must be the same.",
    },
};
