// components/ImpactGallery.tsx
'use html'
'use client';

import { useState } from 'react';

const galleryItems = [
  { tag: 'Stories', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZcbpoDrKpV5NelQ12stlMATJ8fjJ7U1c2ClsxaNSZ063czg2OsMldkTZr2zqJp6YcIrjDPEquLSH0B2OfDCiZ4bxwRYbpCLn9dpCz5TefBv-bf9wYBrfxR3xJqWJ17qgmaKR2vyDmJgM8hXzYSprnBjv7JcdfC9I4l-JCWJzf1G52H4ZGSqQ6jH3yi1yzsrHObJoV8OuYlUbl-0FfdythzWU0wsPzB8lVsM5lK0V9YpABY3l9FmyLdONnIWbnZwTeGzoD66pYY0o', label: 'View Story' },
  { tag: 'Events', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-KFIYDwT-4CLn6cJhDpGVDUDqNE9CrHCvMLc__FPfyQEgjiPLvpcQ3Fd6-oNZ3cDjZyuFQWlEbMmFtoOlUBbkgC9wWZN9JX80carxscaZ1f3X2lcUQnqp7Y8xBRGyiED2owUfVQ__7PDThAXXf8OuF3gD2uIq59irUBN_AxUggmQw5YzHcDtAvdeX--mFR_pqTkT4VJz6Eoouj_lZ-Spro8-780tsV5mksGsOn6aMX9LmMznJX3Dy6Lh_mDI4UcAMcAb7NfOm7Wc', label: 'Community Event' },
  { tag: 'Events', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpxdeDQ1qsI246XyIOyPBHRnkQf0kAxCNx_xGGK_zmiRDGqjyCNRZbzEhhqYnGjA3ID8ph-D1r_x4huQ5jHtdu-zOfavEiTXDaxuNP6R5yHK3CcdlLJKmaizuGKqofmd_kkj77iO6eipKy2imIMaS1dVFMufpBmfh2E_GI3fql5m22r8ycw1zXtmhzsKDfUUQTLzMCmTxn5HJDPanjOMFbocGraUjMZ7P7QGQZEllWLTYkew_oPsXbNM-293UzOgQ27_bvVL8kdoU', label: 'Medical Camp' },
  { tag: 'Stories', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqV9_ifaGfNOcSVg3ENX1bCyyW0IedEO9vMWUMnfXtBUYrSLUMNXDq9aR0tKGUZZJXbPgvI8F07xYgannFEqv7ajamdzae2EL-FcXYzOeAb1VIdVE_dBWwCT2nWGV9eMSdBiUhzXUsxu6EGjo21gzi5U6fNK0nzhBbkY0aRQZTAFe1q9Gp5PIuBEuePPHy0BPVUiLui10h3Nl6k3xMI9hTRBM4DNLEJYaL2aimMiLHl4M0VTSYc3W8EyGpLGKr4NxJ2ct9HB8vLeg', label: 'Skill Dev' },
  { tag: 'Stories', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_fQYD23ZwM5p2ySnyK80QPf_7_Qk2OkSyMQslvTEa01aF2zvrrau3lE58Skg2X59N_J0FN9uigKOC4_ne5T6CB8XcpXpDd7Ry0pSkqCQlB27yJPqHLEi8NQlfFStkjWH9hEv2OOhdG8GqOvsSgSCUqqP3ihZQkwsPhzWo3SksM4guAHceyciRTsOT6Gl9D3oIkJNodGQICDNnS5fu7FaGgK7pdhxIQQuUrRXWTRo2urU6Lrw44M72T2B-UNcBUcqzEH5klmhZhcU', label: 'Success Story' },
  { tag: 'Events', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUEx5au_537i0WYkWcCHaqoXlw80rMEn48rF9NvhxNzSRqN2qQsHemMNcTbIdaFKF0j9_W_Koy4Gw12YKTHahcAAE8BT5h1iKQwwjmEH-eVxCZ7HVuu2R8n5AFWwsVN3GPhlYSqSNKyIxVY9bdYKeCZmydgzAN9dGQy18dup68BOrsVT7cGYSm5Wgzdw36IxSTWiUsFnYWhsVj27u6iF4jtFwH4MIjSjv64BBEpkFTbp8cuTOFs8SOG5MSwcUJVN8P7zyBf8RQFss', label: 'Sustainability' }
];

export default function ImpactGallery() {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.tag === filter);

  return (
    <section className="py-16 bg-[#f3f3f3]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1a1c1c] mb-1">Impact Gallery</h2>
            <p className="text-sm text-[#5d5f5f]">Visual stories from the heart of our mission.</p>
          </div>
          <div className="flex gap-2">
            {['All', 'Events', 'Stories'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold shadow-sm border transition-colors ${
                  filter === tab
                    ? 'bg-[#ae0011] text-white border-[#ae0011]'
                    : 'bg-white text-[#1a1c1c] border-gray-200 hover:border-[#ae0011]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="masonry">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="masonry-item group relative overflow-hidden rounded-2xl shadow-sm bg-white">
              <img 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                alt="Impact historical event story captures" 
                src={item.img} 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-bold bg-[#ae0011] px-5 py-2.5 rounded-full shadow-lg">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}