# 💎 OmniSuite | Premium Developer & Designer Hub

OmniSuite is an aesthetic, high-performance, and privacy-focused utility studio built for the modern professional. It provides a comprehensive collection of 20+ premium tools—from code-to-image generators to SEO meta-tag wizards—all running locally in your browser with zero data collection.

**Live Preview:** [omnisuite.online](https://omnisuite.online)

---

## ✨ Features
- **🚀 20+ Professional Utilities:** Categorized for Developers, Designers, Content Creators, and Productivity.
- **🎨 Glassmorphic UI:** A buttery-smooth, premium aesthetic with deep translucent panels and neon accents.
- **🛡️ Privacy First:** All processing happens in the client’s browser. No data is ever sent to a server.
- **🔍 SEO Engineered:** Automatic sitemap generation, JSON-LD structured data, and keyword-optimized metadata.
- **⌨️ Pro UX:** Keyboard shortcuts (Ctrl+K to search), real-time previews, and instant exports.

## 🛠️ Built With
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Vanilla CSS (Modern CSS Variables, Flexbox/Grid)
- **Icons:** Lucide React
- **Performance:** Dynamic imports for tool-level code splitting

---

## 📂 Project Structure
```text
src/
├── app/              # Next.js App Router (Pages, Layouts, SEO)
├── components/       # UI Components
│   ├── layout/       # Sidebar, Root Layout, Analytics
│   └── tools/        # Individual Tool Implementations
├── config/           # Central Tool Registry & Metadata
├── styles/           # Global Design Tokens & Glassmorphism
└── public/           # Static Assets
```

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/utkarshsorathia3-create/Omni-Suite.git
cd omnisuite
npm install
```

### 2. Configure Environment
Create a `.env.local` file in the root:
```env
NEXT_PUBLIC_GTAG_ID=G-XXXXXXXXXX # Your Google Analytics ID
```

### 3. Run Development
```bash
npm run dev
```

---

## 🎯 Optimization Highlights
- **SEO Automations:** The platform automatically generates meta tags and schema markup for any new tool added to the registry.
- **Responsive Layout:** Adaptive "Sidebar + Workspace" design that feels like a native desktop 애플리케이션.
- **Optimized Performance:** Achieving 95+ scores on Lighthouse through efficient asset loading and zero third-party bloat.

## 📄 License
This project is licensed under the MIT License.

---
*Built with ❤️ for the Developer Community.*
