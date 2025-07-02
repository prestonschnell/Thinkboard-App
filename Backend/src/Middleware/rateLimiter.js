import ratelimit from "../Config/upstash.js";



const rateLimiter = async (req, res, next) => {
    try {
        const {success} = ratelimit.limit("my-limit-key")
        if (!success) {
            return res.status(429).json({message: "Too Many Requests!"});
        }
        next()
    } catch (error) {
        console.log("Rate limit error", error);
    }
}


export default rateLimiter;