import React from 'react';

const FAQS = () => {
  return (
    <div className="px-4 lg:px-24  py-8">
      <h3 className="text-3xl font-semibold text-gray-800 mb-2">ShaadiSouk - Frequently Asked Questions (FAQs)</h3>
      <h6 className="text-xl font-philper text-gray-600 mb-8">Connecting You to the Perfect Wedding Vendors – Seamlessly</h6>

      {/* For Couples Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">👫 For Couples</h3>
        
        <div className="mb-8">
          <h4 className="text-2xl font-philper font-bold text-gray-800 mb-2">1. What is ShaadiSouk?</h4>
          <p className="text-gray-700 text-xl">
            ShaadiSouk is an online platform that helps you discover, compare, and book trusted wedding vendors who specialize in Asian and Arab weddings across the UK.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-philper font-bold text-gray-800 mb-2">2. How does it work?</h4>
          <p className="text-gray-700 text-xl">
            1. Browse verified vendors by category, location, or budget.<br />
            2. Check real-time availability using synced calendars.<br />
            3. Book a video consultation or request a quote directly.<br />
            4. Pay securely online—all in one place.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-philper font-bold text-gray-800 mb-2">3. Do I have to pay to use ShaadiSouk?</h4>
          <p className="text-gray-700 text-xl">
            No, it's completely free for couples to use. You only pay for the vendors you book.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-philper font-bold text-gray-800 mb-2">4. Are all vendors verified?</h4>
          <p className="text-gray-700 text-xl">
            Yes. Every vendor on ShaadiSouk is reviewed and vetted to ensure they meet high-quality and cultural standards.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-philper font-bold text-gray-800 mb-2">5. What if I need help choosing a vendor?</h4>
          <p className="text-gray-700 text-xl">
            Our team can offer personalized vendor suggestions—just reach out via the contact form or live chat.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-philper font-bold text-gray-800 mb-2">6. Is my payment secure?</h4>
          <p className="text-gray-700 text-xl">
            Yes. All payments are processed through trusted, encrypted gateways. We never store your payment details.
          </p>
        </div>
      </section>

      {/* For Vendors Section */}
      <section className="mb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-6">🛍️ For Vendors</h3>
        
        <div className="mb-8">
          <h4 className="text-2xl font-philper font-bold text-gray-800 mb-2">1. Why should I join ShaadiSouk?</h4>
          <p className="text-gray-700 text-xl">
            We bring your ideal customers directly to you—engaged couples from Asian and Arab communities actively planning their weddings.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-philper font-bold text-gray-800 mb-2">2. How do I get listed?</h4>
          <p className="text-gray-700 text-xl">
            Submit your vendor registration <a href="/registration" className="text-blue-600 hover:underline">[Link]</a>, and our team will review and approve it within 48 hours if it meets our criteria.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-philper font-bold text-gray-800 mb-2">3. Is there a cost to join?</h4>
          <p className="text-gray-700 text-xl">
            Listing is free. We only charge a small commission (15%) on confirmed bookings, so you only pay when you earn.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-philper font-bold text-gray-800 mb-2">4. How are bookings managed?</h4>
          <p className="text-gray-700 text-xl">
            You'll receive booking requests through your dashboard or email. You can sync your calendar to show real-time availability.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-philper font-bold text-gray-800 mb-2">5. Can I decline a booking?</h4>
          <p className="text-gray-700 text-xl">
            Yes. If you're unavailable or the request doesn't fit your offering, you can decline directly from your bookings dashboard.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-philper font-bold text-gray-800 mb-2">6. How do payments work?</h4>
          <p className="text-gray-700 text-xl">
            Customers pay securely through the platform. We process the payment and transfer it to you minus the commission.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-philper font-bold text-gray-800 mb-2">7. Can I showcase reviews or a portfolio?</h4>
          <p className="text-gray-700 text-xl">
            Absolutely. Upload your photos, videos, and client testimonials to boost your profile visibility and trust.
          </p>
        </div>
      </section>

      {/* Need Help Section */}
      <section>
        <h3 className="text-xl font-bold text-gray-800 mb-6">💬 Need Help?</h3>
        <div className="space-y-4">
          <p className="text-lg font-semibold text-gray-800">
            Email: <a href="mailto:shaadisouk@outlook.com" className="text-blue-600 hover:underline">shaadisouk@outlook.com</a>
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Phone/WhatsApp: <a href="tel:+447457403086" className="text-blue-600 hover:underline">+44 7457 403086</a>
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Instagram: <a href="https://www.instagram.com/shaadi_souk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@shaadisouk</a>
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Live Chat: <span className="font-normal text-gray-700 text-xl">Available 9am–6pm, Mon–Fri on our website</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQS;