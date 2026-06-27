import re
import sys

with open('src/materio-theme.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Sidebar Background
css = re.sub(
    r'\.sidebar \{\s*width: 260px;\s*background:.*?;(.*?)transition: width 0\.3s ease;\s*\}',
    r'.sidebar {\n  width: 260px;\n  background: #F8F9FD;\n  border-right: 1px solid #E9ECF5;\n  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.02);\n  display: flex;\n  flex-direction: column;\n  z-index: 100;\n  transition: width 0.3s ease;\n}',
    css,
    flags=re.DOTALL
)

# 2. Sidebar Navigation Items
sidebar_btn_replacement = """\
.sidebar-module-btn {
  width: 100%;
  border: none;
  background: transparent;
  padding: 10px 14px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #5F6B7A;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 8px;
}

.sidebar-module-btn:hover {
  background: #F2F3FF;
}

.sidebar-module-btn.active {
  background: linear-gradient(90deg, #696CFF, #5E61F6) !important;
  color: #fff !important;
  box-shadow: 0 2px 6px 0 rgba(105, 108, 255, 0.4);
}
.sidebar-module-btn.active .sidebar-chevron {
  color: #fff;
}
.sidebar-module-btn svg {
  color: #b0b4c3;
  width: 20px;
  height: 20px;
}
.sidebar-module-btn.active svg {
  color: #fff;
}"""

css = re.sub(
    r'\.sidebar-module-btn \{.*?(?=\n\.sidebar-chevron \{)',
    sidebar_btn_replacement + "\n",
    css,
    flags=re.DOTALL
)

# 3. Sidebar Subnav Items
subnav_replacement = """\
.sidebar-subnav-btn {
  width: 100%;
  border: none;
  background: transparent;
  padding: 8px 12px;
  border-radius: 12px;
  color: #5F6B7A;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  position: relative;
  margin-bottom: 4px;
}

.sidebar-subnav-btn::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 1px solid #b0b4c3;
  transition: all 0.2s ease;
}

.sidebar-subnav-btn:hover {
  color: #5F6B7A;
  background: #F2F3FF;
}

.sidebar-subnav-btn.active-sub {
  color: var(--materio-primary);
  font-weight: 600;
  background: #F2F3FF;
}
.sidebar-subnav-btn.active-sub::before {
  background: var(--materio-primary);
  border-color: var(--materio-primary);
  box-shadow: 0 0 0 2px rgba(105,108,255,0.2);
}"""

css = re.sub(
    r'\.sidebar-subnav-btn \{.*?\}\s*(?=\n/\* Bottom Profile \*/)',
    subnav_replacement + "\n",
    css,
    flags=re.DOTALL
)

# 4. Sidebar Profile
profile_replacement = """\
.sidebar-profile {
  margin: 16px;
  padding: 12px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #E9ECF5;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: box-shadow 0.2s;
  position: relative;
}
.sidebar-profile:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
}
.sidebar-profile::after {
  content: '';
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 6px;
  height: 6px;
  border-right: 2px solid #A5AAB8;
  border-bottom: 2px solid #A5AAB8;
}
.sidebar-profile img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.sidebar-profile-info {
  flex: 1;
}
.sidebar-profile-info strong {
  display: block;
  font-size: 14px;
  color: var(--materio-text-main);
}
.sidebar-profile-info span {
  display: block;
  font-size: 12px;
  color: var(--materio-text-muted);
}"""

css = re.sub(
    r'\.sidebar-profile \{.*?\}\s*(?=\n/\* Main Content Area \*/)',
    profile_replacement + "\n",
    css,
    flags=re.DOTALL
)

# 5. Header Search & Icons
header_search_icons = """\
.dash-search {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  padding: 0 16px;
  height: 42px;
  width: 320px;
  transition: all 0.3s ease;
  color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.dash-search:focus-within {
  width: 380px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 10px rgba(105, 108, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.5);
}
.dash-search input {
  border: none;
  background: transparent;
  outline: none;
  font-size: 15px;
  color: #fff;
  width: 100%;
}
.dash-search input::placeholder {
  color: rgba(255, 255, 255, 0.75);
}

.dash-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-icon-btn {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  position: relative;
}
.header-icon-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
.header-icon-btn .badge {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  background: #FF3E1D;
  border-radius: 50%;
  border: 2px solid #fff;
}"""

css = re.sub(
    r'\.dash-search \{.*?\}\s*(?=\n\.header-avatar-wrap img \{)',
    header_search_icons + "\n",
    css,
    flags=re.DOTALL
)

with open('src/materio-theme.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("CSS updated successfully.")
