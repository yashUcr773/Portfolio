# 🎨 Component Library - Complete Reference

## 📦 8 Production-Ready Components

### 1️⃣ Button Component
**Location:** `src/app/components/button/`

```html
<app-button variant="primary" size="md" [loading]="false">
  Click Me
</app-button>
```

**Variants:** `primary` | `secondary` | `success` | `warning` | `danger` | `outline` | `ghost` | `link`  
**Sizes:** `sm` | `md` | `lg`  
**Props:** `disabled`, `loading`, `fullWidth`, `type`

---

### 2️⃣ Card Component
**Location:** `src/app/components/card/`

```html
<app-card variant="elevated" [hoverable]="true">
  <div header>Title</div>
  Content here
  <div footer>
    <app-button>Action</app-button>
  </div>
</app-card>
```

**Variants:** `default` | `bordered` | `elevated` | `flat`  
**Props:** `header`, `footer`, `hoverable`, `clickable`

---

### 3️⃣ Input Component
**Location:** `src/app/components/input/`

```html
<app-input 
  label="Email"
  type="email"
  variant="outlined"
  [required]="true"
  helperText="Enter your email"
  [error]="errorMsg"
></app-input>
```

**Variants:** `default` | `filled` | `outlined`  
**Sizes:** `sm` | `md` | `lg`  
**Types:** `text` | `email` | `password` | `number` | `tel` | `url` | `search`  
**Props:** `label`, `placeholder`, `disabled`, `required`, `error`, `helperText`, `prefix`, `suffix`, `fullWidth`  
**Features:** ✅ Form Control Integration (ControlValueAccessor)

---

### 4️⃣ Modal Component
**Location:** `src/app/components/modal/`

```html
<app-modal 
  [isOpen]="isOpen"
  (isOpenChange)="isOpen = $event"
  size="md"
>
  <div header>Title</div>
  <p>Content</p>
  <div footer>
    <app-button>Confirm</app-button>
  </div>
</app-modal>
```

**Sizes:** `sm` | `md` | `lg` | `xl` | `full`  
**Props:** `isOpen`, `showHeader`, `showFooter`, `showCloseButton`, `closeOnBackdropClick`, `centered`  
**Events:** `isOpenChange`, `closed`

---

### 5️⃣ Alert Component
**Location:** `src/app/components/alert/`

```html
<app-alert 
  variant="success" 
  title="Success!" 
  [dismissible]="true"
>
  Operation completed successfully
</app-alert>
```

**Variants:** `info` | `success` | `warning` | `danger`  
**Props:** `title`, `showIcon`, `dismissible`

---

### 6️⃣ Badge Component
**Location:** `src/app/components/badge/`

```html
<app-badge variant="primary" [rounded]="true">
  New
</app-badge>
```

**Variants:** `primary` | `secondary` | `success` | `warning` | `danger` | `neutral`  
**Sizes:** `sm` | `md` | `lg`  
**Props:** `outlined`, `rounded`, `dot`

---

### 7️⃣ Spinner Component
**Location:** `src/app/components/spinner/`

```html
<app-spinner 
  size="md" 
  variant="primary"
  [showLabel]="true"
  label="Loading..."
></app-spinner>
```

**Sizes:** `sm` | `md` | `lg` | `xl`  
**Variants:** `primary` | `secondary` | `white`  
**Props:** `label`, `showLabel`, `fullscreen`

---

### 8️⃣ Toggle Component
**Location:** `src/app/components/toggle/`

```html
<app-toggle 
  label="Dark Mode"
  [checked]="isDark"
  (checkedChange)="onToggle($event)"
  size="md"
></app-toggle>
```

**Sizes:** `sm` | `md` | `lg`  
**Props:** `label`, `disabled`, `checked`  
**Events:** `checkedChange`  
**Features:** ✅ Form Control Integration (ControlValueAccessor)

---

## 🎨 Design System

### CSS Variables Structure
```
Root Level Variables (_variables.scss):
├── Colors
│   ├── Primary (50-900)
│   ├── Secondary (50-900)
│   ├── Success (50-900)
│   ├── Warning (50-900)
│   ├── Danger (50-900)
│   └── Gray (50-900)
├── Semantic Colors
│   ├── --color-background
│   ├── --color-surface
│   ├── --color-text-primary
│   ├── --color-text-secondary
│   ├── --color-text-disabled
│   └── --color-border
├── Spacing (xs-3xl)
├── Typography
│   ├── Font families
│   ├── Font sizes (xs-4xl)
│   ├── Font weights
│   └── Line heights
├── Border Radius (sm-full)
├── Shadows (sm-2xl)
└── Transitions
```

### SCSS Mixins (_mixins.scss)
- `button-reset` - Reset button styles
- `input-reset` - Reset input styles
- `focus-ring` - Accessible focus
- `truncate` - Text ellipsis
- `line-clamp($lines)` - Multi-line truncate
- `flex-center` - Center content
- `absolute-fill` - Fill parent
- `card` - Card base styles
- `transition($props...)` - Smooth transitions
- `custom-scrollbar` - Styled scrollbar
- `respond-to($bp)` - Responsive breakpoints

---

## 🌓 Theme System

### ThemeService
**Location:** `src/app/services/theme.service.ts`

```typescript
import { ThemeService } from './services/theme.service';

constructor(private theme: ThemeService) {}

// Toggle theme
this.theme.toggleTheme();

// Set specific theme
this.theme.setTheme(true); // dark
this.theme.setTheme(false); // light

// Get current state
const isDark = this.theme.isDarkMode();
```

**Features:**
- ✅ LocalStorage persistence
- ✅ System preference detection
- ✅ Signal-based reactivity
- ✅ Smooth transitions

---

## 📦 Import Methods

### Method 1: Individual Imports
```typescript
import { ButtonComponent } from './components/button/button.component';
```

### Method 2: Barrel Export
```typescript
import { ButtonComponent, CardComponent } from './components';
```

### Method 3: Library Export (Recommended)
```typescript
import { 
  ButtonComponent, 
  CardComponent,
  ThemeService 
} from './lib';
```

---

## 🚀 Quick Start

1. **Import component:**
   ```typescript
   import { ButtonComponent } from './lib';
   
   @Component({
     imports: [ButtonComponent]
   })
   ```

2. **Use in template:**
   ```html
   <app-button variant="primary">Click</app-button>
   ```

3. **Style with variables:**
   ```scss
   .my-element {
     color: var(--color-primary);
     padding: var(--spacing-md);
   }
   ```

---

## 📁 Complete File Structure

```
frontend/
├── src/
│   ├── styles/
│   │   ├── _variables.scss              # 200+ CSS variables
│   │   ├── _mixins.scss                 # 11 utility mixins
│   │   └── DESIGN_SYSTEM_GUIDE.scss     # Reference guide
│   ├── styles.scss                      # Global imports
│   └── app/
│       ├── components/
│       │   ├── button/
│       │   │   ├── button.component.ts
│       │   │   └── button.component.scss
│       │   ├── card/
│       │   ├── input/
│       │   ├── modal/
│       │   ├── alert/
│       │   ├── badge/
│       │   ├── spinner/
│       │   ├── toggle/
│       │   └── index.ts
│       ├── services/
│       │   └── theme.service.ts
│       ├── lib.ts                       # Public API
│       ├── app.ts
│       ├── app.html
│       └── app.scss
├── COMPONENT_LIBRARY.md                 # Full docs
├── IMPLEMENTATION_SUMMARY.md            # Summary
└── package.json
```

---

## ✨ Key Features

✅ **8 Components** - Button, Card, Input, Modal, Alert, Badge, Spinner, Toggle  
✅ **200+ CSS Variables** - Consistent theming  
✅ **Light/Dark Mode** - Automatic theme switching  
✅ **Fully Typed** - TypeScript throughout  
✅ **Form Integration** - ControlValueAccessor support  
✅ **Responsive** - Mobile-first design  
✅ **Accessible** - ARIA attributes & keyboard nav  
✅ **Standalone** - Modern Angular architecture  
✅ **Production Ready** - Battle-tested patterns  

---

## 🎯 Component Stats

| Component | Variants | Sizes | States | Form Control |
|-----------|----------|-------|--------|--------------|
| Button    | 8        | 3     | 4      | ❌           |
| Card      | 4        | -     | 3      | ❌           |
| Input     | 3        | 3     | 3      | ✅           |
| Modal     | -        | 5     | 2      | ❌           |
| Alert     | 4        | -     | 2      | ❌           |
| Badge     | 6        | 3     | 3      | ❌           |
| Spinner   | 3        | 4     | 2      | ❌           |
| Toggle    | -        | 3     | 2      | ✅           |

---

**Total:** 8 components • 28 variants • 21 sizes • 200+ CSS variables • 11 mixins
