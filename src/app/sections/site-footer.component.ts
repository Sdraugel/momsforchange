import { ChangeDetectionStrategy, Component } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'mfc-site-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-emerald-900 px-5 py-16 text-paper sm:px-8">
      <div class="mx-auto max-w-[1240px]">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <!-- Brand -->
          <div class="max-w-md">
            <a href="#hero" class="flex items-center gap-3" aria-label="Moms for Change home">
              <img
                src="assets/img/logo-vertical.png"
                alt=""
                width="48"
                height="48"
                class="h-12 w-12 rounded-chip object-cover ring-1 ring-white/20"
              />
              <span class="text-xl font-semibold leading-none">
                Moms for <span class="font-script text-2xl text-emerald">Change</span>
              </span>
            </a>
            <p class="mt-5 leading-relaxed text-paper/75">
              Parents organizing for transparency, fairness, and accountability in Berkeley
              County, South Carolina schools.
            </p>
            <a
              [href]="facebookUrl"
              target="_blank"
              rel="noopener"
              class="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-base font-semibold text-forest transition-transform duration-200 hover:-translate-y-0.5"
            >
              <i class="ph-bold ph-facebook-logo text-lg"></i>
              Join on Facebook
            </a>
          </div>

          <!-- Links + contact -->
          <div class="grid grid-cols-2 gap-8 sm:max-w-md lg:justify-self-end">
            <nav aria-label="Footer">
              <p class="text-sm font-semibold text-mint">Explore</p>
              <ul class="mt-4 space-y-3">
                @for (link of links; track link.href) {
                  <li>
                    <a [href]="link.href" class="text-paper/80 transition-colors hover:text-paper">
                      {{ link.label }}
                    </a>
                  </li>
                }
              </ul>
            </nav>
            <div>
              <p class="text-sm font-semibold text-mint">Contact</p>
              <ul class="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:momsforchangesc@gmail.com"
                    class="break-words text-paper/80 transition-colors hover:text-paper"
                  >
                    momsforchangesc&#64;gmail.com
                  </a>
                </li>
                <li class="text-paper/80">Berkeley County, SC</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-14 border-t border-white/15 pt-6">
          <div
            class="flex flex-col gap-2 text-sm text-paper/65 sm:flex-row sm:items-center sm:justify-between"
          >
            <p>&copy; 2026 Moms for Change. Berkeley County, South Carolina.</p>
            <p>Made by parents, for our public schools.</p>
          </div>
          <p class="mt-4 text-xs text-paper/45">Site built by Draugel Engineering, LLC.</p>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooterComponent {
  protected readonly facebookUrl = 'https://www.facebook.com/groups/momsforchangesc';

  protected readonly links: NavLink[] = [
    { label: 'What we stand for', href: '#principles' },
    { label: 'About', href: '#about' },
    { label: 'Our team', href: '#team' },
    { label: 'Get involved', href: '#involved' },
  ];
}
