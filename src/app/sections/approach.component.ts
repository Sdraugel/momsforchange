import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface Step {
  icon: string;
  title: string;
  body: string;
}

@Component({
  selector: 'mfc-approach',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, NgClass],
  template: `
    <section class="bg-paper-raised px-5 py-20 sm:px-8 lg:py-28">
      <div class="mx-auto max-w-[1240px]">
        <div [mfcReveal]="0" class="max-w-2xl">
          <h2 class="text-4xl font-semibold leading-tight sm:text-5xl">How change happens</h2>
          <p class="mt-4 text-lg leading-relaxed text-forest-soft">
            No spin and no shortcuts. Just parents paying attention and following through.
          </p>
        </div>

        <div class="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <!-- connector line on the widest layout only -->
          <div
            aria-hidden="true"
            class="absolute left-8 right-8 top-9 hidden h-px bg-hairline lg:block"
          ></div>

          @for (step of steps; track step.title; let i = $index) {
            <div [mfcReveal]="i * 90" class="relative flex flex-col">
              <span
                class="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-emerald-900 text-emerald ring-8 ring-paper-raised"
              >
                <i class="ph-bold text-3xl" [ngClass]="step.icon"></i>
              </span>
              <h3 class="mt-6 text-xl font-semibold">{{ step.title }}</h3>
              <p class="mt-2 leading-relaxed text-forest-soft">{{ step.body }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ApproachComponent {
  protected readonly steps: Step[] = [
    {
      icon: 'ph-users-three',
      title: 'We organize',
      body: 'Parents across Berkeley County connect, compare notes, and get the facts together.',
    },
    {
      icon: 'ph-buildings',
      title: 'We show up',
      body: 'At board meetings and in our schools, where the real decisions get made.',
    },
    {
      icon: 'ph-megaphone-simple',
      title: 'We speak up',
      body: 'Plainly and respectfully, we ask the questions families deserve answers to.',
    },
    {
      icon: 'ph-tree',
      title: 'Schools get better',
      body: 'Trust grows, and our kids feel it, when parents stay engaged for the long haul.',
    },
  ];
}
