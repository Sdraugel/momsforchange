import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  inject,
} from '@angular/core';

/**
 * mfcReveal - calm, one-shot scroll entrance.
 *
 * Uses IntersectionObserver (no window scroll listeners, per brief). Adds the
 * `reveal` class immediately so the element starts hidden, then `is-visible`
 * once it enters the viewport. Honors prefers-reduced-motion by skipping the
 * hidden state entirely (CSS also force-resets under reduced motion as a
 * belt-and-braces guard).
 */
@Directive({
  selector: '[mfcReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  /** Stagger delay in ms, applied via the --reveal-delay custom property. */
  @Input('mfcReveal') delay: number | '' = '';

  ngAfterViewInit(): void {
    const node: HTMLElement = this.el.nativeElement;
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ms = typeof this.delay === 'number' ? this.delay : 0;
    if (ms > 0) {
      this.renderer.setStyle(node, '--reveal-delay', `${ms}ms`);
    }

    this.renderer.addClass(node, 'reveal');

    // No IO support or reduced motion: show immediately, no animation.
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(node, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(node, 'is-visible');
            this.observer?.unobserve(node);
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
