import { Directive, Input } from '@angular/core';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';
export type TypographyColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'text-primary' | 'text-secondary' | 'text-disabled';
export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

@Directive({
  selector: '[appTypography]',
  standalone: true,
  host: {
    '[class]': 'hostClasses'
  }
})
export class TypographyDirective {
  @Input() variant: TypographyVariant = 'body1';
  @Input() color: TypographyColor = 'text-primary';
  @Input() align: TypographyAlign = 'left';
  @Input() noMargin: boolean = false;
  @Input() gutterBottom: boolean = false;

  get hostClasses(): string {
    const classes = ['typography'];
    
    classes.push(`typography-${this.variant}`);
    classes.push(`typography-color-${this.color}`);
    classes.push(`typography-align-${this.align}`);
    
    if (this.noMargin) {
      classes.push('typography-no-margin');
    }
    
    if (this.gutterBottom) {
      classes.push('typography-gutter-bottom');
    }
    
    return classes.join(' ');
  }
}
