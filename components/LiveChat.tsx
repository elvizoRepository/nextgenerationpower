"use client";

import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────
   TYPES
───────────────────────────────────────── */
type Message = {
  id: number;
  from: "agent" | "user";
  text: string;
  time: string;
  status?: "sending" | "sent" | "read";
};

type ChatState = "closed" | "open" | "minimized";

/* ─────────────────────────────────────────
   AGENT CONFIG
───────────────────────────────────────── */
const AGENT = {
  name: "Klooper",
  role: "Customer Support Specialist",
  avatar: "PN",
  responseTime: "Typically replies in under 2 min",
};

/* ─────────────────────────────────────────
   AUTO-REPLY LOGIC
───────────────────────────────────────── */
const AUTO_REPLIES: { keywords: string[]; reply: string }[] = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    reply: "Hello! Great to hear from you 👋 How can I help you today?",
  },
  {
    keywords: ["turbine", "product", "ot-x9", "hardware", "install"],
    reply: "Happy to help with product questions! Could you tell me a bit more about your project — site location, target capacity, and timeline? That'll help me connect you with the right specialist.",
  },
  {
    keywords: ["platform", "software", "dashboard", "scada", "demo", "trial"],
    reply: "Our Operations Platform is a great place to start! I can arrange a personalised demo with one of our product team. What's the best email to send the invite to?",
  },
  {
    keywords: ["price", "pricing", "cost", "quote", "how much"],
    reply: "Pricing depends on project scale, location, and configuration. I'd love to get you an accurate quote — can I connect you with our project team? They typically turn around estimates within 24 hours.",
  },
  {
    keywords: ["offshore", "onshore", "wind", "energy", "capacity", "mw", "gw"],
    reply: "We cover both onshore and offshore installations across 50+ countries. Our team has delivered everything from community-scale projects to 250 MW offshore arrays. What scale are you working with?",
  },
  {
    keywords: ["partner", "partnership", "collaborate", "invest", "investor"],
    reply: "We're always open to strategic partnerships! For formal enquiries, our team at partnerships@nextgenerationpower.com is the fastest route. Would you like me to flag your interest directly?",
  },
  {
    keywords: ["contact", "phone", "call", "email", "reach"],
    reply: "You can reach our HQ at +1 (843) 557-2190 or email hq@nextgenerationpower.com. For press, press@nextgenerationpower.com. Is there a specific team I can connect you with right now?",
  },
  {
    keywords: ["carbon", "sustainability", "co2", "offset", "green", "b corp", "iso"],
    reply: "Sustainability is at the core of everything we do — we're B Corp certified and ISO 14064 compliant. Our CSO Amara Diallo oversees all carbon reporting. Would you like our sustainability fact sheet?",
  },
  {
    keywords: ["job", "career", "hiring", "work", "role", "position", "apply"],
    reply: "We're growing fast and always looking for talented people! Check out our open roles at nextgenerationpower.com/careers — or tell me what you're looking for and I'll point you to the right team.",
  },
  {
    keywords: ["thank", "thanks", "appreciate", "great", "helpful"],
    reply: "You're very welcome! Is there anything else I can help you with today?",
  },
  {
    keywords: ["bye", "goodbye", "done", "that's all", "thats all"],
    reply: "Thanks for reaching out to Next Generation Power! Have a great day 🌿 Don't hesitate to come back if you need anything.",
  },
];

const FALLBACK_REPLIES = [
  "Thanks for your message! Let me look into that for you. Could you share a bit more detail so I can give you the most accurate answer?",
  "Good question! I want to make sure I give you the right information — could you elaborate a little?",
  "I'd love to help with that. To point you in the right direction, could you tell me a bit more about your situation?",
  "That's something our specialist team handles directly. Would you like me to arrange a callback or send you to the right contact?",
];

function getAutoReply(input: string): string {
  const lower = input.toLowerCase();
  for (const { keywords, reply } of AUTO_REPLIES) {
    if (keywords.some((k) => lower.includes(k))) return reply;
  }
  return FALLBACK_REPLIES[Math.floor(Math.random() * FALLBACK_REPLIES.length)];
}

function getTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function LiveChat() {
  const [chatState, setChatState] = useState<ChatState>("closed");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [agentTyping, setAgentTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const [hasOpened, setHasOpened] = useState(false);
  const [nudge, setNudge] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const msgId = useRef(1);

  /* Auto-nudge after 8s */
  useEffect(() => {
    const t = setTimeout(() => {
      if (chatState === "closed") setNudge(true);
    }, 8000);
    return () => clearTimeout(t);
  }, []);

  /* Scroll to bottom */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, agentTyping]);

  /* Focus input on open */
  useEffect(() => {
    if (chatState === "open") {
      setTimeout(() => inputRef.current?.focus(), 300);
      setUnread(0);
    }
  }, [chatState]);

  function openChat() {
    setNudge(false);
    setChatState("open");
    if (!hasOpened) {
      setHasOpened(true);
      /* Greeting message */
      setTimeout(() => {
        setAgentTyping(true);
        setTimeout(() => {
          setAgentTyping(false);
          addAgentMessage(
            `Hi there! 👋 I'm Klooper from the Next Generation Power support team. How can I help you today?`
          );
        }, 1200);
      }, 400);
    }
  }

  function addAgentMessage(text: string) {
    setMessages((prev) => [
      ...prev,
      { id: msgId.current++, from: "agent", text, time: getTime() },
    ]);
    if (chatState !== "open") setUnread((u) => u + 1);
  }

  function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = {
      id: msgId.current++,
      from: "user",
      text: trimmed,
      time: getTime(),
      status: "sending",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    /* Mark as sent */
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) => (m.id === userMsg.id ? { ...m, status: "sent" } : m))
      );
    }, 600);

    /* Mark as read */
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) => (m.id === userMsg.id ? { ...m, status: "read" } : m))
      );
    }, 1200);

    /* Agent reply */
    const delay = 1400 + Math.random() * 1200;
    setTimeout(() => setAgentTyping(true), 1000);
    setTimeout(() => {
      setAgentTyping(false);
      addAgentMessage(getAutoReply(trimmed));
    }, delay);
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      <style>{`
        /* ── WRAPPER ── */
        .lc-wrap {
          position: fixed; bottom: 28px; right: 28px; z-index: 9999;
          display: flex; flex-direction: column; align-items: flex-end; gap: 12px;
          font-family: 'Instrument Sans', 'DM Sans', sans-serif;
        }

        /* ── NUDGE BUBBLE ── */
        .lc-nudge {
          background: var(--white, #fff);
          border: 1px solid rgba(15,31,20,0.1);
          border-radius: 16px 16px 4px 16px;
          padding: 14px 18px;
          font-size: 13.5px; color: #1a2e1f; line-height: 1.5;
          box-shadow: 0 8px 32px rgba(15,31,20,0.12);
          max-width: 240px;
          animation: lc-pop 0.35s cubic-bezier(0.34,1.56,0.64,1);
          cursor: pointer;
        }
        .lc-nudge strong { color: #1e6b34; }
        .lc-nudge-close {
          display: inline-block; margin-left: 6px;
          font-size: 11px; color: #999; cursor: pointer;
          vertical-align: middle;
        }

        /* ── FAB BUTTON ── */
        .lc-fab {
          width: 60px; height: 60px; border-radius: 50%;
          background: #1e6b34;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 20px rgba(30,107,52,0.4), 0 2px 8px rgba(15,31,20,0.2);
          transition: transform 0.2s, box-shadow 0.2s;
          position: relative; flex-shrink: 0;
        }
        .lc-fab:hover {
          transform: scale(1.06);
          box-shadow: 0 6px 28px rgba(30,107,52,0.5), 0 3px 12px rgba(15,31,20,0.2);
        }
        .lc-fab svg { transition: opacity 0.2s, transform 0.2s; }
        .lc-fab-icon-chat { opacity: 1; transform: scale(1) rotate(0deg); }
        .lc-fab-icon-close { position: absolute; opacity: 0; transform: scale(0.6) rotate(-90deg); }
        .lc-fab.open .lc-fab-icon-chat { opacity: 0; transform: scale(0.6) rotate(90deg); }
        .lc-fab.open .lc-fab-icon-close { opacity: 1; transform: scale(1) rotate(0deg); }

        /* Unread badge */
        .lc-badge {
          position: absolute; top: -3px; right: -3px;
          width: 20px; height: 20px; border-radius: 50%;
          background: #e84040; border: 2px solid #fff;
          font-size: 10px; font-weight: 800; color: #fff;
          display: flex; align-items: center; justify-content: center;
          animation: lc-pop 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }

        /* ── CHAT WINDOW ── */
        .lc-window {
          width: 360px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(15,31,20,0.16), 0 4px 16px rgba(15,31,20,0.08);
          overflow: hidden;
          display: flex; flex-direction: column;
          transform-origin: bottom right;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease;
        }
        .lc-window.entering {
          animation: lc-window-in 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        .lc-window.hidden {
          transform: scale(0.85) translateY(16px); opacity: 0; pointer-events: none;
        }

        @keyframes lc-window-in {
          from { transform: scale(0.85) translateY(16px); opacity: 0; }
          to   { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes lc-pop {
          from { transform: scale(0.7); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }

        /* ── HEADER ── */
        .lc-header {
          background: #1e6b34;
          padding: 18px 20px 16px;
          display: flex; align-items: center; gap: 12px;
          flex-shrink: 0;
        }
        .lc-header-avatar {
          width: 42px; height: 42px; border-radius: 50%;
          background: rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 700; color: #fff;
          flex-shrink: 0; position: relative;
          border: 2px solid rgba(255,255,255,0.25);
        }
        .lc-online-dot {
          position: absolute; bottom: 1px; right: 1px;
          width: 10px; height: 10px; border-radius: 50%;
          background: #6ee87a; border: 2px solid #1e6b34;
        }
        .lc-header-info { flex: 1; }
        .lc-header-name { font-size: 14px; font-weight: 700; color: #fff; line-height: 1.2; }
        .lc-header-status { font-size: 11.5px; color: rgba(255,255,255,0.65); margin-top: 2px; }
        .lc-header-actions { display: flex; gap: 4px; }
        .lc-header-btn {
          width: 30px; height: 30px; border-radius: 8px; border: none;
          background: rgba(255,255,255,0.12); color: #fff; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; transition: background 0.15s;
        }
        .lc-header-btn:hover { background: rgba(255,255,255,0.22); }

        /* ── POWERED BY ── */
        .lc-powered {
          background: #f5f9f6;
          padding: 7px 16px;
          font-size: 10.5px; color: #8aaa90;
          display: flex; align-items: center; gap: 5px;
          border-bottom: 1px solid #e8f0ea;
          flex-shrink: 0;
        }
        .lc-powered strong { color: #3d8a53; }

        /* ── MESSAGES ── */
        .lc-messages {
          flex: 1; overflow-y: auto; padding: 16px;
          display: flex; flex-direction: column; gap: 10px;
          min-height: 300px; max-height: 380px;
          background: #f8fbf8;
          scroll-behavior: smooth;
        }
        .lc-messages::-webkit-scrollbar { width: 4px; }
        .lc-messages::-webkit-scrollbar-thumb { background: #d0e4d5; border-radius: 4px; }

        /* Date divider */
        .lc-divider {
          text-align: center; font-size: 10.5px; color: #aac0ae;
          font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
          margin: 4px 0;
        }

        /* Message rows */
        .lc-msg-row { display: flex; gap: 8px; align-items: flex-end; }
        .lc-msg-row.user { flex-direction: row-reverse; }

        .lc-msg-avatar {
          width: 28px; height: 28px; border-radius: 50%;
          background: #1e6b34; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 700; color: #fff;
          margin-bottom: 2px;
        }

        .lc-bubble-wrap { display: flex; flex-direction: column; max-width: 78%; }
        .lc-msg-row.user .lc-bubble-wrap { align-items: flex-end; }

        .lc-bubble {
          padding: 10px 14px; border-radius: 16px;
          font-size: 13.5px; line-height: 1.55; word-break: break-word;
          animation: lc-msg-in 0.25s ease;
        }
        @keyframes lc-msg-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lc-bubble.agent {
          background: #fff; color: #1a2e1f;
          border-radius: 4px 16px 16px 16px;
          box-shadow: 0 1px 4px rgba(15,31,20,0.07);
        }
        .lc-bubble.user {
          background: #1e6b34; color: #fff;
          border-radius: 16px 4px 16px 16px;
        }
        .lc-msg-meta {
          font-size: 10px; color: #aac0ae; margin-top: 4px;
          display: flex; align-items: center; gap: 4px;
        }
        .lc-msg-row.user .lc-msg-meta { flex-direction: row-reverse; color: #aac0ae; }
        .lc-status-icon { font-size: 10px; }
        .lc-status-icon.read { color: #3db869; }

        /* Typing indicator */
        .lc-typing-row { display: flex; gap: 8px; align-items: flex-end; }
        .lc-typing-bubble {
          background: #fff; border-radius: 4px 16px 16px 16px;
          padding: 12px 16px; display: flex; gap: 4px; align-items: center;
          box-shadow: 0 1px 4px rgba(15,31,20,0.07);
          animation: lc-msg-in 0.2s ease;
        }
        .lc-typing-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #85bfa0; animation: lc-blink 1.2s ease-in-out infinite;
        }
        .lc-typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .lc-typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes lc-blink {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50%       { opacity: 1;   transform: translateY(-3px); }
        }

        /* ── INPUT AREA ── */
        .lc-input-area {
          border-top: 1px solid #e8f0ea;
          padding: 12px 14px;
          background: #fff; flex-shrink: 0;
        }
        .lc-input-row { display: flex; gap: 8px; align-items: center; }
        .lc-input {
          flex: 1; border: 1.5px solid #dce8de; border-radius: 12px;
          padding: 10px 14px; font-size: 13.5px; color: #1a2e1f;
          font-family: inherit; outline: none; background: #f5f9f5;
          transition: border-color 0.2s, background 0.2s;
          resize: none; line-height: 1.4;
        }
        .lc-input:focus { border-color: #1e6b34; background: #fff; }
        .lc-input::placeholder { color: #a0b8a4; }
        .lc-send {
          width: 38px; height: 38px; border-radius: 10px; border: none;
          background: #1e6b34; color: #fff; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: background 0.2s, transform 0.15s;
        }
        .lc-send:hover:not(:disabled) { background: #165628; transform: scale(1.05); }
        .lc-send:disabled { background: #c5ddc9; cursor: not-allowed; }

        .lc-input-footer {
          margin-top: 8px; font-size: 10.5px; color: #b0c8b4;
          text-align: center;
        }

        /* ── MINIMIZED STATE ── */
        .lc-minimized {
          background: #fff; border-radius: 14px;
          border: 1px solid #dce8de;
          padding: 10px 16px; display: flex; align-items: center; gap: 10px;
          box-shadow: 0 4px 16px rgba(15,31,20,0.1);
          cursor: pointer; width: 240px;
          animation: lc-pop 0.3s cubic-bezier(0.34,1.56,0.64,1);
          transition: box-shadow 0.2s;
        }
        .lc-minimized:hover { box-shadow: 0 6px 24px rgba(15,31,20,0.14); }
        .lc-mini-avatar {
          width: 34px; height: 34px; border-radius: 50%;
          background: #1e6b34; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700; color: #fff; position: relative;
        }
        .lc-mini-dot {
          position: absolute; bottom: 0; right: 0;
          width: 9px; height: 9px; border-radius: 50%;
          background: #6ee87a; border: 2px solid #fff;
        }
        .lc-mini-text { flex: 1; }
        .lc-mini-name { font-size: 12.5px; font-weight: 700; color: #1a2e1f; }
        .lc-mini-sub { font-size: 11px; color: #7a9e82; margin-top: 1px; }
        .lc-mini-expand { font-size: 13px; color: #a0b8a4; }

        @media (max-width: 480px) {
          .lc-wrap { bottom: 16px; right: 16px; }
          .lc-window { width: calc(100vw - 32px); }
        }
      `}</style>

      <div className="lc-wrap">
        {/* Nudge bubble */}
        {nudge && chatState === "closed" && (
          <div className="lc-nudge" onClick={openChat}>
            <strong>👋 Need help?</strong> Our team is online and ready to assist.
            <span
              className="lc-nudge-close"
              onClick={(e) => { e.stopPropagation(); setNudge(false); }}
            >✕</span>
          </div>
        )}

        {/* Chat window */}
        {chatState !== "closed" && (
          <>
            {chatState === "minimized" ? (
              <div className="lc-minimized" onClick={() => setChatState("open")}>
                <div className="lc-mini-avatar">
                  {AGENT.avatar}
                  <div className="lc-mini-dot" />
                </div>
                <div className="lc-mini-text">
                  <div className="lc-mini-name">{AGENT.name}</div>
                  <div className="lc-mini-sub">
                    {agentTyping ? "Typing…" : "Support Chat"}
                  </div>
                </div>
                {unread > 0 && (
                  <div className="lc-badge" style={{ position: "relative", top: "auto", right: "auto" }}>
                    {unread}
                  </div>
                )}
                <span className="lc-mini-expand">▲</span>
              </div>
            ) : (
              <div className={`lc-window entering`}>
                {/* Header */}
                <div className="lc-header">
                  <div className="lc-header-avatar">
                    {AGENT.avatar}
                    <div className="lc-online-dot" />
                  </div>
                  <div className="lc-header-info">
                    <div className="lc-header-name">{AGENT.name}</div>
                    <div className="lc-header-status">
                      {agentTyping ? "Typing…" : `● Online · ${AGENT.role}`}
                    </div>
                  </div>
                  <div className="lc-header-actions">
                    <button className="lc-header-btn" title="Minimise" onClick={() => setChatState("minimized")}>─</button>
                    <button className="lc-header-btn" title="Close" onClick={() => setChatState("closed")}>✕</button>
                  </div>
                </div>

                {/* Powered by */}
                <div className="lc-powered">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4.5" fill="#3db869" opacity="0.3"/>
                    <circle cx="5" cy="5" r="2.5" fill="#3db869"/>
                  </svg>
                  Live support by <strong>Next Generation Power</strong> · Harlow, SC
                </div>

                {/* Messages */}
                <div className="lc-messages">
                  <div className="lc-divider">Today</div>

                  {messages.map((msg) => (
                    <div key={msg.id} className={`lc-msg-row ${msg.from}`}>
                      {msg.from === "agent" && (
                        <div className="lc-msg-avatar">{AGENT.avatar}</div>
                      )}
                      <div className="lc-bubble-wrap">
                        <div className={`lc-bubble ${msg.from}`}>{msg.text}</div>
                        <div className="lc-msg-meta">
                          <span>{msg.time}</span>
                          {msg.from === "user" && msg.status && (
                            <span className={`lc-status-icon ${msg.status === "read" ? "read" : ""}`}>
                              {msg.status === "sending" && "○"}
                              {msg.status === "sent" && "✓"}
                              {msg.status === "read" && "✓✓"}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {agentTyping && (
                    <div className="lc-typing-row">
                      <div className="lc-msg-avatar">{AGENT.avatar}</div>
                      <div className="lc-typing-bubble">
                        <div className="lc-typing-dot" />
                        <div className="lc-typing-dot" />
                        <div className="lc-typing-dot" />
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="lc-input-area">
                  <div className="lc-input-row">
                    <input
                      ref={inputRef}
                      className="lc-input"
                      placeholder="Type a message…"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKey}
                      maxLength={400}
                    />
                    <button
                      className="lc-send"
                      onClick={sendMessage}
                      disabled={!input.trim()}
                      title="Send"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M14.5 1.5L7 9M14.5 1.5L10 14.5L7 9M14.5 1.5L1.5 6L7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <div className="lc-input-footer">
                    Press Enter to send · Response time: &lt;2 min
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* FAB */}
        <button
          className={`lc-fab ${chatState === "open" ? "open" : ""}`}
          onClick={() => chatState === "open" ? setChatState("minimized") : openChat()}
          title="Chat with support"
          aria-label="Open support chat"
        >
          {/* Chat icon */}
          <svg className="lc-fab-icon-chat" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8.5" cy="10" r="1" fill="white"/>
            <circle cx="12" cy="10" r="1" fill="white"/>
            <circle cx="15.5" cy="10" r="1" fill="white"/>
          </svg>
          {/* Close icon */}
          <svg className="lc-fab-icon-close" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          {unread > 0 && chatState !== "open" && (
            <div className="lc-badge">{unread}</div>
          )}
        </button>
      </div>
    </>
  );
}