// components/VisionMissionSplit.tsx
export default function VisionMissionSplit() {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold font-serif text-[#ae0011] mb-3">A Vision for Global Equity</h2>
              <p className="text-sm text-[#5d5f5f] leading-relaxed">
                We envision a world where every individual, regardless of their birthplace, has the agency and resources to shape their own future. Our mission is to bridge the gap between systemic neglect and community potential through transparent, high-impact humanitarian work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#f3f3f3] rounded-xl border border-[#926f6b]/10">
                <div className="text-[#ae0011] text-2xl mb-1">👁️</div>
                <h3 className="text-lg font-bold font-serif mb-1 text-[#1a1c1c]">Vision</h3>
                <p className="text-xs text-[#5d5f5f] leading-relaxed">Eradicating the barriers to healthcare and education in the world&apos;s most remote corners.</p>
              </div>
              <div className="p-4 bg-[#f3f3f3] rounded-xl border border-[#926f6b]/10">
                <div className="text-[#ae0011] text-2xl mb-1">🏳️</div>
                <h3 className="text-lg font-bold font-serif mb-1 text-[#1a1c1c]">Mission</h3>
                <p className="text-xs text-[#5d5f5f] leading-relaxed">Delivering urgent aid while building long-term local resilience through direct partnership.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img className="rounded-xl shadow-sm h-64 w-full object-cover" alt="Compassionate healthcare provider tracking care metrics inside rural clinical hub setup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4JqZBvNfRqFQC588kRQiAifzQOARoEgdVYKteXuN35IABESwtflbjj3R5cUBKdASvyhmehbDh9nNQh8eWOB5IVwQyVD3_ntJbZy8dPnl_ibIbVI_lXh3J3JiWERj8QAps6HqbfIu3KQ83lOcJqkqGUuAg5oRNNT5nX5eqlXVxgAUSh9Wl5odX2su9WY-ruWAPVHDVE1hroeEQABoDbchxOaH-TGLZNeCqUiLWT6a6a01KQ1bOYccAKPjCrWp4m3HzsB9v5Kdr85g" />
              <img className="rounded-xl shadow-sm h-48 w-full object-cover" alt="Active learning session inside digital tech laboratory infrastructure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy61Hx-NEIK0iJSB9y-YtWEGdAvXqczpnlXbZMAmOobpOTXVFRp5xxXvusLGxWGzIluT0ZO-AZBQ_X68t89M936Jk3kEI6mjzNGUgnBTppklzk-gmlQlHM_cjaD_MANsUPgBCF9YHj0HRwJMjlHGNugkMsxGFpjEfzD20Cf-JJSnP_qox7KndAVBjFZEoAUJc1gbjEM2WWgPBEBRI82pfK4g2g_fyxyZMUZe7MB_PXpsWGCqA4VaCHM_dZxwsLFFdw_F3acS9dQMo" />
            </div>
            <div className="pt-8">
              <img className="rounded-xl shadow-sm h-[calc(100%-2rem)] w-full object-cover" alt="Structural installation process of filtration systems" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhcqXXXhgVvPUhKyGCmOWDq1lG4zusq8LUNtPjYxwgY-HA47y5ii0oQ-DIxEsakhUyy9zz-ZIuMJspfhhpPmWGkwxKrEvkl6V3UO0RbUKwxIroJsffk8EXuZkIrOm376UYCmCWpEChcVPZif016YQRIVJYE_ZS4ojmKoUsmrdagFjRlCgJRUTcj5EyZD8KRNTQc2sTFf6j1uKuKbXFApt31fq9lQqtuoROsuf18rhrG8rlBCLDTLPLOSdLJgej96lQQsU171UW5u4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}