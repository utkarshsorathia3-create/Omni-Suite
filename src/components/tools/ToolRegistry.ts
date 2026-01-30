import dynamic from 'next/dynamic';

export const TOOL_COMPONENTS: Record<string, any> = {
  'code-to-image': dynamic(() => import('./CodeToImage')),
  'json-master': dynamic(() => import('./JsonMaster')),
  'meta-tag-generator': dynamic(() => import('./MetaTagWizard')),
  'gradient-generator': dynamic(() => import('./GradientGenerator')),
  'timezone-converter': dynamic(() => import('./TimezoneConverter')),
  'regex-tester': dynamic(() => import('./RegexTester')),
  'svg-previewer': dynamic(() => import('./SvgPreviewer')),
  'qr-generator': dynamic(() => import('./QrGenerator')),
  'pomodoro': dynamic(() => import('./Pomodoro')),
  'contrast-checker': dynamic(() => import('./ContrastChecker')),
  'password-lab': dynamic(() => import('./PasswordLab')),
  'markdown-editor': dynamic(() => import('./MarkdownEditor')),
  'url-slug': dynamic(() => import('./UrlSlugForge')),
  'base64': dynamic(() => import('./Base64Converter')),
  'csv-to-table': dynamic(() => import('./CsvToTable')),
  'unit-converter': dynamic(() => import('./UnitConverter')),
  'image-filters': dynamic(() => import('./ImageFilterLab')),
  'lorem-ipsum': dynamic(() => import('./LoremIpsum')),
  'diff-checker': dynamic(() => import('./DiffChecker')),
  'readability-checker': dynamic(() => import('./ReadabilityAnalyzer')),
};
