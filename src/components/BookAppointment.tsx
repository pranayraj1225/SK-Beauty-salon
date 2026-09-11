import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Calendar, Clock, Scissors, User, Phone, MessageSquare, CheckCircle } from 'lucide-react';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Haircut & Styling',
    date: '',
    time: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*New Appointment Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Notes:* ${formData.notes || 'None'}`;
    const whatsappUrl = `https://wa.me/916300982227?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    
    // Reset form after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        service: 'Haircut & Styling',
        date: '',
        time: '',
        notes: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="book" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Book Your Appointment</h2>
            <p className="text-lg text-charcoal/70 mb-10">
              Ready to refresh your look? Fill out the form to request an appointment. We will confirm your time and details via WhatsApp.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ivory flex items-center justify-center shrink-0">
                  <Calendar className="text-charcoal" size={24}  aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-lg">Flexible Scheduling</h4>
                  <p className="text-charcoal/70">Pick a date and time that works best for you.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ivory flex items-center justify-center shrink-0">
                  <Scissors className="text-charcoal" size={24}  aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-lg">Expert Stylists</h4>
                  <p className="text-charcoal/70">Our team is ready to give you the perfect look.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-ivory p-8 md:p-10 shadow-sm"
          >
            {isSubmitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40}  aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Request Sent!</h3>
                <p className="text-charcoal/70 mb-8">
                  Redirecting you to WhatsApp to complete your booking. We'll be in touch shortly to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-charcoal mb-2">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User size={18} className="text-charcoal/40"  aria-hidden="true" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-white border border-charcoal/10 focus:border-charcoal focus:ring-0 outline-none transition-colors"
                        placeholder="Jane Doe"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-charcoal mb-2">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone size={18} className="text-charcoal/40"  aria-hidden="true" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-white border border-charcoal/10 focus:border-charcoal focus:ring-0 outline-none transition-colors"
                        placeholder="+91 63009 82227"
                      />
                    </div>
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-charcoal mb-2">Select Service</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Scissors size={18} className="text-charcoal/40"  aria-hidden="true" />
                    </div>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-charcoal/10 focus:border-charcoal focus:ring-0 outline-none transition-colors appearance-none"
                    >
                      <option value="Haircut & Styling">Haircut & Styling</option>
                      <option value="Hair Coloring">Hair Coloring</option>
                      <option value="Hair Treatments">Hair Treatments</option>
                      <option value="Bridal Makeup">Bridal Makeup</option>
                      <option value="Facials & Skincare">Facials & Skincare</option>
                      <option value="Other / Consultation">Other / Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-bold text-charcoal mb-2">Preferred Date</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Calendar size={18} className="text-charcoal/40"  aria-hidden="true" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-white border border-charcoal/10 focus:border-charcoal focus:ring-0 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="time" className="block text-sm font-bold text-charcoal mb-2">Preferred Time</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Clock size={18} className="text-charcoal/40"  aria-hidden="true" />
                      </div>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-white border border-charcoal/10 focus:border-charcoal focus:ring-0 outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-bold text-charcoal mb-2">Special Requests (Optional)</label>
                  <div className="relative">
                    <div className="absolute top-3 left-4 pointer-events-none">
                      <MessageSquare size={18} className="text-charcoal/40"  aria-hidden="true" />
                    </div>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-charcoal/10 focus:border-charcoal focus:ring-0 outline-none transition-colors resize-none"
                      placeholder="Any specific stylist or style in mind?"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-charcoal text-white font-bold py-4 px-8 hover:bg-gold transition-colors duration-300"
                >
                  Book via WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
