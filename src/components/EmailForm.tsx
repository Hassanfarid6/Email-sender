"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Mail, Send } from "lucide-react";
import { toast } from "sonner";

export default function EmailForm() {
  const [formData, setFormData] = useState({
    from: "",
    password: "",
    to: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.from || !formData.password || !formData.to || !formData.subject || !formData.message) {
      toast.error("All fields are required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from)) {
      toast.error("Please enter a valid sender email address");
      return false;
    }
    if (!emailRegex.test(formData.to)) {
      toast.error("Please enter a valid recipient email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Email sent successfully!", {
          description: `Your email has been delivered to ${formData.to}`
        });
        
        // Reset form
        setFormData({
          from: "",
          password: "",
          to: "",
          subject: "",
          message: ""
        });
      } else {
        toast.error("Failed to send email", {
          description: data.error || "Please try again later"
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Connection error", {
        description: "Unable to connect to the server. Make sure the backend is running on port 5000."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <Mail className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl font-bold">Send Email</CardTitle>
        </div>
        <CardDescription>
          Send emails instantly using our SMTP service
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="from">Your Email (Sender) *</Label>
            <Input
              id="from"
              name="from"
              type="email"
              placeholder="your-email@gmail.com"
              value={formData.from}
              onChange={handleChange}
              disabled={isLoading}
              className="transition-all"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Email Password *</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Your email app password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              className="transition-all"
              autocomplete="off"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="to">Recipient Email *</Label>
            <Input
              id="to"
              name="to"
              type="email"
              placeholder="recipient@example.com"
              value={formData.to}
              onChange={handleChange}
              disabled={isLoading}
              className="transition-all"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter email subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={isLoading}
              className="transition-all"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              className="min-h-[150px] transition-all resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Email
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}