"use client";

export function MapSection() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-muted">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110567.89!2d-90.1!3d30.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a6f3b7e3e3e3%3A0x1234567890abcdef!2sCovington%2C%20LA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Bayou Boxables Location - Covington, LA"
      />
    </div>
  );
}
