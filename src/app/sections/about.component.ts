import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'mfc-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="about" class="bg-paper px-5 py-20 sm:px-8 lg:py-28">
      <div class="mx-auto max-w-3xl text-center">
        <!-- Script reserved for the brand accent, matching their "About us" mark -->
        <h2 [mfcReveal]="0" class="font-script text-5xl text-emerald-700 sm:text-6xl">
          About us
        </h2>
        <p
          [mfcReveal]="80"
          class="mt-7 text-xl leading-relaxed text-forest sm:text-[1.45rem] sm:leading-[1.6]"
        >
          Moms for Change is a collective of parents advocating for transparency,
          fairness, and accountability in Berkeley County schools. We champion
          meaningful learning over excessive testing, support teachers' freedom to
          teach, and foster open, respectful communication to create a school system
          where students and educators can thrive.
        </p>
      </div>

      <!-- Wide real photo band: advocates at a Berkeley County school district town hall -->
      <figure [mfcReveal]="120" class="mx-auto mt-14 max-w-[1100px]">
        <img
          src="assets/img/advocacy-public-education.jpg"
          alt="Moms for Change advocates at a Berkeley County School District town hall, wearing Protect Public Education and Advocate shirts"
          width="1600"
          height="900"
          loading="lazy"
          class="aspect-[16/9] w-full rounded-card object-cover shadow-lg ring-1 ring-hairline"
        />
      </figure>
    </section>
  `,
})
export class AboutComponent {}
