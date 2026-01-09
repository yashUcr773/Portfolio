import { Directive, Input, HostBinding } from '@angular/core';

export type LinkVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'neutral';
export type LinkUnderline = 'none' | 'hover' | 'always';

@Directive({
  selector: 'a[appLink]',
  standalone: true,
  host: {
    '[class]': 'hostClasses'
  }
})
export class LinkDirective {
  @Input() variant: LinkVariant = 'primary';
  @Input() underline: LinkUnderline = 'hover';
  @Input() external: boolean = false;

  @HostBinding('attr.target')
  get target() {
    return this.external ? '_blank' : null;
  }

  @HostBinding('attr.rel')
  get rel() {
    return this.external ? 'noopener noreferrer' : null;
  }

  get hostClasses(): string {
    const classes = ['link'];
    
    classes.push(`link-${this.variant}`);
    classes.push(`link-underline-${this.underline}`);
    
    if (this.external) {
      classes.push('link-external');
    }
    
    return classes.join(' ');
  }
}
