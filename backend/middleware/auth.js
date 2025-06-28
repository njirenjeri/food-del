import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
    try{
        const token = req.headers.token;

        if (!token) {
            return res.status(401).json({success:false, message: "Unauthorised! Login Again"})
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        req.body = req.body || {}
    
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log("Auth middleware error:", error)
        res.status(401).json({success:false, message: "Unauthorized"})
    }
}

export default authMiddleware;