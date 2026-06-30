import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'mfc-site-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="fixed inset-x-0 top-0 z-40 transition-colors duration-300"
      [class.bg-paper-raised]="scrolled()"
      [class.shadow-sm]="scrolled()"
      [class.backdrop-blur]="scrolled()"
      [class.border-b]="scrolled()"
      [class.border-hairline]="scrolled()"
    >
      <nav
        class="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8"
        aria-label="Primary"
      >
        <!-- Brand: real logo badge + wordmark (script reserved for "Change") -->
        <a href="#hero" class="flex shrink-0 items-center gap-3" aria-label="Moms for Change home">
          <img
            src="assets/img/logo-vertical.png"
            alt=""
            width="44"
            height="44"
            class="h-11 w-11 rounded-chip object-cover shadow-sm ring-1 ring-hairline"
          />
          <span class="hidden text-[19px] font-semibold leading-none text-forest sm:inline">
            Moms for <span class="font-script text-[24px] text-emerald-700">Change</span>
          </span>
        </a>

        <!-- Desktop links -->
        <ul class="hidden items-center gap-7 lg:flex">
          @for (link of links; track link.href) {
            <li>
              <a
                [href]="link.href"
                class="text-[15px] font-medium text-forest-soft transition-colors hover:text-emerald-700"
              >
                {{ link.label }}
              </a>
            </li>
          }
        </ul>

        <div class="flex items-center gap-2">
          <a
            [href]="facebookUrl"
            target="_blank"
            rel="noopener"
            class="hidden items-center gap-2 rounded-full bg-emerald-900 px-5 py-2.5 text-[14px] font-semibold text-paper transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 sm:inline-flex"
          >
            <i class="ph-bold ph-facebook-logo text-base"></i>
            Join on Facebook
          </a>

          <!-- Mobile toggle -->
          <button
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center rounded-chip text-forest transition-colors hover:bg-emerald/15 lg:hidden"
            [attr.aria-expanded]="menuOpen()"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            (click)="toggle()"
          >
            <i class="ph-bold text-2xl" [class.ph-list]="!menuOpen()" [class.ph-x]="menuOpen()"></i>
          </button>
        </div>
      </nav>

      <!-- Mobile menu -->
      @if (menuOpen()) {
        <div
          id="mobile-menu"
          class="border-t border-hairline bg-paper-raised px-5 pb-6 pt-2 lg:hidden"
        >
          <ul class="flex flex-col">
            @for (link of links; track link.href) {
              <li>
                <a
                  [href]="link.href"
                  (click)="close()"
                  class="block border-b border-hairline py-3.5 text-[17px] font-medium text-forest"
                >
                  {{ link.label }}
                </a>
              </li>
            }
          </ul>
          <a
            [href]="facebookUrl"
            target="_blank"
            rel="noopener"
            (click)="close()"
            class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-900 px-5 py-3.5 text-[15px] font-semibold text-paper"
          >
            <i class="ph-bold ph-facebook-logo text-lg"></i>
            Join on Facebook
          </a>
        </div>
      }
    </header>

    <!-- Spacer so fixed header never overlaps the hero -->
    <div aria-hidden="true" class="h-[68px]"></div>
  `,
})
export class SiteNavComponent implements AfterViewInit, OnDestroy {
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly facebookUrl = 'https://www.facebook.com/groups/momsforchangesc';

  protected readonly links: NavLink[] = [
    { label: 'What we stand for', href: '#principles' },
    { label: 'About', href: '#about' },
    { label: 'Our team', href: '#team' },
    { label: 'Get involved', href: '#involved' },
  ];

  private observer?: IntersectionObserver;
  private sentinel?: HTMLElement;

  protected toggle(): void {
    this.menuOpen.update((v) => !v);
  }

  protected close(): void {
    this.menuOpen.set(false);
  }

  ngAfterViewInit(): void {
    // Toggle the "scrolled" style without a scroll listener: watch a 1px
    // sentinel at the very top of the page via IntersectionObserver.
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }
    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText =
      'position:absolute;top:0;left:0;height:1px;width:1px;pointer-events:none;';
    document.body.prepend(sentinel);
    this.sentinel = sentinel;

    this.observer = new IntersectionObserver(
      ([entry]) => this.scrolled.set(!entry.isIntersecting),
      { threshold: 0 },
    );
    this.observer.observe(sentinel);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.sentinel?.remove();
  }
}
