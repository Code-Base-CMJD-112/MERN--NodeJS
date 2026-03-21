require("dotenv").config()
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET

const authToken = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ eror: "No token provided" })
    }
    const token = authHeader.split(" ")[1]

    if (!token) {
        return res.status(401).json({ eror: "Invalid token format" })
    }
    try {
         //token process
         const decoded = jwt.verify(token, jwtSecret)
         req.user = decoded
         next()
    } catch (err) {
        console.error(err)
        return res.status(401).json({ eror: "Invalid token" })
    }
}

module.exports = authToken