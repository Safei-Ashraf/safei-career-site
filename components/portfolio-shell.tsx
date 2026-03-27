"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import styles from "./portfolio-shell.module.css";
import { profileData } from "@/lib/site-data";

type SectionId = "overview" | "resume" | "impact";

function Icon({
  kind,
  className
}: {
  kind:
    | "download"
    | "external"
    | "email"
    | "linkedin"
    | "github"
    | "phone"
    | "whatsapp"
    | "trend"
    | "layers"
    | "message"
    | "users"
    | "network"
    | "assistant"
    | "globe"
    | "code"
    | "palette"
    | "stack"
    | "tooling";
  className?: string;
}) {
  const shared = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  switch (kind) {
    case "download":
      return (
        <svg {...shared}>
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 20h14" />
        </svg>
      );
    case "external":
      return (
        <svg {...shared}>
          <path d="M14 5h5v5" />
          <path d="M10 14 19 5" />
          <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
        </svg>
      );
    case "email":
      return (
        <svg {...shared}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
          <path d="m5 7 7 6 7-6" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...shared}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M8 10v6" />
          <path d="M8 7.5h.01" />
          <path d="M12 16v-3.2a1.8 1.8 0 0 1 3.6 0V16" />
          <path d="M12 10v6" />
        </svg>
      );
    case "github":
      return (
        <svg {...shared}>
          <path d="M9 19c-4.5 1.4-4.5-2.5-6.5-3" />
          <path d="M15 21v-3.5a3 3 0 0 0-.9-2.3c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 19 4.8 4.8 4.8 0 0 0 18.9 1S17.8.7 15 2.6a13.3 13.3 0 0 0-6 0C6.2.7 5.1 1 5.1 1A4.8 4.8 0 0 0 5 4.8a5.2 5.2 0 0 0-1.3 3.7c0 5.2 3.2 6.4 6.2 6.7A3 3 0 0 0 9 17.5V21" />
        </svg>
      );
    case "phone":
      return (
        <svg {...shared}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7l.4 2.8a2 2 0 0 1-.6 1.8L7 10a16 16 0 0 0 7 7l1.7-1.8a2 2 0 0 1 1.8-.6l2.8.4A2 2 0 0 1 22 16.9Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...shared}>
          <path d="M20 11.4A8.4 8.4 0 0 1 7.6 18.8L4 20l1.2-3.5A8.4 8.4 0 1 1 20 11.4Z" />
          <path d="M9.2 8.7c.3-.6.6-.6.8-.6h.6c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.4.5c-.1.2-.2.3-.1.5.3.6 1 1.5 2 2.1.2.1.4.1.5-.1l.5-.6c.2-.2.4-.3.6-.2l1.6.7c.3.1.4.3.4.5v.6c0 .2 0 .5-.5.8-.4.3-1 .5-1.6.3-1-.2-2.4-.8-3.7-2.1-1.3-1.2-2.2-2.8-2.4-3.8-.2-.6 0-1.2.3-1.7Z" />
        </svg>
      );
    case "trend":
      return (
        <svg {...shared}>
          <path d="M4 16 10 10l4 4 6-8" />
          <path d="M17 6h3v3" />
        </svg>
      );
    case "layers":
      return (
        <svg {...shared}>
          <path d="m12 4 8 4-8 4-8-4 8-4Z" />
          <path d="m4 12 8 4 8-4" />
          <path d="m4 16 8 4 8-4" />
        </svg>
      );
    case "message":
      return (
        <svg {...shared}>
          <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.4 0-2.7-.3-3.8-.9L4 20l.9-4.4a8.5 8.5 0 1 1 16.1-4.1Z" />
          <path d="M8.5 11.5h7" />
          <path d="M8.5 8.5h5.5" />
        </svg>
      );
    case "users":
      return (
        <svg {...shared}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
          <circle cx="9.5" cy="7" r="3.5" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.86" />
          <path d="M16 3.14a3.5 3.5 0 0 1 0 6.72" />
        </svg>
      );
    case "network":
      return (
        <svg {...shared}>
          <circle cx="6" cy="8" r="2.25" />
          <circle cx="18" cy="6" r="2.25" />
          <circle cx="12" cy="18" r="2.25" />
          <path d="M8 8.6 15.8 6.8" />
          <path d="m7.5 9.8 3.8 6.1" />
          <path d="M16.5 8 13.5 15.2" />
        </svg>
      );
    case "assistant":
      return (
        <svg {...shared}>
          <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5c-1.2 0-2.3-.2-3.4-.7L4 19l.8-4.1A7.5 7.5 0 1 1 20 11.5Z" />
          <path d="M9 11.5h6" />
          <path d="M9.5 8.8h5" />
          <path d="M17.8 4.8v2.4" />
          <path d="M16.6 6h2.4" />
        </svg>
      );
    case "globe":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.8 12h16.4" />
          <path d="M12 3.5a12.7 12.7 0 0 1 3 8.5 12.7 12.7 0 0 1-3 8.5 12.7 12.7 0 0 1-3-8.5 12.7 12.7 0 0 1 3-8.5Z" />
        </svg>
      );
    case "code":
      return (
        <svg {...shared}>
          <path d="m9 8-4 4 4 4" />
          <path d="m15 8 4 4-4 4" />
        </svg>
      );
    case "palette":
      return (
        <svg {...shared}>
          <path d="M12 4.5c-4.7 0-8.5 3.4-8.5 7.6 0 3.8 3.1 7 7.2 7h1.1c1.2 0 2-.9 2-1.9 0-.5-.2-.9-.4-1.3-.2-.3-.3-.6-.3-1 0-1.1.9-1.8 2-1.8h1.5c2.9 0 5.4-2.2 5.4-5.1 0-4.2-4-7.5-9-7.5Z" />
          <circle cx="8" cy="11" r="1" fill="currentColor" stroke="none" />
          <circle cx="11" cy="8.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="9" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "stack":
      return (
        <svg {...shared}>
          <path d="m12 4 7 3.5-7 3.5-7-3.5L12 4Z" />
          <path d="m5 12 7 3.5 7-3.5" />
          <path d="m5 16.5 7 3.5 7-3.5" />
        </svg>
      );
    case "tooling":
      return (
        <svg {...shared}>
          <rect x="4.5" y="4.5" width="15" height="15" rx="3" />
          <path d="M9 9h.01" />
          <path d="M15 9h.01" />
          <path d="M8.5 14.5c.8 1.1 2 1.7 3.5 1.7s2.7-.6 3.5-1.7" />
        </svg>
      );
    default:
      return null;
  }
}

function actionIcon(
  label: string
): "email" | "linkedin" | "github" | "phone" | "whatsapp" | "external" {
  switch (label) {
    case "Email":
      return "email";
    case "LinkedIn":
      return "linkedin";
    case "GitHub":
      return "github";
    case "Phone":
      return "phone";
    case "WhatsApp":
      return "whatsapp";
    default:
      return "external";
  }
}

export function PortfolioShell() {
  const [activeSection, setActiveSection] = useState<SectionId>("overview");

  const externalActionLabels = useMemo(
    () => new Set(["LinkedIn", "GitHub", "WhatsApp"]),
    []
  );

  const githubAction = useMemo(
    () => profileData.contactActions.find((item) => item.label === "GitHub"),
    []
  );

  const contactActions = useMemo(
    () => profileData.contactActions.filter((item) => item.label !== "GitHub"),
    []
  );

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-id]")
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (intersecting[0]) {
          setActiveSection(intersecting[0].target.id as SectionId);
        }
      },
      {
        threshold: [0.16, 0.32, 0.48, 0.64],
        rootMargin: "-18% 0px -56% 0px"
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.frame}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarPanel}>
          <div className={styles.sidebarTop}>
            <div className={styles.brand}>
              <div className={styles.brandRow}>
                <div className={styles.brandText}>
                  <p className={styles.eyebrow}>Profile</p>
                  <h1>{profileData.person.name}</h1>
                </div>
                {githubAction ? (
                  <a
                    className={styles.brandIconLink}
                    href={githubAction.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open GitHub profile"
                    title="GitHub"
                  >
                    <Icon kind="github" className={styles.icon} />
                  </a>
                ) : null}
              </div>
              <p className={styles.role}>{profileData.person.title}</p>
              <p className={styles.meta}>{profileData.person.meta}</p>
            </div>

            <section className={styles.sidebarSection}>
              <p className={styles.sectionTitle}>Navigate</p>
              <nav className={styles.navList} aria-label="Section navigation">
                {profileData.navigation.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                      href={`#${item.id}`}
                      title={item.meta}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className={styles.navLabel}>{item.label}</span>
                    </a>
                  );
                })}
              </nav>
            </section>

            <section className={styles.sidebarSection}>
              <p className={styles.sectionTitle}>Resume Actions</p>
              <div className={styles.docActions}>
                <a className={styles.docAction} href={profileData.downloads.resume}>
                  <Icon kind="download" className={styles.icon} />
                  <span>Download Resume</span>
                </a>
                <a
                  className={styles.docAction}
                  href={profileData.downloads.resumeGoogleDocs}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon kind="external" className={styles.icon} />
                  <span>View in Google Docs</span>
                </a>
              </div>
            </section>
          </div>

          <section className={styles.sidebarSection}>
            <p className={styles.sectionTitle}>Contact</p>
            <div className={styles.contactRow}>
              {contactActions.map((item) => (
                <a
                  key={item.label}
                  className={styles.contactButton}
                  href={item.href}
                  target={externalActionLabels.has(item.label) ? "_blank" : undefined}
                  rel={externalActionLabels.has(item.label) ? "noreferrer" : undefined}
                  aria-label={`${item.label}: ${item.value}`}
                  title={`${item.label}: ${item.value}`}
                >
                  <Icon
                    kind={actionIcon(item.label)}
                    className={styles.contactIcon}
                  />
                </a>
              ))}
            </div>
          </section>
        </div>
      </aside>

      <main className={styles.main}>
        <section id="overview" data-section-id="overview" className={styles.section}>
          <article className={`${styles.card} ${styles.heroCard}`}>
            <div className={styles.heroGlow} aria-hidden="true" />

            <div className={styles.skillCloud} aria-hidden="true">
              {profileData.hero.chipCloud.map((chip) => (
                <span
                  key={chip.label}
                  className={styles.skillChip}
                  style={
                    {
                      "--x": chip.x,
                      "--y": chip.y,
                      "--dx": chip.dx,
                      "--dy": chip.dy,
                      "--duration": chip.duration,
                      "--delay": chip.delay,
                      "--chip-bg": chip.bg,
                      "--chip-border": chip.border,
                      "--chip-text": chip.text,
                      "--chip-dot": chip.dot
                    } as CSSProperties
                  }
                >
                  {chip.label}
                </span>
              ))}
            </div>

            <div className={styles.heroInner}>
              <p className={styles.eyebrow}>{profileData.hero.eyebrow}</p>
              <h2>{profileData.hero.headline}</h2>

              {profileData.hero.paragraphs.map((paragraph) => (
                <p key={paragraph} className={styles.heroCopy}>
                  {paragraph}
                </p>
              ))}

              <div className={styles.heroMeta}>
                {profileData.hero.metaPills.map((pill) => (
                  <span key={pill} className={styles.metaPill}>
                    {pill}
                  </span>
                ))}
              </div>

              <div className={styles.heroStats}>
                {profileData.hero.proofChips.map((chip) => (
                  <span key={chip} className={styles.heroChip}>
                    {chip}
                  </span>
                ))}
              </div>

              <div className={styles.heroActions}>
                {profileData.hero.ctas.map((cta) => (
                  <a
                    key={cta.label}
                    className={
                      cta.variant === "primary"
                        ? styles.primaryButton
                        : styles.ghostButton
                    }
                    href={cta.href}
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section id="resume" data-section-id="resume" className={styles.section}>
          <header className={styles.sectionHeader}>
            <p className={styles.eyebrow}>{profileData.resume.eyebrow}</p>
            <h3>{profileData.resume.title}</h3>
            <p className={styles.sectionCopy}>{profileData.resume.intro}</p>
          </header>

          <div className={styles.showcaseMetricGrid}>
            {profileData.resume.metrics.map((metric) => (
              <article
                key={metric.label}
                className={`${styles.metricCard} ${styles.showcaseMetricCard}`}
                style={
                  {
                    "--metric-bg": metric.bg,
                    "--metric-border": metric.border,
                    "--metric-icon-bg": metric.iconBg,
                    "--metric-icon-color": metric.iconColor
                  } as CSSProperties
                }
              >
                <div className={styles.showcaseMetricHeader}>
                  <span className={styles.metricIconBadge}>
                    <Icon kind={metric.icon} className={styles.metricIcon} />
                  </span>
                  <p className={styles.showcaseMetricValue}>{metric.value}</p>
                </div>
                <p className={styles.showcaseMetricLabel}>{metric.label}</p>
              </article>
            ))}
          </div>

          <div className={styles.contentStack}>
            <article className={styles.card}>
              <h4>Featured Work</h4>
              <div className={styles.projectGrid}>
                {profileData.resume.featuredProjects.map((project) => (
                  <section key={project.title} className={styles.projectCard}>
                    <div className={styles.projectHeader}>
                      <div>
                        <h5 className={styles.resumeTitle}>{project.title}</h5>
                        <p className={styles.projectSubtitle}>{project.subtitle}</p>
                      </div>
                      {"href" in project && project.href ? (
                        <div className={styles.projectActions}>
                          <a
                            className={styles.projectLink}
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>
                              {"linkLabel" in project ? project.linkLabel : "View project"}
                            </span>
                            <Icon kind="external" className={styles.projectLinkIcon} />
                          </a>
                          {"secondaryHref" in project && project.secondaryHref ? (
                            <a
                              className={styles.projectLink}
                              href={project.secondaryHref}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span>
                                {"secondaryLabel" in project
                                  ? project.secondaryLabel
                                  : "View reference"}
                              </span>
                              <Icon kind="external" className={styles.projectLinkIcon} />
                            </a>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                    <ul className={styles.experienceList}>
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <div className={styles.resumeFooter}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.resumePill}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <article className={styles.card}>
              <h4>Open Source Contributions</h4>
              <div className={styles.projectMiniGrid}>
                {profileData.resume.additionalProjects.map((project) => (
                  <section key={project.title} className={styles.projectMiniCard}>
                    <div className={styles.projectHeader}>
                      <div>
                        <h5 className={styles.resumeTitle}>{project.title}</h5>
                      </div>
                      <a
                        className={styles.projectLink}
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Open Source Contributions</span>
                        <Icon kind="external" className={styles.projectLinkIcon} />
                      </a>
                    </div>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.resumeFooter}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.resumePill}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <article className={styles.card}>
              <h4>Skill Clusters</h4>
              <div className={styles.detailStack}>
                {profileData.resume.skillGroups.map((group) => (
                  <section
                    key={group.title}
                    className={styles.skillGroup}
                    style={
                      {
                        "--skill-bg": group.bg,
                        "--skill-border": group.border,
                        "--skill-title": group.titleColor,
                        "--skill-pill-bg": group.pillBg,
                        "--skill-pill-border": group.pillBorder,
                        "--skill-pill-text": group.pillText
                      } as CSSProperties
                    }
                  >
                    <p className={`${styles.detailLabel} ${styles.skillGroupTitle}`}>
                      <Icon
                        kind={group.icon}
                        className={styles.skillGroupIcon}
                      />
                      {group.title}
                    </p>
                    <div className={`${styles.pillGroup} ${styles.skillGroupPills}`}>
                      {group.items.map((item) => (
                        <span key={item} className={styles.resumePill}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <div className={styles.resumePanelGrid}>
              {profileData.resume.panels.map((card) => (
              <article key={card.title} className={styles.detailCard}>
                <h4>{card.title}</h4>
                <p className={styles.detailLabel}>{card.label}</p>
                <ul className={styles.detailList}>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" data-section-id="impact" className={styles.section}>
          <header className={styles.sectionHeader}>
            <p className={styles.eyebrow}>{profileData.impact.eyebrow}</p>
            <h3>{profileData.impact.title}</h3>
            <p className={styles.sectionCopy}>{profileData.impact.intro}</p>
          </header>

          <div className={styles.metricGrid}>
            {profileData.impact.snapshot.map((metric) => (
              <article key={metric.label} className={styles.metricCard}>
                <p className={styles.metricValue}>{metric.value}</p>
                <p className={styles.metricLabel}>{metric.label}</p>
              </article>
            ))}
          </div>

          <div className={styles.contentStack}>
            <article className={styles.card}>
              <h4>Executive Summary</h4>
              {profileData.impact.summary.map((paragraph) => (
                <p key={paragraph} className={styles.sectionCopy}>
                  {paragraph}
                </p>
              ))}
            </article>

            <article className={styles.card}>
              <h4>Major Themes</h4>
              <div className={styles.detailStack}>
                {profileData.impact.themes.map((theme, index) => (
                  <section key={theme.title} className={styles.impactCard}>
                    <div className={styles.impactHeading}>
                      <span className={styles.impactIndex}>{index + 1}</span>
                      <h5 className={styles.impactTitle}>{theme.title}</h5>
                    </div>
                    <ul className={styles.impactList}>
                      {theme.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>

            {profileData.impact.sideCards.map((card) => (
              <article key={card.title} className={styles.detailCard}>
                <h4>{card.title}</h4>
                <p className={styles.detailLabel}>{card.label}</p>
                <ul className={styles.evidenceList}>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}

            <article className={styles.detailCard}>
              <h4>Download Copy</h4>
              <p className={styles.sectionCopy}>
                A formatted document version is available if you prefer a
                shareable written copy for hiring loops, business discussions,
                or offline review.
              </p>
              <div className={styles.footerActions}>
                <a
                  className={styles.primaryButton}
                  href={profileData.downloads.impactReference}
                >
                  Download Impact Reference
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
