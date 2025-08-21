"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("Envoi en cours...");

    try {
      // Exemple: envoi via API interne (adapter si besoin)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("Message envoyé avec succès ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("Erreur lors de l’envoi ❌");
      }
    } catch (error) {
      setSubmitStatus("Erreur réseau ❌");
    }
  };

  return (
    <div className="max-
