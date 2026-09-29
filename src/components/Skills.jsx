import { skillGroups } from "../data/skills";
import { skillIconMap } from "../data/skillIcons";
import useReveal from "../hooks/useReveal";
import useSpotlight from "../hooks/useSpotlight";
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

function SkillGroupCard({ group, GroupIcon, isCore, startIndex, visible }) {
  const spotRef = useSpotlight();
  return (
    <div className="skills__group glass spot" ref={spotRef}>
      <div className="skills__group-head">
        <span className="skills__group-icon">
          <GroupIcon width={18} height={18} />
        </span>
        <div className="skills__group-heading">
          <div className="skills__group-title-row">
            <h3 className="skills__group-label">{group.label}</h3>
            {isCore && <span className="skills__group-core">Core</span>}
          </div>
          {group.note && <p className="skills__group-note">{group.note}</p>}
        </div>
        <span className="skills__group-count">
          {String(group.items.length).padStart(2, "0")}
        </span>
      </div>

      <div className="skills__grid">
        {group.items.map((item, i) => {
          const icon = skillIconMap[item] ?? {
            abbr: item.slice(0, 4),
            bg: "rgba(139,123,255,0.1)",
            fg: "var(--text)",
            ring: "var(--border-strong)",
          };
          return (
            <div
              className={`skills__badge stagger-item ${visible ? "is-visible" : ""}`}
              style={{ "--i": startIndex + i }}
              key={item}
            >
              <span
                className="skills__badge-icon"
                style={{ background: icon.bg, color: icon.fg, "--ring": icon.ring }}
              >
                {icon.abbr}
              </span>
              <span className="skills__badge-name">{item}</span>
              <span className="skills__badge-dot" style={{ background: icon.ring }} aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, visible] = useReveal();
  let flatIndex = 0;

  const totalSkills = skillGroups.reduce((sum, g) => sum + g.items.length, 0);
  const totalCategories = skillGroups.length;

  return (
    <section id="skills" className="section skills">
      <div ref={ref} className={`section-inner rise ${visible ? "is-visible" : ""}`}>
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
            const startIndex = flatIndex;
            flatIndex += group.items.length;
            return (
              <SkillGroupCard
                key={group.label}
                group={group}
                GroupIcon={GroupIcon}
                isCore={CORE_GROUPS.has(group.label)}
                startIndex={startIndex}
                visible={visible}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
