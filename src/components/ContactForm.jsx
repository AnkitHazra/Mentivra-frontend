import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function sendEmail(e) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_dd2sosr",
        "template_hb6r3pd",
        form,
        "EzOYf-i95TXPCntgH"
      );

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      console.log(error);
      setStatus("Failed to send message.");
    }
  }

  return (
    <form
      onSubmit={sendEmail}
      className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl 
               border border-white/10 p-10 rounded-2xl space-y-6"
    >

      <div>
        <label className="text-gray-300 text-sm">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mt-2 bg-black/20 border border-white/10 
                     rounded-md px-4 py-3 text-gray-200"
          placeholder="Your name..."
        />
      </div>

      <div>
        <label className="text-gray-300 text-sm">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mt-2 bg-black/20 border border-white/10 
                     rounded-md px-4 py-3 text-gray-200"
          placeholder="Your email..."
        />
      </div>

      <div>
        <label className="text-gray-300 text-sm">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full mt-2 bg-black/20 border border-white/10 
                     rounded-md px-4 py-3 text-gray-200 resize-none"
          placeholder="Write your message..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-500 
                   py-3 rounded-md text-white font-medium transition"
      >
        Send Message
      </button>

      {status && (
        <p className="text-center text-gray-300 text-sm mt-2">
          {status}
        </p>
      )}
    </form>
  );
}
