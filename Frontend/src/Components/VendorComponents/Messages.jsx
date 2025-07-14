"use client"

import { useState, useEffect } from "react"
import { Paperclip, Send, Menu, ChevronLeft } from "lucide-react"
import Image from "/profileImg.png"

export default function Messages() {
  const [activeContact, setActiveContact] = useState(null)
  const [showChat, setShowChat] = useState(false)
  const [inputMessage, setInputMessage] = useState("")
  const [messageList, setMessageList] = useState([
    {
      id: "1",
      text: "Hi John",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "How Are You Brother?",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "3",
      text: "I'm Fine. What's About You?",
      sender: "contact",
      timestamp: new Date(),
    },
    {
      id: "4",
      text: "I'm Well Also",
      sender: "user",
      timestamp: new Date(),
    },
  ])

  const contacts = [
    {
      id: "1",
      name: "John Smith",
      username: "@JohnSmithCEO",
      online: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "Nick Jonas",
      username: "@NickJ376",
      online: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      name: "Alberto Fida",
      username: "@albertofida999",
      online: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: String(Date.now()),
        text: inputMessage,
        sender: "user",
        timestamp: new Date(),
      }
      setMessageList([...messageList, newMessage])
      setInputMessage("")
      
      setTimeout(() => {
        const messagesContainer = document.querySelector(".messages-container");
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      }, 0);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleContactClick = (contact) => {
    setActiveContact(contact)
    setShowChat(true)
  }

  const handleBackClick = () => {
    setShowChat(false)
  }

  // Check screen size and adjust view accordingly
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // On larger screens, show both sidebar and chat
        if (!activeContact && contacts.length > 0) {
          setActiveContact(contacts[0])
        }
        setShowChat(true)
      } else {
        // On small screens, start with contacts list
        setShowChat(false)
      }
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex bg-white w-full h-screen flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Contacts Sidebar - always visible on large screens, conditionally on small */}
        <div className={`w-80 border-r border-gray-200 overflow-y-auto ${showChat ? 'hidden md:block' : 'block'}`}>
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center border-b border-gray-200 px-6 py-4  cursor-pointer ${activeContact?.id === contact.id ? "bg-gray-100" : ""}`}
              onClick={() => handleContactClick(contact)}
            >
              <div className="relative mr-4">
                <img
                  src={Image}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-md"
                />
                {contact.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                )}
              </div>
              <div>
                <div className="font-medium">{contact.name}</div>
                <div className="text-sm text-gray-500">{contact.username}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Area - conditionally shown on small screens */}
        {showChat && activeContact && (
          <div className="flex flex-1 flex-col">
            {/* Chat Header with back button on mobile */}
            <div className="border-b border-gray-200 p-4 flex items-center">
              <button 
                className="md:hidden mr-2 text-gray-500"
                onClick={handleBackClick}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center">
                <div className="font-medium">{activeContact.name}</div>
                <div className="ml-2 text-sm text-gray-500">{activeContact.username}</div>
              </div>
            </div>

            {/* Messages */}
            <div className="messages-container flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              {messageList.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs rounded-lg px-4 py-2 ${
                      message.sender === "user" ? "bg-[#3b82f6] text-white" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex items-center rounded-lg bg-white p-2 shadow-sm">
                <input
                  type="text"
                  placeholder="Write Messages Here........."
                  className="flex-1 border-none bg-transparent outline-none"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700" onClick={handleSendMessage}>
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty state when no contact is selected on large screens */}
        {!showChat && window.innerWidth >= 768 && (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center text-gray-500">
              <p>Select a contact to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}