export const CreateAuthUserTable = `
  CREATE TABLE IF NOT EXISTS auth_user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    old_password VARCHAR(255) NOT NULL,
    role ENUM(
        'super_admin',
        'admin',
        'manager',
        'developer',
        'designer',
        'accountant',
        'support'
    ) DEFAULT NULL,
    status ENUM('active', 'inactive', 'suspended') DEFAULT 'inactive',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB;
`;

export const CreateAuthOtpTable = `
  CREATE TABLE IF NOT EXISTS auth_otp (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    otp VARCHAR(6) NOT NULL,
    verified_at TIMESTAMP NULL DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (email) REFERENCES auth_user(email) ON DELETE CASCADE
  ) ENGINE=InnoDB;
`;

export const CheckAuthUserRows = `SELECT COUNT(*) as count FROM auth_user`;

export const FindAuthUser = `SELECT * FROM auth_user WHERE email = ?`;

export const CreateAuthUser = `INSERT INTO auth_user (email, password, old_password, role, status) VALUES (?, ?, ?, 'super_admin', 'inactive')`;

export const CreateAuthUserOtp = `INSERT INTO auth_otp (email, otp) VALUES (?, ?)`;

export const LatestOtp = `SELECT * FROM auth_otp WHERE email = ? ORDER BY created_at DESC LIMIT 1`;

export const VerifiedOtp= `UPDATE auth_otp SET verified_at = NOW() WHERE id = ?`;

export const ActiveAuthUser = `UPDATE auth_user SET status = 'active' WHERE email = ?`;

export const AuthUserNewPassword = `UPDATE auth_user SET old_password = password, password = ?, updated_at = NOW() WHERE email = ?`;
