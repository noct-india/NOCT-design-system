export default {
  title: "Foundation/Typography",
  tags: ["autodocs"],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const sectionStyle = {
  marginBottom: "48px",
};

const headingStyle = {
  fontFamily: "var(--font-family-sans)",
  fontSize: "11px",
  fontWeight: "var(--font-weight-semibold)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-text-tertiary)",
  marginBottom: "16px",
  paddingBottom: "8px",
  borderBottom: "1px solid var(--color-border-secondary)",
};

const rowStyle = {
  display: "flex",
  alignItems: "baseline",
  gap: "24px",
  padding: "12px 0",
  borderBottom: "1px solid var(--color-border-secondary)",
};

const metaStyle = {
  fontFamily: "var(--font-family-mono)",
  fontSize: "12px",
  color: "var(--color-text-tertiary)",
  minWidth: "200px",
  flexShrink: 0,
};

// ── Type Scale ────────────────────────────────────────────────────────────────

const typeScale = [
  { token: "--font-size-10", value: "72px",  label: "Display / Hero" },
  { token: "--font-size-09", value: "64px",  label: "" },
  { token: "--font-size-08", value: "48px",  label: "Hero" },
  { token: "--font-size-07", value: "40px",  label: "" },
  { token: "--font-size-06", value: "32px",  label: "Title" },
  { token: "--font-size-05", value: "24px",  label: "" },
  { token: "--font-size-04", value: "20px",  label: "Subtitle" },
  { token: "--font-size-03", value: "16px",  label: "Heading" },
  { token: "--font-size-02", value: "14px",  label: "Body / Code" },
  { token: "--font-size-01", value: "12px",  label: "Caption" },
];

export const TypeScale = {
  render: () => (
    <div style={sectionStyle}>
      <p style={headingStyle}>Type Scale</p>
      {typeScale.map(({ token, value, label }) => (
        <div key={token} style={rowStyle}>
          <div style={metaStyle}>
            <div>{token}</div>
            <div style={{ color: "var(--color-text-secondary)", marginTop: "2px" }}>{value}{label ? ` — ${label}` : ""}</div>
          </div>
          <span
            style={{
              fontFamily: "var(--font-family-sans)",
              fontSize: `var(${token})`,
              fontWeight: "var(--font-weight-regular)",
              lineHeight: 1.2,
              color: "var(--color-text-default)",
            }}
          >
            The quick brown fox
          </span>
        </div>
      ))}
    </div>
  ),
};

// ── Font Families ─────────────────────────────────────────────────────────────

const families = [
  { token: "--font-family-sans",  value: "Inter",       label: "Sans — UI default" },
  { token: "--font-family-serif", value: "Noto Serif",  label: "Serif — editorial" },
  { token: "--font-family-mono",  value: "Roboto Mono", label: "Mono — code" },
];

export const FontFamilies = {
  render: () => (
    <div style={sectionStyle}>
      <p style={headingStyle}>Font Families</p>
      {families.map(({ token, value, label }) => (
        <div key={token} style={rowStyle}>
          <div style={metaStyle}>
            <div>{token}</div>
            <div style={{ color: "var(--color-text-secondary)", marginTop: "2px" }}>{value} — {label}</div>
          </div>
          <span
            style={{
              fontFamily: `var(${token})`,
              fontSize: "var(--font-size-05)",
              fontWeight: "var(--font-weight-regular)",
              color: "var(--color-text-default)",
            }}
          >
            The quick brown fox jumps over the lazy dog
          </span>
        </div>
      ))}
    </div>
  ),
};

// ── Font Weights ──────────────────────────────────────────────────────────────

const weights = [
  { token: "--font-weight-thin",       value: 100, label: "Thin" },
  { token: "--font-weight-extralight", value: 200, label: "Extra Light" },
  { token: "--font-weight-light",      value: 300, label: "Light" },
  { token: "--font-weight-regular",    value: 400, label: "Regular" },
  { token: "--font-weight-medium",     value: 500, label: "Medium" },
  { token: "--font-weight-semibold",   value: 600, label: "Semibold" },
  { token: "--font-weight-bold",       value: 700, label: "Bold" },
  { token: "--font-weight-extrabold",  value: 800, label: "Extra Bold" },
  { token: "--font-weight-black",      value: 900, label: "Black" },
];

export const FontWeights = {
  render: () => (
    <div style={sectionStyle}>
      <p style={headingStyle}>Font Weights</p>
      {weights.map(({ token, value, label }) => (
        <div key={token} style={rowStyle}>
          <div style={metaStyle}>
            <div>{token}</div>
            <div style={{ color: "var(--color-text-secondary)", marginTop: "2px" }}>{value} — {label}</div>
          </div>
          <span
            style={{
              fontFamily: "var(--font-family-sans)",
              fontSize: "var(--font-size-04)",
              fontWeight: `var(${token})`,
              color: "var(--color-text-default)",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  ),
};

// ── Semantic / Role Styles ────────────────────────────────────────────────────

const roleStyles = [
  {
    name: "Hero",
    tag: "h1",
    style: {
      fontFamily: "var(--font-family-sans)",
      fontSize: "var(--font-size-hero)",
      fontWeight: "var(--font-weight-bold)",
      lineHeight: "var(--line-height-tight)",
      color: "var(--color-text-default)",
    },
    meta: "font-size-hero · bold · tight",
  },
  {
    name: "Title",
    tag: "h2",
    style: {
      fontFamily: "var(--font-family-sans)",
      fontSize: "var(--font-size-title)",
      fontWeight: "var(--font-weight-semibold)",
      lineHeight: "var(--line-height-tight)",
      color: "var(--color-text-default)",
    },
    meta: "font-size-title · semibold · tight",
  },
  {
    name: "Subtitle",
    tag: "h3",
    style: {
      fontFamily: "var(--font-family-sans)",
      fontSize: "var(--font-size-subtitle)",
      fontWeight: "var(--font-weight-medium)",
      lineHeight: "var(--line-height-base)",
      color: "var(--color-text-default)",
    },
    meta: "font-size-subtitle · medium · base",
  },
  {
    name: "Heading",
    tag: "h4",
    style: {
      fontFamily: "var(--font-family-sans)",
      fontSize: "var(--font-size-heading)",
      fontWeight: "var(--font-weight-semibold)",
      lineHeight: "var(--line-height-base)",
      color: "var(--color-text-default)",
    },
    meta: "font-size-heading · semibold · base",
  },
  {
    name: "Body",
    tag: "p",
    style: {
      fontFamily: "var(--font-family-sans)",
      fontSize: "var(--font-size-body)",
      fontWeight: "var(--font-weight-regular)",
      lineHeight: "var(--line-height-base)",
      color: "var(--color-text-default)",
    },
    meta: "font-size-body · regular · base",
  },
  {
    name: "Caption",
    tag: "span",
    style: {
      fontFamily: "var(--font-family-sans)",
      fontSize: "var(--font-size-01)",
      fontWeight: "var(--font-weight-regular)",
      lineHeight: "var(--line-height-base)",
      color: "var(--color-text-secondary)",
    },
    meta: "font-size-01 · regular · base",
  },
  {
    name: "Code",
    tag: "code",
    style: {
      fontFamily: "var(--font-family-mono)",
      fontSize: "var(--font-size-code)",
      fontWeight: "var(--font-weight-regular)",
      lineHeight: "var(--line-height-base)",
      color: "var(--color-text-default)",
    },
    meta: "font-family-mono · font-size-code · regular · base",
  },
];

export const RoleStyles = {
  name: "Role Styles",
  render: () => (
    <div style={sectionStyle}>
      <p style={headingStyle}>Role Styles</p>
      {roleStyles.map(({ name, tag: Tag, style, meta }) => (
        <div key={name} style={{ ...rowStyle, alignItems: "center" }}>
          <div style={metaStyle}>
            <div>{name}</div>
            <div style={{ color: "var(--color-text-secondary)", marginTop: "2px" }}>{meta}</div>
          </div>
          <Tag style={{ margin: 0, ...style }}>
            {name === "Code" ? "console.log('hello world')" : `${name} — The quick brown fox`}
          </Tag>
        </div>
      ))}
    </div>
  ),
};

// ── Line Heights ──────────────────────────────────────────────────────────────

const lineHeights = [
  { token: "--line-height-tight", value: "1.2", label: "Tight — headings" },
  { token: "--line-height-base",  value: "1.5", label: "Base — body text" },
  { token: "--line-height-loose", value: "1.8", label: "Loose — long-form" },
];

const paragraph =
  "Design systems help teams build products with consistency and speed. Good typography creates hierarchy and guides the reader.";

export const LineHeights = {
  render: () => (
    <div style={sectionStyle}>
      <p style={headingStyle}>Line Heights</p>
      <div style={{ display: "flex", gap: "32px" }}>
        {lineHeights.map(({ token, value, label }) => (
          <div key={token} style={{ flex: 1 }}>
            <div style={{ ...metaStyle, marginBottom: "12px" }}>
              <div>{token}</div>
              <div style={{ color: "var(--color-text-secondary)", marginTop: "2px" }}>{value} — {label}</div>
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-family-sans)",
                fontSize: "var(--font-size-body)",
                fontWeight: "var(--font-weight-regular)",
                lineHeight: `var(${token})`,
                color: "var(--color-text-default)",
              }}
            >
              {paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
};
