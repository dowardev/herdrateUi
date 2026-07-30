<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <div class="container">
    <header class="header">
      <h1>CodeBlock Demo</h1>
      <p class="subtitle">
        Componente
        <code>CodeBlock</code>
        de
        <code>@herdrate/vue</code>
        con
        <code>usePrettierFormatter()</code>
      </p>
    </header>

    <section class="section">
      <h2>Auto-formateo con Prettier</h2>
      <p class="section-desc">Snippets mal formateados → se formatean automáticamente al renderizar</p>

      <div class="demo-item">
        <h3>JavaScript (desordenado)</h3>
        <CodeBlock :code="snippets.messyJs" language="javascript" color="warning" :formatter="formatter" />
      </div>

      <div class="demo-item">
        <h3>TypeScript (desordenado)</h3>
        <CodeBlock :code="snippets.messyTs" language="typescript" color="tertiary" :formatter="formatter" />
      </div>

      <div class="demo-item">
        <h3>CSS (desordenado)</h3>
        <CodeBlock :code="snippets.messyCss" language="css" color="secondary" :formatter="formatter" />
      </div>

      <div class="demo-item">
        <h3>JSON (desordenado)</h3>
        <CodeBlock :code="snippets.messyJson" language="json" color="medium" :formatter="formatter" />
      </div>

      <div class="demo-item">
        <h3>HTML (desordenado)</h3>
        <CodeBlock :code="snippets.messyHtml" language="html" color="success" :formatter="formatter" />
      </div>

      <div class="demo-item">
        <h3>GraphQL (desordenado)</h3>
        <CodeBlock :code="snippets.messyGraphql" language="graphql" color="danger" :formatter="formatter" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { CodeBlock, usePrettierFormatter } from '@herdrate/vue'

const formatter = usePrettierFormatter()

const snippets = {
  messyJs: `const express = require('express')
	  const {createServer}=require('node:httpsss')
   const {readFile}   = require('node:fs/promises')
let app=express()
  app.get('/api/hello',async(req,res)=>{
const name = req.query.name||'world'
    res.json({message:'Hello, '+name+'!'})
})
  const server=createServer(app)
server.listen(3000,()=>{
console.log('running on port 3000')
	})`,

  messyTs: `interface User{id:string,name:string;email:string;role:"admin"|"editor"|"viewer";createdAt:Date}
function greet(u:User){
return 'Hello, '+u.name+'!'
	}
  const users:User[]=[]
function addUser(u:User){users.push(u)}
async function fetchUser(id:string){
const res=await fetch('/api/users/'+id)
  if(!res.ok)throw Error('not found')
return res.json()
}`,

  messyCss: `.container {width:100%;max-width:1200px;margin:0 auto;padding:0 1rem}
  .row{display:flex;flex-wrap:wrap
margin:0 -0.5rem}
.col{flex:1;padding:0 .5rem}
@media(max-width:768px){.row{flex-direction:column}
.col{flex:none;width:100%}
  }
.btn {
border:1px solid #ddd;border-radius:4px;padding:.5rem 1rem;cursor:pointer
}`,

  messyJson: `{ "name" : "my-app" ,"version":"1.0.0","private": true,
"dependencies"   : { "vue" : "^3.0.0","express" : "^4.18.0" },
"scripts":{ "dev" : "vite","build":"vite build" } }`,

  messyHtml: `<!DOCTYPE html>
<HTML>
<head>
    <meta charset="UTF-8">
  <title>  My Page</title>
  </head>
<BODY>
  <div  id='app'  >
  <h1>Hello world</h1>
<p  >This is a paragraph
      <span>with nested</span>   stuff</p>
    </div>
  </body>
</HTML>`,

  messyGraphql: `type Query {
    users(limit:Int,offset:Int): [User!]!
  }
type User {
id: ID!
  name:String!;email:String
}
input CreateUserInput{name:String!,email:String!}
type Mutation {
    createUser(input: CreateUserInput!): User!
}`,
}
</script>

<style>
:root {
  --color-primary: #cba6f7;
  --color-secondary: #89b4fa;
  --color-tertiary: #a6e3a1;
  --color-success: #a6e3a1;
  --color-warning: #f9e2af;
  --color-danger: #f38ba8;
  --color-light: #cdd6f4;
  --color-medium: #bac2de;
  --color-dark: #1e1e2e;
  --bg-primary: #1e1e2e;
  --bg-surface: #181825;
  --bg-elevated: #313244;
  --border: #45475a;
  --text-primary: #cdd6f4;
  --text-secondary: #a6adc8;
  --font-mono: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.header {
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.subtitle code {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  background: var(--bg-elevated);
  padding: 0.1em 0.4em;
  border-radius: 4px;
}

.section {
  margin-bottom: 3rem;
}

.section h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: 0.25rem;
}

.section-desc {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
}

.demo-item {
  margin-bottom: 2rem;
}

.demo-item h3 {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}
</style>
