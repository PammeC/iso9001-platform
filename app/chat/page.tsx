"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Send, Bot, User } from "lucide-react"
import { generateText } from "ai" // Importamos la función generateText del AI SDK [^1]
import { openai } from "@ai-sdk/openai" // Importamos el modelo de OpenAI [^1]

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-message",
      content: "¡Hola! Soy tu asistente virtual especializado en ISO 9001. ¿En qué puedo ayudarte hoy?",
      role: "assistant",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Función para generar una respuesta usando AI SDK
  const generateResponse = async (userMessage: string) => {
    try {
      setIsLoading(true)

      // Construimos el historial de mensajes para dar contexto al modelo
      const messageHistory = messages
        .map((msg) => `${msg.role === "user" ? "Usuario" : "Asistente"}: ${msg.content}`)
        .join("\n")

      // Generamos la respuesta usando AI SDK
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: `${messageHistory}\nUsuario: ${userMessage}\nAsistente:`,
        system:
          "Eres un asistente especializado en la norma ISO 9001. Proporciona información precisa y útil sobre implementación, requisitos, auditorías y certificación de sistemas de gestión de calidad. Sé conciso y claro en tus respuestas.",
      })

      // Añadimos la respuesta a los mensajes
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "-assistant",
          content: text,
          role: "assistant",
        },
      ])
    } catch (error) {
      console.error("Error al generar respuesta:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "-assistant",
          content: "Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente.",
          role: "assistant",
        },
      ])
    } finally {
      setIsLoading(false)
    }

    
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")

    // Añadimos el mensaje del usuario
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString() + "-user",
        content: userMessage,
        role: "user",
      },
    ])

    // Generamos la respuesta
    await generateResponse(userMessage)
  }

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Asistente ISO 9001</h1>
      <p className="text-slate-600 mb-8 text-center max-w-2xl mx-auto">
        Consulta cualquier duda sobre la implementación, requisitos o certificación de la norma ISO 9001.
      </p>

      <Card className="border-slate-200 shadow-md">
        <CardContent className="p-0">
          <div className="h-[500px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                    <Avatar className={message.role === "assistant" ? "bg-blue-600" : "bg-slate-700"}>
                      {message.role === "assistant" ? (
                        <Bot className="h-5 w-5 text-white" />
                      ) : (
                        <User className="h-5 w-5 text-white" />
                      )}
                    </Avatar>
                    <div
                      className={`rounded-lg px-4 py-2 ${
                        message.role === "assistant" ? "bg-slate-100 text-slate-800" : "bg-blue-600 text-white"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2 items-center">
              <Input
                placeholder="Escribe tu consulta sobre ISO 9001..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4 mr-2" />
                Enviar
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 bg-slate-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Preguntas frecuentes</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="justify-start h-auto py-2 px-4 text-left"
            onClick={() => {
              setInput("¿Cuáles son los requisitos principales de ISO 9001?")
              document.querySelector<HTMLFormElement>("form")?.requestSubmit()
            }}
          >
            ¿Cuáles son los requisitos principales de ISO 9001?
          </Button>
          <Button
            variant="outline"
            className="justify-start h-auto py-2 px-4 text-left"
            onClick={() => {
              setInput("¿Cómo prepararse para una auditoría ISO 9001?")
              document.querySelector<HTMLFormElement>("form")?.requestSubmit()
            }}
          >
            ¿Cómo prepararse para una auditoría ISO 9001?
          </Button>
          <Button
            variant="outline"
            className="justify-start h-auto py-2 px-4 text-left"
            onClick={() => {
              setInput("¿Qué es el enfoque basado en procesos?")
              document.querySelector<HTMLFormElement>("form")?.requestSubmit()
            }}
          >
            ¿Qué es el enfoque basado en procesos?
          </Button>
          <Button
            variant="outline"
            className="justify-start h-auto py-2 px-4 text-left"
            onClick={() => {
              setInput("¿Cuánto tiempo toma implementar ISO 9001?")
              document.querySelector<HTMLFormElement>("form")?.requestSubmit()
            }}
          >
            ¿Cuánto tiempo toma implementar ISO 9001?
          </Button>
        </div>
      </div>
    </div>
  )
}
