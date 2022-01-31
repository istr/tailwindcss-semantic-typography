# Semantic Typography for tailwindcss

This plug-in provides out-of-the-box typography settings based on semantic HTML
tags for [tailwindcss](https://tailwindcss.com/).
See below in what ways it differs from the
[official typography plug-in](https://tailwindcss.com/docs/typography-plugin).

**NOTE: this plug-in is in an early alpha stage, but still useful and usable.**


# Installation

Install it from npm:

```
# Using npm
npm install -D tailwindcss-semantic-typography

# Using Yarn
yarn add tailwindcss-semantic-typography

```

Add it to your tailwindcss setup. For the time being, there are no means
to configure the plug-in. Before 1.0 there will be an option to choose the type
of font pairing or font setup you would like to use.
**Currently only a serif / sans scheme is supported.**

```
// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    plugins: [
        require('tailwindcss-semantic-typography'),
        // ...
    ],
};
```

# Usage

Quite simple: use semantic tags correctly. Do not abuse semantic tags in the
navigational parts of your layouts. Put the content where you want typography
to be styled into a `main` tag and everything else outside.
You might want to use the
[structural example in the HTML5 specification](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element)
as a starting point.
If you want to generate readable line-lengths (65 characters), put your content
inside of an `article` tag.

For the time being: choose your serif (headlines) and sans (body text)
font pairing wisely.

That's all.


# Why Another Typography Plug-In?

The [official typography plug-in](https://tailwindcss.com/docs/typography-plugin) is built with a focus on content that is
not known at build time (like content from a database or from remote sources).
For this reason it installs as a full-fledged component and generates some
overhead in the production CSS. Apart from that, it sticks with the
"utility first" approach that tailwindcss propagates.

This plug-in is meant to combine the "utility first" approach with a global
default for typography that builds on the semantic structure of HTML5.
The presumption is that you use this plug-in in scenarios where you have full
control over the content at build time, like you have with most modern static
site builders like [hugo](https://gohugo.io/).

On the one hand this allows for full-fledged optimization (you only have in
production what you really need). On the other hand it enforces globally
consistent typography for markup generated content (something you almost
always want).

The settings are in line with the [official typography plug-in](https://tailwindcss.com/docs/typography-plugin),
however you have to cater for colour elsewhere.


# Assumptions for the Usage of Semantic Tags

This plug-in builds on the following assumptions:

- the content that needs typographic styling always resides inside the
  `main` section that is present on every rendered page
- your main content is rendered from markdown or similar sources
  (so tailwindcss JIT optimization could be leveraged)
- the content is structured using appropriate `section` and `article` tags
- navigational content and asides are generally not rendered from markdown
- you need more freedom for branding / styling everywhere outside of `main`
- you do not abuse tags that have a specific text semantics like
  `h1`, `h2`,..., `p`, `pre`, `code`,
  in the navigational sections of your design
- you adhere to the rule not to convey meaning _only_ by colour (this is
  why this plug-in controls the layout _only_, and _not_ the colour)
