import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'mfc-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section class="relative overflow-hidden bg-paper">
      <!-- soft organic background wash (single radial, not a mesh blob) -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -right-32 -top-24 h-[36rem] w-[36rem] rounded-full bg-emerald/10 blur-3xl"
      ></div>

      <div
        class="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24"
      >
        <!-- Copy -->
        <div class="lg:col-span-7">
          <p
            [mfcReveal]="0"
            class="inline-flex items-center gap-2 rounded-full border border-hairline bg-paper-raised px-4 py-1.5 text-[13.5px] font-semibold text-emerald-700"
          >
            <i class="ph-bold ph-tree text-base"></i>
            Berkeley County, South Carolina
          </p>

          <h1
            [mfcReveal]="80"
            class="mt-6 max-w-[20ch] text-balance text-[2.3rem] font-semibold leading-[1.08] text-forest sm:text-5xl lg:text-[3.15rem]"
          >
            Better schools, built by parents who
            <span class="text-emerald-700">show up.</span>
          </h1>

          <p
            [mfcReveal]="160"
            class="mt-6 max-w-[34rem] text-lg leading-relaxed text-forest-soft sm:text-xl"
          >
            We hold Berkeley County schools accountable to the families they serve,
            pushing for transparency, fairness, and open communication.
          </p>

          <div [mfcReveal]="240" class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              [href]="facebookUrl"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-900 px-7 py-3.5 text-base font-semibold text-paper transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <i class="ph-bold ph-facebook-logo text-lg"></i>
              Join on Facebook
            </a>
            <a
              href="#mission"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-700/40 px-7 py-3.5 text-base font-semibold text-emerald-700 transition-colors hover:bg-emerald/10"
            >
              Read our mission
              <i class="ph-bold ph-arrow-right text-base"></i>
            </a>
          </div>
        </div>

        <!-- Brand motto graphic -->
        <div [mfcReveal]="200" class="relative lg:col-span-6 xl:col-span-5">
          <div
            aria-hidden="true"
            class="absolute -bottom-5 -left-5 hidden h-full w-full rounded-card bg-emerald/25 sm:block"
          ></div>
          <img
            src="assets/img/hero-motto.jpg"
            alt="Moms for Change motto: Defending Students, Elevating Teachers, Transforming Schools"
            width="940"
            height="788"
            fetchpriority="high"
            class="relative aspect-[940/788] w-full rounded-card object-cover shadow-xl ring-1 ring-hairline"
          />
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  protected readonly facebookUrl = 'https://www.facebook.com/groups/momsforchangesc';
}
