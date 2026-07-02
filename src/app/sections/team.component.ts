import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface Leader {
  name: string;
  role: string;
  img: string;
  alt: string;
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

        <!-- Leadership portraits: Sarah, Amanda, Yuliana -->
        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          @for (p of leaders; track p.name; let i = $index) {
            <figure
              [mfcReveal]="i * 120"
              class="overflow-hidden rounded-card bg-paper-raised ring-1 ring-hairline"
            >
              <img
                [src]="p.img"
                [alt]="p.alt"
                width="900"
                height="1125"
                loading="lazy"
                class="aspect-[4/5] w-full object-cover object-top"
              />
              <figcaption class="px-6 py-5">
                <p class="text-xl font-semibold text-forest">{{ p.name }}</p>
                <p class="mt-1 text-sm font-medium text-emerald-700">{{ p.role }}</p>
              </figcaption>
            </figure>
          }
        </div>

        <!-- The one role we are still filling -->
        <div
          [mfcReveal]="0"
          class="mt-8 flex flex-col gap-6 rounded-card bg-emerald-900 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div>
            <p class="text-xs font-bold uppercase tracking-wide text-mint">Secretary</p>
            <p class="mt-2 text-2xl font-semibold text-paper">
              We are still looking for a Secretary
            </p>
            <p class="mt-2 max-w-xl leading-relaxed text-paper/80">
              It is the one open seat on our team. If you would like to serve, we would love
              to hear from you.
            </p>
          </div>
          <a
            [href]="secretaryHref"
            class="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald px-6 py-3 text-base font-semibold text-forest transition-transform duration-200 hover:-translate-y-0.5"
          >
            <i class="ph-bold ph-envelope-simple text-lg"></i>
            Volunteer as Secretary
          </a>
        </div>
      </div>
    </section>
  `,
})
export class TeamComponent {
  protected readonly leaders: Leader[] = [
    {
      name: 'Sarah Kalil',
      role: 'President and Co-Founder',
      img: 'assets/img/sarah-headshot.jpg',
      alt: 'Sarah Kalil, President and co-founder of Moms for Change',
    },
    {
      name: 'Amanda Hebel',
      role: 'Vice President',
      img: 'assets/img/founder-amanda.jpg',
      alt: 'Amanda Hebel, Vice President of Moms for Change',
    },
    {
      name: 'Yuliana Alcon',
      role: 'Treasurer and Co-Founder',
      img: 'assets/img/founder-yuliana.jpg',
      alt: 'Yuliana Alcon, Treasurer and co-founder of Moms for Change',
    },
  ];

  protected readonly secretaryHref =
    'mailto:info@momsforchangesc.org?subject=Volunteering%20as%20Secretary%20for%20Moms%20for%20Change';
}
