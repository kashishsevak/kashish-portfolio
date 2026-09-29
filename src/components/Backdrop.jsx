// Fixed, decorative ambient layer: three soft drifting color orbs, a
// faint grid fading toward the hero, and a whisper of grain so the flat
// gradients don't look sterile. Purely visual — no interaction, no state.
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__grid" />
      <div className="backdrop__orb backdrop__orb--a" />
      <div className="backdrop__orb backdrop__orb--b" />
      <div className="backdrop__orb backdrop__orb--c" />
      <div className="backdrop__grain" />
    </div>
  );
}
