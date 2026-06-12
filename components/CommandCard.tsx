import React, { useState } from 'react'

export default function CommandCard() {
  const [copied, setCopied] = useState(false)
  const command = 'cd chicago-tracker && npm run dev -- --host'

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="command-card">
      <h3>Track Your Chicago League</h3>
      <div className="command-container">
        <code>{command}</code>
        <button onClick={handleCopy} className="copy-btn">
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
