import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // Per user rate limit
    const { success } = await ratelimit.limit("my-limit-key"); // usually use userID or IP address if the authentication setup
    if (!success)
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later" });
    next();
  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
