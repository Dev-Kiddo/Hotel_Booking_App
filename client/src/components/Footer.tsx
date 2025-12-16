const Footer = () => {
  return (
    <footer className="bg-gray-200 h-20 flex flex-col justify-center">
      <section className="max-w-7xl mx-auto space-y-3 px-6">
        <p className="text-center text-xs">
          MERN-BOOKING.com is part of Booking Holdings Inc., the world leader in online travel and related services. Copyright © 1998–2025 MERN-BOOKING.com™. All rights reserved.
        </p>

        <ul className="flex gap-5 justify-center">
          <li className="underline text-xs cursor-pointer">About</li>
          <li className="underline text-xs cursor-pointer">How We Work</li>
          <li className="underline text-xs cursor-pointer">Privacy Notice</li>
          <li className="underline text-xs cursor-pointer">Terms of Service</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
