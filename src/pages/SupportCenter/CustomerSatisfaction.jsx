import React, { useState } from 'react';
import {
  Star,
  TrendingUp,
  Smile,
  Meh,
  Frown,
  ChevronRight,
  Sparkles,
  ArrowRight,
  TrendingDown,
  MessageSquare,
  Volume2,
  Check
} from 'lucide-react';
import AdminShell from '../../components/layouts/AdminShell';

export default function CustomerSatisfaction({ activeTab = 'Support Center' }) {
  const [recommendationApplied, setRecommendationApplied] = useState(false);
  const [activeReviewFilter, setActiveReviewFilter] = useState('All');
  
  const reviews = [
    {
      id: 1,
      author: 'Sarah Jenkins',
      company: 'Apex Logistics',
      rating: 5,
      text: 'The support team resolved our database connection pool leak in under 15 minutes. Exceptional communication throughout the incident.',
      tag: 'Critical Incident Support',
      priority: 'Standard',
      time: '1 hour ago'
    },
    {
      id: 2,
      author: 'Markus Weber',
      company: 'FinTech Solutions',
      rating: 2,
      text: 'Invoice PDFs still show overlapping layout logos when generated. It makes us look unprofessional. Billing support needs to fix the template.',
      tag: 'Billing Template Issue',
      priority: 'High Priority Response',
      time: '3 hours ago'
    },
    {
      id: 3,
      author: 'Lila Thorne',
      company: 'E-com Fast',
      rating: 5,
      text: 'Super easy transition during our bulk onboarding process. The specialist custom-scaled our image uploads instantly. Cheers!',
      tag: 'Onboarding Help',
      priority: 'Standard',
      time: 'Yesterday'
    }
  ];

  const handleApplyRecommendation = () => {
    setRecommendationApplied(true);
    alert('Recommendation applied: Automated billing flow override rules have been deployed to production.');
  };

  const filteredReviews = reviews.filter(rev => {
    if (activeReviewFilter === 'Critical') return rev.rating <= 3;
    return true;
  });

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise Admin"
      headerTitle="CSAT Analytics"
      searchPlaceholder="Search customer feedback, review text..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0', position: 'relative' }}>
        
        {/* Breadcrumb Row */}
        <div style={{ fontSize: '12px', fontWeight: '750', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>Support Center</span>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--primary)' }}>Customer Satisfaction & Analytics</span>
        </div>

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Customer Satisfaction & Support Analytics
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>
              Sentiment analysis, agent feedback scores, load heatmaps, and automated recommendation engines
            </p>
          </div>
        </div>

        {/* KPI Metrics Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {/* CSAT Score */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10.5px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                CSAT Score
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#eab308' }}>
                <Star size={14} fill="#eab308" />
                <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text)' }}>4.8 / 5.0</span>
              </div>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', fontWeight: '850' }}>
                96.4%
              </strong>
              <span style={{ fontSize: '12px', fontWeight: '750', color: '#07956f', display: 'inline-flex', alignItems: 'center', gap: '3px', marginTop: '4px' }}>
                <TrendingUp size={12} />
                +0.8% vs last week
              </span>
            </div>
          </div>

          {/* NPS */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10.5px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Net Promoter Score (NPS)
              </span>
              <span style={{ fontSize: '10px', fontWeight: '850', color: 'var(--primary)', background: 'var(--soft)', padding: '2px 6px', borderRadius: '4px' }}>
                EXCELLENT
              </span>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', fontWeight: '850' }}>
                72
              </strong>
              <span style={{ fontSize: '12px', fontWeight: '750', color: '#07956f', display: 'inline-flex', alignItems: 'center', gap: '3px', marginTop: '4px' }}>
                <TrendingUp size={12} />
                +4 points this month
              </span>
            </div>
          </div>

          {/* Response Rate */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10.5px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Survey Response Rate
              </span>
              <span style={{ fontSize: '10px', fontWeight: '850', color: 'var(--muted)', border: '1px solid var(--line)', padding: '2px 6px', borderRadius: '4px' }}>
                Benchmark 30%
              </span>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', fontWeight: '850' }}>
                34.2%
              </strong>
              <span style={{ fontSize: '12px', fontWeight: '750', color: '#d32929', display: 'inline-flex', alignItems: 'center', gap: '3px', marginTop: '4px' }}>
                <TrendingDown size={12} />
                -1.4% vs benchmark
              </span>
            </div>
          </div>

          {/* Feedback Volume */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10.5px', fontWeight: '800', color: 'var(--muted)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Feedback Volume
              </span>
              <MessageSquare size={16} style={{ color: 'var(--muted)' }} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '28px', color: 'var(--text)', fontWeight: '850' }}>
                1,284
              </strong>
              <span style={{ fontSize: '12px', fontWeight: '750', color: 'var(--muted)', display: 'inline-flex', marginTop: '4px' }}>
                Total reviews collected
              </span>
            </div>
          </div>
        </div>

        {/* Sentiment Row: Trends & Analysis */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '1.8fr 1.2fr', gap: '24px', alignItems: 'stretch' }}>
          
          {/* Satisfaction Trend Line Chart */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '15.5px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                  Satisfaction Score Trends (CSAT)
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>
                  Daily average ratings plotted over the last 30 days
                </span>
              </div>
              <span style={{ fontSize: '11px', fontWeight: '850', color: '#07956f', background: '#ecfdf5', padding: '3px 8px', borderRadius: '12px' }}>
                Avg: 4.82/5
              </span>
            </div>

            {/* Inline Premium SVG Gradient Chart */}
            <div style={{ flex: 1, minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '16px' }}>
              <div style={{ position: 'relative', width: '100%', height: '160px' }}>
                <svg viewBox="0 0 500 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(37, 16, 143, 0.2)" />
                      <stop offset="100%" stopColor="rgba(37, 16, 143, 0.0)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(37, 16, 143, 0.05)" strokeWidth="1" strokeDasharray="4" />
                  <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(37, 16, 143, 0.05)" strokeWidth="1" strokeDasharray="4" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(37, 16, 143, 0.05)" strokeWidth="1" strokeDasharray="4" />

                  {/* Gradient Area under line */}
                  <path
                    d="M0 100 Q 50 40, 100 50 T 200 30 T 300 20 T 400 35 T 500 10 L 500 100 Z"
                    fill="url(#chartGradient)"
                  />
                  
                  {/* Continuous Stroke Line */}
                  <path
                    d="M0 100 Q 50 40, 100 50 T 200 30 T 300 20 T 400 35 T 500 10"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Highlight dots */}
                  <circle cx="200" cy="30" r="4" fill="var(--primary)" stroke="#fff" strokeWidth="2" />
                  <circle cx="300" cy="20" r="4" fill="var(--primary)" stroke="#fff" strokeWidth="2" />
                  <circle cx="500" cy="10" r="5" fill="#07956f" stroke="#fff" strokeWidth="2" />
                </svg>
              </div>

              {/* X Axis Labels */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--muted)', fontWeight: '750', borderTop: '1px solid var(--line)', paddingTop: '8px' }}>
                <span>June 1</span>
                <span>June 7</span>
                <span>June 14</span>
                <span>June 21</span>
                <span>June 28</span>
              </div>
            </div>
          </div>

          {/* Sentiment Analysis (Right Column) */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '15.5px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
              Sentiment Distribution
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Positive */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '750' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#07956f' }}>
                    <Smile size={14} />
                    Positive
                  </span>
                  <span>78%</span>
                </div>
                <div style={{ height: '6px', background: '#ecfdf5', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '78%', height: '100%', background: '#07956f' }} />
                </div>
              </div>

              {/* Neutral */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '750' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#d97706' }}>
                    <Meh size={14} />
                    Neutral
                  </span>
                  <span>15%</span>
                </div>
                <div style={{ height: '6px', background: '#fef3c7', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '15%', height: '100%', background: '#d97706' }} />
                </div>
              </div>

              {/* Negative */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '750' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#dc2626' }}>
                    <Frown size={14} />
                    Negative
                  </span>
                  <span>7%</span>
                </div>
                <div style={{ height: '6px', background: '#fee2e2', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '7%', height: '100%', background: '#dc2626' }} />
                </div>
              </div>
            </div>

            {/* Highlights TextBox */}
            <div style={{
              background: 'var(--soft)',
              border: '1px solid var(--lavender)',
              borderRadius: '8px',
              padding: '14px',
              marginTop: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: '850', color: 'var(--primary)' }}>
                <Sparkles size={14} />
                Key Sentiment Drivers
              </span>
              <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0, lineHeight: '1.4' }}>
                Customers highly praise our Tier 3 escalation resolution speed. However, logo sizing constraints in bulk invoice generation continue to cause billing ticket friction.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Feedback Highlights & Support Heatmap */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '1.8fr 1.2fr', gap: '24px', alignItems: 'stretch' }}>
          
          {/* Feedback Highlights Panel */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                  Feedback Highlights
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                  Selected recent customer feedback highlights requiring review
                </span>
              </div>

              {/* Review Filters */}
              <div style={{ display: 'flex', gap: '6px' }}>
                {['All', 'Critical'].map((flt) => (
                  <button
                    key={flt}
                    onClick={() => setActiveReviewFilter(flt)}
                    style={{
                      height: '28px',
                      padding: '0 10px',
                      borderRadius: '4px',
                      border: activeReviewFilter === flt ? '1px solid var(--primary)' : '1px solid var(--line)',
                      background: activeReviewFilter === flt ? 'var(--primary)' : '#fff',
                      color: activeReviewFilter === flt ? '#fff' : 'var(--muted)',
                      fontSize: '11px',
                      fontWeight: '800',
                      cursor: 'pointer'
                    }}
                    type="button"
                  >
                    {flt} Feedback
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px' }}>
              {filteredReviews.map((rev) => (
                <div
                  key={rev.id}
                  style={{
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid var(--lavender)',
                    background: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <strong style={{ fontSize: '13.5px', color: 'var(--text)', display: 'block' }}>
                        {rev.author}
                      </strong>
                      <span style={{ fontSize: '11.5px', color: 'var(--muted)' }}>
                        {rev.company}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {/* Render Stars */}
                      <div style={{ display: 'flex', gap: '1px' }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={12}
                            fill={star <= rev.rating ? '#eab308' : 'transparent'}
                            stroke="#eab308"
                          />
                        ))}
                      </div>
                      <span style={{
                        fontSize: '9.5px',
                        fontWeight: '900',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: rev.priority.includes('High') ? '#fee2e2' : 'var(--soft)',
                        color: rev.priority.includes('High') ? '#dc2626' : 'var(--primary)'
                      }}>
                        {rev.priority}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '12.5px', color: 'var(--text)', margin: 0, lineHeight: '1.4' }}>
                    "{rev.text}"
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px dashed var(--lavender)',
                    paddingTop: '10px',
                    fontSize: '11px',
                    color: 'var(--muted)'
                  }}>
                    <span>Topic: <strong>{rev.tag}</strong></span>
                    <span>{rev.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Load Heatmap (Right Column) */}
          <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Support Load Heatmap
              </h3>
              <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>
                Load distribution across days and time slots
              </span>
            </div>

            {/* Heatmap Grid Matrix (7x4) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, marginTop: '8px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '60px repeat(4, 1fr)', gap: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>
                <span />
                <span>Morning</span>
                <span>Mid-Day</span>
                <span>Evening</span>
                <span>Night</span>
              </div>

              {[
                { day: 'Mon', loads: [3, 7, 8, 2] },
                { day: 'Tue', loads: [4, 8, 9, 3] },
                { day: 'Wed', loads: [5, 9, 9, 4] },
                { day: 'Thu', loads: [4, 7, 8, 3] },
                { day: 'Fri', loads: [6, 9, 8, 4] },
                { day: 'Sat', loads: [2, 3, 5, 6] },
                { day: 'Sun', loads: [1, 2, 4, 5] }
              ].map((row, idx) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '60px repeat(4, 1fr)', gap: '6px', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text)' }}>
                    {row.day}
                  </span>
                  {row.loads.map((load, lIdx) => {
                    // Custom heatmap background colors based on load level (1 to 10)
                    let bg = '#eee9f6'; // low
                    let text = 'var(--text)';
                    if (load >= 8) {
                      bg = '#25108f'; // critical
                      text = '#ffffff';
                    } else if (load >= 6) {
                      bg = '#4638af'; // high
                      text = '#ffffff';
                    } else if (load >= 4) {
                      bg = '#c8c0d7'; // moderate
                      text = 'var(--text)';
                    }
                    return (
                      <div
                        key={lIdx}
                        style={{
                          height: '28px',
                          background: bg,
                          color: text,
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '850',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'help'
                        }}
                        title={`Load Level: ${load}/10`}
                      >
                        {load}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Heatmap Legend */}
            <div style={{ display: 'flex', gap: '10px', fontSize: '10.5px', color: 'var(--muted)', fontWeight: '750', justifyContent: 'flex-end', marginTop: '12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ height: '10px', width: '10px', background: '#eee9f6', borderRadius: '2px' }} />
                Low Load
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ height: '10px', width: '10px', background: '#c8c0d7', borderRadius: '2px' }} />
                Moderate
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ height: '10px', width: '10px', background: '#4638af', borderRadius: '2px' }} />
                High
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ height: '10px', width: '10px', background: '#25108f', borderRadius: '2px' }} />
                Peak
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Banner: Insights Engine */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(37, 16, 143, 0.05) 0%, rgba(70, 56, 175, 0.08) 100%)',
          border: '1px solid var(--line)',
          borderRadius: '12px',
          padding: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: '0 4px 6px -1px rgba(37, 16, 143, 0.03)'
        }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{
              background: 'var(--primary)',
              color: '#fff',
              padding: '10px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Sparkles size={20} fill="#fff" />
            </div>
            <div>
              <strong style={{ fontSize: '15px', color: 'var(--text)', display: 'block' }}>
                Smart Recommendation: Automated Billing Override Rules
              </strong>
              <p style={{ fontSize: '12.5px', color: 'var(--muted)', margin: '4px 0 0', lineHeight: '1.4', maxWidth: '650px' }}>
                Activating this insight will deploy dynamic checkout webhooks override regulations. Based on ticket patterns, this will resolve <strong>12% of billing queries</strong> automatically, boosting CSAT score to 4.88.
              </p>
            </div>
          </div>

          <button
            onClick={handleApplyRecommendation}
            disabled={recommendationApplied}
            style={{
              height: '38px',
              padding: '0 20px',
              borderRadius: '6px',
              border: 'none',
              background: recommendationApplied ? '#10b981' : 'var(--primary)',
              color: '#fff',
              fontSize: '13px',
              fontWeight: '750',
              cursor: recommendationApplied ? 'default' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 4px rgba(37, 16, 143, 0.15)',
              transition: 'all 0.15s ease'
            }}
            type="button"
          >
            {recommendationApplied ? (
              <>
                <Check size={14} />
                <span>Recommendation Applied</span>
              </>
            ) : (
              <>
                <span>Implement Recommendation</span>
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </div>

      </div>
    </AdminShell>
  );
}
