import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiteNavComponent } from './sections/site-nav.component';
import { HeroComponent } from './sections/hero.component';
import { MissionComponent } from './sections/mission.component';
import { PrinciplesComponent } from './sections/principles.component';
import { AboutComponent } from './sections/about.component';
import { ApproachComponent } from './sections/approach.component';
import { TeamComponent } from './sections/team.component';
import { GetInvolvedComponent } from './sections/get-involved.component';
import { SiteFooterComponent } from './sections/site-footer.component';

@Component({
  selector: 'mfc-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SiteNavComponent,
    HeroComponent,
    MissionComponent,
    PrinciplesComponent,
    AboutComponent,
    ApproachComponent,
    TeamComponent,
    GetInvolvedComponent,
    SiteFooterComponent,
  ],
  template: `
    <a
      href="#hero"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-emerald-900 focus:px-5 focus:py-2 focus:text-paper"
    >
      Skip to content
    </a>

    <mfc-site-nav />

    <main id="hero">
      <mfc-hero />
      <mfc-mission />
      <mfc-principles />
      <mfc-about />
      <mfc-approach />
      <mfc-team />
      <mfc-get-involved />
    </main>

    <mfc-site-footer />
  `,
})
export class AppComponent {}
