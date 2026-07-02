import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'mfc-principles',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="principles" class="bg-paper px-5 py-20 sm:px-8 lg:py-28">
      <div class="mx-auto max-w-[1240px]">
        <div class="max-w-2xl">
          <h2 [mfcReveal]="0" class="text-4xl font-semibold leading-tight sm:text-5xl">
            What we stand for
          </h2>
          <p [mfcReveal]="80" class="mt-4 text-lg leading-relaxed text-forest-soft">
            Three plain commitments that guide everything we ask of our district.
          </p>
        </div>

        <!-- Asymmetric bento: 2 + 3, then a full-width row. Distinct backgrounds. -->
        <div class="mt-12 grid grid-cols-1 gap-5 md:grid-cols-5">
          <!-- A: deep emerald -->
          <article
            [mfcReveal]="0"
            class="flex flex-col justify-between rounded-card bg-emerald-900 p-8 md:col-span-2"
          >
            <i class="ph-bold ph-book-open-text text-4xl text-emerald"></i>
            <div class="mt-10">
              <h3 class="text-2xl font-semibold text-paper">
                Meaningful learning over excessive testing
              </h3>
              <p class="mt-3 leading-relaxed text-paper/80">
                Classrooms built for real learning and curiosity, not endless prep for
                the next standardized test.
              </p>
            </div>
          </article>

          <!-- B: bright brand emerald (dark text for contrast) -->
          <article
            [mfcReveal]="120"
            class="flex flex-col justify-between rounded-card bg-emerald p-8 md:col-span-3"
          >
            <i class="ph-bold ph-chalkboard-teacher text-4xl text-forest"></i>
            <div class="mt-10">
              <h3 class="text-2xl font-semibold text-forest">Teachers free to teach</h3>
              <p class="mt-3 max-w-md leading-relaxed text-forest">
                Educators deserve the freedom to do their job well, without unnecessary
                interference standing between them and their students.
              </p>
            </div>
          </article>

          <!-- C: full-width feature row (icon badge + text) -->
          <article
            [mfcReveal]="80"
            class="flex flex-col gap-6 rounded-card bg-paper-raised p-8 ring-1 ring-hairline sm:flex-row sm:items-center sm:gap-8 sm:p-10 md:col-span-5"
          >
            <div
              class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald/15"
            >
              <i class="ph-bold ph-eye text-3xl text-emerald-700"></i>
            </div>
            <div>
              <h3 class="text-2xl font-semibold">
                Transparency, fairness, and open communication
              </h3>
              <p class="mt-2 max-w-3xl leading-relaxed text-forest-soft">
                Open district decisions, fair policy, and honest communication between
                schools and the families they answer to.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class PrinciplesComponent {}
