import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactInquirySchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the incoming data
      const validatedData = contactInquirySchema.parse(req.body);
      
      // Store the inquiry
      const inquiry = await storage.createInquiry(validatedData);
      
      // Return success response
      res.status(201).json({ 
        success: true, 
        message: "Inquiry received successfully", 
        inquiryId: inquiry.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
