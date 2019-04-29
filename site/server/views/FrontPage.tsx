import * as settings from 'settings'
import * as React from 'react'
import { Head } from './Head'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import { CategoryWithEntries, PostInfo } from 'db/wpdb'
import { formatDate } from '../formatting'
import { faRss, faSearch, faBook, faAngleRight, faExternalLinkAlt, faFileAlt, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BAKED_GRAPHER_URL } from 'settings'

export const FrontPage = (props: { entries: CategoryWithEntries[], posts: PostInfo[], shortPosts: PostInfo[], explainerPosts: PostInfo[] }) => {
    const { entries, posts, shortPosts, explainerPosts } = props

    // Structured data for google
    const structuredMarkup = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": settings.BAKED_BASE_URL,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${settings.BAKED_BASE_URL}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    }

    return <html>
        <Head canonicalUrl={settings.BAKED_BASE_URL}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredMarkup)}}/>
        </Head>
        <body className="FrontPage">
            <SiteHeader/>

            <section className="homepage-masthead">
                <div className="wrapper">
                    <h1>Research and interactive data visualizations to understand the world’s largest problems.</h1>
                    <a href="#entries" className="see-all" data-smooth-scroll data-track-click data-track-note="homepage-scroll">
                        Scroll to all research
                        <span className="icon"><FontAwesomeIcon icon={faAngleDoubleDown} /></span>
                    </a>
                    <p>2746 charts across 297 topics</p>
                    <p>All free: open access and open source</p>
                </div>
            </section>

            <section className="homepage-coverage">
                <div className="wrapper">
                    <div className="inner-wrapper">
                        <div className="owid-row owid-spacing--3">
                            <div className="owid-col owid-col--lg-auto owid-padding-bottom--sm-5">
                                <section>
                                    <h3 className="align-center">Trusted in <strong>research and media</strong></h3>
                                    <a href="/about/coverage#coverage" className="coverage-link" data-track-click data-track-note="homepage-trust">
                                        <img src="/media-logos.png" alt="Logos of the publications that have used our content" />
                                        <div className="hover-note">
                                            <p>Find out how our work is used by journalists and researchers</p>
                                        </div>
                                    </a>
                                </section>
                                <section>
                                    <h3 className="align-center">Used in <strong>teaching</strong></h3>
                                    <a href="/about/coverage#teaching" className="coverage-link" data-track-click data-track-note="homepage-trust">
                                        <img src="/university-logos.png" alt="Logos of the universities that have used our content" />
                                        <div className="hover-note">
                                            <p>Find out how our work is used in teaching</p>
                                        </div>
                                    </a>
                                </section>
                            </div>
                            <div className="owid-col owid-col--lg-shrink lg-only flex-row">
                                <div className="divider"></div>
                            </div>
                            <div className="owid-col owid-col--lg-auto">
                                <section>
                                    <h3><strong>Authored by</strong></h3>
                                    <ul>
                                        <li><strong>Max Roser</strong> &ndash; Founder and editor</li>
                                        <li><strong>Esteban Ortiz-Ospina</strong> &ndash; Social science</li>
                                        <li><strong>Hannah Ritchie</strong> &ndash; Environmental science</li>
                                        <li><strong>Joe Hasell</strong> &ndash; Social science</li>
                                        <li><strong>Daniel Gavrilov</strong> &ndash; Web developer</li>
                                    </ul>
                                </section>
                                <section>
                                    <h3>Based at the University of Oxford</h3>
                                    <img className="oxford-logo" src="/oxford-logo-rect.png" alt="University of Oxford logo" />
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="homepage-featured">
                <div className="wrapper">
                    <div className="inner-wrapper">
                        <h2>Our most popular research</h2>
                        <div className="owid-row owid-spacing--1">
                            <div className="owid-col owid-col--lg-auto">
                                <div className="list">
                                    <a href="/co2-and-other-greenhouse-gas-emissions" className="list-item" data-track-click data-track-note="homepage-popular">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBook} />
                                        </div>
                                        <div className="label">
                                            CO₂ and other Greenhouse Gas Emissions
                                        </div>
                                    </a>
                                    <a href="/a-history-of-global-living-conditions-in-5-charts" className="list-item" data-track-click data-track-note="homepage-popular">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faFileAlt} />
                                        </div>
                                        <div className="label">
                                            The short history of global living conditions
                                        </div>
                                    </a>
                                    <a href="/literacy" className="list-item" data-track-click data-track-note="homepage-popular">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBook} />
                                        </div>
                                        <div className="label">
                                            Literacy
                                        </div>
                                    </a>
                                    <a href="/world-population-growth" className="list-item" data-track-click data-track-note="homepage-popular">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBook} />
                                        </div>
                                        <div className="label">
                                            World Population Growth
                                        </div>
                                    </a>
                                    <a href="/life-expectancy" className="list-item" data-track-click data-track-note="homepage-popular">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBook} />
                                        </div>
                                        <div className="label">
                                            Life expectancy
                                        </div>
                                    </a>
                                    <a href="/why-do-women-live-longer-than-men" className="list-item" data-track-click data-track-note="homepage-popular">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faFileAlt} />
                                        </div>
                                        <div className="label">
                                            Why do women live longer?
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="owid-col owid-col--lg-auto">
                                <div className="list">
                                    <a href="/hunger-and-undernourishment" className="list-item" data-track-click data-track-note="homepage-popular">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBook} />
                                        </div>
                                        <div className="label">
                                            Hunger and undernourishment
                                        </div>
                                    </a>
                                    <a href="/income-inequality" className="list-item" data-track-click data-track-note="homepage-popular">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBook} />
                                        </div>
                                        <div className="label">
                                            Income inequality
                                        </div>
                                    </a>
                                    <a href="/faq-on-plastics" className="list-item" data-track-click data-track-note="homepage-popular">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faFileAlt} />
                                        </div>
                                        <div className="label">
                                            FAQs on plastics pollution
                                        </div>
                                    </a>
                                    <a href="/global-rise-of-education" className="list-item" data-track-click data-track-note="homepage-popular">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBook} />
                                        </div>
                                        <div className="label">
                                            Global rise of education
                                        </div>
                                    </a>
                                    <a href="/much-better-awful-can-be-better" className="list-item" data-track-click data-track-note="homepage-popular">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faFileAlt} />
                                        </div>
                                        <div className="label">
                                            The world is much better; The world is awful; The world can be much better
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="homepage-posts">
                <div className="wrapper">
                    <div className="owid-row owid-spacing--3">
                        <div className="owid-col owid-col--lg-1 flex-row">
                            <div className="homepage-posts--updates">
                                <div className="header">
                                    <h2>Short updates and facts</h2>
                                </div>
                                <div className="list">
                                    {shortPosts.slice(0,5).map(post => <a key={post.slug} href={`/${post.slug}`} className="list-item" data-track-click data-track-note="homepage-short-post">
                                        <div className="thumbnail">
                                            <div className="cover-image" style={{ backgroundImage: post.imageUrl && `url(${post.imageUrl})` }} />
                                        </div>
                                        <div className="info">
                                            <time className="date">{formatDate(post.date)}</time>
                                            <h3 className="title">{post.title}</h3>
                                        </div>
                                    </a>)}
                                </div>
                                <a href="/blog" className="see-all" data-track-click data-track-note="homepage-see-all-short-posts">
                                    <div className="label">See all short updates and facts</div>
                                    <div className="icon"><FontAwesomeIcon icon={faAngleRight} /></div>
                                </a>
                            </div>
                        </div>
                        <div className="owid-col owid-col--lg-shrink lg-only flex-row">
                            <div className="divider"></div>
                        </div>
                        <div className="owid-col owid-col--lg-2 flex-row">
                            <div className="homepage-posts--explainers">
                                <div className="header">
                                    <h2>Recent explainers</h2>
                                </div>
                                <div className="list">
                                    {explainerPosts.slice(0,6).map(post => <div key={post.slug} className="list-item-wrapper">
                                        <a href={`/${post.slug}`} className="list-item" data-track-click data-track-note="homepage-explainer">
                                            <div className="thumbnail">
                                                <div className="cover-image" style={{ backgroundImage: post.imageUrl && `url(${post.imageUrl})` }} />
                                            </div>
                                            <div className="info">
                                                <h3 className="title">{post.title}</h3>
                                            </div>
                                        </a>
                                    </div>)}
                                </div>
                                <a href="/blog" className="see-all" data-track-click data-track-note="homepage-see-all-explainers">
                                    <div className="label">See all explainers</div>
                                    <div className="icon"><FontAwesomeIcon icon={faAngleRight} /></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="homepage-subscribe">
                <div className="wrapper">
                    <div className="owid-row">
                        <div className="owid-col owid-col--lg-2 flex-row owid-padding-bottom--sm-3">
                            <div className="homepage-subscribe--newsletter">
                                <div className="shaded-box">
                                    <h2>Subscribe to our newsletter</h2>
                                    <form action="https://ourworldindata.us8.list-manage.com/subscribe/post?u=18058af086319ba6afad752ec&id=2e166c1fc1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                                        <p>Receive an email every two weeks on our latest research.</p>
                                        {/* <fieldset>
                                            <div className="owid-checkboxes">
                                                <div className="owid-checkbox-block">
                                                    <input type="checkbox" id="weekly" value="weekly" name="type" defaultChecked />
                                                    <label htmlFor="weekly">
                                                        <div className="label-title">Weekly digest</div>
                                                        <div className="label-text">Get weekly emails with the biggest news.</div>
                                                    </label>
                                                </div>
                                                <div className="owid-checkbox-block">
                                                    <input type="checkbox" id="immediate" value="immediate" name="type" />
                                                    <label htmlFor="immediate">
                                                        <div className="label-title">Immediate updates</div>
                                                        <div className="label-text">Get emails whenever we produce new content.</div>
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset> */}
                                        <div className="owid-inline-field">
                                            <input placeholder="Your email address" type="email" className="owid-inline-input" name="EMAIL" />
                                            <button type="submit" className="owid-inline-button">Subscribe</button>
                                        </div>
                                        <input type="hidden" name="b_18058af086319ba6afad752ec_2e166c1fc1" tabIndex={-1}/>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="owid-col owid-col--lg-1">
                            <div className="homepage-subscribe--social-media">
                                <div className="shaded-box">
                                    <h2>Follow us</h2>
                                    <div className="list">
                                        <a href="https://twitter.com/ourworldindata" className="list-item" title="Twitter" target="_blank" rel="noopener noreferrer" data-track-click data-track-note="homepage-follow-us">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </div>
                                            <div className="label">Twitter</div>
                                        </a>
                                        <a href="https://facebook.com/ourworldindata" className="list-item" title="Facebook" target="_blank" rel="noopener noreferrer" data-track-click data-track-note="homepage-follow-us">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </div>
                                            <div className="label">Facebook</div>
                                        </a>
                                        <a href="/feed" className="list-item" title="RSS" target="_blank" data-track-click data-track-note="homepage-follow-us">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faRss} />
                                            </div>
                                            <div className="label">RSS Feed</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="homepage-projects">
                <div className="wrapper">
                    <div className="list">
                        <a href="https://sdg-tracker.org" className="list-item" data-track-click data-track-note="homepage-projects">
                            <div className="icon-left">
                                <img src="/sdg-wheel.png" alt="SDG Tracker logo"/>
                            </div>
                            <div className="content">
                                <h3>Sustainable Development Goals Tracker</h3>
                                <p>Is the world on track to reach the Sustainable Development Goals?</p>
                            </div>
                            <div className="icon-right lg-only">
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </div>
                        </a>
                        <a href="/teaching" className="list-item" data-track-click data-track-note="homepage-projects">
                            <div className="icon-left">
                                <img src="/teaching-hub.svg" alt="Teaching Hub logo"/>
                            </div>
                            <div className="content">
                                <h3>Teaching Hub</h3>
                                <p>Slides, research, and visualizations for teaching and learning about global development</p>
                            </div>
                            <div className="icon-right lg-only">
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section id="entries" className="homepage-entries">
                <div className="wrapper">
                    <h2>Research by topic</h2>
                    {entries.map(category => <div key={category.slug} className="category-wrapper">
                        <div className={`category-name ${category.slug}-color`}>
                            <h3 id={category.slug}>{category.name}</h3>
                        </div>
                        <div className="category-entries">
                            {category.entries.map(entry => <a key={entry.slug} href={`/${entry.slug}`} className={`entry-item-container ${category.slug}-color`} data-track-click data-track-note="homepage-entries">
                                <div className="entry-item">
                                    <div className="entry-item-contents">
                                        <h4>{entry.title}</h4>
                                        <p className="excerpt">{entry.excerpt}</p>
                                    </div>
                                </div>
                            </a>)}
                        </div>
                    </div>)}
                </div>
            </section>

            <SiteFooter />

            <script dangerouslySetInnerHTML={{__html: `
                runEntryExcerptLinks()
            `}}/>
        </body>
    </html>
}
