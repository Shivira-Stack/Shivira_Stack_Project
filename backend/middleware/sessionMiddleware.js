export function checkSession(req, res) {
    if (!req.session.user) {
        return res.status(401).json({ error: "Session expired. Please log in again." });
    }
    return res.json({ user: req.session.user });
}