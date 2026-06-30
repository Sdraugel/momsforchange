import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'mfc-mission',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="mission" class="bg-paper px-5 py-6 sm:px-8">
      <!-- Full-bleed brand band: deep emerald so white text clears WCAG AA -->
      <div
        class="mx-auto max-w-[1240px] rounded-card bg-emerald-900 px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-24"
      >
        <div [mfcReveal]="0" class="flex flex-col items-center">
          <i class="ph-bold ph-tree text-3xl text-emerald"></i>
          <p class="mt-3 font-script text-2xl text-white/90">Our mission</p>
        </div>

        <p
          [mfcReveal]="80"
          class="mx-auto mt-7 max-w-3xl text-balance text-2xl font-medium leading-snug text-paper sm:text-[2rem] sm:leading-[1.25]"
        >
          Moms for Change exists to hold Berkeley County schools accountable to the
          students and families they serve.
        </p>

        <p
          [mfcReveal]="160"
          class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-paper/80 sm:text-lg"
        >
          We believe every child deserves a classroom built on meaningful learning,
          not excessive testing, and every teacher deserves the freedom to do their
          job without unnecessary interference. We push for transparency in district
          decisions, fairness in policy, and open communication between schools and
          the community.
        </p>

        <p
          [mfcReveal]="240"
          class="mx-auto mt-9 max-w-2xl text-lg font-semibold text-paper sm:text-xl"
        >
          When parents organize and speak up, schools get better. That is what we are
          here to do.
        </p>
      </div>
    </section>
  `,
})
export class MissionComponent {}
