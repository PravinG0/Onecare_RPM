# OneCare RPM — Design 3 (OneData FORGE B&W Aesthetic)

Executive-grade Remote Patient Monitoring web application built for OneData Software Solutions, directly aligned with the client reference presentation (`OneData_FORGE_Funded_Program_v6-Final 2.pptx`) and Inspo MCP design standards.

## 1. Key Design Features

- **Black & White High-Contrast Foundation**: Pure white (`#FFFFFF`) alternating with deep enterprise slate (`#1C1C1C`), crisp hairline borders, and grayscale architectural office photography from the client's deck.
- **Intentional Accent Coloring**: OneData Royal Blue (`#1E88E5` / `#1D58A4`) on CTA buttons, active tabs, checkmarks, and headline accents; AWS Partner Gold (`#FF9900`) for certified cloud infrastructure badges.
- **No Header & No Footer**: Framed as a focused enterprise presentation and clinical portal. The Hero opens directly with the integrated OneData logo, AWS Partner badge, and "Enterprise RPM" pill badge (matching Slide 1). Concludes cleanly with the full-bleed Closing CTA card.
- **Dual Hero Design Subpage**:
  - Main Page (`/`): High-contrast crisp white background with illuminated live telemetry HUD.
  - Subpage (`/design2`): Deep space black with metallic silver/white gradient typography, black-and-white gradient radial lighting, and an obsidian command HUD console. All other page sections remain identical.

## 2. Tech Stack

- **Framework**: Vite 5 + React 18
- **Styling**: Tailwind CSS 3.4 with custom theme tokens (`src/styles/theme.css`)
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans (Headings) + Inter (Body)

## 3. Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 4. Brand & Theme Tokens

All color variables are defined in `src/styles/theme.css`:
- `--accent`: `#1E88E5` (OneData Electric Blue)
- `--accent-cta`: `#1D58A4` (WCAG AA Compliant Button Blue)
- `--slate-dark`: `#1C1C1C` (High-Contrast Charcoal Slate)
- `--slate-card`: `#242E3D` (Enterprise Container Background)
- `--aws-gold`: `#FF9900` (AWS Partner Certification)

## 5. How to Update Device Images Later

Currently, representative high-resolution sample product photography is mapped across all 21 certified medical devices.

To replace any sample image with real product photos later:
1. **Add Images**: Drop your device image file(s) into `public/assets/devices/` (e.g. `omron_7361t.png`).
2. **Update Mapping**: Open [src/data/devicesData.js](file:///c:/Antigravity/OneCare%20RPM%20page/Design%203/src/data/devicesData.js) and update the `deviceImages` object:
   ```javascript
   export const deviceImages = {
     'OMRON Automatic BP HEM-7361T': '/assets/devices/omron_7361t.png',
     // ... add or adjust paths as needed
   };
   ```
3. If an image is not specified for any device, it automatically falls back to the clean sample BP monitor placeholder (`/assets/devices/device_bp_monitor.jpg`).

