import{o,a as n,h as a}from"./index-DeqNcXlA.js";const i={class:"markdown-body"},p={__name:"install",setup(r,{expose:t}){return t({frontmatter:{}}),(d,e)=>(o(),n("div",i,[...e[0]||(e[0]=[a(`<h1 id="getting-started" tabindex="-1">Getting started</h1><p>FusionUI on mobile is <strong>copy-in</strong>, in the spirit of shadcn/ui: there’s no component package to install. You run one command, the component’s source is written into <em>your</em> project, and from then on you own it — edit, theme and extend it freely.</p><h2 id="initialize" tabindex="-1">Initialize</h2><p>From the root of your Expo app:</p><pre><code class="language-bash">npx @rukkiecodes/native init
</code></pre><p>That writes a small <code>component.config.json</code> (where components should land) and copies in the two you always want — <strong>Text</strong> and <strong>Button</strong>:</p><pre><code>your-app/
  component.config.json        # { &quot;outDir&quot;: &quot;components/ui&quot; }
  components/ui/
    text/    index.tsx types.ts const.ts helpers.ts
    button/  index.tsx types.ts
</code></pre><p>Then install the packages those components need — the command prints the exact line:</p><pre><code class="language-bash">npx expo install expo-linear-gradient react-native-reanimated
</code></pre><blockquote><p><code>react-native-reanimated</code> needs its Babel plugin — add <code>react-native-reanimated/plugin</code> as the <strong>last</strong> entry in <code>babel.config.js</code> (Expo’s default config already includes it).</p></blockquote><h2 id="add-more%2C-on-demand" tabindex="-1">Add more, on demand</h2><p>Pull in any other component one at a time. Its source is copied into your <code>outDir</code>, and its dependencies are printed for you:</p><pre><code class="language-bash">npx @rukkiecodes/native add &lt;name&gt;
npx @rukkiecodes/native list          # see everything available
</code></pre><p>Useful flags: <code>--dir &lt;path&gt;</code> overrides the configured <code>outDir</code>; <code>--overwrite</code> replaces existing files.</p><h2 id="use-them" tabindex="-1">Use them</h2><pre><code class="language-tsx">import { Text } from &#39;./components/ui/text&#39;
import { Button } from &#39;./components/ui/button&#39;

export default function Screen() {
  return (
    &lt;&gt;
      &lt;Text.H1 color=&quot;primary&quot;&gt;Welcome&lt;/Text.H1&gt;
      &lt;Button gradientColors={[&#39;#195bff&#39;, &#39;#7d5fff&#39;]} onPress={save}&gt;
        &lt;Text color=&quot;#fff&quot; weight=&quot;bold&quot;&gt;
          Continue
        &lt;/Text&gt;
      &lt;/Button&gt;
    &lt;/&gt;
  )
}
</code></pre><p>Each component page shows its exact usage and props. Copy the component in and it runs in your Expo app straight away.</p><p>Next: <a href="/components">browse the components →</a></p><hr><p>Components are adapted from <a href="https://github.com/rit3zh/reacticx">reacticx</a> (MIT © rit3zh), rebranded for FusionUI.</p>`,20)])]))}};export{p as default};
