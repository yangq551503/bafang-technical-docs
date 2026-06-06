// M510RS / M560RS — Test v8 (P1-P3)

const W = 1684;
const H = 1191;
const GAP = 100;
const MARGIN = { top: 100, bottom: 60, left: 80, right: 80 };
const CONTENT_W = W - MARGIN.left - MARGIN.right;
const CONTENT_H = H - MARGIN.top - MARGIN.bottom;

const COLOR = {
  orange: { r: 1, g: 0.365, b: 0.027 },
  white: { r: 1, g: 1, b: 1 },
  dark: { r: 0.169, g: 0.196, b: 0.259 },
  body: { r: 0.169, g: 0.196, b: 0.259 },
  caption: { r: 0.45, g: 0.48, b: 0.53 },
  placeholder: { r: 0.878, g: 0.878, b: 0.878 },
  placeholderText: { r: 0.6, g: 0.6, b: 0.6 },
  pageNum: { r: 0.55, g: 0.58, b: 0.63 },
  leader: { r: 0.78, g: 0.78, b: 0.78 },
};

const BAFANG_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.85 49.2"><defs><style>.cls-1{fill:#fff}.cls-2{fill:#ed6c00}</style></defs><g><path class="cls-2" d="M150.25,0H24.6C11.01,0,0,11.02,0,24.6s11.01,24.6,24.6,24.6h125.65c13.59,0,24.6-11.01,24.6-24.6S163.84,0,150.25,0"/><path class="cls-1" d="M37.53,23.85c1.29-.92,2.27-2.32,2.27-3.98,0-3.5-2.69-5.92-6.46-5.92h-10.63v20.83h10.98c3.61,0,6.7-2.64,6.7-6.25,0-2.15-1.12-3.73-2.87-4.69M26.52,17.35h6.63c1.57,0,2.78,1.14,2.78,2.65s-1.12,2.63-2.84,2.63h-6.57s0-5.28,0-5.28ZM33.55,31.39h-7.04v-5.53h7.1c1.8,0,2.91,1.09,2.91,2.7s-1.25,2.84-2.97,2.84M54.37,13.38c-5.23,0-9.54,4.24-9.54,9.47v10.56c0,1.07.87,1.94,1.94,1.94s1.96-.87,1.96-1.94v-6.01h11.14v6.01c0,1.07.87,1.94,1.94,1.94s1.96-.87,1.96-1.94v-10.56c0-5.23-4.17-9.47-9.4-9.47M59.87,24h-11.14v-1.09c0-3.24,2.06-5.86,5.57-5.86s5.57,2.62,5.57,5.86v1.09ZM82.21,17.57h-9.28v6.08h8.1c1,0,1.7.76,1.7,1.7s-.76,1.7-1.7,1.7h-8.1v6.36c0,1.07-.89,1.94-1.96,1.94s-1.94-.87-1.94-1.94h0V13.95h13.14c1.09,0,1.85.81,1.85,1.81s-.81,1.81-1.81,1.81M96.33,13.38c-5.23,0-9.54,4.24-9.54,9.47v10.56c0,1.07.87,1.94,1.94,1.94s1.96-.87,1.96-1.94v-6.01h11.14v6.01c0,1.07.87,1.94,1.94,1.94s1.96-.87,1.96-1.94v-10.56c0-5.23-4.17-9.47-9.4-9.47M101.83,24h-11.14v-1.09c0-3.24,2.06-5.86,5.57-5.86s5.57,2.62,5.57,5.86v1.09ZM128.99,33.41c0,1.07-.96,1.94-2.03,1.94s-2.01-.87-2.01-1.94v-10.85c0-2.9-1.99-5.34-4.97-5.34s-4.97,2.44-4.97,5.34v10.85c0,1.07-.96,1.94-2.03,1.94s-2.01-.87-2.01-1.94v-11.05c0-4.98,4.1-8.98,9.08-8.98s8.94,3.99,8.94,8.98v11.05ZM144.44,35.35c-6.26,0-11.06-4.67-11.06-10.98s4.97-10.99,11.13-10.99c2.99,0,5.21.75,7.19,2.31.85.67.99,1.87.38,2.67-.64.83-1.7,1.03-2.52.46-1.57-1.09-2.99-1.77-5.11-1.77-3.92,0-7.1,3.15-7.1,7.19,0,4.39,3.12,7.45,7.16,7.45,1.6,0,3.03-.42,4.14-1.14v-4.21h-3.51c-.95,0-1.72-.77-1.72-1.72s.77-1.72,1.72-1.72h7.4s0,7.01,0,9.45c-1.81,1.57-4.68,3-8.1,3"/></g></svg>`;

const FONT_REGULAR = { family: "Inter", style: "Regular" };
const FONT_BOLD = { family: "Inter", style: "Bold" };

async function main() {
  await figma.loadFontAsync(FONT_REGULAR);
  await figma.loadFontAsync(FONT_BOLD);

  const frames = [];

  function createPage(index, name) {
    const frame = figma.createFrame();
    frame.resize(W, H);
    frame.x = index * (W + GAP);
    frame.y = 0;
    frame.name = name;
    frame.fills = [{ type: "SOLID", color: COLOR.white }];
    frames.push(frame);
    return frame;
  }

  function addText(parent, x, y, text, fontSize, fontName, color, width) {
    const t = figma.createText();
    t.fontName = fontName;
    t.characters = text;
    t.fontSize = fontSize;
    t.fills = [{ type: "SOLID", color: color }];
    t.lineHeight = { value: 160, unit: "PERCENT" };
    if (width) {
      t.resize(width, t.height);
      t.textAutoResize = "HEIGHT";
    }
    t.x = x;
    t.y = y;
    parent.appendChild(t);
    return t;
  }

  function addRect(parent, x, y, w, h, color, cornerRadius) {
    const r = figma.createRectangle();
    r.resize(w, h);
    r.x = x;
    r.y = y;
    r.fills = [{ type: "SOLID", color: color }];
    if (cornerRadius) r.cornerRadius = cornerRadius;
    parent.appendChild(r);
    return r;
  }

  function addLine(parent, x1, y1, x2, y2, color, weight) {
    const line = figma.createLine();
    line.x = x1;
    line.y = y1;
    line.resize(x2 - x1, 0);
    line.strokes = [{ type: "SOLID", color: color }];
    line.strokeWeight = weight || 1;
    parent.appendChild(line);
    return line;
  }

  function addPlaceholder(parent, x, y, w, h, label) {
    addRect(parent, x, y, w, h, COLOR.placeholder, 8);
    const t = addText(parent, x, y, label, 18, FONT_REGULAR, COLOR.placeholderText, w);
    t.textAlignHorizontal = "CENTER";
    t.y = y + h / 2 - 12;
    t.resize(w, 24);
  }

  function addLogo(parent, x, y, w, h) {
    const svgNode = figma.createNodeFromSvg(BAFANG_SVG);
    svgNode.x = x;
    svgNode.y = y;
    svgNode.resize(w, h);
    parent.appendChild(svgNode);
    return svgNode;
  }

  function addFooter(parent, pageNum) {
    const t = addText(parent, 0, H - 50, String(pageNum), 16, FONT_REGULAR, COLOR.pageNum);
    t.x = W - MARGIN.right - 30;
  }

  // =============================================
  // P1 — Cover
  // =============================================
  {
    const p = createPage(0, "P1 — Cover");
    addLogo(p, 80, 60, 180, 50);
    addText(p, 80, 380, "M510RS / M560RS", 72, FONT_BOLD, COLOR.dark, 900);
    addText(p, 80, 480, "Mid Drive System — Technical Instruction", 28, FONT_REGULAR, COLOR.caption, 900);
    addPlaceholder(p, W * 0.58, 80, W * 0.38, H - 160, "Product Image");
  }

  // =============================================
  // P2 — Table of Contents (with dot leaders and page numbers)
  // =============================================
  {
    const p = createPage(1, "P2 — Contents");
    addFooter(p, 2);

    addText(p, MARGIN.left, MARGIN.top - 10, "Contents", 60, FONT_BOLD, COLOR.dark);

    const tocColW = 480;
    const tocGap = 140;
    const totalTocW = tocColW * 2 + tocGap;
    const tocStartX = (W - totalTocW) / 2;
    const col1X = tocStartX;
    const col2X = tocStartX + tocColW + tocGap;
    const startY = MARGIN.top + 130;

    const leftEntries = [
      [0, "1.", "System Overview", "3"],
      [1, "1.1", "System Components", "3"],
      [1, "1.2", "System Wiring Diagram", "4"],
      [0, "2.", "Key Features", "6"],
      [1, "2.1", "Sport Mode — Gyroscope", "6"],
      [1, "2.2", "Boost Mode — Overclock", "6"],
      [1, "2.3", "Auto Hold", "7"],
      [1, "2.4", "Gyroscope Calibration", "7"],
      [0, "3.", "Motor", "8"],
      [1, "3.1", "M510RS Specifications", "8"],
      [1, "3.2", "M560RS Specifications", "8"],
      [1, "3.3", "Connector Definitions", "9"],
      [1, "3.4", "Motor Installation", "10"],
    ];

    const rightEntries = [
      [0, "4.", "Sensor", "12"],
      [1, "4.1", "Sensor Compatibility", "12"],
      [1, "4.2", "S03 Sensor Overview", "12"],
      [1, "4.3", "Connector Definitions", "13"],
      [1, "4.4", "Installation Requirements", "14"],
      [0, "5.", "Display", "17"],
      [1, "5.1", "DP C245.CAN", "17"],
      [1, "5.2", "DP C030.CAN", "19"],
      [0, "6.", "Battery", "21"],
      [1, "6.1", "Battery Connection", "21"],
      [1, "6.2", "Battery Selection Notes", "22"],
    ];

    function renderTocColumn(entries, baseX, baseY, colWidth) {
      let ey = baseY;
      for (const [level, num, title, pg] of entries) {
        const indent = level * 30;
        const fs = level === 0 ? 24 : 20;
        const fn = level === 0 ? FONT_BOLD : FONT_REGULAR;
        const spacing = level === 0 ? 52 : 38;

        // Title text
        addText(p, baseX + indent, ey, num + "  " + title, fs, fn, COLOR.dark);

        // Page number (right-aligned)
        const pgText = addText(p, 0, ey, pg, fs, FONT_REGULAR, COLOR.dark);
        pgText.x = baseX + colWidth - 25;

        // Leader line between title and page number (only for sub-entries)
        if (level > 0) {
          const titleEndX = baseX + indent + (num.length + 2 + title.length) * fs * 0.52;
          const lineStartX = Math.min(titleEndX + 10, baseX + colWidth - 50);
          const lineEndX = baseX + colWidth - 40;
          if (lineEndX > lineStartX + 10) {
            addLine(p, lineStartX, ey + fs * 0.65, lineEndX, ey + fs * 0.65, COLOR.leader, 1);
          }
        }

        ey += spacing;
      }
    }

    renderTocColumn(leftEntries, col1X, startY, tocColW);
    renderTocColumn(rightEntries, col2X, startY, tocColW);
  }

  // =============================================
  // P3 — System Overview
  // =============================================
  {
    const p = createPage(2, "P3 — System Overview");
    addFooter(p, 3);

    const h1Y = MARGIN.top - 20;
    addText(p, MARGIN.left, h1Y, "1.  System Overview", 44, FONT_BOLD, COLOR.dark);

    const colGap = 60;
    const leftColW = (CONTENT_W - colGap) * 0.55;
    const rightColW = (CONTENT_W - colGap) * 0.45;
    const leftX = MARGIN.left;
    const rightX = MARGIN.left + leftColW + colGap;
    const h2Y = h1Y + 100;

    // --- Left: 1.1 ---
    addText(p, leftX, h2Y, "1.1  System Components", 30, FONT_BOLD, COLOR.dark);

    let ly = h2Y + 65;
    addText(p, leftX, ly,
      "The M510RS / M560RS mid drive system consists of the following components:",
      22, FONT_REGULAR, COLOR.body, leftColW);

    ly += 60;
    const items = ["Motor", "Controller", "Display", "Sensor", "Battery"];
    for (const item of items) {
      addText(p, leftX + 16, ly, "•  " + item, 22, FONT_REGULAR, COLOR.body);
      ly += 38;
    }

    addPlaceholder(p, leftX, ly + 25, leftColW, CONTENT_H - (ly - MARGIN.top) - 45, "System Component Diagram");

    // --- Right: 1.2 ---
    addText(p, rightX, h2Y, "1.2  System Wiring Diagram", 30, FONT_BOLD, COLOR.dark);

    addText(p, rightX, h2Y + 65,
      "This system supports two wiring configurations. See the following two pages.",
      22, FONT_REGULAR, COLOR.body, rightColW);

    addPlaceholder(p, rightX, h2Y + 155, rightColW, CONTENT_H - (h2Y + 155 - MARGIN.top) - 20, "Wiring Overview");
  }

  figma.viewport.scrollAndZoomIntoView(frames);
  figma.closePlugin("Test v8 done! 3 pages.");
}

main();
