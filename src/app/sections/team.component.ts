import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface Founder {
  name: string;
  role: string;
  img: string;
  alt: string;
}

interface Officer {
  role: string;
  name: string;
  open?: boolean;
  tentative?: boolean;
}

@Component({
  selector: 'mfc-team',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="team" class="bg-paper px-5 py-20 sm:px-8 lg:py-28">
      <div class="mx-auto max-w-[1240px]">
        <div [mfcReveal]="0" class="max-w-2xl">
          <h2 class="text-4xl font-semibold leading-tight sm:text-5xl">Our team</h2>
          <p class="mt-4 text-lg leading-relaxed text-forest-soft">
            The parents leading Moms for Change, and the roles we are still filling.
          </p>
        </div>

        <!-- Co-founder portraits -->
        <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-3xl">
          @for (f of founders; track f.name; let i = $index) {
            <figure
              [mfcReveal]="i * 120"
              class="overflow-hidden rounded-card bg-paper-raised ring-1 ring-hairline"
            >
              <img
                [src]="f.img"
                [alt]="f.alt"
                width="900"
                height="1125"
                loading="lazy"
                class="aspect-[4/5] w-full object-cover object-top"
              />
              <figcaption class="px-6 py-5">
                <p class="text-xl font-semibold text-forest">{{ f.name }}</p>
                <p class="mt-1 text-sm font-medium text-emerald-700">{{ f.role }}</p>
              </figcaption>
            </figure>
          }
        </div>

        <!-- Officers -->
        <h3 [mfcReveal]="0" class="mt-16 text-2xl font-semibold text-forest">Officers</h3>
        <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          @for (o of officers; track o.role; let i = $index) {
            <div
              [mfcReveal]="i * 80"
              class="rounded-card p-6"
              [class.bg-paper-raised]="!o.open"
              [class.ring-1]="!o.open"
              [class.ring-hairline]="!o.open"
              [class.bg-emerald-900]="o.open"
            >
              <p
                class="text-xs font-bold uppercase tracking-wide"
                [class.text-emerald-700]="!o.open"
                [class.text-mint]="o.open"
              >
                {{ o.role }}
              </p>

              @if (o.open) {
                <p class="mt-2 text-lg font-semibold text-paper">We are recruiting</p>
                <p class="mt-2 text-sm leading-relaxed text-paper/80">
                  If you would like to serve, we would love to hear from you.
                </p>
                <a
                  [href]="secretaryHref"
                  class="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald px-4 py-2 text-sm font-semibold text-forest transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <i class="ph-bold ph-envelope-simple"></i>
                  Volunteer as Secretary
                </a>
              } @else {
                <p
                  class="mt-2 text-lg font-semibold"
                  [class.text-forest]="!o.tentative"
                  [class.text-forest-soft]="o.tentative"
                >
                  {{ o.name }}
                </p>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class TeamComponent {
  // PHOTO-TO-NAME MAPPING IS UNVERIFIED. The brief supplied two co-founder
  // photos but did not say which is Sarah Kalil and which is Yuliana Alcon.
  // If reversed, swap the two `img` values (and `alt`) below. One edit, done.
  protected readonly founders: Founder[] = [
    {
      name: 'Sarah Kalil',
      role: 'President and Co-Founder',
      img: 'assets/img/founder-sarah.jpg',
      alt: 'Sarah Kalil, President and co-founder of Moms for Change',
    },
    {
      name: 'Yuliana Alcon',
      role: 'Co-Founder',
      img: 'assets/img/founder-yuliana.jpg',
      alt: 'Yuliana Alcon, co-founder of Moms for Change',
    },
  ];

  protected readonly officers: Officer[] = [
    { role: 'President', name: 'Sarah Kalil' },
    { role: 'Vice President', name: 'Amanda Hebel' },
    { role: 'Treasurer', name: 'To be announced', tentative: true },
    { role: 'Secretary', name: '', open: true },
  ];

  protected readonly secretaryHref =
    'mailto:momsforchangesc@gmail.com?subject=Volunteering%20as%20Secretary%20for%20Moms%20for%20Change';
}
