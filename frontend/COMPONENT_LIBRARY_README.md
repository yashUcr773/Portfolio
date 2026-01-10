# Neobrutalism Component Library

A bold, colorful, and unapologetically brutalist component library for Angular, featuring thick borders, hard shadows, and vibrant colors.

## 🎨 Design Philosophy

Neobrutalism is a design trend that embraces:
- **Bold Colors**: Vibrant yellows, pinks, cyans, and more
- **Thick Black Borders**: 3-5px solid borders on everything
- **Hard Shadows**: No gradients, just solid offset shadows
- **Flat UI**: No subtle gradients or depth cues
- **High Contrast**: Maximum readability and impact
- **Raw Aesthetic**: Brutalist, honest, and straightforward

## 📦 Components

### 1. **NeoButton**
Buttons with multiple variants and sizes.

```typescript
import { NeoButtonComponent } from './components/button/neo-button.component';
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `fullWidth`: boolean
- `type`: 'button' | 'submit' | 'reset'

**Usage:**
```html
<neo-button variant="primary" size="md">Click Me!</neo-button>
<neo-button variant="danger" [disabled]="true">Disabled</neo-button>
<neo-button variant="outline" [fullWidth]="true">Full Width</neo-button>
```

---

### 2. **NeoCard**
Card component with different variants and hover effects.

```typescript
import { NeoCardComponent } from './components/card/neo-card.component';
```

**Props:**
- `variant`: 'default' | 'highlight' | 'success' | 'danger' | 'warning'
- `hoverable`: boolean (adds hover lift effect)
- `noPadding`: boolean

**Usage:**
```html
<neo-card variant="highlight" [hoverable]="true">
  <div class="card-header">Card Title</div>
  <div class="card-body">Card content goes here</div>
  <div class="card-footer">
    <neo-button>Action</neo-button>
  </div>
</neo-card>
```

---

### 3. **NeoInput**
Input field with form control support and validation states.

```typescript
import { NeoInputComponent } from './components/input/neo-input.component';
```

**Props:**
- `label`: string
- `placeholder`: string
- `type`: string (default: 'text')
- `size`: 'sm' | 'md' | 'lg'
- `variant`: 'default' | 'success' | 'danger' | 'warning'
- `disabled`: boolean
- `error`: string (shows error message)
- `helperText`: string

**Usage:**
```html
<neo-input 
  label="Username" 
  placeholder="Enter username..."
  [(ngModel)]="username">
</neo-input>

<neo-input 
  label="Email" 
  type="email"
  variant="danger"
  error="Invalid email format">
</neo-input>
```

---

### 4. **NeoModal**
Modal dialog with customizable size and header.

```typescript
import { NeoModalComponent } from './components/modal/neo-modal.component';
```

**Props:**
- `isOpen`: boolean
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `title`: string
- `showCloseButton`: boolean
- `(closeModal)`: EventEmitter

**Usage:**
```html
<neo-button (click)="openModal()">Open Modal</neo-button>

<neo-modal 
  [isOpen]="isModalOpen"
  title="Modal Title"
  size="md"
  (closeModal)="closeModal()">
  <p>Modal content goes here</p>
  <neo-button (click)="closeModal()">Close</neo-button>
</neo-modal>
```

---

### 5. **NeoBadge**
Small status badges with color variants.

```typescript
import { NeoBadgeComponent } from './components/badge/neo-badge.component';
```

**Props:**
- `variant`: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'dark'
- `size`: 'sm' | 'md' | 'lg'
- `dot`: boolean (renders as a status dot)

**Usage:**
```html
<neo-badge variant="success">Active</neo-badge>
<neo-badge variant="danger" size="sm">Error</neo-badge>
<neo-badge variant="warning" [dot]="true"></neo-badge>
```

---

### 6. **NeoAlert**
Alert messages with icons and dismissible option.

```typescript
import { NeoAlertComponent } from './components/alert/neo-alert.component';
```

**Props:**
- `variant`: 'info' | 'success' | 'warning' | 'danger'
- `title`: string
- `dismissible`: boolean
- `(dismiss)`: EventEmitter

**Usage:**
```html
<neo-alert variant="success" title="Success!" [dismissible]="true">
  Your changes have been saved successfully.
</neo-alert>

<neo-alert variant="danger" title="Error">
  Something went wrong. Please try again.
</neo-alert>
```

---

## 🎨 Design System

### Colors
```scss
--neo-black: #000000
--neo-white: #ffffff
--neo-yellow: #ffeb3b
--neo-pink: #ff6b9d
--neo-blue: #00bcd4
--neo-green: #4caf50
--neo-red: #ff5252
--neo-purple: #9c27b0
--neo-orange: #ff9800
--neo-cyan: #00e5ff
```

### Borders & Shadows
```scss
--neo-border-width: 3px
--neo-border-thick: 5px
--neo-shadow-offset: 6px
```

### SCSS Mixins

Available mixins in `neobrutalism.scss`:

```scss
@include neo-border($color)        // Standard 3px border
@include neo-border-thick($color)  // Thick 5px border
@include neo-shadow($color)        // Standard shadow
@include neo-shadow-sm($color)     // Small shadow
@include neo-shadow-lg($color)     // Large shadow
@include neo-hover-lift            // Hover animation effect
@include neo-disabled              // Disabled state styles
```

---

## 🚀 Getting Started

### Import Components

Option 1 - Import individually:
```typescript
import { NeoButtonComponent } from './components/button/neo-button.component';
import { NeoCardComponent } from './components/card/neo-card.component';

@Component({
  imports: [NeoButtonComponent, NeoCardComponent]
})
```

Option 2 - Import from index:
```typescript
import { 
  NeoButtonComponent, 
  NeoCardComponent,
  NeoInputComponent 
} from './components';
```

### Use in Templates

```html
<neo-card variant="highlight">
  <div class="card-header">Welcome!</div>
  <div class="card-body">
    <neo-input label="Name" placeholder="Enter your name..."></neo-input>
  </div>
  <div class="card-footer">
    <neo-button variant="primary">Submit</neo-button>
  </div>
</neo-card>
```

---

## 📖 Examples

### Login Form
```html
<neo-card variant="default">
  <div class="card-header">Login</div>
  <div class="card-body" style="display: flex; flex-direction: column; gap: 1rem;">
    <neo-input 
      label="Email" 
      type="email" 
      placeholder="your@email.com"
      [(ngModel)]="email">
    </neo-input>
    
    <neo-input 
      label="Password" 
      type="password" 
      placeholder="••••••••"
      [(ngModel)]="password">
    </neo-input>
  </div>
  <div class="card-footer">
    <neo-button variant="outline">Cancel</neo-button>
    <neo-button variant="primary">Sign In</neo-button>
  </div>
</neo-card>
```

### Notification System
```html
<neo-alert variant="success" title="Success!" [dismissible]="true">
  Your profile has been updated.
</neo-alert>

<neo-alert variant="warning" title="Warning" [dismissible]="true">
  Your session will expire in 5 minutes.
</neo-alert>
```

### User Profile Card
```html
<neo-card variant="highlight" [hoverable]="true">
  <div class="card-header">
    User Profile 
    <neo-badge variant="success">Online</neo-badge>
  </div>
  <div class="card-body">
    <h3>John Doe</h3>
    <p>Full Stack Developer</p>
    <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
      <neo-badge variant="primary" size="sm">Angular</neo-badge>
      <neo-badge variant="info" size="sm">TypeScript</neo-badge>
    </div>
  </div>
  <div class="card-footer">
    <neo-button variant="primary">Edit Profile</neo-button>
  </div>
</neo-card>
```

---

## 🎯 View Showcase

To see all components in action, run the development server and navigate to `/showcase`:

```bash
npm start
```

Then open [http://localhost:4200/showcase](http://localhost:4200/showcase)

---

## 🎨 Customization

All components use CSS variables and SCSS mixins, making them easy to customize. Edit the values in `neobrutalism.scss` to match your brand:

```scss
:root {
  --neo-yellow: #your-color;
  --neo-border-width: 4px;
  --neo-shadow-offset: 8px;
}
```

---

## 📁 File Structure

```
src/app/components/
├── neobrutalism.scss          # Design system & mixins
├── index.ts                   # Component exports
├── button/
│   ├── neo-button.component.ts
│   ├── neo-button.component.html
│   └── neo-button.component.scss
├── card/
│   ├── neo-card.component.ts
│   ├── neo-card.component.html
│   └── neo-card.component.scss
├── input/
│   ├── neo-input.component.ts
│   ├── neo-input.component.html
│   └── neo-input.component.scss
├── modal/
│   ├── neo-modal.component.ts
│   ├── neo-modal.component.html
│   └── neo-modal.component.scss
├── badge/
│   ├── neo-badge.component.ts
│   ├── neo-badge.component.html
│   └── neo-badge.component.scss
├── alert/
│   ├── neo-alert.component.ts
│   ├── neo-alert.component.html
│   └── neo-alert.component.scss
└── showcase/
    ├── component-showcase.component.ts
    ├── component-showcase.component.html
    └── component-showcase.component.scss
```

---

## 💡 Tips

1. **Consistent Spacing**: Use CSS variables like `var(--neo-spacing-md)` for consistent spacing
2. **Bold Typography**: All components use bold (700) or black (900) font weights
3. **Accessibility**: Components include proper ARIA labels and keyboard navigation
4. **Responsive**: Components are mobile-friendly with responsive breakpoints
5. **Forms**: NeoInput implements ControlValueAccessor for reactive forms support

---

## 🤝 Contributing

Feel free to extend this library with more components following the neobrutalism design principles!

---

## 📄 License

MIT
