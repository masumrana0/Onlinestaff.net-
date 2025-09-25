"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  MessageCircle,
  Minus,
  MoreHorizontal,
  Send,
  SmilePlus,
} from "lucide-react";
// import LenisScroll from "@/context/SmoothScroll";
import { H2, Paragraph } from "../ui/typography";

const quickActions = [
  "Job Listings",
  "Resume Tips",
  "Interview Prep",
  "Salary Info",
];

const menuItems = ["Tech Jobs", "Remote Positions", "Entry-Level Roles"];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* <LenisScroll /> */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-[90vw] md:max-w-md"
          >
            <Card className="overflow-hidden rounded-3xl shadow-lg">
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="bg-gradient-to-r from-secondary to-blue-600 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-white/20">
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="JobBot"
                      />
                      <AvatarFallback>JB</AvatarFallback>
                    </Avatar>
                    <div className="text-white">
                      <H2 className="text-lg font-semibold">JobBot</H2>
                      <Paragraph className="text-sm text-white/80">
                        Your career assistant
                      </Paragraph>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                      aria-label="More options"
                    >
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={toggleChat}
                      aria-label="Close chat"
                    >
                      <Minus className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="flex max-h-[50vh] flex-col gap-4 overflow-y-auto p-4"
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="JobBot"
                    />
                    <AvatarFallback>JB</AvatarFallback>
                  </Avatar>
                  <Paragraph>
                    How can I assist with your job search today?
                  </Paragraph>
                </div>

                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => (
                    <motion.div
                      key={action}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.2 }}
                    >
                      <Button
                        variant="outline"
                        className="rounded-full border-green-200 hover:bg-green-50 hover:text-secondary"
                      >
                        {action}
                      </Button>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 space-y-2">
                  <Paragraph className="px-4 py-2 text-gray-600">
                    What type of job are you looking for?
                  </Paragraph>
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.2 }}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-between rounded-xl bg-gray-50 px-4 py-6 text-left hover:bg-gray-100"
                      >
                        <span>{item}</span>
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="border-t p-4"
              >
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="rounded-full"
                  />
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-gray-600"
                      aria-label="Add emoji"
                    >
                      <SmilePlus className="h-5 w-5" />
                    </Button>
                    <Button
                      size="icon"
                      className="rounded-full bg-primary hover:bg-primary"
                      aria-label="Send message"
                    >
                      <Send className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={toggleChat}
              className="rounded-full bg-primary p-4 text-white shadow-lg hover:bg-primary transition-all duration-300 ease-in-out hover:scale-110"
              aria-label="Open chat"
            >
              <MessageCircle className="h-7 w-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
