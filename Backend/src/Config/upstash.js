import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

// Create a Rate Limiter that allows 10 requests per 20 seconds.
const ratelimit = new Ratelimit({  //Calling the Ratelimit library.
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "20 s"),
})

export default ratelimit;

//Here we are calling and defining the parameters of our rate limiter so malicious users cannot bring our server down.