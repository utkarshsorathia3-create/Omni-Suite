export interface Tool {
  name: string;
  slug: string;
  description: string;
  category: 'developer' | 'design' | 'content' | 'productivity';
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const TOOLS: Tool[] = [
  {
    name: "Code-to-Image Studio",
    slug: "code-to-image",
    description: "Transform your code snippets into beautiful, high-quality images for social media sharing.",
    category: "developer",
    seoTitle: "Free Code to Image Generator - Create Beautiful Snippet Cards | OmniSuite",
    seoDescription: "Instant, browser-based tool to convert your code into aesthetic images. Perfect for Twitter, LinkedIn, and blog posts.",
    keywords: ["code to image", "carbon clone", "prettier code shots", "developer social media"]
  },
  {
    name: "JSON Master",
    slug: "json-master",
    description: "A powerful tool to format, validate, and visualize complex JSON data with an interactive tree view.",
    category: "developer",
    seoTitle: "Interactive JSON Formatter & Visualizer - Free Online Tool | OmniSuite",
    seoDescription: "The best local-first JSON formatter. Minify, pretty-print, and view JSON as a searchable tree instantly.",
    keywords: ["json formatter", "json visualizer", "json tree view", "online json editor"]
  },
  {
    name: "AI Meta-Tag Wizard",
    slug: "meta-tag-generator",
    description: "Generate and preview SEO meta tags for Google, Facebook, and Twitter to boost your click-through rates.",
    category: "content",
    seoTitle: "SEO Meta Tag Generator & Social Preview Tool | OmniSuite",
    seoDescription: "Optimize your website's SEO with our free meta tag wizard. Live previews for Search and Social Media.",
    keywords: ["meta tag generator", "social media preview", "seo meta tags", "open graph generator"]
  },
  {
    name: "Smart Gradient Forge",
    slug: "gradient-generator",
    description: "Create complex mesh and linear gradients with CSS/SVG export.",
    category: "design",
    seoTitle: "Modern CSS Gradient Generator | Omni-Suite",
    seoDescription: "Design premium CSS gradients and mesh effects with our interactive forge. Export as CSS or SVG code.",
    keywords: ["css gradient generator", "mesh gradient", "ui design tools", "web design"]
  },
  {
    name: "Visual Timezone Mapper",
    slug: "timezone-converter",
    description: "A global slider to see what time it is everywhere—perfect for meeting planning.",
    category: "productivity",
    seoTitle: "Interactive World Clock & Meeting Planner | Omni-Suite",
    seoDescription: "Plan international meetings easily with our visual timezone mapper. Compare times across multiple cities instantly.",
    keywords: ["timezone converter", "world clock", "meeting planner", "utc time"]
  },
  // Adding more tools to reach the 15-20 count as requested for the config
  {
    name: "Regex Playground",
    slug: "regex-tester",
    description: "Visualize and test regular expressions with real-time explanations.",
    category: "developer",
    seoTitle: "Visual Regex Tester & Debugger | Omni-Suite",
    seoDescription: "Test your regular expressions and understand how they work with our interactive regex playground.",
    keywords: ["regex tester", "regex debugger", "regular expression"]
  },
  {
    name: "SVG Path Previewer",
    slug: "svg-previewer",
    description: "Paste and tweak SVG paths with real-time visual feedback.",
    category: "design",
    seoTitle: "SVG Path Editor & Visualizer | Omni-Suite",
    seoDescription: "Inspect and edit SVG path data visually. Perfect for web designers and developers.",
    keywords: ["svg path preview", "svg editor", "vector tools"]
  },
  {
    name: "QR Code Designer",
    slug: "qr-generator",
    description: "Generate custom QR codes with logos and brand colors.",
    category: "content",
    seoTitle: "Custom QR Code Generator with Logo | Omni-Suite",
    seoDescription: "Create beautiful, branded QR codes for free. Customize colors, shapes, and add your own logo.",
    keywords: ["qr code generator", "branded qr code", "free qr creator"]
  },
  {
    name: "Pomodoro Focus Space",
    slug: "pomodoro",
    description: "Stay productive with a glassmorphic timer and ambient lo-fi sounds.",
    category: "productivity",
    seoTitle: "Aesthetic Pomodoro Timer with Lo-Fi Music | Omni-Suite",
    seoDescription: "Boost your focus with our beautiful Pomodoro timer featuring integrated ambient background sounds.",
    keywords: ["pomodoro timer", "focus timer", "lofi productivity"]
  },
  {
    name: "A11y Contrast Checker",
    slug: "contrast-checker",
    description: "Verify WCAG compliance with real-time UI element previews.",
    category: "design",
    seoTitle: "WCAG Color Contrast Checker | Omni-Suite",
    seoDescription: "Ensure your designs are accessible with our real-time color contrast analyzer.",
    keywords: ["accessibility", "contrast checker", "wcag 2.1", "a11y"]
  },
  {
    name: "Password Strength Lab",
    slug: "password-lab",
    description: "Generate secure passwords and visualize their crack-time entropy.",
    category: "productivity",
    seoTitle: "Secure Password Generator & Strength Meter | Omni-Suite",
    seoDescription: "Create uncrackable passwords and check their security strength with our interactive laboratory.",
    keywords: ["password generator", "password strength", "cybersecurity"]
  },
  {
    name: "Markdown Live Architect",
    slug: "markdown-editor",
    description: "A premium markdown editor with real-time preview and export.",
    category: "developer",
    seoTitle: "Online Markdown Editor with Live Preview | Omni-Suite",
    seoDescription: "Write and preview markdown instantly with our distraction-free, premium editor.",
    keywords: ["markdown editor", "md previewer", "writing tools"]
  },
  {
    name: "URL Slug Forge",
    slug: "url-slug",
    description: "Clean and optimize text for SEO-friendly URL slugs.",
    category: "content",
    seoTitle: "SEO URL Slug Generator & Cleaner | Omni-Suite",
    seoDescription: "Convert any text into a clean, SEO-optimized URL slug instantly.",
    keywords: ["slug generator", "url cleaner", "seo helper"]
  },
  {
    name: "Base64 Converter",
    slug: "base64",
    description: "Encode and decode strings or images to Base64 effortlessly.",
    category: "developer",
    seoTitle: "Online Base64 Encoder & Decoder | Omni-Suite",
    seoDescription: "Quickly convert text or images to Base64 and vice versa with our simple utility.",
    keywords: ["base64 encoder", "base64 decoder", "data conversion"]
  },
  {
    name: "CSV Table Morph",
    slug: "csv-to-table",
    description: "Drag a CSV file and get a searchable, sortable data table.",
    category: "productivity",
    seoTitle: "Convert CSV to Interactive HTML Table | Omni-Suite",
    seoDescription: "Transform your raw CSV data into beautiful, sortable, and searchable interactive tables.",
    keywords: ["csv to table", "data visualizer", "csv viewer"]
  },
  {
    name: "Unit Converter Pro",
    slug: "unit-converter",
    description: "Convert units across length, weight, temperature, and more with instant results.",
    category: "productivity",
    seoTitle: "Smart Unit Converter Tool | Omni-Suite",
    seoDescription: "Fast and lightweight unit converter for developers and everyday users.",
    keywords: ["unit converter", "metric conversion", "measurement tool"]
  },
  {
    name: "Image Filter Lab",
    slug: "image-filters",
    description: "Apply premium CSS filters to your images and export the results.",
    category: "design",
    seoTitle: "Web-Based CSS Image Filter Tool | Omni-Suite",
    seoDescription: "Edit your images with professional-grade CSS filters directly in your browser.",
    keywords: ["image filter", "css filters", "photo editor"]
  },
  {
    name: "Premium Lorem Ipsum",
    slug: "lorem-ipsum",
    description: "Generate themed placeholder text for your design projects.",
    category: "content",
    seoTitle: "Professional Lorem Ipsum Generator | Omni-Suite",
    seoDescription: "The most beautiful and customizable placeholder text generator for designers.",
    keywords: ["lorem ipsum", "placeholder text", "dummy text"]
  },
  {
    name: "Text Diff Checker",
    slug: "diff-checker",
    description: "Compare two pieces of text and visualize the differences clearly.",
    category: "developer",
    seoTitle: "Online Text Diff Checker & Comparison | Omni-Suite",
    seoDescription: "Easily find differences between two text snippets with our side-by-side comparison tool.",
    keywords: ["diff checker", "text comparison", "code diff"]
  },
  {
    name: "Readability Analyzer",
    slug: "readability-checker",
    description: "Check text readability, word count, and estimated reading time.",
    category: "content",
    seoTitle: "Free Readability & SEO Text Analyzer | Omni-Suite",
    seoDescription: "Improve your content with our readability score and word count analyzer.",
    keywords: ["readability checker", "word count", "reading time"]
  }
];
