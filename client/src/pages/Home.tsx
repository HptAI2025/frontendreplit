import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Hero Section - Copy of Devin.ai */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F1419]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1419] via-[#1a2332] to-[#0F1419]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                HDT AI, the AI<br />
                <span className="text-white/90">software engineer</span>
              </h1>
              
              <Link
                href="/get-started"
                className="inline-block bg-[#4F8EF7] text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-[#3B7BF5] transition-all"
                data-testid="hero-cta-primary"
              >
                Start building
              </Link>
              
              <p className="text-lg text-white/80 mt-8 mb-8 max-w-lg">
                Crush your backlog with your personal AI engineering team.
              </p>

              {/* Workflow steps */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#4F8EF7] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <span className="text-white/90 font-medium">Ticket</span>
                  <span className="text-white/60">Integrate Slack, Linear, and Jira</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#4F8EF7] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <span className="text-white/90 font-medium">Plan</span>
                  <span className="text-white/60">Quickly review HDT AI's proposal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#4F8EF7] rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <span className="text-white/90 font-medium">Test</span>
                  <span className="text-white/60">HDT AI tests changes by itself</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#4F8EF7] rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <span className="text-white/90 font-medium">PR</span>
                  <span className="text-white/60">Review changes natively</span>
                </div>
              </div>
            </div>

            {/* Right side - Interface mockup */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-[#4F8EF7] rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <span className="text-white text-sm font-medium">Slack</span>
                    <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center ml-auto">
                      <span className="text-white text-xs font-bold">L</span>
                    </div>
                    <span className="text-white text-sm font-medium">Linear</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span className="text-white/90 text-sm">frontend</span>
                        <span className="text-white/60 text-xs">Frontend development & bug fixes</span>
                      </div>
                      <div className="text-white/80 text-sm">+ Add channels</div>
                    </div>
                    <div className="text-center">
                      <span className="text-white/60 text-sm">Today ▼</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">S</span>
                        </div>
                        <div>
                          <div className="text-white/90 text-sm">Sisa • 4:05 PM</div>
                          <div className="text-white/70 text-sm">@HDT AI can you make the knowledge fields always editable?</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#4F8EF7] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">AI</span>
                        </div>
                        <div>
                          <div className="text-white/90 text-sm">HDT AI • 4:05 PM</div>
                          <div className="text-white/70 text-sm">@Sisa of course! Creating a session and making the changes. See here.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl md:text-2xl text-gray-800 font-medium">
            HDT AI has authored millions of lines of code for top teams.
          </p>
          <Link 
            href="/customers" 
            className="inline-block mt-4 text-[#4F8EF7] hover:underline font-medium"
          >
            Don't just hear it from us.
          </Link>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Use cases</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From implementing new features to fixing thousands of lint errors, HDT AI can clear your backlog, 
              modernize your codebase, and help you build more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Code Migration + Refactors</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Language migrations</li>
                <li>• Version upgrades</li>
                <li>• Codebase restructuring</li>
              </ul>
              <div className="mt-6 bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Migration visualization</div>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Engineering + Analysis</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Data warehouse migrations</li>
                <li>• ETL development</li>
                <li>• Data cleaning and preprocessing</li>
              </ul>
              <div className="mt-6 bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Data pipeline visualization</div>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bugs + Backlog Work</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ticket resolution</li>
                <li>• CI/CD</li>
                <li>• First-draft PR creation for backlog tasks</li>
              </ul>
              <div className="mt-6 bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Bug tracking visualization</div>
              </div>
            </div>
          </div>

          {/* Additional Use Cases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Application development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Frontend bugs and edge cases</li>
                <li>• Unit and E2E testing</li>
                <li>• Building SaaS integrations</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bug & issue triage</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated on-call response</li>
                <li>• Ticket resolution</li>
                <li>• CI/CD autotriage</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">And many others</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Technical debt</li>
                <li>• Performance optimization</li>
                <li>• Scraping</li>
                <li>• New repo onboarding</li>
                <li>• Maintaining documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learn & Work Together Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Learn & work together</h2>
            <p className="text-xl text-gray-600">
              HDT AI is built for collaboration and can learn to fit into your unique workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="bg-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center">
                <div className="text-gray-500">Knowledge Learning Interface</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                HDT AI learns your codebase & picks up tribal knowledge
              </h3>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="bg-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center">
                <div className="text-gray-500">Mobile Interface</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Code on the go</h3>
              <p className="text-gray-600">
                Write code using natural language instructions with HDT AI on mobile.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="bg-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center">
                <div className="text-gray-500">Development Environment</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Use HDT AI's editor, shell and browser
              </h3>
              <p className="text-gray-600">
                Take over and run commands, edit code, or use the browser for HDT AI at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Integration Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Able to work with hundreds of tools
            </h2>
          </div>

          {/* Tool Logos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-16">
            {['Confluence', 'Airtable', 'Segment', 'Asana', 'Notion', 'Stripe', 
              'AWS', 'GitHub', 'Datadog', 'Linear', 'Databricks', 'Slack',
              'Google Drive', 'Sentry', 'PostgreSQL', 'Azure', 'Snowflake', 'MongoDB'].map((tool) => (
              <div key={tool} className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-gray-600 font-medium text-sm">{tool}</span>
              </div>
            ))}
          </div>

          {/* Featured Integrations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">GitHub</h3>
              <p className="text-gray-600 mb-4">
                HDT AI can independently create PRs, respond to PR comments, review PRs, etc.
              </p>
              <div className="bg-gray-100 rounded-lg h-32"></div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Linear</h3>
              <p className="text-gray-600 mb-4">
                Tag @HDT AI directly in Linear tickets or add the HDT AI tag to delegate tasks.
              </p>
              <div className="bg-gray-100 rounded-lg h-32"></div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Slack</h3>
              <p className="text-gray-600 mb-4">
                Assign HDT AI tasks by tagging @HDT AI in Slack. HDT AI keeps you updated on progress.
              </p>
              <div className="bg-gray-100 rounded-lg h-32"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry leaders choose to</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-8">Build with HDT AI</h3>
          <Link 
            href="/customers"
            className="inline-block text-[#4F8EF7] hover:underline font-medium text-lg"
          >
            Hear from our customers
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0F1419] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Build more with HDT AI</h2>
          <Link
            href="/get-started"
            className="inline-block bg-[#4F8EF7] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#3B7BF5] transition-all"
          >
            Get started
          </Link>

          <div className="mt-16 pt-16 border-t border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Need HDT AI for your enterprise?</h3>
            <h4 className="text-xl font-semibold mb-4">Get started with HDT AI Enterprise</h4>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              HDT AI Enterprise provides additional capabilities, security and control for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/enterprise"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all"
              >
                Learn about HDT AI Enterprise
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}