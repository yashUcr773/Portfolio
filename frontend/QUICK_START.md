# 🚀 Quick Start Guide

## Start the Demo

```bash
npm start
```

Visit `http://localhost:4200` to see all components in action!

## Component Usage Examples

### 1. Buttons
```html
<!-- Primary action -->
<app-button variant="primary" size="md">
  Save Changes
</app-button>

<!-- Loading state -->
<app-button [loading]="isSubmitting" variant="success">
  Submit Form
</app-button>

<!-- Outlined button -->
<app-button variant="outline" (click)="cancel()">
  Cancel
</app-button>
```

### 2. Form Input
```html
<app-input 
  label="Email Address"
  type="email"
  variant="outlined"
  placeholder="you@example.com"
  [required]="true"
  helperText="We'll never share your email"
  [error]="emailError"
></app-input>
```

### 3. Cards
```html
<app-card variant="elevated" [hoverable]="true">
  <h3>Product Name</h3>
  <p>Product description goes here...</p>
  <app-button variant="primary">Buy Now</app-button>
</app-card>
```

### 4. Modal Dialog
```html
<!-- Toggle button -->
<app-button (click)="showModal = true">
  Open Settings
</app-button>

<!-- Modal -->
<app-modal 
  [(isOpen)]="showModal"
  size="md"
>
  <div header>Settings</div>
  
  <div>
    <app-toggle 
      label="Enable Notifications"
      [(checked)]="notificationsEnabled"
    ></app-toggle>
  </div>
  
  <div footer>
    <app-button variant="outline" (click)="showModal = false">
      Cancel
    </app-button>
    <app-button (click)="saveSettings()">
      Save
    </app-button>
  </div>
</app-modal>
```

### 5. Alerts
```html
<app-alert variant="success" [dismissible]="true">
  Your profile has been updated successfully!
</app-alert>

<app-alert variant="warning" title="Warning">
  Please verify your email address.
</app-alert>
```

### 6. Badges & Status
```html
<!-- Status badge -->
<app-badge variant="success" [rounded]="true">
  Active
</app-badge>

<!-- Notification dot -->
<span>Notifications</span>
<app-badge variant="danger" [dot]="true"></app-badge>
```

### 7. Loading States
```html
<!-- Inline spinner -->
<app-spinner size="sm"></app-spinner>

<!-- With label -->
<app-spinner 
  [showLabel]="true" 
  label="Loading data..."
></app-spinner>

<!-- Fullscreen loader -->
<app-spinner 
  *ngIf="isLoading"
  [fullscreen]="true"
  size="lg"
></app-spinner>
```

### 8. Theme Toggle
```html
<!-- Simple toggle -->
<app-toggle 
  label="Dark Mode"
  [checked]="isDark"
  (checkedChange)="toggleTheme($event)"
></app-toggle>

<!-- Or use ThemeService -->
<app-toggle 
  label="Dark Mode"
  [checked]="themeService.isDarkMode()"
  (checkedChange)="themeService.toggleTheme()"
></app-toggle>
```

## Creating Custom Styled Components

### Using Design System Variables
```scss
@import '../styles/variables';
@import '../styles/mixins';

.my-custom-component {
  // Colors
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  
  // Spacing
  padding: var(--spacing-lg);
  margin: var(--spacing-md);
  gap: var(--spacing-sm);
  
  // Typography
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  
  // Styling
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  
  // Transitions
  @include transition(background-color, transform);
  
  &:hover {
    background-color: var(--color-primary-50);
    transform: translateY(-2px);
  }
  
  // Responsive
  @include respond-to('md') {
    padding: var(--spacing-xl);
  }
}
```

## Common Patterns

### Form with Validation
```typescript
// Component
export class MyForm {
  email = '';
  emailError = '';
  
  validateEmail() {
    if (!this.email.includes('@')) {
      this.emailError = 'Please enter a valid email';
    } else {
      this.emailError = '';
    }
  }
}
```

```html
<!-- Template -->
<app-input 
  label="Email"
  type="email"
  [(ngModel)]="email"
  (blur)="validateEmail()"
  [error]="emailError"
></app-input>
```

### Confirmation Modal
```typescript
// Component
confirmDelete() {
  this.showConfirmModal = true;
}

deleteItem() {
  // Perform delete
  this.showConfirmModal = false;
}
```

```html
<!-- Template -->
<app-button variant="danger" (click)="confirmDelete()">
  Delete
</app-button>

<app-modal 
  [(isOpen)]="showConfirmModal"
  size="sm"
>
  <div header>Confirm Delete</div>
  <p>Are you sure you want to delete this item?</p>
  <div footer>
    <app-button variant="outline" (click)="showConfirmModal = false">
      Cancel
    </app-button>
    <app-button variant="danger" (click)="deleteItem()">
      Delete
    </app-button>
  </div>
</app-modal>
```

### Loading State Management
```typescript
// Component
isLoading = signal(false);

async loadData() {
  this.isLoading.set(true);
  try {
    await this.dataService.fetch();
  } finally {
    this.isLoading.set(false);
  }
}
```

```html
<!-- Template -->
<app-button 
  [loading]="isLoading()"
  (click)="loadData()"
>
  Load Data
</app-button>

<app-spinner 
  *ngIf="isLoading()"
  [fullscreen]="true"
></app-spinner>
```

## Theme Integration

### Setup Theme Service
```typescript
import { ThemeService } from './services/theme.service';

export class AppComponent {
  constructor(public themeService: ThemeService) {
    // Theme automatically loads from localStorage
    // and respects system preferences
  }
}
```

### Manual Theme Control
```typescript
// Toggle
this.themeService.toggleTheme();

// Set specific
this.themeService.setTheme(true);  // dark
this.themeService.setTheme(false); // light

// Check current
if (this.themeService.isDarkMode()) {
  // Dark mode active
}
```

## Tips & Best Practices

✅ **Use CSS Variables** - Always use design tokens for consistency  
✅ **Import Mixins** - Leverage utility mixins for common patterns  
✅ **Responsive First** - Mobile-first, enhance for larger screens  
✅ **Accessibility** - Use semantic HTML and ARIA attributes  
✅ **Loading States** - Always show feedback for async operations  
✅ **Error Handling** - Display clear error messages to users  
✅ **Consistent Spacing** - Use spacing scale (xs-3xl)  
✅ **Theme Aware** - Test components in both light and dark modes  

## Need Help?

📖 **Full Documentation:** See [COMPONENT_LIBRARY.md](COMPONENT_LIBRARY.md)  
📋 **Component Reference:** See [COMPONENT_REFERENCE.md](COMPONENT_REFERENCE.md)  
🎨 **Design System:** See [src/styles/DESIGN_SYSTEM_GUIDE.scss](src/styles/DESIGN_SYSTEM_GUIDE.scss)  

---

**Happy Coding!** 🚀
