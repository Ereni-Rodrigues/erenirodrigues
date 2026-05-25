import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
}

export function FadeIn({ children, className = "", as = "div", id }: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const cls = `${className} ${visible ? "animate-fade-in-up" : "opacity-0"}`;
  if (as === "section") {
    return (
      <section
        ref={ref as React.RefObject<HTMLElement>}
        id={id}
        className={cls}
      >
        {children}
      </section>
    );
  }
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      id={id}
      className={cls}
    >
      {children}
    </div>
  );
}