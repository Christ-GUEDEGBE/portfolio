import React, { useState, useRef } from 'react'; // Import useRef
import emailjs from '@emailjs/browser'; // Import emailjs
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const form = useRef(); // Create form ref
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSending, setIsSending] = useState(false); // Add sending state

  // Email Validation (no changes needed)
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    // Keep existing validation
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Please enter a message here");
    } else {
      // Validation passed, attempt to send email
      setErrMsg(""); // Clear previous errors
      setIsSending(true); // Set sending state
      setSuccessMsg(""); // Clear previous success message

      // IMPORTANT: Replace placeholders with your actual EmailJS credentials
      emailjs.sendForm(
        'service_n2qvdd9', // Replace with your EmailJS Service ID
        'template_vphhrjh', // Replace with your EmailJS Template ID
        form.current,
        'VJLz2UOtzG6mC9uFY' // Replace with your EmailJS Public Key
      )
        .then((result) => {
          console.log('EmailJS Success:', result.text);
          setSuccessMsg(
            `Thank you dear ${username}, Your Message has been sent Successfully!`
          );
          // Clear form fields on success
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        }, (error) => {
          console.error('EmailJS Error:', error.text);
          setErrMsg("Failed to send message. Please try again later."); // Show error message
        })
        .finally(() => {
          setIsSending(false); // Reset sending state regardless of outcome
        });
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            {/* Add ref={form} to the form */}
            <form ref={form} onSubmit={handleSend} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col md:flex-row md:items-center gap-4">
                  <label className="text-sm text-gray-400 tracking-wide md:w-32">
                    Your name
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${errMsg === "Username is required!" && "outline-designColor"
                      } contactInput`}
                    type="text"
                    name="user_name" // Add name attribute
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col md:flex-row md:items-center gap-4">
                  <label className="text-sm text-gray-400 tracking-wide md:w-32">
                    Phone Number
                  </label>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${errMsg === "Phone number is required!" && "outline-designColor"
                      } contactInput`}
                    type="text"
                    name="phone_number" // Add name attribute
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <label className="text-sm text-gray-400 tracking-wide md:w-32">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${errMsg === "Please give your Email!" && "outline-designColor"
                    } contactInput`}
                  type="email"
                  name="user_email" // Add name attribute
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <label className="text-sm text-gray-400 tracking-wide md:w-32">
                  Subject
                </label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${errMsg === "Plese give your Subject!" && "outline-designColor"
                    } contactInput`}
                  type="text"
                  name="subject" // Add name attribute
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <label className="text-sm text-gray-400 tracking-wide md:w-32 md:pt-2">
                  Message
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${errMsg === "Message is required!" && "outline-designColor"
                    } contactTextArea`}
                  cols="30"
                  rows="8"
                  name="message" // Add name attribute
                ></textarea>
              </div>
              <div className="w-full">
                {/* Disable button while sending */}
                <button
                  type="submit" // Change onClick to onSubmit on the form, use type="submit"
                  disabled={isSending} // Disable button when sending
                  className={`w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSending ? 'Sending...' : 'Send Message'} {/* Change button text */}
                </button>
              </div>
              {/* Removed duplicate error/success messages from bottom */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
