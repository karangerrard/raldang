import { users, type User, type InsertUser, type ContactInquiry, type InsertContactInquiry } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiries: Map<number, ContactInquiry>;
  currentUserId: number;
  currentInquiryId: number;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
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

  async createInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentInquiryId++;
    const createdAt = new Date().toISOString();
    
    // Create the complete contact inquiry with generated ID and timestamp
    const inquiry: ContactInquiry = { 
      ...insertInquiry, 
      id,
      createdAt,
      message: insertInquiry.message || null
    };
    
    this.inquiries.set(id, inquiry);
    console.log(`New inquiry received from ${inquiry.name} (${inquiry.email})`);
    return inquiry;
  }
}

export const storage = new MemStorage();
