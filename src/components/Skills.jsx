import { skillGroups } from "../data/skills";
import { skillIconMap } from "../data/skillIcons";
import useReveal from "../hooks/useReveal";
import { BracketsIcon, LayoutIcon, DatabaseIcon, WrenchIcon } from "./Icons";
import "./Skills.css";

// Purely decorative per-category glyphs, matched by the existing group
// labels — no skill data changes, just a visual anchor for each card.
const groupIconMap = {
  Languages: BracketsIcon,
  Frontend: LayoutIcon,
  "Backend & Database": DatabaseIcon,
  Tools: WrenchIcon,
};

// Frontend + Backend & Database together are the MERN stack already
// called out in the stat strip below — flagging them "Core" just makes
// that existing claim visible at a glance, nothing new is asserted.
const CORE_GROUPS = new Set(["Frontend", "Backend & Database"]);

export default function Skills() {
  const [ref, visible] = useReveal();
  let flatIndex = 0;

  const totalSkills = skillGroups.reduce((sum, g) => sum + g.items.length, 0);
  const totalCategories = skillGroups.length;

  return (
    <section id="skills" className="section skills">
      <div ref={ref} className={`section-inner reveal ${visible ? "is-visible" : ""}`}>
        <div className="eyebrow-index">
          <span className="idx">03</span>
          <span className="rule" />
          <span className="label">Skills</span>
        </div>

        <div className="skills__intro">
          <div>
            <h2 className="section-title">What I build with.</h2>
            <p className="section-lede">
              A focused toolkit rather than a long list — the stack I
              actually reach for when turning an idea into a working
              product.
            </p>
          </div>
          <div className="skills__stats" role="presentation">
            <div className="skills__stat">
              <span className="skills__stat-num">{totalSkills}</span>
              <span className="skills__stat-label">Technologies</span>
            </div>
            <span className="skills__stat-divider" />
            <div className="skills__stat">
              <span className="skills__stat-num">{totalCategories}</span>
              <span className="skills__stat-label">Categories</span>
            </div>
            <span className="skills__stat-divider" />
            <div className="skills__stat">
              <span className="skills__stat-num">MERN</span>
              <span className="skills__stat-label">Primary focus</span>
            </div>
          </div>
        </div>

        <div className="skills__groups">
          {skillGroups.map((group) => {
            const GroupIcon = groupIconMap[group.label] ?? BracketsIcon;
            return (
              <div className="skills__group" key={group.label}>
                <div className="skills__group-glow" aria-hidden="true" />
                <div className="skills__group-head">
                  <span className="skills__group-icon">
                    <GroupIcon width={18} height={18} />
                  </span>
                  <div className="skills__group-heading">
                    <div className="skills__group-title-row">
                      <h3 className="skills__group-label">{group.label}</h3>
                      {CORE_GROUPS.has(group.label) && (
                        <span className="skills__group-core">Core</span>
                      )}
                    </div>
                    {group.note && (
                      <p className="skills__group-note">{group.note}</p>
                    )}
                  </div>
                  <span className="skills__group-count">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="skills__grid">
                  {group.items.map((item) => {
                    const icon = skillIconMap[item] ?? {
                      abbr: item.slice(0, 4),
                      bg: "rgba(77,163,255,0.08)",
                      fg: "var(--text)",
                      ring: "var(--border-strong)",
                    };
                    const i = flatIndex++;
                    return (
                      <div
                        className={`skills__badge stagger-item ${visible ? "is-visible" : ""}`}
                        style={{ "--i": i }}
                        key={item}
                      >
                        <span
                          className="skills__badge-icon"
                          style={{
                            background: icon.bg,
                            color: icon.fg,
                            "--ring": icon.ring,
                          }}
                        >
                          {icon.abbr}
                        </span>
                        <span className="skills__badge-name">{item}</span>
                        <span
                          className="skills__badge-dot"
                          style={{ background: icon.ring }}
                          aria-hidden="true"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
