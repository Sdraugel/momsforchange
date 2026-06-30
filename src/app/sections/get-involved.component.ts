import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'mfc-get-involved',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="involved" class="bg-paper px-5 py-20 sm:px-8 lg:py-28">
      <!-- Bright brand emerald (#05B66C) fill with dark forest text for AA contrast -->
      <div class="mx-auto max-w-[1100px] rounded-card bg-emerald p-8 sm:p-12 lg:p-14">
        <div [mfcReveal]="0" class="max-w-2xl">
          <h2 class="text-4xl font-semibold leading-tight text-forest sm:text-5xl">Get involved</h2>
          <p class="mt-4 text-lg leading-relaxed text-forest">
            Moms for Change is a private Facebook group for parents in the Berkeley County
            community. Anyone can find the group, but only members can see posts and member
            information. There is no public sign-up form, so reach out and we will help you in.
          </p>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <!-- Step: Facebook group (primary action) -->
          <div [mfcReveal]="80" class="flex flex-col rounded-card bg-paper-raised p-7">
            <i class="ph-bold ph-facebook-logo text-3xl text-emerald-700"></i>
            <h3 class="mt-4 text-xl font-semibold text-forest">Join the Facebook group</h3>
            <p class="mt-2 grow leading-relaxed text-forest-soft">
              Request to join the private group for Berkeley County parents. Only members can
              see posts and member information.
            </p>
            <a
              [href]="facebookUrl"
              target="_blank"
              rel="noopener"
              class="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-900 px-6 py-3 text-base font-semibold text-paper transition-transform duration-200 hover:-translate-y-0.5"
            >
              <i class="ph-bold ph-facebook-logo text-lg"></i>
              Join on Facebook
            </a>
          </div>

          <!-- Step: email (secondary contact) -->
          <div [mfcReveal]="160" class="flex flex-col rounded-card bg-paper-raised p-7">
            <i class="ph-bold ph-envelope-simple text-3xl text-emerald-700"></i>
            <h3 class="mt-4 text-xl font-semibold text-forest">Have a question first?</h3>
            <p class="mt-2 grow leading-relaxed text-forest-soft">
              Send a note to info&#64;momsforchangesc.org and we will point you in the right
              direction.
            </p>
            <a
              [href]="contactHref"
              class="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-700/40 px-6 py-3 text-base font-semibold text-emerald-700 transition-colors hover:bg-emerald/10"
            >
              <i class="ph-bold ph-envelope-simple text-lg"></i>
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class GetInvolvedComponent {
  protected readonly facebookUrl = 'https://www.facebook.com/groups/momsforchangesc';

  protected readonly contactHref =
    'mailto:info@momsforchangesc.org?subject=Question%20about%20Moms%20for%20Change';
}
