// todo: build controller index

const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");

router.use("/", dashboardRoutes);
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
