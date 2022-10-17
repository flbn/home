/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

function Home() {

  const ascii = `  ___\n (o o)\n(  V  )\n -m-m-`
  return (
    <html>
      <head>
        <title>ollie</title>
      </head>
      <body>
        <pre><code>{ascii}</code></pre>
        <p>ollie.</p>
        <p>most days, i wish i could retreat into the forest. far, far away from any silicon.</p>
        <p>i am contra-<i>portfolio</i>; you may find my work amongst the <a href="https://en.wikipedia.org/wiki/Internet" target="_blank" rel="noopener" noreferrer><b><i>wreckage</i></b></a> -&gt; software is ephemeral, it will and must die. i am elsewhere, on <a href="https://twitter.com/soothshill" target="_blank" rel="noopener" noreferrer><b><i>tw</i></b></a>, <a href="https://github.com/flbn" target="_blank" rel="noopener" noreferrer><b><i>gh</i></b></a>, <a href="https://www.are.na/dwmbt" target="_blank" rel="noopener" noreferrer><b><i>arena</i></b></a>, and the <a href="https://en.wiktionary.org/wiki/rookery" target="_blank" rel="noopener" noreferrer><b><i>rookeries</i></b></a>.
        </p>
      </body>
    </html>
  );
}

function FourOhFour() {
  const ascii = `     .{{}}}}}}.\n    {{{{{{(\`)}}}.\n   {{{(\`)}}}}}}}}}\n  }}}}}}}}}{{(\`){{{\n  }}}}{{{{(\`)}}{{{{\n {{{(\`)}}}}}}}{}}}}}\n{{{{{{{{(\`)}}}}}}}}}}\n{{{{{{{}{{{{(\`)}}}}}}\n {{{{{(\`)   {{{{(\`)}'\n  \`""'" |   | "'"'\`\n  (\`)  /     \\ \n ~~~~~~~~~~~~~~~~~~~`
  return (
    <html>
      <head>
        <title>ollie</title>
      </head>
      <body>
        <pre><code>{ascii}</code></pre>
        <p>you are surrounded by the ~flora. after some time, you realize that now might be a good time to return <a href="/">home</a>. you also wonder, what if i lingered here for a little while longer?</p>
      </body>
    </html>
  );
}

function handler(req) {
  const { pathname } = new URL(req.url);

  if (pathname === '/') {
    const home = renderSSR(<Home/>);
    return new Response(home, {
      headers: { "content-type": "text/html" },
    });
  } else {
    const four_oh_four = renderSSR(<FourOhFour/>);
    return new Response(four_oh_four, {
      headers: { "content-type": "text/html" },
    });
  }
}

serve(handler);
