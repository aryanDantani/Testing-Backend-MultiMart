const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // Import cors package
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const sliderProductRoutes = require("./routes/sliderProductRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Enable CORS
app.use(
  cors({
    origin: "*", // Allow frontend to access backend
    credentials: true, // Allow cookies/auth headers
  })
);

// Routes
app.use("/api/auth", authRoutes);

app.use("/api/auth/products", productRoutes);

app.use("/api/auth/sliderproducts", sliderProductRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("MongoDB connected");

    // Drop unique constraint on 'role' if it exists
    const userCollection = mongoose.connection.db.collection("users");
    const indexes = await userCollection.indexes();
    const roleIndex = indexes.find(
      (index) => index.key && index.key.role === 1
    );

    if (roleIndex) {
      await userCollection.dropIndex("role_1").catch((err) => {
        console.error("Error dropping role index:", err);
      });
      console.log("Dropped unique index on role");
    }
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
