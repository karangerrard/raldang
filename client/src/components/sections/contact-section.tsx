import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const contactFormSchema = z.object({
  name: z
  .string()
  .min(2, { message: "Name must be at least 2 characters" })
  .max(50, { message: "Name cannot exceed 50 characters." })
  .regex(/^[a-zA-Z\s]+$/, { message: "Name should contain only letters." }),
  phone: z
  .string()
  .min(10, { message: "Please enter a valid phone number" })
  .max(15, { message: "Phone number cannot exceed 15 digits." })
  .regex(/^\+?[0-9\s\-]{7,15}$/, { message: "Please enter a valid phone number" }),
  guests: z.string(),
  checkin: z.date({ required_error: "Please select a check-in date" }),
  checkout: z.date({ required_error: "Please select a check-out date" }), 
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;
type AboutSectionProps = {
  id: string;
}

export default function ContactSection({ id }: AboutSectionProps) {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      guests: "2",
      checkin: undefined,
      checkout: undefined,
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent",
        description: "Thank you for your inquiry! We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    // Send to backend API
    contactMutation.mutate(data);
    
    // Prepare WhatsApp message (as an alternative option)
    const whatsappMessage = encodeURIComponent(
      `*New Booking Inquiry*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Guests:* ${data.guests}\n` +
      `*Check-in:* ${data.checkin}\n` +
      `*Check-out:* ${data.checkout}\n` +
      `*Message:* ${data.message || "No additional message"}`
    );
    
    // Open WhatsApp with the message after a short delay
    setTimeout(() => {
      // Using business number placeholder - will be replaced with actual number
      window.open(`https://wa.me/918580863067?text=${whatsappMessage}`, '_blank');
    }, 1000);
  }

  return (
    <section id={id} className="py-20 bg-[hsl(var(--mountain-white))] text-[hsl(var(--mountain-pine))]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-8">
              We're excited to welcome you to our Himalayan haven. Reach out to us for bookings, 
              inquiries, or to plan your perfect mountain getaway.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[hsl(var(--mountain-gold))]">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Location</h4>
                  <p>Raldang View Homestay, Near Raldang Peak View Point, Kalpa, Kinnaur, Himachal Pradesh, India - 172107</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[hsl(var(--mountain-gold))]">
                  <i className="fas fa-phone-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Phone & WhatsApp</h4>
                  <p>+91 8580863067</p>
                  <p>+91 9999059585 <i className="fab fa-whatsapp text-green-400 ml-1"></i></p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-lg">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[hsl(var(--mountain-gold))]/20 hover:bg-[hsl(var(--mountain-pine))]/40 flex items-center justify-center transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/raldangviewhomestay/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-[hsl(var(--mountain-gold))]/20 hover:bg-[hsl(var(--mountain-pine))]/40 flex items-center justify-center transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl font-bold mb-6">Inquiry Form</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="px-4 py-3 rounded-lg bg-[hsl(var(--mountain-pine-800))] border border-[hsl(var(--mountain-blue))]/30 focus:border-[hsl(var(--mountain-gold))] focus:outline-none placeholder:text-[hsl(var(--mountain-pine))]/70 text-black"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Your phone number"
                            className="px-4 py-3 rounded-lg bg-[hsl(var(--mountain-pine-800))] border border-[hsl(var(--mountain-blue))]/30 focus:border-[hsl(var(--mountain-red))] focus:outline-none placeholder:text-[hsl(var(--mountain-pine))]/70 text-black"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Number of Guests</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="px-4 py-3 rounded-lg bg-[hsl(var(--mountain-pine-800))] border border-[hsl(var(--mountain-pine))] focus:border-[hsl(var(--mountain-red))] focus:outline-none placeholder:text-[hsl(var(--mountain-pine))]/70 text-black">
                              <SelectValue placeholder="Select guests" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1 Guest</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="3">3 Guests</SelectItem>
                            <SelectItem value="4">4 Guests</SelectItem>
                            <SelectItem value="5+">5+ Guests</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex flex-col md:flex-row md:gap-6 space-y-4 md:space-y-0">
                  <FormField
                    control={form.control}
                    name="checkin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium mb-2 block">Check-in Date</FormLabel>
                        <FormControl>
                          <DatePicker
                            selected={field.value}
                            onChange={(date: Date | null) => field.onChange(date)}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            placeholderText="Select check-in date"
                            className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--mountain-pine-800))] border border-[hsl(var(--mountain-blue))]/30 focus:border-[hsl(var(--mountain-red))] focus:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="checkout"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium mb-2 block">Check-out Date</FormLabel>
                          <FormControl>
                            <DatePicker
                              selected={field.value}
                              onChange={(date: Date | null) => field.onChange(date)}
                              dateFormat="dd/MM/yyyy"
                              minDate={form.getValues().checkin || new Date()}
                              placeholderText="Select check-out date"
                              className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--mountain-pine-800))] border border-[hsl(var(--mountain-blue))]/30 focus:border-[hsl(var(--mountain-red))] focus:outline-none"
                            />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Tell us about your visit or any special requirements"
                          className="px-4 py-3 rounded-lg bg-[hsl(var(--mountain-white))] border border-[hsl(var(--mountain-blue))]/30 focus:border-[hsl(var(--mountain-red))] focus:outline-none !placeholder:text-black !text-black"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="space-y-2">
                  <Button 
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full py-3 px-6 bg-[hsl(var(--mountain-gold))] hover:bg-[hsl(var(--mountain-gold))]/90 text-[hsl(var(--mountain-pine))] rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-whatsapp text-lg"></i>
                    {contactMutation.isPending ? "Sending..." : "Send Inquiry via WhatsApp"}
                  </Button>
                  <p className="text-xs text-center text-[hsl(var(--mountain-pine))]">
                    Your inquiry will be sent directly to our WhatsApp business number for faster response
                  </p>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
