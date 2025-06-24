import express from "express" ;
import { login, logout, onboard, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/Logout", logout);
router.post("/signup", signup);


//Custom middleware protectRoute has been created
router.post("/onboarding", protectRoute, onboard);


router.get("/me", protectRoute, (req,res) => {
    res.status(200).json({success: true, user: req.user});
});

export default router;


// Post method is used when we change on server side thats why 
// logout is post method cause it changes state on SS