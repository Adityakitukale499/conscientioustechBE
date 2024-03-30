// const express = require("express");
// const authRoutes = require("./routes/authRoutes");
// const employeeRoutes = require("./routes/employeeRoutes")
// const departmentRoutes = require("./routes/departmentRoutes")
// const app = express();
// app.use(express.json());

// app.use('/auth', authRoutes);
// app.use('/employee', employeeRoutes)
// app.use('/department', departmentRoutes)

// module.exports = app;

const express = require("express");
const cors = require("cors"); // Import CORS middleware
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,PUT,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/employee", employeeRoutes);
app.use("/department", departmentRoutes);

module.exports = app;
