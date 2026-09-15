import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export const highlights = [
  {
    id: "quality",
    title: "Quality Products",
    description: "Every bicycle and part is checked before it reaches you.",
  },
  {
    id: "genuine",
    title: "Genuine Parts",
    description: "Spares and accessories sourced to fit properly and last.",
  },
  {
    id: "expert",
    title: "Expert Guidance",
    description: "Not sure what fits your riding style? We'll help you choose.",
  },
  {
    id: "trusted",
    title: "Trusted Service",
    description:
      "Straightforward advice and after-sales support you can rely on.",
  },
  {
    id: "selection",
    title: "Wide Selection",
    description:
      "City, mountain, road and kids' cycles, plus every essential part.",
  },
  {
    id: "support",
    title: "Real Support",
    description:
      "Message us directly on WhatsApp — a real person replies.",
  },
];

export default function HighlightGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScrollReveal>
      <section className="highlight-section">
        <style>{`
          .highlight-section {
            width: 100%;
            overflow: hidden;
          }

          /*
           * FLEX ACCORDION (Much faster than grid interpolation)
           */
          .highlight-carousel {
            display: flex;
            width: 100%;
            height: 280px;
            gap: 8px;
            overflow: hidden;
            box-sizing: border-box;
          }

          .highlight-block {
            position: relative;
            height: 100%;
            overflow: hidden;
            border-radius: 8px;
            background: #f4f4f4;
            border: 1px solid rgba(0, 0, 0, 0.08);
            cursor: pointer;
            outline: none;

            /* Collapsed width ratio */
            flex-grow: 1;
            flex-basis: 0;
            min-width: 48px;

            /* Hardware acceleration & smooth flex curve */
            transform: translateZ(0);
            will-change: flex-grow;
            transition:
              flex-grow 600ms cubic-bezier(0.2, 0.9, 0.3, 1),
              background-color 300ms ease,
              border-color 300ms ease;
          }

          /*
           * Expanded width ratio
           */
          .highlight-block.active {
            flex-grow: 5.5;
            background: #ffffff;
            border-color: rgba(0, 0, 0, 0.16);
            cursor: default;
          }

          .highlight-block:focus-visible {
            border-color: #1a1a1a;
          }

          /*
           * Collapsed vertical title
           */
          .highlight-collapsed {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
            pointer-events: none;
            transition: opacity 200ms ease 150ms;
          }

          .highlight-block.active .highlight-collapsed {
            opacity: 0;
            transition: opacity 150ms ease 0ms;
          }

          .highlight-collapsed span {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            white-space: nowrap;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #1a1a1a;
          }

          /*
           * Expanded content
           * Fixed min-width prevents text reflow/re-wrapping lag while animating
           */
          .highlight-content {
            
            width: 100%;
            min-width: 320px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 28px;
            box-sizing: border-box;

            opacity: 0;
            transform: translate3d(0, 6px, 0);
            pointer-events: none;

            /* Fast fade out when closing */
            transition:
              opacity 150ms ease,
              transform 150ms ease;
          }

          /* Smooth fade in when opening */
          .highlight-block.active .highlight-content {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            pointer-events: auto;
            transition:
              opacity 300ms ease 200ms,
              transform 400ms cubic-bezier(0.2, 0.9, 0.3, 1) 200ms;
          }

          /*
           * Number Badge
           */
          .highlight-number {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;
            flex-shrink: 0;
            border-radius: 50%;
            background: #1a1a1a;
            color: #ffffff;
            font-size: 12px;
            font-weight: 700;
          }

          /*
           * Title & Text
           */
          .highlight-title {
            margin: 0 0 10px;
            font-size: clamp(22px, 2vw, 34px);
            line-height: 1.1;
            font-weight: 700;
            color: #1a1a1a;
            white-space: nowrap;
          }

          .highlight-description {
            max-width: 540px;
            margin: 0;
            font-size: 15px;
            line-height: 1.55;
            color: #606060;
          }

          @media (min-width: 769px) {
            .highlight-block:not(.active):hover {
              background: #ececec;
            }
          }

          /*
           * TABLET & MOBILE ADJUSTMENTS
           */
          @media (max-width: 900px) {
            .highlight-carousel {
              height: 260px;
            }
            .highlight-content {
              padding: 22px;
              min-width: 280px;
            }
            .highlight-title {
              font-size: 26px;
            }
          }

          @media (max-width: 768px) {
            .highlight-carousel {
              height: 320px;
              gap: 5px;
            }
            .highlight-block {
              min-width: 36px;
              border-radius: 7px;
            }
            .highlight-block.active {
              flex-grow: 7;
            }
            .highlight-content {
              padding: 18px;
              min-width: 240px;
            }
            .highlight-number {
              width: 30px;
              height: 30px;
              font-size: 10px;
            }
            .highlight-collapsed span {
              font-size: 10px;
            }
            .highlight-title {
              font-size: 21px;
              white-space: normal;
            }
            .highlight-description {
              font-size: 13px;
              line-height: 1.45;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .highlight-block,
            .highlight-content,
            .highlight-collapsed {
              transition: none !important;
            }
          }
        `}</style>

        <div className="highlight-carousel" role="tablist" aria-label="Why choose us">
          {highlights.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={item.id}
                className={`highlight-block ${isActive ? "active" : ""}`}
                role="tab"
                aria-selected={isActive}
                tabIndex={0}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveIndex(index);
                  }
                }}
              >
                {/* Vertical title when collapsed */}
                <div className="highlight-collapsed">
                  <span>{item.title}</span>
                </div>

                {/* Content when expanded */}
                <div className="highlight-content">
                  <div className="highlight-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="highlight-title">{item.title}</h3>
                  <p className="highlight-description">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </ScrollReveal>
  );
}