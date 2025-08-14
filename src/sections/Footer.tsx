'use client';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { useAnimate, useInView } from 'motion/react';
import { useEffect } from 'react';

const footerLinks = [
  {
    title: 'YouTube',
    href: '#',
  },
  {
    title: 'Twitter',
    href: '#',
  },
  {
    title: 'Instagram',
    href: '#',
  },
  {
    title: 'LinkenIn',
    href: '#',
  },
]

export const Footer = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: false,
  });

  useEffect(() => {
    if (inView) {
      animate(
        '.fade-item',
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: (index) => index * 0.2 } // stagger
      );
    } else {
      // Optional: reset so animation can replay
      animate(".fade-item", { opacity: 0, y: 50 }, { duration: 0 });
    }
  }, [inView, animate, scope]);

  return (
    <footer ref={scope} className='relative -z-10 overflow-x-clip'>
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div
            className='text-white/40 fade-item'
            style={{ opacity: 0, transform: 'translateY(0%)' }}
          >&copy; 2025. All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map((link) => (
              <a href="#" key={link.title} className='inline-flex items-center gap-1.5 fade-item'>
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
