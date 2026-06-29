/**
 * Generates physical app/<slug>/page.tsx route files for the additive Workday SEO
 * cluster. Each new LandingPageConfig exported from data/workday-pages.ts gets a
 * matching App Router page. Idempotent: never overwrites an existing page.tsx.
 *
 * Run: node scripts/gen-workday-cluster-pages.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app');

// [slug, exportedConfigName, ComponentName]
const PAGES = [
  // ── Phase 1: Country proxy interview pages ──────────────────────────────────
  ['workday-proxy-interview-ireland', 'workdayProxyInterviewIreland', 'WorkdayProxyInterviewIrelandPage'],
  ['workday-proxy-interview-germany', 'workdayProxyInterviewGermany', 'WorkdayProxyInterviewGermanyPage'],
  ['workday-proxy-interview-netherlands', 'workdayProxyInterviewNetherlands', 'WorkdayProxyInterviewNetherlandsPage'],
  ['workday-proxy-interview-france', 'workdayProxyInterviewFrance', 'WorkdayProxyInterviewFrancePage'],
  ['workday-proxy-interview-sweden', 'workdayProxyInterviewSweden', 'WorkdayProxyInterviewSwedenPage'],
  ['workday-proxy-interview-switzerland', 'workdayProxyInterviewSwitzerland', 'WorkdayProxyInterviewSwitzerlandPage'],
  ['workday-proxy-interview-australia', 'workdayProxyInterviewAustralia', 'WorkdayProxyInterviewAustraliaPage'],
  ['workday-proxy-interview-new-zealand', 'workdayProxyInterviewNewZealand', 'WorkdayProxyInterviewNewZealandPage'],
  ['workday-proxy-interview-singapore', 'workdayProxyInterviewSingapore', 'WorkdayProxyInterviewSingaporePage'],
  ['workday-proxy-interview-uae', 'workdayProxyInterviewUAE', 'WorkdayProxyInterviewUAEPage'],
  ['workday-proxy-interview-saudi-arabia', 'workdayProxyInterviewSaudiArabia', 'WorkdayProxyInterviewSaudiArabiaPage'],
  // ── Phase 2: Country interview scheduled pages ──────────────────────────────
  ['workday-interview-scheduled-ireland', 'workdayInterviewScheduledIreland', 'WorkdayInterviewScheduledIrelandPage'],
  ['workday-interview-scheduled-germany', 'workdayInterviewScheduledGermany', 'WorkdayInterviewScheduledGermanyPage'],
  ['workday-interview-scheduled-netherlands', 'workdayInterviewScheduledNetherlands', 'WorkdayInterviewScheduledNetherlandsPage'],
  ['workday-interview-scheduled-france', 'workdayInterviewScheduledFrance', 'WorkdayInterviewScheduledFrancePage'],
  ['workday-interview-scheduled-sweden', 'workdayInterviewScheduledSweden', 'WorkdayInterviewScheduledSwedenPage'],
  ['workday-interview-scheduled-switzerland', 'workdayInterviewScheduledSwitzerland', 'WorkdayInterviewScheduledSwitzerlandPage'],
  ['workday-interview-scheduled-australia', 'workdayInterviewScheduledAustralia', 'WorkdayInterviewScheduledAustraliaPage'],
  ['workday-interview-scheduled-new-zealand', 'workdayInterviewScheduledNewZealand', 'WorkdayInterviewScheduledNewZealandPage'],
  ['workday-interview-scheduled-singapore', 'workdayInterviewScheduledSingapore', 'WorkdayInterviewScheduledSingaporePage'],
  ['workday-interview-scheduled-uae', 'workdayInterviewScheduledUAE', 'WorkdayInterviewScheduledUAEPage'],
  ['workday-interview-scheduled-saudi-arabia', 'workdayInterviewScheduledSaudiArabia', 'WorkdayInterviewScheduledSaudiArabiaPage'],
  // ── Phase 3: USA city pages ─────────────────────────────────────────────────
  ['new-york-workday-job-support', 'newYorkWorkdayJobSupport', 'NewYorkWorkdayJobSupportPage'],
  ['dallas-workday-job-support', 'dallasWorkdayJobSupport', 'DallasWorkdayJobSupportPage'],
  ['chicago-workday-job-support', 'chicagoWorkdayJobSupport', 'ChicagoWorkdayJobSupportPage'],
  ['atlanta-workday-job-support', 'atlantaWorkdayJobSupport', 'AtlantaWorkdayJobSupportPage'],
  ['houston-workday-job-support', 'houstonWorkdayJobSupport', 'HoustonWorkdayJobSupportPage'],
  ['austin-workday-job-support', 'austinWorkdayJobSupport', 'AustinWorkdayJobSupportPage'],
  ['charlotte-workday-job-support', 'charlotteWorkdayJobSupport', 'CharlotteWorkdayJobSupportPage'],
  ['phoenix-workday-job-support', 'phoenixWorkdayJobSupport', 'PhoenixWorkdayJobSupportPage'],
  ['seattle-workday-job-support', 'seattleWorkdayJobSupport', 'SeattleWorkdayJobSupportPage'],
  ['san-francisco-workday-job-support', 'sanFranciscoWorkdayJobSupport', 'SanFranciscoWorkdayJobSupportPage'],
  ['san-jose-workday-job-support', 'sanJoseWorkdayJobSupport', 'SanJoseWorkdayJobSupportPage'],
  ['los-angeles-workday-job-support', 'losAngelesWorkdayJobSupport', 'LosAngelesWorkdayJobSupportPage'],
  ['boston-workday-job-support', 'bostonWorkdayJobSupport', 'BostonWorkdayJobSupportPage'],
  ['washington-dc-workday-job-support', 'washingtonDcWorkdayJobSupport', 'WashingtonDcWorkdayJobSupportPage'],
  ['jersey-city-workday-job-support', 'jerseyCityWorkdayJobSupport', 'JerseyCityWorkdayJobSupportPage'],
  ['tampa-workday-job-support', 'tampaWorkdayJobSupport', 'TampaWorkdayJobSupportPage'],
  // ── Phase 4: Canada city pages ──────────────────────────────────────────────
  ['toronto-workday-job-support', 'torontoWorkdayJobSupport', 'TorontoWorkdayJobSupportPage'],
  ['vancouver-workday-job-support', 'vancouverWorkdayJobSupport', 'VancouverWorkdayJobSupportPage'],
  ['calgary-workday-job-support', 'calgaryWorkdayJobSupport', 'CalgaryWorkdayJobSupportPage'],
  ['montreal-workday-job-support', 'montrealWorkdayJobSupport', 'MontrealWorkdayJobSupportPage'],
  ['ottawa-workday-job-support', 'ottawaWorkdayJobSupport', 'OttawaWorkdayJobSupportPage'],
  // ── Phase 5: UK city pages ──────────────────────────────────────────────────
  ['london-workday-job-support', 'londonWorkdayJobSupport', 'LondonWorkdayJobSupportPage'],
  ['manchester-workday-job-support', 'manchesterWorkdayJobSupport', 'ManchesterWorkdayJobSupportPage'],
  ['birmingham-workday-job-support', 'birminghamWorkdayJobSupport', 'BirminghamWorkdayJobSupportPage'],
  ['leeds-workday-job-support', 'leedsWorkdayJobSupport', 'LeedsWorkdayJobSupportPage'],
  ['glasgow-workday-job-support', 'glasgowWorkdayJobSupport', 'GlasgowWorkdayJobSupportPage'],
  // ── Phase 6: Ireland city pages ─────────────────────────────────────────────
  ['dublin-workday-job-support', 'dublinWorkdayJobSupport', 'DublinWorkdayJobSupportPage'],
  ['cork-workday-job-support', 'corkWorkdayJobSupport', 'CorkWorkdayJobSupportPage'],
  ['galway-workday-job-support', 'galwayWorkdayJobSupport', 'GalwayWorkdayJobSupportPage'],
  // ── Phase 7: Europe city pages ──────────────────────────────────────────────
  ['berlin-workday-job-support', 'berlinWorkdayJobSupport', 'BerlinWorkdayJobSupportPage'],
  ['munich-workday-job-support', 'munichWorkdayJobSupport', 'MunichWorkdayJobSupportPage'],
  ['frankfurt-workday-job-support', 'frankfurtWorkdayJobSupport', 'FrankfurtWorkdayJobSupportPage'],
  ['hamburg-workday-job-support', 'hamburgWorkdayJobSupport', 'HamburgWorkdayJobSupportPage'],
  ['amsterdam-workday-job-support', 'amsterdamWorkdayJobSupport', 'AmsterdamWorkdayJobSupportPage'],
  ['rotterdam-workday-job-support', 'rotterdamWorkdayJobSupport', 'RotterdamWorkdayJobSupportPage'],
  ['paris-workday-job-support', 'parisWorkdayJobSupport', 'ParisWorkdayJobSupportPage'],
  ['lyon-workday-job-support', 'lyonWorkdayJobSupport', 'LyonWorkdayJobSupportPage'],
  ['stockholm-workday-job-support', 'stockholmWorkdayJobSupport', 'StockholmWorkdayJobSupportPage'],
  ['zurich-workday-job-support', 'zurichWorkdayJobSupport', 'ZurichWorkdayJobSupportPage'],
  ['geneva-workday-job-support', 'genevaWorkdayJobSupport', 'GenevaWorkdayJobSupportPage'],
  // ── Phase 8: Australia & New Zealand city pages ─────────────────────────────
  ['sydney-workday-job-support', 'sydneyWorkdayJobSupport', 'SydneyWorkdayJobSupportPage'],
  ['melbourne-workday-job-support', 'melbourneWorkdayJobSupport', 'MelbourneWorkdayJobSupportPage'],
  ['brisbane-workday-job-support', 'brisbaneWorkdayJobSupport', 'BrisbaneWorkdayJobSupportPage'],
  ['perth-workday-job-support', 'perthWorkdayJobSupport', 'PerthWorkdayJobSupportPage'],
  ['auckland-workday-job-support', 'aucklandWorkdayJobSupport', 'AucklandWorkdayJobSupportPage'],
  ['wellington-workday-job-support', 'wellingtonWorkdayJobSupport', 'WellingtonWorkdayJobSupportPage'],
  // ── Phase 9: Singapore & Gulf city pages ────────────────────────────────────
  ['singapore-workday-job-support', 'singaporeWorkdayJobSupport', 'SingaporeWorkdayJobSupportPage'],
  ['dubai-workday-job-support', 'dubaiWorkdayJobSupport', 'DubaiWorkdayJobSupportPage'],
  ['abu-dhabi-workday-job-support', 'abuDhabiWorkdayJobSupport', 'AbuDhabiWorkdayJobSupportPage'],
  ['riyadh-workday-job-support', 'riyadhWorkdayJobSupport', 'RiyadhWorkdayJobSupportPage'],
  ['jeddah-workday-job-support', 'jeddahWorkdayJobSupport', 'JeddahWorkdayJobSupportPage'],
  // ── Phase 10: Module & role pages ───────────────────────────────────────────
  ['workday-business-analyst-job-support', 'workdayBusinessAnalystJobSupport', 'WorkdayBusinessAnalystJobSupportPage'],
  ['workday-functional-consultant-job-support', 'workdayFunctionalConsultantJobSupport', 'WorkdayFunctionalConsultantJobSupportPage'],
  ['workday-technical-consultant-job-support', 'workdayTechnicalConsultantJobSupport', 'WorkdayTechnicalConsultantJobSupportPage'],
  ['workday-integration-consultant-job-support', 'workdayIntegrationConsultantJobSupport', 'WorkdayIntegrationConsultantJobSupportPage'],
  ['workday-hcm-consultant-job-support', 'workdayHcmConsultantJobSupport', 'WorkdayHcmConsultantJobSupportPage'],
  ['workday-financials-consultant-job-support', 'workdayFinancialsConsultantJobSupport', 'WorkdayFinancialsConsultantJobSupportPage'],
  ['workday-payroll-consultant-job-support', 'workdayPayrollConsultantJobSupport', 'WorkdayPayrollConsultantJobSupportPage'],
  ['workday-security-consultant-job-support', 'workdaySecurityConsultantJobSupport', 'WorkdaySecurityConsultantJobSupportPage'],
  ['workday-reporting-consultant-job-support', 'workdayReportingConsultantJobSupport', 'WorkdayReportingConsultantJobSupportPage'],
  ['workday-implementation-support', 'workdayImplementationSupport', 'WorkdayImplementationSupportPage'],
  ['workday-production-support', 'workdayProductionSupport', 'WorkdayProductionSupportPage'],
  ['workday-tenant-configuration-support', 'workdayTenantConfigurationSupport', 'WorkdayTenantConfigurationSupportPage'],
  ['workday-eib-integration-job-support', 'workdayEibIntegrationJobSupport', 'WorkdayEibIntegrationJobSupportPage'],
  ['workday-studio-integration-job-support', 'workdayStudioIntegrationJobSupport', 'WorkdayStudioIntegrationJobSupportPage'],
  ['workday-core-connectors-job-support', 'workdayCoreConnectorsJobSupport', 'WorkdayCoreConnectorsJobSupportPage'],
  ['workday-peci-integration-job-support', 'workdayPeciIntegrationJobSupport', 'WorkdayPeciIntegrationJobSupportPage'],
  ['workday-birt-reporting-job-support', 'workdayBirtReportingJobSupport', 'WorkdayBirtReportingJobSupportPage'],
  ['workday-advanced-reporting-job-support', 'workdayAdvancedReportingJobSupport', 'WorkdayAdvancedReportingJobSupportPage'],
  ['workday-calculated-fields-job-support', 'workdayCalculatedFieldsJobSupport', 'WorkdayCalculatedFieldsJobSupportPage'],
  ['workday-business-process-configuration-support', 'workdayBusinessProcessConfigurationSupport', 'WorkdayBusinessProcessConfigurationSupportPage'],
  ['workday-data-conversion-migration-support', 'workdayDataConversionMigrationSupport', 'WorkdayDataConversionMigrationSupportPage'],
  ['workday-testing-uat-support', 'workdayTestingUatSupport', 'WorkdayTestingUatSupportPage'],
  ['workday-go-live-hypercare-support', 'workdayGoLiveHypercareSupport', 'WorkdayGoLiveHypercareSupportPage'],
  ['workday-client-call-standup-support', 'workdayClientCallStandupSupport', 'WorkdayClientCallStandupSupportPage'],
  ['workday-project-onboarding-support', 'workdayProjectOnboardingSupport', 'WorkdayProjectOnboardingSupportPage'],
  // ── Phase 11: Interview-focused technical pages ─────────────────────────────
  ['workday-hcm-interview-support', 'workdayHcmInterviewSupport', 'WorkdayHcmInterviewSupportPage'],
  ['workday-integration-interview-support', 'workdayIntegrationInterviewSupport', 'WorkdayIntegrationInterviewSupportPage'],
  ['workday-financials-interview-support', 'workdayFinancialsInterviewSupport', 'WorkdayFinancialsInterviewSupportPage'],
  ['workday-payroll-interview-support', 'workdayPayrollInterviewSupport', 'WorkdayPayrollInterviewSupportPage'],
  ['workday-security-interview-support', 'workdaySecurityInterviewSupport', 'WorkdaySecurityInterviewSupportPage'],
  ['workday-reporting-interview-support', 'workdayReportingInterviewSupport', 'WorkdayReportingInterviewSupportPage'],
  ['workday-business-analyst-interview-support', 'workdayBusinessAnalystInterviewSupport', 'WorkdayBusinessAnalystInterviewSupportPage'],
  ['workday-functional-consultant-interview-support', 'workdayFunctionalConsultantInterviewSupport', 'WorkdayFunctionalConsultantInterviewSupportPage'],
  ['workday-technical-consultant-interview-support', 'workdayTechnicalConsultantInterviewSupport', 'WorkdayTechnicalConsultantInterviewSupportPage'],
  ['workday-final-round-interview-support', 'workdayFinalRoundInterviewSupport', 'WorkdayFinalRoundInterviewSupportPage'],
  ['workday-live-technical-interview-support', 'workdayLiveTechnicalInterviewSupport', 'WorkdayLiveTechnicalInterviewSupportPage'],
  ['workday-client-round-interview-support', 'workdayClientRoundInterviewSupport', 'WorkdayClientRoundInterviewSupportPage'],
];

function pageSource(exportName, componentName) {
  return `import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { ${exportName} } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(${exportName});

export default function ${componentName}() {
  return <LandingPageTemplate config={${exportName}} />;
}
`;
}

let created = 0;
let skipped = 0;
for (const [slug, exportName, componentName] of PAGES) {
  const dir = path.join(APP, slug);
  const file = path.join(dir, 'page.tsx');
  if (fs.existsSync(file)) {
    skipped++;
    continue;
  }
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, pageSource(exportName, componentName), 'utf8');
  created++;
  console.log(`created app/${slug}/page.tsx`);
}
console.log(`\nDone. ${created} created, ${skipped} skipped (already existed).`);
