import{o,a as d,g as s}from"./index-DMlCd50X.js";const c={class:"markdown-body"},h={__name:"styles",setup(a,{expose:t}){return t({frontmatter:{}}),(r,e)=>(o(),d("div",c,[...e[0]||(e[0]=[s(`<h1 id="styles-%E2%80%94-tokens-drive-everything" tabindex="-1">Styles — tokens drive everything</h1><p>There is no stylesheet to maintain. <code>FusionProvider</code> feeds the <code>@rukkiecodes/tokens</code> <strong>native</strong> output — durations in milliseconds, dimensions as numbers, shadows as <code>{ color, offsetX, offsetY, blur, opacity }</code> objects (no CSS units). The native palette is the <em>same</em> palette as the web, generated from one source, so a brand re-theme applies to both platforms at once.</p><pre><code class="language-tsx">import { useFusionTheme, shadowStyle } from &#39;@rukkiecodes/native&#39;

function Panel() {
  const theme = useFusionTheme()
  return (
    &lt;View
      style={{
        backgroundColor: theme.colors.surface,
        borderRadius: theme.radius.lg,
        padding: theme.space[4],
        ...shadowStyle(theme.shadowRest, 4),
      }}
    /&gt;
  )
}
</code></pre><p>Colour, spacing, radii, type, motion, and elevation all resolve from the theme, so a component never hard-codes a value and the web and the phone can’t drift apart.</p><h2 id="the-token-surface" tabindex="-1">The token surface</h2><table><thead><tr><th>Group</th><th>Shape</th><th>Example</th></tr></thead><tbody><tr><td><code>colors</code></td><td><code>Record&lt;string, string&gt;</code> (hex)</td><td><code>theme.colors[&#39;on-primary&#39;]</code></td></tr><tr><td><code>radius</code></td><td><code>sm · md · lg · xl · pill · circle</code></td><td><code>theme.radius.lg</code> → <code>20</code></td></tr><tr><td><code>space</code></td><td>numeric scale (<code>1</code>–<code>6</code>) + <code>spacer</code></td><td><code>theme.space[4]</code> → <code>16</code></td></tr><tr><td><code>motion</code></td><td><code>duration.{base,fast}</code> (ms), <code>lift</code>, <code>sink</code></td><td><code>theme.motion.duration.fast</code></td></tr><tr><td><code>font</code></td><td><code>family.mono</code>, sizes, weights</td><td><code>theme.font.family.mono</code></td></tr><tr><td>shadows</td><td><code>shadowRest</code>, <code>shadowStyle(shadow, elevation)</code></td><td><code>shadowStyle(rest, 4)</code></td></tr></tbody></table><h2 id="the-token-driven-style-layer" tabindex="-1">The token-driven style layer</h2><p>Beyond raw tokens, <code>@rukkiecodes/native</code> ships the primitives that replace the web’s utility classes — <code>resolveVariant</code>, <code>withAlpha</code>, <code>boxStyle</code>, the <code>useTokens</code> / <code>useVariant</code> / <code>useBreakpoints</code> hooks, <code>FBox</code>, and the <code>FPressable</code> motion wrapper. Components are built from these, so they stay consistent with the tokens without a CSS cascade.</p><p>Next: <a href="/parity">component parity →</a></p>`,9)])]))}};export{h as default};
