import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Info,
  Link as LinkIcon,
  Plus,
  Trash2,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Image,
  Code,
  Quote,
  Table,
  CheckCircle,
  Eye,
  Settings
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { ROUTES } from '../../config/routes';
import AdminShell from '../../components/layouts/AdminShell';

export default function SupportKbArticle({ activeTab = 'Support Center' }) {
  const { navigate } = useApp();
  const [title, setTitle] = useState('Configuring SLA Escalation Rules');
  const [category, setCategory] = useState('Product Documentation');
  const [visibility, setVisibility] = useState('Public');
  const [body, setBody] = useState(
    `Leverage the power of the Indigo Support Command Center to streamline your customer interactions. In this guide, we will walk through the configuration of automated escalation rules.

Core Principles
Documentation should be precise, clear, and actionable. Use headers to break up complex technical concepts and utilize tables for parameter definitions.`
  );
  
  // SEO Settings
  const [metaTitle, setMetaTitle] = useState('Custom SEO Title');
  const [metaDesc, setMetaDesc] = useState('Brief summary for search results...');
  
  // Tags
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState(['Product', 'Guide']);
  
  // Related articles links
  const [relatedArticles, setRelatedArticles] = useState([
    { id: 1, name: 'Setting up Escalation Workflows', type: 'Technical Documentation' },
    { id: 2, name: 'Understanding User Permissions', type: 'Security' }
  ]);

  // Word count & Read time calculator
  const [wordCount, setWordCount] = useState(0);
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    const words = body.trim().split(/\s+/).filter(w => w.length > 0).length;
    setWordCount(words);
    setReadTime(Math.ceil(words / 150)); // ~150 words per minute
  }, [body]);

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (idxToRemove) => {
    setTags(tags.filter((_, idx) => idx !== idxToRemove));
  };

  const handleAddRelated = () => {
    const name = prompt('Enter related article title:');
    if (!name) return;
    setRelatedArticles([...relatedArticles, {
      id: Date.now(),
      name,
      type: 'General Documentation'
    }]);
  };

  const handleRemoveRelated = (idToRemove) => {
    setRelatedArticles(relatedArticles.filter(art => art.id !== idToRemove));
  };

  const handleSave = (publishState) => {
    alert(`Article ${publishState ? 'published' : 'saved as draft'} successfully.`);
    navigate(ROUTES.supportKb);
  };

  return (
    <AdminShell
      activeTab={activeTab}
      brandText="HOZIFY"
      brandSubText="Enterprise Admin"
      headerTitle="KB Editor"
      searchPlaceholder="Search Knowledge Base..."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px 0', position: 'relative' }}>
        
        {/* Article Edit Header (Back row + Publish/Save) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid var(--line)', paddingBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => navigate(ROUTES.supportKb)}
              style={{
                height: '34px',
                width: '34px',
                borderRadius: '6px',
                border: '1px solid var(--line)',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--muted)'
              }}
              type="button"
              title="Back to KB List"
            >
              <ArrowLeft size={16} />
            </button>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ fontSize: '18px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                  {title || 'Untitled Article'}
                </h1>
                <span style={{ fontSize: '9.5px', fontWeight: '900', background: 'rgba(70, 56, 175, 0.08)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '4px' }}>
                  DRAFT
                </span>
              </div>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>
                Create or edit customer-facing documentation and help desk resources
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => handleSave(false)}
              style={{
                height: '36px',
                padding: '0 16px',
                borderRadius: '6px',
                border: '1px solid var(--line)',
                background: '#fff',
                color: 'var(--text)',
                fontSize: '13px',
                fontWeight: '750',
                cursor: 'pointer'
              }}
              type="button"
            >
              Save Draft
            </button>

            <button
              onClick={() => handleSave(true)}
              style={{
                height: '36px',
                padding: '0 16px',
                borderRadius: '6px',
                border: 'none',
                background: 'var(--primary)',
                color: '#fff',
                fontSize: '13px',
                fontWeight: '750',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(37, 16, 143, 0.1)'
              }}
              type="button"
            >
              Publish
            </button>
          </div>
        </div>

        {/* Content Layout Editor columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '2fr 1fr', gap: '24px', alignItems: 'stretch' }}>
          
          {/* Left Column Editor details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Title & Metadata Settings */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              
              {/* Article Title */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '11.5px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Article Title</span>
                <input
                  type="text"
                  placeholder="Enter descriptive article title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ width: '100%', border: '1px solid var(--line)', padding: '10px 12px', borderRadius: '6px', fontSize: '15px', fontWeight: '750', color: 'var(--text)', outline: 'none' }}
                />
              </div>

              {/* Category & Visibility */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '16px' }}>
                
                {/* Category Dropdown */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Category</span>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ border: '1px solid var(--line)', padding: '10px 12px', borderRadius: '6px', background: '#fff', outline: 'none', fontSize: '13px', color: 'var(--text)', fontWeight: '600' }}
                  >
                    <option value="Product Documentation">Product Documentation</option>
                    <option value="Troubleshooting Guides">Troubleshooting Guides</option>
                    <option value="Security & Compliance">Security & Compliance</option>
                    <option value="API Integration">API Integration</option>
                  </select>
                </div>

                {/* Visibility scope */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--muted)', textTransform: 'uppercase' }}>Visibility</span>
                  
                  <div style={{ display: 'flex', gap: '16px', height: '38px', alignItems: 'center' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '750', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="visibility"
                        value="Public"
                        checked={visibility === 'Public'}
                        onChange={() => setVisibility('Public')}
                        style={{ accentColor: 'var(--primary)' }}
                      />
                      <span>Public</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '750', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="visibility"
                        value="Internal"
                        checked={visibility === 'Internal'}
                        onChange={() => setVisibility('Internal')}
                        style={{ accentColor: 'var(--primary)' }}
                      />
                      <span>Internal</span>
                    </label>
                  </div>
                </div>

              </div>

            </div>

            {/* Rich Editor Box */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              
              <div style={{ border: '1px solid var(--line)', borderRadius: '8px', overflow: 'hidden' }}>
                
                {/* Editor formatting toolbar */}
                <div style={{ display: 'flex', gap: '12px', background: 'var(--soft)', borderBottom: '1px solid var(--line)', padding: '10px 14px', flexWrap: 'wrap' }}>
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Bold">
                    <Bold size={15} />
                  </button>
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Italic">
                    <Italic size={15} />
                  </button>
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Underline">
                    <Underline size={15} />
                  </button>
                  <span style={{ borderLeft: '1px solid var(--line)', margin: '0 4px' }} />
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Bulleted List">
                    <List size={15} />
                  </button>
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Numbered List">
                    <ListOrdered size={15} />
                  </button>
                  <span style={{ borderLeft: '1px solid var(--line)', margin: '0 4px' }} />
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Link">
                    <LinkIcon size={14} />
                  </button>
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Image">
                    <Image size={15} />
                  </button>
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Code Block">
                    <Code size={15} />
                  </button>
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Quote">
                    <Quote size={15} />
                  </button>
                  <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }} title="Table">
                    <Table size={15} />
                  </button>
                </div>

                <textarea
                  placeholder="Start typing your knowledge base article here..."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={14}
                  style={{ width: '100%', border: 'none', outline: 'none', padding: '16px', fontSize: '13.5px', color: 'var(--text)', resize: 'vertical', lineHeight: '1.6' }}
                />
              </div>

            </div>

          </div>

          {/* Right Column Settings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* SEO Settings panel */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <h3 style={{ fontSize: '14.5px', fontWeight: '850', color: 'var(--text)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Settings size={15} style={{ color: 'var(--primary)' }} />
                SEO Settings
              </h3>

              {/* Meta Title */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '11.5px', fontWeight: '800', color: 'var(--muted)' }}>Meta Title</span>
                <input
                  type="text"
                  placeholder="Defaults to article title..."
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  style={{ width: '100%', border: '1px solid var(--line)', padding: '8px 10px', borderRadius: '6px', fontSize: '12.5px', color: 'var(--text)', outline: 'none' }}
                />
              </div>

              {/* Meta Description */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '11.5px', fontWeight: '800', color: 'var(--muted)' }}>Meta Description</span>
                <textarea
                  placeholder="Brief summary for search results..."
                  value={metaDesc}
                  onChange={(e) => setMetaDesc(e.target.value)}
                  rows={3}
                  style={{ width: '100%', border: '1px solid var(--line)', padding: '8px 10px', borderRadius: '6px', fontSize: '12.5px', color: 'var(--text)', outline: 'none', resize: 'vertical' }}
                />
              </div>

            </div>

            {/* Tags Setup */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <h3 style={{ fontSize: '14.5px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                Tags
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* List tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: 'var(--soft)',
                        color: 'var(--primary)',
                        fontSize: '11.5px',
                        fontWeight: '800',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        border: '1px solid var(--lavender)'
                      }}
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(idx)}
                        style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--primary)', padding: 0 }}
                      >
                        x
                      </button>
                    </span>
                  ))}
                </div>

                <input
                  placeholder="Add tag + Enter"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleAddTag}
                  style={{ width: '100%', border: '1px solid var(--line)', padding: '8px 10px', borderRadius: '6px', fontSize: '13px', outline: 'none' }}
                />
              </div>
            </div>

            {/* Related Articles links */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '14.5px', fontWeight: '850', color: 'var(--text)', margin: 0 }}>
                  Related Articles
                </h3>
                <button
                  type="button"
                  onClick={handleAddRelated}
                  style={{ border: 'none', background: 'transparent', color: 'var(--primary)', fontSize: '12px', fontWeight: '800', cursor: 'pointer' }}
                >
                  + Add
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {relatedArticles.map((art) => (
                  <div
                    key={art.id}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '6px',
                      border: '1px solid var(--line)',
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '12.5px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                      <LinkIcon size={14} style={{ color: 'var(--muted)', flexShrink: 0 }} />
                      <div style={{ overflow: 'hidden' }}>
                        <span style={{ display: 'block', fontWeight: '700', color: 'var(--text)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} title={art.name}>
                          {art.name}
                        </span>
                        <span style={{ fontSize: '10.5px', color: 'var(--muted)' }}>
                          {art.type}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveRelated(art.id)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#dc2626', padding: 0 }}
                      aria-label="Remove link"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Article Metadata statistics */}
            <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--primary)', color: '#fff' }}>
              <h3 style={{ fontSize: '14.5px', fontWeight: '850', color: '#fff', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Article Metadata
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                  <span style={{ opacity: 0.8 }}>Last Edited</span>
                  <strong>Today, 10:45 AM</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                  <span style={{ opacity: 0.8 }}>Read Time</span>
                  <strong>~{readTime} mins</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ opacity: 0.8 }}>Word Count</span>
                  <strong>{wordCount} words</strong>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}
