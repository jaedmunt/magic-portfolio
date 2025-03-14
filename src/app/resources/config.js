const baseURL = 'demo.app'

// Enable localization
const i18n = false;

// Manage localized content in the messages folder
const i18nOptions = {
    locales: ['en'],            // A list of all locales that are supported, e.g. ['en','id']
    defaultLocale: 'en'         // Locale used by default and as a fallback
}

const routes = {
    '/':        true,
    '/about':   true,
    '/work':    true,
    '/blog':    true,
    '/gallery': true,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true
}

const effects = {
    gradient: true,
    dots:     true,
    lines:    false,
}

const style = {
    theme:       'dark',         // dark | light
    neutral:     'slate',         // sand | gray | slate
    brand:       'blue',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'magenta',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'color',     // color | contrast
    solidStyle:  'plastic',         // flat | plastic
    border:      'conservative',      // rounded | playful | conservative
    surface:     'filled',  // filled | translucent
    transition:  'macro'           // all | micro | macro
}



const display = {
    location: true,
    time:     true
}

const mailchimp = {
    action: 'https://url/subscribe/post?parameters',
    effects: {
        gradient: true,
        dots:     true,
        lines:    true,
    }
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, i18n, i18nOptions };