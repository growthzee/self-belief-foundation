// components/SuccessStories.tsx
export default function SuccessStories() {
  const reviews = [
    { name: 'Amara Okafor', role: 'Vocational Graduate', text: '"SelfBelief Foundation didn\'t just give me resources; they gave me the confidence to start my own workshop. Today, I employ four other women."', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIFOecT-C9hLYwIxsejd7G9XxLSd1UWbnTvB9G3KPWGeHbMbP_dGb9pyj2toRFBq2r3xxtNLNCrV6PCF3PaDGSpylOFAjfy5paHNnlEX427dhmGW0F_hXTiZC76iZSUKbtrQzFJ5ugYkM6XQNJc5fgdSZ2ROQY79S0zyaKdwaF_bKGj9Qcsqq9S7FYJIao8lLYT8AD6oQB8fc7gu1twru8iGTOa1kCowBkCRr1VAYkpf0GKzOOah3b-Hhj_OrpIcDQGMDygjj4pQM' },
    { name: 'Rajiv Sharma', role: 'Scholarship Recipient', text: '"I am the first in my family to attend university. This foundation bridged the gap between my dreams and my reality."', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlbg4Yn1pNx0Hfd5SwM9aBuuwEipQCN9A5dqEK4PMxGy1jSqd04-OLR0w_DgP-GnADzhk0t0aHSedft-3yLXi1tnLwXzKnc0lCuKxNuprLRQ1Obe9P7hbnzqI2F1JTxO5SKWFUnNjJK-H4OA8yTfHdQ9IdOZHBfaxKsZQ8zKSiUozwqp8dKX_sPljZ7w4pEwsY8h0bJsA08aP0wGuSUPDB28NJ8wRjohLb1QYdmXiduP8OSjfXPxjUyea1S3Uks6nPl-3-xJIdM_A' }
  ];

  return (
    <section className="py-16 bg-[#f3f3f3] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1c1c] mb-3 font-serif">Voices of Change</h2>
          <p className="text-base text-[#5d5f5f] max-w-2xl mx-auto">The real impact of your support seen through the eyes of those we serve.</p>
        </div>
        
        <div className="relative flex overflow-hidden group w-full">
          {/* Infinite horizontal marquee stream wrapper */}
          <div className="flex gap-6 animate-scroll hover:pause">
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <div key={index} className="flex-none w-[350px] md:w-[450px] glass-card p-6 rounded-2xl shadow-sm border border-white/40">
                <div className="flex items-center gap-4 mb-4">
                  <img className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt={review.name} src={review.img} />
                  <div>
                    <h4 className="text-lg font-bold text-[#1a1c1c] font-serif">{review.name}</h4>
                    <span className="text-xs font-semibold text-[#ae0011] uppercase tracking-wider">{review.role}</span>
                  </div>
                </div>
                <p className="text-sm italic text-[#1a1c1c]/80 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}