# Angular Component Library

A comprehensive, production-ready UI component library built with Angular and SCSS, featuring a complete design system with light/dark mode support.

## 🎨 Features

- **Complete Design System** - CSS variables for consistent theming
- **Light/Dark Mode** - Seamless theme switching with smooth transitions
- **Fully Typed** - TypeScript types for all component props
- **Standalone Components** - Modern Angular standalone component architecture
- **Responsive** - Mobile-first responsive design
- **Accessible** - ARIA attributes and keyboard navigation
- **Multiple Variants** - Extensive component variants and states

## 📦 Components

### Button Component
Multiple variants and states for different use cases.

**Variants:**
- `primary` - Main call-to-action button
- `secondary` - Secondary actions
- `success` - Positive actions
- `warning` - Warning actions
- `danger` - Destructive actions
- `outline` - Outlined style
- `ghost` - Subtle style
- `link` - Link-style button

**Sizes:** `sm` | `md` | `lg`

**States:** `disabled`, `loading`, `fullWidth`

```html
<app-button variant="primary" size="md" [loading]="false">
  Click Me
</app-button>
```

### Card Component
Flexible container component with header and footer sections.

**Variants:**
- `default` - Standard card with shadow
- `bordered` - Card with border
- `elevated` - Enhanced shadow
- `flat` - No shadow or border

**States:** `hoverable`, `clickable`

```html
<app-card variant="bordered" [header]="true" [footer]="true">
  <div header>Card Title</div>
  <p>Card content goes here</p>
  <div footer>
    <app-button>Action</app-button>
  </div>
</app-card>
```

### Input Component
Form input with validation states and helper text.

**Variants:**
- `default` - Bottom border style
- `filled` - Filled background
- `outlined` - Full border

**Sizes:** `sm` | `md` | `lg`

**Types:** `text` | `email` | `password` | `number` | `tel` | `url` | `search`

```html
<app-input 
  label="Email"
  type="email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  [error]="errorMessage"
  [required]="true"
></app-input>
```

### Modal Component
Customizable modal dialog with backdrop.

**Sizes:** `sm` | `md` | `lg` | `xl` | `full`

**Features:**
- Backdrop click to close
- Header with close button
- Footer for actions
- Centered positioning
- Smooth animations

```html
<app-modal 
  [isOpen]="isModalOpen"
  (isOpenChange)="isModalOpen = $event"
  size="md"
>
  <div header>Modal Title</div>
  <p>Modal content</p>
  <div footer>
    <app-button variant="outline">Cancel</app-button>
    <app-button>Confirm</app-button>
  </div>
</app-modal>
```

### Alert Component
Contextual feedback messages.

**Variants:** `info` | `success` | `warning` | `danger`

**Features:**
- Optional title
- Icon support
- Dismissible option

```html
<app-alert variant="success" title="Success!" [dismissible]="true">
  Your changes have been saved successfully.
</app-alert>
```

### Badge Component
Small status indicators and labels.

**Variants:** `primary` | `secondary` | `success` | `warning` | `danger` | `neutral`

**Sizes:** `sm` | `md` | `lg`

**Styles:** `outlined`, `rounded`, `dot`

```html
<app-badge variant="primary" [rounded]="true">New</app-badge>
<app-badge variant="danger" [dot]="true"></app-badge>
```

## 🎨 Design System

### CSS Variables

All components use CSS variables for easy theming:

```scss
// Colors
--color-primary
--color-secondary
--color-success
--color-warning
--color-danger

// Spacing
--spacing-xs through --spacing-3xl

// Typography
--font-size-xs through --font-size-4xl
--font-weight-normal through --font-weight-bold

// Border Radius
--radius-sm through --radius-full

// Shadows
--shadow-sm through --shadow-2xl
```

### Theme Toggle

Switch between light and dark mode:

```typescript
toggleTheme(): void {
  document.documentElement.setAttribute(
    'data-theme', 
    isDarkMode ? 'dark' : 'light'
  );
}
```

## 🛠️ Setup

### Import Components

```typescript
import { 
  ButtonComponent,
  CardComponent,
  InputComponent,
  ModalComponent,
  AlertComponent,
  BadgeComponent
} from './components';

@Component({
  imports: [
    ButtonComponent,
    CardComponent,
    // ... other components
  ]
})
```

### Import Styles

The design system is automatically imported through `styles.scss`:

```scss
@import './styles/variables';
@import './styles/mixins';
```

## 📁 Structure

```
src/
├── styles/
│   ├── _variables.scss    # Design tokens and CSS variables
│   └── _mixins.scss        # Reusable SCSS mixins
├── app/
│   └── components/
│       ├── button/
│       │   ├── button.component.ts
│       │   └── button.component.scss
│       ├── card/
│       ├── input/
│       ├── modal/
│       ├── alert/
│       ├── badge/
│       └── index.ts        # Barrel export
```

## 🎯 Best Practices

### Responsive Design
All components are mobile-first and responsive. Use the provided mixins:

```scss
@include respond-to('md') {
  // Tablet styles
}
```

### Accessibility
- All interactive elements have proper ARIA attributes
- Focus states with visible focus rings
- Keyboard navigation support
- Semantic HTML structure

### Performance
- Standalone components for optimal tree-shaking
- CSS transitions use transform and opacity
- Minimal re-renders with OnPush strategy (where applicable)

## 🚀 Running the Demo

Start the development server:

```bash
npm start
```

The component showcase will be available at `http://localhost:4200`

## 📝 License

MIT

---

Built with ❤️ using Angular and SCSS
