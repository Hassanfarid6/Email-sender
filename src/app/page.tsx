"use client";

import EmailForm from "@/components/EmailForm";
import { Mail, Server, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-primary/10 p-3 rounded-xl">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Email Sender
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack email application built with Next.js and Express.js
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast & Reliable</h3>
              <p className="text-sm text-muted-foreground">
                Instant email delivery powered by Gmail SMTP service
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Full-Stack Solution</h3>
              <p className="text-sm text-muted-foreground">
                Express.js backend with Next.js frontend integration
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure & Validated</h3>
              <p className="text-sm text-muted-foreground">
                Input validation and error handling on both sides
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Email Form */}
        <EmailForm />

        {/* Instructions */}
        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-lg p-6 max-w-3xl mx-auto">
            <h2 className="font-semibold text-lg mb-3">Getting Started</h2>
            <ol className="text-sm text-muted-foreground space-y-2 text-left max-w-xl mx-auto">
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">1.</span>
                <span>Configure Gmail SMTP credentials in backend/.env file</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">2.</span>
                <span>Start the Express.js backend server (port 5000)</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">3.</span>
                <span>Fill in the recipient, subject, and message fields above</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">4.</span>
                <span>Click "Send Email" and watch the magic happen! ✨</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}