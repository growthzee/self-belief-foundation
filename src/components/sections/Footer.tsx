// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="text-xl font-bold text-[#1a1c1c] font-serif">SelfBelief Foundation</div>
          <p className="text-sm text-[#5d5f5f]">
            © {new Date().getFullYear()} SelfBelief Foundation. Empowering through dignity and urgency.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a1c1c] mb-4">Our Work</h4>
          <ul className="space-y-2 text-sm text-[#5d5f5f]">
            <li><a className="hover:text-[#ae0011] transition-all" href="#">Our Mission</a></li>
            <li><a className="hover:text-[#ae0011] transition-all" href="#">Programs</a></li>
            <li><a className="hover:text-[#ae0011] transition-all" href="#">Annual Reports</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a1c1c] mb-4">Join Us</h4>
          <ul className="space-y-2 text-sm text-[#5d5f5f]">
            <li><a className="hover:text-[#ae0011] transition-all" href="#">Volunteer</a></li>
            <li><a className="hover:text-[#ae0011] transition-all" href="#">Careers</a></li>
            <li><a className="hover:text-[#ae0011] transition-all" href="#">Partner with Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a1c1c] mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-[#5d5f5f]">
            <li><a className="hover:text-[#ae0011] transition-all" href="#">Contact Support</a></li>
            <li><a className="hover:text-[#ae0011] transition-all" href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}