// components/LeadershipTeam.tsx
const leaders = [
  { name: 'Dr. Elena Rodriguez', role: 'Founder & Executive Director', desc: 'A former UNHCR advisor with 20 years of experience in regional development and crisis management.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVkYazAwHQg0Ga7TdA54KkkoQ-2ro44DaPYcQAkGCze_rHXjiEzcWQPu2fLpHHSSY_LPWOHjez593iU-kygWCpu-mh5HkyT_b2jUd9M00QAsJGC_ofAP-By6lnAT5nR50NgH4_3t_aRugQnBOzLNPzFcUx_cqyjrdpBol9OfbTBjktvAOXu0xMXCfBVkrGXKRhMPbEbF4wSxAFzKd9dc8cA6Bahxrvh1Tv3Gwi1uGF2h5ywsZilfamQzSwVCfikfasfRA8MYHC9aQ' },
  { name: 'Marcus Thorne', role: 'Chairman of the Board', desc: 'Specialist in impact investing and sustainable finance, ensuring our growth is ethically funded.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdVHEUiLOejKQvWJNpJrCrDl-jAoiQyMT0SEO3lxva1E39rZy7gMSSMWFjOUMxVEXN1noDmALkT5nPcljSMORmgcb2CrjtaLRaqnWHJL77GBXIL8yv-gy5bIZXMUcCoTynliyIEaYjjiiMh7gj3UKyrIVHPGswtmGpND-RBTGlNHHm_0F-mbIuo0ShgTPr4NBBhnTsYk2MNHvDtfVJ1d6eh4D_URclayasgwJPbQbSSoxMWRYHc1CraL-w04SPD7oVgMcLH3_XyyY' },
  { name: 'Sarah Al-Fayed', role: 'Head of Global Operations', desc: 'A logistics expert dedicated to ensuring that 90% of all donations reach the field directly.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCri6iJSmVak0cL5FDLfwSkTDA3kfgAbuVCRdiSn7uV-N5DQmN5Dz_UkWQRml0hinS9s6mAH_3sMSADKR7n2s3-P80KQl6KiwNnt-r0ajI9Zb04nnZU_OjgLKaAdcM7rpoUmU6rpop0Szz7iEw3oKNk2kOu9tO5J8XjbOB-IHexirfo2q_oskjuurU3b5p3DPnh_oQE73_PsLqA_JNBXUAuyfh_aKCK6CnWbfJGCpjFIoHEDaSxWfdgjUlRUOIzbnPHPnB1vOmfU8g' }
];

export default function LeadershipTeam() {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-[#1a1c1c] mb-2">Our Leadership</h2>
          <p className="text-sm text-[#5d5f5f] max-w-xl mx-auto">Guided by a diverse board of humanitarian experts, business leaders, and on-the-ground activists.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-all">
              <div className="h-64 overflow-hidden">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={leader.name} src={leader.img} />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-[#1a1c1c] font-serif mb-1">{leader.name}</h4>
                <p className="text-xs font-semibold text-[#ae0011] mb-3">{leader.role}</p>
                <p className="text-sm text-[#5d5f5f] leading-relaxed">{leader.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}