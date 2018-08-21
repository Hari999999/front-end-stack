import React from 'react'

export function StyleGuide() {
    return (
        <main role="main" className="style-guide">
            <header role="heading" className="constrain-width">
                <h1>Style Guide</h1>
                <p>A working site style guide built to manage design and code quality control.</p>
            </header>

            <section className="style-guide-section || constrain-width">
                <h2>Colour</h2>
                <hr />

                {/* Colours */}
                <div className="style-guide-swatches" role="group">
                    <div className="swatch colour-primary">
                        <div className="swatch-inner">
                            <p className="swatch-title">Primary</p>
                            <ul className="swatch-variations">
                                <li className="swatch-variation shade-1"></li>
                                <li className="swatch-variation tint-1"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="swatch small colour-dark">
                        <div className="swatch-inner">
                            <p className="swatch-title">Dark</p>
                            <ul className="swatch-variations">
                                <li className="swatch-variation tint-1"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="swatch small outline colour-light">
                        <div className="swatch-inner">
                            <p className="swatch-title">Light</p>
                            <ul className="swatch-variations">
                                <li className="swatch-variation shade-1"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="style-guide-section || constrain-width">
                <h2>Typography</h2>
                <hr />

                {/* Heading Styles: h1, h2, h3, h4, h5, h6 */}
                <h1>H1 - This is Heading 1</h1>
                <h2>H2 - This is Heading 2</h2>
                <h3>H3 - This is Heading 3</h3>
                <h4>H4 - This is Heading 4</h4>
                <h5>H5 - This is Heading 5</h5>
                <h6>H6 - This is Heading 6</h6>

                {/* Paragraph: strong, em, a */}
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                dolore magna aliquam erat volutpat.</p>
                <p>Ut wisi enim ad minim veniam, quis nostrud <strong>exerci tation ullamcorper suscipit</strong> lobortis nisl
                ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit <em>in vulputate velit esse
                                                                                                                                        molestie
                </em> consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
                                                                                                                                    qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor
                cum soluta nobis eleifend option congue.</p>
                <p>Nihil imperdiet doming id <a href="#" title="Link">quod mazim placerat</a> facer possim assum. Typi non habent
                    claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt
                    lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem
                    consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit
                    litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis
                videntur parum clari, fiant sollemnes in futurum.</p>
            </section>

            <section className="style-guide-section || constrain-width">
                <h2>Lists</h2>
                <hr />

                {/* Lists: strong, em, a */}
                <ul>
                    <li>Duis autem vel eum <strong>iriure dolor in hendrerit</strong> in vulputate velit esse molestie consequat.</li>
                    <li>Vel illum dolore eu <em>feugiat nulla</em> facilisis at vero eros et accumsan et iusto odio dignissim
                    qui blandit.</li>
                    <li>Praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</li>
                    <li>Nimperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est
                    usus <a href="#">legentis in iis qui facit</a> eorum claritatem. Investigationes demonstraverunt lectores
                    legere me lius quod ii legunt saepius.</li>
                </ul>
                <ol>
                    <li>Duis autem vel eum <strong>iriure dolor in hendrerit</strong> in vulputate velit esse molestie consequat.</li>
                    <li>Vel illum dolore eu <em>feugiat nulla</em> facilisis at vero eros et accumsan et iusto odio dignissim
                    qui blandit.</li>
                    <li>Praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</li>
                    <li>Nimperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est
                    usus <a href="#">legentis in iis qui facit</a> eorum claritatem. Investigationes demonstraverunt lectores
                    legere me lius quod ii legunt saepius.</li>
                </ol>
            </section>

            <section className="style-guide-section || constrain-width">
                <h2>Social Icons</h2>
                <hr />

                {/* Social Icons */}
                <div className="style-guide-icons">
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Apple</title>
                        <use xlinkHref="/icons/social/sprite.svg#apple" />
                    </svg>
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Facebook</title>
                        <use xlinkHref="/icons/social/sprite.svg#facebook" />
                    </svg>
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Google+</title>
                        <use xlinkHref="/icons/social/sprite.svg#google" />
                    </svg>
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Instagram</title>
                        <use xlinkHref="/icons/social/sprite.svg#instagram" />
                    </svg >
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Linkedin</title>
                        <use xlinkHref="/icons/social/sprite.svg#linkedin" />
                    </svg >
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Microsoft</title>
                        <use xlinkHref="/icons/social/sprite.svg#microsoft" />
                    </svg >
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Pinterest</title>
                        <use xlinkHref="/icons/social/sprite.svg#pinterest" />
                    </svg >
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Reddit</title>
                        <use xlinkHref="/icons/social/sprite.svg#reddit" />
                    </svg >
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>RSS</title>
                        <use xlinkHref="/icons/social/sprite.svg#rss" />
                    </svg >
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Soundcloud</title>
                        <use xlinkHref="/icons/social/sprite.svg#soundcloud" />
                    </svg >
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Spotify</title>
                        <use xlinkHref="/icons/social/sprite.svg#spotify" />
                    </svg >
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Tumblr</title>
                        <use xlinkHref="/icons/social/sprite.svg#tumblr" />
                    </svg >
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Twitter</title>
                        <use xlinkHref="/icons/social/sprite.svg#twitter" />
                    </svg >
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>WhatsApp</title>
                        <use xlinkHref="/icons/social/sprite.svg#whatsapp" />
                    </svg >
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Yahoo</title>
                        <use xlinkHref="/icons/social/sprite.svg#yahoo" />
                    </svg >
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Yelp</title>
                        <use xlinkHref="/icons/social/sprite.svg#yelp" />
                    </svg >
                    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                        <title>Youtube</title>
                        <use xlinkHref="/icons/social/sprite.svg#youtube" />
                    </svg >
                </div >
            </section >

            <section className="style-guide-section | || constrain-width">
                <h2>Buttons</h2>
                <hr />

                {/* Buttons: primary, secondary, disabled */}
                <h4 className="style-guide-sub-heading">Default</h4>
                <div role="group" className="style-guide-button-group">
                    <a className="button large" href="#">Default Large</a>
                    <a className="button" href="#">Default Button</a>
                    <a className="button small" href="#">Default Small</a>
                </div>

                <h4 className="style-guide-sub-heading">Disabled</h4>
                <div role="group" className="style-guide-button-group">
                    <a className="button is-disabled">Disabled Button</a>
                    <button type="button" className="button" disabled>Disabled Button</button>
                </div>

                <h4 className="style-guide-sub-heading">Default with icon</h4>
                <div role="group" className="style-guide-button-group">
                    <a className="button large" href="#">
                        <svg className="button-icon left" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                            <title>Arrow</title>
                            <use xlinkHref="/icons/sprite.svg#arrow" />
                        </svg>
                        Large Button
                </a>
                    <a className="button" href="#">
                        <svg className="button-icon left" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                            <title>Arrow</title>
                            <use xlinkHref="/icons/sprite.svg#arrow" />
                        </svg>
                        Button
                </a>
                    <a className="button small" href="#">
                        <svg className="button-icon left" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
                            <title>Arrow</title>
                            <use xlinkHref="/icons/sprite.svg#arrow" />
                        </svg>
                        Small Button
                </a >
                </div >

                <h4 className="style-guide-sub-heading">Primary</h4>
                <div role="group" className="style-guide-button-group">
                    <a className="button primary large" href="#">Primary (Large)</a>
                    <a className="button primary" href="#">Primary</a>
                    <a className="button primary small" href="#">Primary (Small)</a>
                </div>

            </section >
            <section className="style-guide-section || constrain-width">
                <h2>Close Button</h2>
                <hr />

                <button type="button" className="close-button">Close</button>
            </section>

            <section className="style-guide-section || constrain-width">
                <h2>Blockquotes</h2>
                <hr />

                {/* Blockquote */}
                <blockquote>
                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    <footer>Author's Name, 2020, <cite>The source</cite></footer>
                </blockquote>
            </section>

            <section className="style-guide-section || constrain-width">
                <h2>Constrain Widths</h2>
                <hr />

                {/* Constrain Widths */}
                <div className="style-guide-lines">
                    <h4 className="style-guide-sub-heading || style-guide-line || constrain-width no-pad x-large">X Large</h4>
                    <h4 className="style-guide-sub-heading || style-guide-line || constrain-width no-pad large">Large</h4>
                    <h4 className="style-guide-sub-heading || style-guide-line || constrain-width no-pad">Default</h4>
                    <h4 className="style-guide-sub-heading || style-guide-line || constrain-width no-pad medium">Medium</h4>
                    <h4 className="style-guide-sub-heading || style-guide-line || constrain-width no-pad small">Small</h4>
                </div>
            </section>
        </main >
    )
}
