
const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Path to our JSON file for storing the view count
const dataFilePath = path.join(__dirname, "data", "views.json");

// Function to ensure the data directory exists
async function ensureDataDirectory() {
    const dataDir = path.join(__dirname, "data");
    try {
        await fs.access(dataDir);
    } catch {
        await fs.mkdir(dataDir, { recursive: true });
    }
}

// Function to read the current view count
async function getViews() {
    try {
        await ensureDataDirectory();
        const data = await fs.readFile(dataFilePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist or is invalid, return default
        return { views: 0 };
    }
}

// Function to save the updated view count
async function saveViews(views) {
    await ensureDataDirectory();
    await fs.writeFile(dataFilePath, JSON.stringify({ views }, null, 2));
}

// API endpoint to get and increment view count
app.get("/api/views", async (req, res) => {
    try {
        const data = await getViews();
        // Increment the view count
        const updatedViews = data.views + 1;
        await saveViews(updatedViews);

        // Return the updated count
        res.json({ views: updatedViews });
    } catch (error) {
        console.error("Error updating view count:", error);
        res.status(500).json({ error: "Failed to update view count" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});