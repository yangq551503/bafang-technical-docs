# M510RS / M560RS Technical Documentation — Figma Template & Content Specification

## Global Settings

- **Output Format**: Figma Plugin JS code
- **Canvas Size**: A4 landscape, 1684×1191 px
- **Numbering Style**: 1. / 1.1. / 1.1.1.
- **Design Style**: Minimalist, white background, no decoration, content-first
- **Brand Colors**: Primary orange #FF5D07; secondary #2AACB9 / #4DA7CD / #83BF92 / #ACC71E / #DCCD1E / #EFB918
- **Fonts**: Inter (English) / Noto Sans SC (Chinese)
- **Header**: BAFANG logo, top-right
- **Footer**: Page number, bottom-right
- **Image Placeholders**: All SVG/CAD image areas use a gray (#E0E0E0) rectangle as placeholder

---

## P1 — Cover

**Page Type**: Cover

**Layout**: Text area on left (~60%), product image on right (~40%)

**Content**:
- Top-left: BAFANG logo
- Title: M510RS / M560RS
- Subtitle: Mid Drive System — Technical Instruction
- Right: Product rendering (gray rectangle placeholder)

**Note**: Header and footer hidden on cover.

---

## P2 — Table of Contents

**Page Type**: Table of Contents

**Layout**: Single column, left-aligned

**Content**:
- Page title: Contents
- Entries (number + title + page, connected by dot leaders):
  - 1. System Overview
    - 1.1 System Components
    - 1.2 System Wiring Diagram
  - 2. Key Features
    - 2.1 Sport Mode — Gyroscope Function
    - 2.2 Boost Mode — Overclock
    - 2.3 Auto Hold
    - 2.4 Gyroscope Calibration
  - 3. Motor
    - 3.1 M510RS Specifications
    - 3.2 M560RS Specifications
    - 3.3 Connector Definitions
    - 3.4 Motor Installation Requirements
  - 4. Sensor
    - 4.1 Sensor Compatibility
    - 4.2 S03 Sensor Overview
    - 4.3 Sensor Connector Definitions
    - 4.4 Sensor Installation Requirements
      - 4.4.1 Installation Method Selection
      - 4.4.2 Dimensional Requirements
      - 4.4.3 Installation Procedure
  - 5. Display
    - 5.1 DP C245.CAN
      - 5.1.1 Specifications
      - 5.1.2 Connector Interface
      - 5.1.3 Installation Requirements
    - 5.2 DP C030.CAN
      - 5.2.1 Specifications
      - 5.2.2 Connector Interface
      - 5.2.3 Installation Requirements
      - 5.2.4 Handlebar Dimensional Requirements
  - 6. Battery
    - 6.1 Battery Connection
    - 6.2 Battery Selection Notes

---

## P3 — System Overview

**Page Type**: Content

**Section No.**: 1. System Overview

**Layout**: Section title at top, two content blocks below

**Content**:

### 1.1 System Components

The M510RS / M560RS mid drive system consists of the following components:

- Motor
- Controller
- Display
- Sensor
- Battery

**Image Area**: System component diagram (gray rectangle placeholder, showing relationships between parts)

### 1.2 System Wiring Diagram

This system supports two wiring configurations. See the following two pages.

---

## P4 — System Wiring Diagram (with Tail Light)

**Page Type**: Diagram

**Section No.**: 1.2 System Wiring Diagram

**Layout**: Full-page diagram

**Content**:
- Subtitle: M510RS / M560RS Mid Drive System — With Tail Light (S03 Sensor)
- Image: Wiring diagram (gray rectangle placeholder, full-page width)
- Note: Highlight SD021 sensor wiring.

---

## P5 — System Wiring Diagram (without Tail Light)

**Page Type**: Diagram

**Section No.**: 1.2 System Wiring Diagram

**Layout**: Full-page diagram

**Content**:
- Subtitle: M510RS / M560RS Mid Drive System — Without Tail Light (S03 Sensor)
- Image: Wiring diagram (gray rectangle placeholder, full-page width)
- Note: Use accent color to highlight wiring differences between the two configurations.

---

## P6 — Key Features (Part 1)

**Page Type**: Content

**Section No.**: 2. Key Features

**Layout**: Section title at top, two feature blocks below (side-by-side or stacked)

**Content**:

### 2.1 Sport Mode — Real-Time Gradient Display

In Sport mode, the display shows the real-time road gradient. The system automatically adjusts assist ratio and current limit based on the gradient, providing adaptive response without user input.

**Image Area**: Display UI screenshot showing gradient indicator (gray rectangle placeholder)

### 2.2 Boost Mode — Overclock

In the highest assist level, press and hold the "+" key to enter Boost mode.

**Image Area**: Operation diagram or display UI (gray rectangle placeholder)

---

## P7 — Key Features (Part 2)

**Page Type**: Content

**Section No.**: 2. Key Features (continued)

**Layout**: Two feature blocks

**Content**:

### 2.3 Auto Hold

In any assist level, press and hold the "−" key to activate Auto Hold. Press and hold the "−" key again; after the progress bar completes, the system enters Walk Assist mode.

**Image Area**: Operation flow diagram (gray rectangle placeholder)

### 2.4 Gyroscope Calibration

Gyroscope calibration is available in the system settings menu. This function calibrates the horizontal reference after motor installation. Place the bike on a level surface before calibration. The current orientation is set as the 0° reference upon completion.

**Image Area**: Calibration UI screenshot (gray rectangle placeholder)

---

## P8 — Motor Specifications

**Page Type**: Specification Table

**Section No.**: 3. Motor

**Layout**: Section title + two side-by-side tables (left: M510RS / right: M560RS)

**Content**:

### 3.1 M510RS Specifications

| Item | Specification |
|---|---|
| Rated Power | 36V / 48V, 250W |
| Max Output Power | 1200W (1 min duration) |
| Peak Torque | Normal 110 N·m / Boost 125 N·m (1 min duration) |
| Max Speed | 25 km/h |
| Weight | 2.9 kg |

### 3.2 M560RS Specifications

| Item | Specification |
|---|---|
| Rated Power | 36V / 48V, 250W |
| Max Output Power | 1500W (1 min duration) |
| Peak Torque | 125 N·m |
| Max Speed | 45 km/h |
| Weight | 3.3 kg |

---

## P9 — Connector Definitions

**Page Type**: Diagram

**Section No.**: 3.3 Connector Definitions

**Layout**: Full-page diagram

**Content**:
- Page title: 3.3 Connector Definitions
- Image: Motor connector definition diagram (gray rectangle placeholder, full-page width)

---

## P10 — Motor Installation Dimensions

**Page Type**: Diagram

**Section No.**: 3.4.1 Motor Installation Dimensions

**Layout**: Full-page dimension drawing

**Content**:
- Page title: 3.4 Motor Installation Requirements
- Subtitle: 3.4.1 Motor Installation Dimensions
- Image: Motor installation dimension drawing (gray rectangle placeholder, full-page width)

---

## P11 — Interface Requirements

**Page Type**: Content (mixed text and image)

**Section No.**: 3.4.2 Interface Requirements

**Layout**: Text on left, image on right or below

**Content**:
- Page title: 3.4.2 Interface Requirements
- After the mounting interface is welded and heat-treated with the frame, the motor installation dimensions and the concentricity and position tolerance of the mounting holes must be maintained. A fixture must be used to calibrate the interface after the frame completes T4 treatment. The center thickness of the calibration block is 44.1 mm. After T6 cooling, the interface dimension must be within 44.1–44.2 mm.
- The six mounting surfaces, six mounting holes, and threaded holes on the interface must be free of paint.
- The motor installation dimension must be controlled within 44 (0 / −0.35) mm. Minimum clearance: 0.1 mm. Maximum clearance: 0.55 mm.
- The interface includes three M3 screw holes (for cover mounting).

**Image Area**: Interface dimension diagram (gray rectangle placeholder)

---

## P12 — Sensor Overview

**Page Type**: Content

**Section No.**: 4. Sensor

**Layout**: Section title + two content blocks

**Content**:

### 4.1 Sensor Compatibility

The system supports automatic sensor recognition and is compatible with both single-signal and 42-signal sensors.

⚠️ Note: Because recognition requires signal sampling, the wheel must be rotated several turns after switching sensors for the first time. This function is a fallback; using firmware versions pre-configured for the installed sensor is recommended.

### 4.2 S03 Sensor Overview

SR S03 Speed Sensor — 42 pulses per revolution.

Performance benefits:
- Improved speed control accuracy (especially at low speeds)
- Improved speed display accuracy
- Faster Boost response (especially in Walk Assist mode)
- Faster mode detection and switching in Sport+ adaptive mode

---

## P13 — Sensor Connector Definitions

**Page Type**: Diagram

**Section No.**: 4.3 Sensor Connector Definitions

**Layout**: Full-page diagram

**Content**:
- Page title: 4.3 Sensor Connector Definitions
- Image: Sensor connector definition diagram (gray rectangle placeholder, full-page width)

---

## P14 — Sensor Installation Method Selection

**Page Type**: Content (mixed text and image)

**Section No.**: 4.4.1 Installation Method Selection

**Layout**: Text description + image

**Content**:
- Page title: 4.4 Sensor Installation Requirements
- Subtitle: 4.4.1 Installation Method Selection
- Select the installation method based on the frame's cable routing.
- ⚠️ Critical Requirement: The centerline of the slot on the sensor's detection area must align with the center of the mounting axle hole on the frame. Misalignment causes an angular offset and reduces detection sensitivity.

**Image Area**: Installation method diagram with centerline alignment annotation (gray rectangle placeholder)

---

## P15 — Sensor Dimensional Requirements

**Page Type**: Content (mixed text and image)

**Section No.**: 4.4.2 Dimensional Requirements

**Layout**: Text description + multiple dimension drawings

**Content**:
- Page title: 4.4.2 Dimensional Requirements
- Frame opening dimensions: Must meet the requirements shown below (Note: dashed circles are reference centerlines only).
- Brake disc dimensions: The detection ring is mounted on the brake disc. Brake disc dimensions must meet the requirements shown below.
- Sensor-to-ring clearance: After installation, maintain a clearance of 0.75–2.2 mm between the sensor and the detection ring.

**Image Area**: Frame opening dimension drawing + brake disc dimension drawing + clearance diagram (gray rectangle placeholder)

---

## P16 — Sensor Installation Procedure

**Page Type**: Installation Procedure

**Section No.**: 4.4.3 Installation Procedure

**Layout**: Numbered steps with image for each step

**Content**:
- Page title: 4.4.3 Installation Procedure

**Step 1: Install the sensor**
Position the sensor on the chainstay mounting area. Adjust to the correct position and tighten the M4×6 socket head cap screw clockwise.

**Step 2: Install the detection ring**
Mount the detection ring on the brake disc. Adjust the position so that the clearance between the sensor's signal element and the detection ring is within 0.75–2.2 mm. Tighten the two M5×12 countersunk Torx screws with a screwdriver.

**Image Area**: Operation diagram for each step (gray rectangle placeholder)

---

## P17 — DP C245.CAN Specifications & Interface

**Page Type**: Specification Table (mixed text and image)

**Section No.**: 5.1 DP C245.CAN

**Layout**: Section title + product image on left + specifications and interface on right

**Content**:
- Page title: 5. Display
- Subtitle: 5.1 DP C245.CAN

**5.1.1 Specifications**
(See product datasheet; table placeholder)

**5.1.2 Connector Interface**
(See CAD; interface diagram placeholder)

**Image Area**: Product image + connector definition diagram (gray rectangle placeholder)

---

## P18 — DP C245.CAN Installation Requirements

**Page Type**: Installation (mixed text and image)

**Section No.**: 5.1.3 Installation Requirements

**Layout**: Text description + image

**Content**:
- Page title: 5.1.3 Installation Requirements
- Clamp dimensions, handlebar dimensions, screw type, and torque values (TBD)

**Image Area**: Installation diagram (gray rectangle placeholder)

---

## P19 — DP C030.CAN Specifications & Interface

**Page Type**: Specification Table (mixed text and image)

**Section No.**: 5.2 DP C030.CAN

**Layout**: Product image on left + specifications and interface on right

**Content**:
- Subtitle: 5.2 DP C030.CAN

**5.2.1 Specifications**
(See product datasheet; table placeholder)

**5.2.2 Connector Interface**
(Connection description; interface diagram placeholder)

**Image Area**: Product image + connector definition diagram (gray rectangle placeholder)

---

## P20 — DP C030.CAN Installation Requirements

**Page Type**: Installation (mixed text and image)

**Section No.**: 5.2.3 Installation Requirements

**Layout**: Text description + image

**Content**:
- Page title: 5.2.3 Installation Requirements
- Installation description (See CAD; installation diagram placeholder)

**5.2.4 Handlebar Dimensional Requirements**
(See CAD; dimension drawing placeholder)

⚠️ Note: To use a third-party display, contact the Bafang technical team in advance for compatibility evaluation and confirmation.

**Image Area**: Installation diagram + handlebar dimension drawing (gray rectangle placeholder)

---

## P21 — Battery Connector Definitions

**Page Type**: Diagram

**Section No.**: 6.1 Battery Connection

**Layout**: Full-page diagram

**Content**:
- Page title: 6. Battery
- Subtitle: 6.1 Battery Connection
- Connector definitions + one-key start definition (if applicable)

**Image Area**: Battery connector definition diagram (gray rectangle placeholder, full-page width)

---

## P22 — Battery Selection Notes

**Page Type**: Content

**Section No.**: 6.2 Battery Selection Notes

**Layout**: Text description, two model sections

**Content**:
- Page title: 6.2 Battery Selection Notes

⚠️ Note: The battery must meet the following discharge capacity. Otherwise, battery protection may activate or Boost mode may be unavailable.

**M510RS:**
- 48V system: Continuous discharge current > 25A; max current 30A (1 min duration)
- 36V system: Continuous discharge current > 25A; max current 40A (1 min duration)

**M560RS:**
- 48V system: Continuous discharge current > 25A; max current 35A (1 min duration)
- 36V system: Continuous discharge current > 25A; max current 45A (1 min duration)

---
