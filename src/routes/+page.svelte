<script>
  import { onMount } from 'svelte';

  let isVisible = false;

  onMount(() => {
    isVisible = true;
  });
</script>

<svelte:head>
  <title>Clash - Manage merge conflicts across git worktrees for parallel AI coding agents</title>
</svelte:head>

<main class="min-h-screen bg-gray-950 text-gray-100">
  {#if isVisible}
  <div class="animate-slide-up">
    <!-- Header -->
    <header class="container mx-auto px-6 py-12">
      <div class="flex items-center justify-center mb-8">
        <img src="/logo.png" alt="Clash" class="w-24 h-24" />
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">⚔️ Clash</h1>
      <p class="text-xl text-center text-gray-400 max-w-3xl mx-auto">
        <strong><em>Manage merge conflicts across git worktrees for parallel AI coding agents</em></strong>
      </p>

      <div class="flex justify-center gap-4 mt-6">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License" />
        <img src="https://img.shields.io/badge/Rust-1.93+-orange.svg" alt="Rust 1.93+" />
        <img src="https://img.shields.io/badge/Status-v0.1.0-yellow.svg" alt="v0.1.0" />
      </div>
    </header>

    <!-- Main Content -->
    <div class="container mx-auto px-6 pb-20 max-w-4xl">
      <!-- Intro -->
      <section class="mb-16">
        <p class="text-lg text-gray-300 mb-6">
          Clash is an open-source CLI tool that helps manage/avoid merge conflicts across git worktrees.
        </p>
        <p class="text-lg text-gray-300">
          It's designed for developers running multiple AI coding agents (Claude Code, Codex, etc.) in parallel,
          enabling them to identify potential conflicts early on in the development process.
        </p>
      </section>

      <!-- Main Demo -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Clash in Action</h2>
        <div class="rounded-lg overflow-hidden border border-gray-800">
          <img
            src="/demos/claude-using-clash-demo.gif"
            alt="Clash alerts Claude Code to conflicts"
            class="w-full"
          />
        </div>
        <p class="text-sm text-gray-400 mt-3 italic">
          Clash alerts Claude Code to conflicts in another worktree, enabling smarter parallel development
        </p>
      </section>

      <!-- Quick Start -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Quick Start</h2>

        <h3 class="text-xl font-semibold mb-4">Installation</h3>
        <div class="space-y-4 mb-8">
          <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
            <span class="text-gray-500"># Quick install (macOS/Linux)</span><br/>
            <span class="text-green-400">$</span> curl -fsSL https://clash.sh/install.sh | sh
          </div>

          <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
            <span class="text-gray-500"># Homebrew (macOS/Linux)</span><br/>
            <span class="text-green-400">$</span> brew tap clash-sh/tap<br/>
            <span class="text-green-400">$</span> brew install clash
          </div>

          <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
            <span class="text-gray-500"># From crates.io</span><br/>
            <span class="text-green-400">$</span> cargo install clash-sh
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-4">Basic Usage</h3>
        <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm mb-6">
          <span class="text-gray-500"># Check conflicts across all worktrees</span><br/>
          <span class="text-green-400">$</span> clash status<br/><br/>

          <span class="text-gray-500"># Output as JSON for scripts/agents</span><br/>
          <span class="text-green-400">$</span> clash status --json<br/><br/>

          <span class="text-gray-500"># Watch for conflicts in real-time</span><br/>
          <span class="text-green-400">$</span> clash watch
        </div>

        <img
          src="/demos/clash-status-demo-short.gif"
          alt="clash status demo"
          class="w-full rounded-lg border border-gray-800"
        />
      </section>

      <!-- Core Features -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Core Features</h2>

        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-3">Status Command</h3>
            <p class="text-gray-300 mb-4">Shows a beautiful conflict matrix for all worktree pairs:</p>
            <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre class="text-gray-100">╔════════════ Conflict Matrix ════════════╗
║            │ main  feat/a  feat/b  feat/c║
╟────────────┼─────────────────────────────╢
║main        │  -     OK      OK      OK   ║
║feature/a   │  OK     -      2       1    ║
║feature/b   │  OK     2      -       3    ║
║feature/c   │  OK     1      3       -    ║
╚══════════════════════════════════════════╝</pre>
            </div>
            <p class="text-sm text-gray-400 mt-2">Numbers indicate conflicting files. "OK" means no conflicts.</p>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-3">Watch Mode</h3>
            <p class="text-gray-300 mb-4">Live monitoring with automatic refresh on file changes:</p>
            <img
              src="/demos/clash-watch-realtime-demo.gif"
              alt="Watch mode demo"
              class="w-full rounded-lg border border-gray-800"
            />
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-3">JSON Output</h3>
            <p class="text-gray-300 mb-4">Machine-readable output for CI/CD and AI agents:</p>
            <img
              src="/demos/clash-status-json-demo.gif"
              alt="JSON output demo"
              class="w-full rounded-lg border border-gray-800"
            />
          </div>
        </div>
      </section>

      <!-- Multiple Agents Demo -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Coordinating Multiple AI Agents</h2>
        <img
          src="/demos/multi-agent-clash-demo-v1.gif"
          alt="Multiple agents coordination"
          class="w-full rounded-lg border border-gray-800 mb-4"
        />
        <p class="text-sm text-gray-400 italic">
          Multiple AI agents working in parallel with Clash coordination - each agent works independently while monitoring for conflicts
        </p>
      </section>

      <!-- For AI Agents -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6">For Claude Code / Cursor / Windsurf</h2>
        <p class="text-gray-300 mb-4">Add to your project instructions or <code class="bg-gray-800 px-2 py-1 rounded">.claude/instructions.md</code>:</p>
        <div class="bg-gray-900 rounded-lg p-6 text-gray-300">
          <p class="mb-4">
            After each commit, run <code class="bg-gray-800 px-2 py-1 rounded">clash status --json</code> to check for merge conflicts with other worktrees.
            If conflicts are detected, examine the conflicting files in those worktrees and adapt your
            approach to avoid or minimize conflicts. This prevents wasted work from incompatible changes.
          </p>
          <p class="font-semibold mb-2">Example workflow:</p>
          <ol class="list-decimal list-inside space-y-1">
            <li>Make changes and commit</li>
            <li>Run: clash status --json</li>
            <li>If conflicts found: Review the conflicting worktree's changes</li>
            <li>Adapt your implementation to work with their changes</li>
          </ol>
        </div>
      </section>

      <!-- How It Works -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6">How It Works</h2>
        <p class="text-gray-300 mb-4">
          Clash uses <code class="bg-gray-800 px-2 py-1 rounded">git merge-tree</code> (via the gix library) to perform three-way merges between worktree pairs
          <strong>without modifying your repository</strong>. It:
        </p>
        <ol class="list-decimal list-inside space-y-2 text-gray-300">
          <li>Discovers all worktrees (main + linked)</li>
          <li>For each pair, finds the merge base</li>
          <li>Simulates merge to detect conflicts</li>
          <li>Reports conflicting files</li>
        </ol>
        <p class="text-gray-300 mt-4">
          This is <strong>100% read-only</strong> — your repository is never modified.
        </p>
      </section>

      <!-- Links -->
      <section class="border-t border-gray-800 pt-8">
        <div class="flex justify-center gap-6 text-lg">
          <a href="https://github.com/clash-sh/clash" class="text-red-400 hover:text-red-300 transition">
            GitHub
          </a>
          <a href="https://github.com/clash-sh/clash/issues" class="text-red-400 hover:text-red-300 transition">
            Issues
          </a>
          <a href="mailto:support@clash.sh" class="text-red-400 hover:text-red-300 transition">
            Support
          </a>
        </div>
        <p class="text-center text-gray-500 mt-6">
          MIT License · Built with Love, Rust & Claude
        </p>
      </section>
    </div>
  </div>
  {/if}
</main>