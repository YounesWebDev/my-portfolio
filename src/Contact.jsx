import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Send } from 'lucide-react'
import ScrollFloat from './components/ScrollFloat'

const contactLinks = [
  {
    title: 'Email',
    value: 'webdevyns@gmail.com',
    href: 'mailto:webdevyns@gmail.com',
    icon: Mail,
  },
  {
    title: 'GitHub',
    value: 'YounesWebDev',
    href: 'https://github.com/YounesWebDev',
    icon: Github,
  },
  {
    title: 'LinkedIn',
    value: 'younes-webdev',
    href: 'https://www.linkedin.com/in/younes-webdev-aa0b0a3b7',
    icon: Linkedin,
  },
  {
    title: 'Instagram',
    value: 'younesbdf_',
    href: 'https://www.instagram.com/younesbdf_',
    icon: Instagram,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({
    type: '',
    message: '',
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async event => {
    event.preventDefault()

    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
          to_email: 'webdevyns@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully.',
      })

      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error('EmailJS Error:', error)

      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="px-3 pb-24 pt-16 sm:px-6 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <ScrollFloat
          animationDuration={1.4}
          ease="back.inOut(2)"
          scrollStart="center bottom+=45%"
          scrollEnd="bottom bottom-=35%"
          stagger={0.05}
          containerClassName="text-center"
          textClassName="text-3xl font-bold text-white sm:text-4xl"
        >
          Get in Touch
        </ScrollFloat>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-[1.1fr_1fr] md:gap-8">
          <article className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl sm:p-8">
            <p className="text-sm leading-7 text-slate-200 sm:text-base">
              Have a project in mind, freelance opportunity, or full-time role? I am open to
              building fast, reliable, and modern web products with clean code and good UX.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-cyan-300/40 bg-cyan-300/15 px-3 py-1 text-xs font-medium text-cyan-100">
                Available for work
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">
                Freelance
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">
                Full-time
              </span>
            </div>
          </article>

          <article className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/90">
              Contact Channels
            </p>

            <div className="mt-4 space-y-3">
              {contactLinks.map(link => {
                const Icon = link.icon

                return (
                  <a
                    key={link.title}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-4 py-3 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-cyan-200" />
                      <span>
                        <span className="block text-[11px] uppercase tracking-[0.16em] text-slate-300">
                          {link.title}
                        </span>
                        <span className="block text-sm text-white sm:text-base">{link.value}</span>
                      </span>
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-cyan-200 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )
              })}
            </div>
          </article>
        </div>

        <article className="mt-5 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl sm:mt-8 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/90">
            Quick Message
          </p>

          <form className="mt-4 grid gap-4 sm:mt-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-slate-300">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-300/60 focus:bg-cyan-300/5"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-slate-300">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-300/60 focus:bg-cyan-300/5"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-slate-300">
                Message
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-y rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-300/60 focus:bg-cyan-300/5"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-300">
                This form sends your message directly to my email inbox.
              </p>

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/20 px-5 py-2.5 text-sm font-medium text-cyan-50 transition hover:bg-cyan-300/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? 'Sending...' : 'Send Message'}
                <Send className="h-4 w-4" />
              </button>
            </div>

            {status.message && (
              <p
                className={`text-sm ${
                  status.type === 'success' ? 'text-green-300' : 'text-red-300'
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </article>
      </div>
    </section>
  )
}
