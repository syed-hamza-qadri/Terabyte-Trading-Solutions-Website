"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    cvUploaded: false,
    marketingConsent: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hasFiles = e.target.files && e.target.files.length > 0
    setFormData((prev) => ({ ...prev, cvUploaded: hasFiles }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
          cvUploaded: false,
          marketingConsent: false,
        })
      }, 3000)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1" />
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="contact">Contact *</Label>
          <Input
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 min-h-[120px]"
          />
        </div>

        <div>
          <Label htmlFor="cv">CV Upload *</Label>
          <div className="mt-1 border border-gray-300 rounded-md p-4">
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-2">
              <Upload size={20} />
              <span>Upload your CV</span>
            </div>
            <Input id="cv" name="cv" type="file" onChange={handleFileChange} required className="hidden" />
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => document.getElementById("cv")?.click()}
            >
              Select File
            </Button>
            {formData.cvUploaded && <p className="text-sm text-green-600 mt-2">File uploaded successfully</p>}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="marketingConsent"
            name="marketingConsent"
            checked={formData.marketingConsent}
            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, marketingConsent: checked === true }))}
          />
          <Label htmlFor="marketingConsent" className="text-sm text-gray-600">
            Yes, I want to receive news about promotions.
          </Label>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-brand-green hover:bg-brand-green/90 text-white"
        disabled={isSubmitting || isSuccess}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
          </>
        ) : isSuccess ? (
          "Submitted Successfully!"
        ) : (
          "Send"
        )}
      </Button>
    </form>
  )
}
