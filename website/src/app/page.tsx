import ProgressBar from '@/components/ProgressBar'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import SummarySection from '@/components/SummarySection'
import DimensionsSection from '@/components/DimensionsSection'
import GovernanceSection from '@/components/GovernanceSection'
import TechnicalSection from '@/components/TechnicalSection'
import ToolsSection from '@/components/ToolsSection'
import QuestionsSection from '@/components/QuestionsSection'
import SourcesSection from '@/components/SourcesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Nav />
      <main>
        <Hero />
        <SummarySection />
        <DimensionsSection />
        <GovernanceSection />
        <TechnicalSection />
        <ToolsSection />
        <QuestionsSection />
        <SourcesSection />
      </main>
      <Footer />
    </>
  )
}
