# Implementation Plan — OneCare RPM (Design 3)

Build an enterprise-grade, high-aesthetic React website for **OneCare RPM (Remote Patient Monitoring)** in `c:\Antigravity\OneCare RPM page\Design 3`.

---

## 1. Skill & Tool Installation Status (Completed)

We have installed and verified the **Inspo MCP** design reference skill (`https://inspomcp.dev/`):
- **MCP Server Configuration**: [.agents/mcp_config.json](file:///c:/Antigravity/OneCare%20RPM%20page/.agents/mcp_config.json) configured with `https://inspomcp.dev/api/mcp`.
- **Inspo Skill Definition**: [.agents/skills/inspo/SKILL.md](file:///c:/Antigravity/OneCare%20RPM%20page/.agents/skills/inspo/SKILL.md) providing full documentation for the 15 design inspection tools.
- **CLI Helper Script**: [.agents/skills/inspo/scripts/inspo.js](file:///c:/Antigravity/OneCare%20RPM%20page/.agents/skills/inspo/scripts/inspo.js) allowing direct search and retrieval of real production designs, palettes, component archetypes, and design systems.

---

## 2. Design Context & Comparison

To ensure **Design 3** is distinct and memorable, here is how the three designs diverge:

| Attribute | Design 1 (Existing) | Design 2 (Existing) | Design 3 (Proposed) |
| :--- | :--- | :--- | :--- |
| **Concept** | **Bento Data Grid** | **Split Sticky Canvas** | **Clinical Command HUD & Layered Glass Surface** |
| **Accent Palette** | Rose / Pink (`#FA7DB3` / `#C93974`) | Indigo / Violet (`#6266E6` / `#4A4ED4`) | **Deep Medical Teal & Cyan** (`#0D9488` / `#06B6D4` / `#0F766E`) |
| **Hero Style** | 12-col Bento dashboard tiles | 50/50 Full-bleed canvas with fixed panel | **Layered Command Station** with real-time simulated telemetry, ECG waveform monitor, and pulse alert indicators |
| **How It Works** | Horizontal progress rail + 7 tiles | Sticky left canvas step diagram + 7 scroll items | **Interactive Clinical Pipeline Stepper** with synchronized active stage preview & vitals trigger simulation |
| **Devices Section** | 8-col table + 4-col brand bar chart | Full-width table + centered brand filter | **Device Matrix & Card Inspector** with dual view (High-density Table vs. Interactive Device Cards) and live brand distribution metrics |
| **Visual Texture** | Soft pill borders, flat grid surfaces | Cinematic vertical scroll chapters | **Frosted glassmorphism, subtle micro-glows, precision telemetry badges, and interactive controls** |

---

## 3. Proposed Design Directions for Design 3

### Option A: Clinical Command HUD & Layered Glass (Recommended)
- **Aesthetic**: Deep surgical teal and cyan accents on pristine clinical surfaces (`#0D9488`, `#06B6D4`, `#0F766E`).
- **Feel**: Highly authoritative, enterprise hospital grade, clean, modern, and interactive.
- **Key Interactions**:
  - **Live Vitals Simulator**: Dynamic simulated ECG pulse waveform, live telemetry refresh ticker (60s loop), interactive trigger on the 430 mg/dL critical glucose reading.
  - **Device Command Hub**: Toggle between **Interactive Grid Cards** (showing device thumbnail icons, target vitals, and accuracy units) and **Full Clinical Table View** (all 21 devices with live filter counts).
  - **Interactive 7-Step Clinical Protocol**: Users can click or scroll through Steps 1–7 to inspect what clinicians and patients experience at each phase.

### Option B: High-Contrast Technical Swiss & Monospace Telemetry
- **Aesthetic**: Warm alabaster paper background, dense dark navy text (`#0F172A`), electric blue accent (`#2563EB`), with monospaced clinical metadata tags.
- **Feel**: Architectural, data-dense, editorial medical journal aesthetic with crisp borders and minimal ornamentation.

### Option C: Dark-Mode Clinical Operations Center
- **Aesthetic**: Sleek deep dark mode (`#0B0F19`) with illuminated cyan/emerald gauges, glowing status badges, and hospital NOC (Network Operations Center) aesthetics.

---

## 4. Technical Architecture & File Structure

We will build the application in `C:\Antigravity\OneCare RPM page\Design 3`:

```
Design 3/
├── index.html                    # Google Fonts (Plus Jakarta Sans / Outfit + Inter), meta tags
├── package.json                  # Vite 5, React 18, Tailwind 3.4, framer-motion, lucide-react
├── vite.config.js                # Vite React configuration
├── tailwind.config.js            # Custom colors via CSS variables, typography, shadows
├── postcss.config.js
├── README.md                     # Documentation, run instructions, design tokens
└── src/
    ├── main.jsx
    ├── App.jsx                   # Master layout and section sequence
    ├── data/
    │   └── content.js            # Canonical copy copied verbatim from _shared/content.js
    ├── styles/
    │   ├── theme.css             # Design 3 tokens (--accent, --accent-cta, --ok, --critical)
    │   └── index.css             # Tailwind directives, custom glassmorphism & utility tokens
    ├── hooks/
    │   ├── useReducedMotion.js   # Accessibility hook for prefers-reduced-motion
    │   └── useScrollSpy.js       # Active navigation tracking
    └── components/
        ├── Header.jsx            # Sticky blurred capsule nav with drawer for mobile
        ├── Hero.jsx              # High-impact clinical headline, stats, and Command HUD card
        ├── LiveTelemetryHud.jsx  # Interactive live vitals monitor with animated ECG & alert trigger
        ├── StatsStrip.jsx        # 4x patients, 60s refresh, 99.5% uptime count-ups
        ├── ChallengeSection.jsx  # 6 hospital administrator challenges with metric cards
        ├── DevicesSection.jsx    # 21 RPM devices, tab filters (ALL/FORA/OMRON...), brand metrics
        ├── HowItWorks.jsx        # 7-step interactive clinical care lifecycle
        ├── CarePlanSection.jsx   # 6 care plan personalization pillars
        ├── UseCasesSection.jsx   # 4 clinical use-cases with condition indicators
        ├── DeviceTypesSection.jsx# 6 supported categories strip (BP, Glucometer, SpO2, etc.)
        ├── WhyOneCareSection.jsx # 5 enterprise infrastructure & workflow pillars
        ├── FaqSection.jsx        # Accessible accordion with smooth height animation
        ├── ClosingCta.jsx        # Full-width mesh gradient closing call-to-action
        ├── Footer.jsx            # Enterprise medical platform footer
        ├── ScrollProgress.jsx    # Accent progress indicator
        └── ui/
            ├── Button.jsx        # Filled, outlined, and ghost CTA buttons with hover glows
            ├── SectionHeading.jsx# Reusable eyebrow + title + description
            ├── Reveal.jsx        # Framer Motion entrance animation wrapper
            ├── CountUp.jsx       # Animated numeral counter
            └── Icon.jsx          # Lucide icon mapper
```

---

## 5. Verification Plan

### Automated Build Verification
1. `npm install` in `Design 3/`.
2. `npm run build` must exit 0 with zero lint or bundling errors.
3. Verify all 21 devices are listed and brand filters correctly output:
   - FORA: 7
   - TRANSTEK: 3
   - OMRON: 8
   - CONTEC: 2
   - LUCKCOME: 1
   - ALL: 21
4. Contrast audit: verify `--accent-cta` and `--accent-ink` meet WCAG AA contrast standards (minimum 4.5:1 against respective backgrounds).
5. Ensure zero hard-coded accent hex codes in `.jsx` components (all reference CSS variables).

### Manual / Browser Verification
1. Test desktop (≥1200px), tablet (768–1199px), and mobile (320–767px) responsive behavior.
2. Confirm mobile drawer opens/closes with focus trap and body scroll lock.
3. Confirm keyboard accessibility (`Tab`, `Enter`, `Escape`, arrow keys for tab lists).
4. Verify `prefers-reduced-motion` compliance.
