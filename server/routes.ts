import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertContentItemSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin Authentication Routes
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      res.json({ user: { id: user.id, username: user.username } });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Content Management Routes
  app.get("/api/admin/content", async (req, res) => {
    try {
      const items = await storage.getAllContentItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/admin/content/:type", async (req, res) => {
    try {
      const { type } = req.params;
      const items = await storage.getContentItemsByType(type);
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/admin/content", async (req, res) => {
    try {
      const validatedData = insertContentItemSchema.parse(req.body);
      const item = await storage.createContentItem(validatedData);
      res.json(item);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.put("/api/admin/content/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertContentItemSchema.partial().parse(req.body);
      const item = await storage.updateContentItem(parseInt(id), validatedData);
      
      if (!item) {
        return res.status(404).json({ message: "Content item not found" });
      }
      
      res.json(item);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.delete("/api/admin/content/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const success = await storage.deleteContentItem(parseInt(id));
      
      if (!success) {
        return res.status(404).json({ message: "Content item not found" });
      }
      
      res.json({ message: "Content item deleted" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Public API for frontend content
  app.get("/api/content/:type", async (req, res) => {
    try {
      const { type } = req.params;
      const items = await storage.getContentItemsByType(type);
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
