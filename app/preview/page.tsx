'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const data = [
  { year: '2008', title: 'Foundation and Vision', desc: 'Established with a vision to revolutionize agriculture.', points: ['Company established', 'First bio-fertilizer facility'] },
  { year: '2012', title: 'Product Innovation', desc: 'Launched speciality fertilizers and expanded bio range.', points: ['Speciality fertilizers launched', 'Expanded product portfolio'] },
  { year: '2015–2018', title: 'Market Leadership', desc: 'Trusted name serving farmers across Pakistan.', points: ['Market leadership in Pakistan', '50,000+ farmers served'] },
  { year: '2020–Present', title: 'Sustainable Future', desc: 'Leading sustainable agriculture with eco solutions.', points: ['150+ product varieties', '25+ countries served'] },
]

export default function JourneyTest() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Journey (Preview)</h1>
        <p className="text-slate-300">Scroll down to see stacked parallax cards.</p>
      </section>

      <section ref={ref} className="relative">
        <div className="relative" style={{ height: `${data.length * 120}vh` }}>
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="relative w-full max-w-3xl perspective">
              {data.map((item, index) => {
                const start = index / data.length
                const end = (index + 1) / data.length
                const local = useTransform(scrollYProgress, [start, end], [0, 1])

                const y = useTransform(local, [0, 0.5, 1], ['18vh', '0vh', '-18vh'])
                const scale = useTransform(local, [0, 0.5, 1], [0.94, 1, 0.94])
                const rotateX = useTransform(local, [0, 0.5, 1], [10, 0, -8])
                const opacity = useTransform(local, [0, 0.18, 0.85, 1], [0, 1, 1, 0])

                return (
                  <motion.article
                    key={item.year}
                    style={{
                      y, scale, rotateX, opacity,
                      transformPerspective: 1200,
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                      willChange: 'transform, opacity',
                      zIndex: data.length - index,
                      top: `${index * 24}px`,
                    }}
                    className="absolute left-0 right-0 mx-auto"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-emerald-600 flex items-center justify-center font-bold text-xl">
                          {item.year}
                        </div>
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                      </div>
                      <p className="text-slate-200 mb-4">{item.desc}</p>
                      <ul className="space-y-2">
                        {item.points.map((p, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="h-[120vh]" /> {/* extra space to scroll past */}
    </main>
  )
}
