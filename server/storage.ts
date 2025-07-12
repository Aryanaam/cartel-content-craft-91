import { type ContactMessage, type InsertContactMessage } from "@shared/schema";

// Simple storage interface for contact messages only
export interface IStorage {
  saveContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private contactMessages: Map<number, ContactMessage>;
  private currentMessageId: number;

  constructor() {
    this.contactMessages = new Map();
    this.currentMessageId = 1;
  }

  async saveContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }
}

export const storage = new MemStorage();