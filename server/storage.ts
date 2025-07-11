import { users, type User, type InsertUser, type ContentItem, type InsertContentItem } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Content management methods
  getAllContentItems(): Promise<ContentItem[]>;
  getContentItemsByType(type: string): Promise<ContentItem[]>;
  getContentItem(id: number): Promise<ContentItem | undefined>;
  createContentItem(item: InsertContentItem): Promise<ContentItem>;
  updateContentItem(id: number, item: Partial<InsertContentItem>): Promise<ContentItem | undefined>;
  deleteContentItem(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contentItems: Map<number, ContentItem>;
  private currentUserId: number;
  private currentContentId: number;

  constructor() {
    this.users = new Map();
    this.contentItems = new Map();
    this.currentUserId = 1;
    this.currentContentId = 1;
    
    // Initialize with sample content
    this.initializeSampleContent();
  }

  private initializeSampleContent() {
    // Create default admin user
    const adminUser: User = {
      id: 1,
      username: "admin",
      password: "admin123"
    };
    this.users.set(1, adminUser);
    this.currentUserId = 2;

    // Sample content items
    const sampleItems: ContentItem[] = [
      {
        id: 1,
        type: "hero",
        title: "Premium Content Marketing",
        content: "Transform your brand with data-driven content strategies that deliver measurable results.",
        imageUrl: "/placeholder.svg",
        link: null,
        metrics: null,
        order: 1,
        isActive: true
      },
      {
        id: 2,
        type: "service",
        title: "SEO Content Creation",
        content: "Drive organic traffic with expertly crafted SEO content that ranks and converts.",
        imageUrl: "/placeholder.svg",
        link: null,
        metrics: null,
        order: 1,
        isActive: true
      },
      {
        id: 3,
        type: "portfolio",
        title: "E-commerce Brand Growth",
        content: "Increased online sales by 300% through strategic content marketing and SEO optimization.",
        imageUrl: "/placeholder.svg",
        link: "https://example.com",
        metrics: JSON.stringify({ sales: "300%", traffic: "150%", conversion: "45%" }),
        order: 1,
        isActive: true
      }
    ];

    sampleItems.forEach(item => {
      this.contentItems.set(item.id, item);
    });
    this.currentContentId = 4;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllContentItems(): Promise<ContentItem[]> {
    return Array.from(this.contentItems.values()).sort((a, b) => a.order - b.order);
  }

  async getContentItemsByType(type: string): Promise<ContentItem[]> {
    return Array.from(this.contentItems.values())
      .filter(item => item.type === type && item.isActive)
      .sort((a, b) => a.order - b.order);
  }

  async getContentItem(id: number): Promise<ContentItem | undefined> {
    return this.contentItems.get(id);
  }

  async createContentItem(insertItem: InsertContentItem): Promise<ContentItem> {
    const id = this.currentContentId++;
    const item: ContentItem = { 
      ...insertItem, 
      id,
      order: insertItem.order || 0,
      isActive: insertItem.isActive ?? true
    };
    this.contentItems.set(id, item);
    return item;
  }

  async updateContentItem(id: number, updates: Partial<InsertContentItem>): Promise<ContentItem | undefined> {
    const existing = this.contentItems.get(id);
    if (!existing) return undefined;
    
    const updated: ContentItem = { ...existing, ...updates };
    this.contentItems.set(id, updated);
    return updated;
  }

  async deleteContentItem(id: number): Promise<boolean> {
    return this.contentItems.delete(id);
  }
}

export const storage = new MemStorage();
