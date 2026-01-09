# Angular Component Library

A comprehensive, themeable component library built with Angular and SCSS.

## Features

- 🎨 **Multiple Themes**: Light, Dark, and High Contrast themes with accessible color palettes
- 🎯 **CSS Variables**: All styling uses CSS custom properties for easy customization
- ♿ **Accessible**: WCAG compliant color contrasts and keyboard navigation support
- 📦 **Standalone Components**: All components are standalone for easy tree-shaking
- 🔧 **TypeScript**: Full TypeScript support with type definitions
- 🎭 **Multiple Variants**: Each component supports multiple visual variants and states

## Components

### Button Component

Flexible button component with multiple variants, sizes, and states.

**Usage:**
```html
<button appButton variant="primary" size="md">Click Me</button>
```

**Variants:**
- `primary` - Main call-to-action button
- `secondary` - Secondary actions
- `success` - Positive actions
- `danger` - Destructive actions
- `warning` - Warning actions
- `info` - Informational actions
- `outline` - Outlined button
- `ghost` - Minimal button
- `link` - Link-styled button

**Sizes:** `sm`, `md`, `lg`

**States:**
- `disabled` - Disabled state
- `loading` - Loading state with spinner
- `fullWidth` - Full width button

### Badge Component

Display status indicators, labels, or counts.

**Usage:**
```html
<app-badge variant="success" size="md">Active</app-badge>
```

**Variants:**
- `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `neutral`

**Sizes:** `sm`, `md`, `lg`

**Options:**
- `outline` - Outlined style
- `pill` - Pill shape
- `dot` - Small dot indicator

### Link Directive

Styled links with multiple variants and underline options.

**Usage:**
```html
<a appLink variant="primary" underline="hover" href="#">Link Text</a>
```

**Variants:**
- `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `neutral`

**Underline Options:**
- `none` - No underline
- `hover` - Underline on hover
- `always` - Always underlined

**Options:**
- `external` - Adds external link indicator and opens in new tab

### Typography Directive

Consistent typography with multiple variants and colors.

**Usage:**
```html
<h1 appTypography variant="h1" color="text-primary">Heading</h1>
<p appTypography variant="body1">Paragraph text</p>
```

**Variants:**
- Headings: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- Subtitles: `subtitle1`, `subtitle2`
- Body: `body1`, `body2`
- Special: `caption`, `overline`

**Colors:**
- `primary`, `secondary`, `success`, `danger`, `warning`, `info`
- `text-primary`, `text-secondary`, `text-disabled`

**Alignment:** `left`, `center`, `right`, `justify`

**Options:**
- `noMargin` - Remove default margins
- `gutterBottom` - Add bottom margin

## Theming

### Using Themes

The library supports three built-in themes:

1. **Light Theme** (default) - Clean, bright interface
2. **Dark Theme** - Reduced eye strain for low-light environments
3. **High Contrast Theme** - Enhanced contrast for accessibility

### Theme Service

Use the `ThemeService` to manage themes programmatically:

```typescript
import { ThemeService } from './services/theme.service';

constructor(private themeService: ThemeService) {}

// Set a specific theme
this.themeService.setTheme('dark');

// Toggle between light and dark
this.themeService.toggleTheme();

// Get current theme
const currentTheme = this.themeService.theme();
```

### Manual Theme Switching

Themes can also be switched by setting the `data-theme` attribute:

```html
<html data-theme="dark">
```

### Custom Themes

Create custom themes by defining CSS variables:

```scss
[data-theme="custom"] {
  --color-primary-600: #your-color;
  --color-background: #your-bg;
  // ... other variables
}
```

## CSS Variables

All components use CSS custom properties for styling. Key variables include:

### Colors
- `--color-primary-*` (50-900)
- `--color-secondary-*` (50-900)
- `--color-success-*`, `--color-danger-*`, `--color-warning-*`, `--color-info-*`
- `--color-neutral-*` (50-900)

### Spacing
- `--spacing-xs` through `--spacing-3xl`

### Typography
- `--font-family-base`, `--font-family-heading`
- `--font-size-xs` through `--font-size-5xl`
- `--font-weight-light` through `--font-weight-bold`

### Border Radius
- `--radius-none` through `--radius-full`

### Shadows
- `--shadow-sm` through `--shadow-2xl`

## Installation

1. Import the component library styles in your main styles file:

```scss
@use 'styles/main'
```

2. Import components where needed:

```typescript
import { ButtonComponent } from './components/button/button.component';
import { BadgeComponent } from './components/badge/badge.component';
// ... etc
```

Or use the index file:

```typescript
import { ButtonComponent, BadgeComponent } from './components';
```

## Component Showcase

View all components in action by importing the showcase component:

```typescript
import { ComponentShowcaseComponent } from './components/component-showcase/component-showcase.component';
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
