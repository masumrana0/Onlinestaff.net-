
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Lock, Mail, User, Shield, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import JPForm from "@/shared/form/JPForm"
import JPInput from "@/shared/form/JPInput"
import BackgroundBlob from "@/shared/ui/BackgroundBlob"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
}

export default function AccountSettings() {
  const [isChangingEmail, setIsChangingEmail] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)

  const onSubmitEmail = (data: any) => {
    console.log("Email update:", data)
    setIsChangingEmail(false)
  }

  const onSubmitPassword = (data: any) => {
    console.log("Password update:", data)
    setIsChangingPassword(false)
  }

  return (
    <div className="min-h-screen bg-muted/10 p-4 md:p-8 !pt-11">
      <BackgroundBlob/>
      <div className="mx-auto max-w-4xl space-y-8">
        <motion.div {...fadeIn} className="space-y-2">
          <h1 className="text-3xl font-bold">Account Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and security settings
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-[1fr,300px]">
          <div className="space-y-6">
            {/* Email Settings */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isChangingEmail ? (
                    <JPForm onSubmit={onSubmitEmail} className="space-y-4">
                      <JPInput
                        name="email"
                        defaultValue="user@example.com"
                        label="New Email Address"
                      />
                      <div className="flex gap-2">
                        <Button type="submit">Save Changes</Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setIsChangingEmail(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </JPForm>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">user@example.com</span>
                      <Button variant="outline" onClick={() => setIsChangingEmail(true)}>
                        Change
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Password Settings */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Password
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isChangingPassword ? (
                    <JPForm onSubmit={onSubmitPassword} className="space-y-4">
                      <JPInput
                        type="password"
                        name="currentPassword"
                        placeholder="Current Password"
                      />
                      <JPInput
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                      />
                      <JPInput
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm New Password"
                      />
                      <div className="flex gap-2">
                        <Button type="submit">Update Password</Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setIsChangingPassword(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </JPForm>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">••••••••••••</span>
                        <Button variant="outline" onClick={() => setIsChangingPassword(true)}>
                          Change
                        </Button>
                      </div>
                      <Button variant="link" className="h-auto p-0">
                        Forgot your password?
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quick Settings */}
          <div className="space-y-6">
            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle>Enhance Your Experience</CardTitle>
                  <CardDescription>Customize your account for better security and usability</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4 transition-colors hover:bg-muted">
                    <div className="flex items-center gap-3 mb-2">
                      <Bell className="h-5 w-5 text-primary" />
                      <h3 className="text-sm font-medium">Enable Notifications</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Stay informed about important updates and activities.</p>
                  </div>
                  <div className="rounded-lg border p-4 transition-colors hover:bg-muted">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Add an extra layer of security to your account.</p>
                  </div>
                  <div className="rounded-lg border p-4 transition-colors hover:bg-muted">
                    <div className="flex items-center gap-3 mb-2">
                      <User className="h-5 w-5 text-primary" />
                      <h3 className="text-sm font-medium">Complete Your Profile</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Add more details to personalize your experience.</p>
                  </div>
                  <div className="rounded-lg border p-4 transition-colors hover:bg-muted">
                    <div className="flex items-center gap-3 mb-2">
                      <Settings className="h-5 w-5 text-primary" />
                      <h3 className="text-sm font-medium">Customize Preferences</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Tailor the app to your needs and workflow.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

