const express = require("express");
const router = express.Router();
const {getPrivateDate} = require("../controllers/private")
const {requireSignin} = require("../middleware/auth")

// Controllers
const {
    prices,
    products,
    createSubscription,
    subscriptionStatus,
    subscriptions,
    customerPortal,
} = require("../controllers/subs");

router.route("/prices").get(prices);
router.route("/products").get(products);

router.route("/create-subscription").post(requireSignin,createSubscription);

router.route("/subscription-status").get(requireSignin,subscriptionStatus);

router.route("/subscriptions").get(requireSignin,subscriptions);
router.route("/customer-portal").get(requireSignin,customerPortal);

module.exports = router;