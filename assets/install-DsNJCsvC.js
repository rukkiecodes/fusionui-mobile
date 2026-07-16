import{o,a,g as n}from"./index-DMlCd50X.js";const i={class:"markdown-body"},p={__name:"install",setup(s,{expose:t}){return t({frontmatter:{}}),(d,e)=>(o(),a("div",i,[...e[0]||(e[0]=[n(`<h1 id="installation" tabindex="-1">Installation</h1><p><strong><code>@rukkiecodes/native</code></strong> is FusionUI for Expo + React Native — the same design language as the web, reimplemented for the phone. Add it to any Expo project.</p><h2 id="install" tabindex="-1">Install</h2><pre><code class="language-bash">npx expo install @shopify/react-native-skia react-native-reanimated expo-linear-gradient
npm i @rukkiecodes/native @rukkiecodes/tokens
# iOS 26 real Liquid Glass (optional):
npx expo install expo-glass-effect
</code></pre><p><code>react-native-reanimated</code> drives the press springs and the switch/focus transitions; <code>expo-linear-gradient</code> backs the <code>gradient</code> button variant (it falls back to a solid fill if absent); <code>@shopify/react-native-skia</code> renders the liquid glass.</p><blockquote><p><strong>Reanimated</strong> needs its Babel plugin. Add <code>react-native-reanimated/plugin</code> as the <strong>last</strong> entry in <code>babel.config.js</code> — Expo’s default config includes it.</p></blockquote><h2 id="usage" tabindex="-1">Usage</h2><p>Wrap your app in <code>FusionProvider</code> — the native counterpart of <code>createFusionUI</code>. It feeds the <code>@rukkiecodes/tokens</code> native output to every component:</p><pre><code class="language-tsx">import { FusionProvider, FButton, FCard, FInput } from &#39;@rukkiecodes/native&#39;

export default function App() {
  return (
    &lt;FusionProvider theme=&quot;light&quot;&gt;
      &lt;FCard&gt;
        &lt;FInput label=&quot;Email&quot; placeholder=&quot;you@example.com&quot; /&gt;
        &lt;FButton variant=&quot;elevated&quot; color=&quot;primary&quot; onPress={save}&gt;
          Save
        &lt;/FButton&gt;
      &lt;/FCard&gt;
    &lt;/FusionProvider&gt;
  )
}
</code></pre><h2 id="every-variant-runs-live" tabindex="-1">Every variant runs live</h2><p>Each component page carries a live <strong>Expo Snack</strong> per variant — a self-contained, pure-RN mirror so it runs without a build step, but every value still traces to <code>@rukkiecodes/tokens</code>. Edit inline in the browser, or press <em>My Device</em> and scan the QR with <a href="https://expo.dev/go">Expo Go</a> to run it on your phone. The press springs are <a href="https://docs.swmansion.com/react-native-reanimated/">Reanimated</a> and the liquid glass is <a href="https://shopify.github.io/react-native-skia/">Skia</a> — the same engines the package ships, so the feel matches the web.</p><p>Next: <a href="/components">browse the components →</a></p>`,12)])]))}};export{p as default};
