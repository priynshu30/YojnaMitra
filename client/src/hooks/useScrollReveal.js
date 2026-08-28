import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches Intersection Observer to a container ref
 * and adds `.reveal-visible` to all children with `.reveal`, `.reveal-left`, `.reveal-scale`
 */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const { threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      const elements = ref.current.querySelectorAll('.reveal, .reveal-left, .reveal-scale');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useScrollReveal;
