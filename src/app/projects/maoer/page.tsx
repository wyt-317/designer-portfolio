import { SiteShell } from '@/components/site-shell';
import { CaseStudy } from '@/components/case-study';
import { UC_PROJECT, MAOER_PROJECT, MAOER_CASE_IMAGES } from '@/lib/data';

export default function MaoerCaseStudyPage() {
  return (
    <SiteShell>
      <CaseStudy
        project={MAOER_PROJECT}
        images={MAOER_CASE_IMAGES}
        nextProject={{ slug: 'uc', name: UC_PROJECT.name }}
      />
    </SiteShell>
  );
}
