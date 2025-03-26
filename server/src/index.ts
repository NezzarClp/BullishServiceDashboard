import express, { Router } from "express";
import cors from "cors"; // Import cors
import createServicesRouter from "./routes/ServicesRouter";
import createInMemoryServiceStore from "./stores/ServicesStore";

const app = express();
const mainRouter = Router();
const PORT = 4001;

// Enable CORS for localhost:3000
app.use(
    cors({
        origin: "http://localhost:3000", // Allow only frontend from localhost:3000
        methods: ["GET", "POST"], // Specify allowed methods
    })
);

// Middleware
app.use(express.json());

// Stores
const serviceStore = createInMemoryServiceStore();

// Routes
const servicesRouter = createServicesRouter(serviceStore);
mainRouter.use("/services", servicesRouter);

// Main logic
app.use("/api", mainRouter);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
