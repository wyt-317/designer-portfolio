import { SiteShell } from '@/components/site-shell';
import { CaseStudy } from '@/components/case-study';
import { UC_PROJECT, MAOER_PROJECT, UC_CASE_IMAGES } from '@/lib/data';

export default function UCCaseStudyPage() {
  return (
    <SiteShell>
      <CaseStudy
        project={UC_PROJECT}
        images={UC_CASE_IMAGES}
        nextProject={{ slug: 'maoer', name: MAOER_PROJECT.name }}
      />
    </SiteShell>
  );
}
