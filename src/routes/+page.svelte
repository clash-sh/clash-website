<script>
  import { onMount } from 'svelte';

  let isVisible = false;
  let copiedHook = false;
  let copiedPlugin = false;
  let copiedInstall = false;

  // Tab state
  let activeInstallTab = 'brew';
  let activeAgentTab = 'plugin';

  const installCommands = {
    brew: 'brew install clash-sh/tap/clash',
    shell: 'curl -fsSL https://clash.sh/install.sh | sh',
    cargo: 'cargo install clash-sh',
  };

  onMount(() => {
    isVisible = true;
  });

  function copyActiveInstall() {
    navigator.clipboard.writeText(installCommands[activeInstallTab]);
    copiedInstall = true;
    setTimeout(() => copiedInstall = false, 2000);
  }

  const hookConfig = `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write|Edit|MultiEdit",
        "hooks": [
          {
            "type": "command",
            "command": "clash check"
          }
        ]
      }
    ]
  }
}`;

  function copyHookCommand() {
    navigator.clipboard.writeText(hookConfig);
    copiedHook = true;
    setTimeout(() => copiedHook = false, 2000);
  }

  function copyPluginCommand() {
    navigator.clipboard.writeText('claude plugin marketplace add clash-sh/clash && claude plugin install clash@clash-sh');
    copiedPlugin = true;
    setTimeout(() => copiedPlugin = false, 2000);
  }
</script>

<svelte:head>
  <title>Clash - Avoid merge conflicts across git worktrees for parallel AI coding agents</title>
</svelte:head>

<main class="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-100">
  {#if isVisible}
  <div class="animate-slide-up">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="container mx-auto px-6 py-16 relative">
        <!-- Logo and Title -->
        <div class="text-center mb-12">
          <img src="/logo.png" alt="Clash" class="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 drop-shadow-2xl" />
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            Clash
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-6 px-4">
            Stop merge conflicts before they happen. Built for parallel AI coding agents.
          </p>

          <!-- Badges -->
          <div class="flex justify-center gap-3 mb-8 flex-wrap">
            <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License" class="h-5" />
            <img src="https://img.shields.io/badge/Rust-1.93+-orange.svg" alt="Rust 1.93+" class="h-5" />
            <img src="https://img.shields.io/crates/v/clash-sh.svg" alt="crates.io version" class="h-5" />
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 px-4 sm:px-0">
            <a
              href="#getting-started"
              class="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base"
            >
              Get Started
            </a>
            <a
              href="https://github.com/clash-sh/clash"
              target="_blank"
              class="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors font-semibold text-sm sm:text-base"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Star on GitHub
            </a>
            <a
              href="#demos"
              class="px-5 py-2.5 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors font-semibold text-sm sm:text-base text-center"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Statement -->
    <section class="py-16 bg-gray-950/50">
      <div class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl font-bold mb-8 text-center">The Problem</h2>

        <div class="bg-gray-900/30 rounded-xl p-8 mb-8 border border-gray-800">
          <p class="text-lg mb-4">
            When multiple AI agents work in separate git worktrees, they're <strong class="text-white">blind to each other's changes</strong>.
          </p>
          <p class="text-lg">
            Conflicts only surface at feature completion, often after significant work is wasted.
          </p>
        </div>

        <!-- Developer Quotes Grid -->
        <div class="text-center text-gray-500 text-sm mb-4">What developers are saying about this problem:</div>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
            <p class="text-sm text-gray-400 italic">
              "Now you have created the fun new ability to create merge conflicts with yourself."
            </p>
            <p class="text-xs text-gray-600 mt-2">— GitButler Blog</p>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
            <p class="text-sm text-gray-400 italic">
              "I now know to expect potential conflicts. This happened to me recently..."
            </p>
            <p class="text-xs text-gray-600 mt-2">— Developer on Medium</p>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
            <p class="text-sm text-gray-400 italic">
              "If conflicts look tricky, I throw away the work."
            </p>
            <p class="text-xs text-gray-600 mt-2">— Developer workflow</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution -->
    <section class="py-16">
      <div class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl font-bold mb-8 text-center">The Solution</h2>

        <div class="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
          <p class="text-lg mb-4">
            Clash detects conflicts <strong class="text-white">between all worktree pairs</strong> during development — entirely on your local machine.
          </p>

          <div class="grid md:grid-cols-2 gap-4 mt-6">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <strong>Guard file writes via hooks</strong>
                <p class="text-sm text-gray-400">Automatic conflict check before every AI agent edit</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <strong>See conflicts instantly</strong>
                <p class="text-sm text-gray-400">Across all active worktrees</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <div>
                <strong>Visualize conflict matrix</strong>
                <p class="text-sm text-gray-400">See which branches conflict</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <strong>Monitor in real-time</strong>
                <p class="text-sm text-gray-400">As files change</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <div>
                <strong>Integrate with AI agents</strong>
                <p class="text-sm text-gray-400">Via hooks, CLAUDE.md instructions, or JSON output</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Demos -->
    <section id="demos" class="py-16 bg-gray-950/50">
      <div class="container mx-auto px-6 max-w-6xl">
        <h2 class="text-3xl font-bold mb-8 text-center">See It In Action</h2>

        <!-- Main Demo — Hook Integration -->
        <div class="mb-12">
          <div class="rounded-xl overflow-hidden border border-gray-800 bg-black">
            <div class="bg-gray-900 px-4 py-2 border-b border-gray-800">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <span class="ml-2 text-sm text-gray-400">Claude Code + Clash Hook</span>
              </div>
            </div>
            <img
              src="/demos/clash-check-hook-demo.gif"
              alt="Clash hook fires before Claude Code writes a conflicting file"
              class="w-full"
            />
          </div>
          <p class="text-center text-base text-gray-400 mt-3">
            Automatic conflict detection — Clash prompts you before a conflicting edit goes through
          </p>
        </div>

        <!-- Demo Grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="rounded-xl overflow-hidden border border-gray-800 bg-black">
            <div class="bg-gray-900 px-4 py-2 border-b border-gray-800">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <span class="ml-2 text-sm text-gray-400">Claude Code + Clash CLI</span>
              </div>
            </div>
            <img
              src="/demos/claude-using-clash-demo.gif"
              alt="Clash alerts Claude Code to conflicts in another worktree"
              class="w-full"
            />
          </div>

          <div class="rounded-xl overflow-hidden border border-gray-800 bg-black">
            <div class="bg-gray-900 px-4 py-2 border-b border-gray-800">
              <span class="text-sm text-gray-400">Status Command</span>
            </div>
            <img
              src="/demos/clash-status-demo-short.gif"
              alt="Status demo"
              class="w-full"
            />
          </div>
        </div>

        <!-- Watch Mode -->
        <div class="mt-6 rounded-xl overflow-hidden border border-gray-800 bg-black">
          <div class="bg-gray-900 px-4 py-2 border-b border-gray-800">
            <span class="text-sm text-gray-400">Watch Mode</span>
          </div>
          <img
            src="/demos/clash-watch-realtime-demo.gif"
            alt="Watch mode"
            class="w-full"
          />
        </div>

        <!-- Conflict Matrix Preview -->
        <div class="mt-8 bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h3 class="text-lg font-semibold mb-4">Conflict Matrix Output</h3>
          <pre class="text-sm text-gray-400 overflow-x-auto"><code>╔════════════ Conflict Matrix ════════════╗
║            │ main  feat/a  feat/b  feat/c║
╟────────────┼─────────────────────────────╢
║main        │  -     <span class="text-gray-300">OK</span>      <span class="text-gray-300">OK</span>      <span class="text-gray-300">OK</span>   ║
║feature/a   │  <span class="text-gray-300">OK</span>     -      <span class="text-yellow-600">2</span>       <span class="text-yellow-600">1</span>    ║
║feature/b   │  <span class="text-gray-300">OK</span>     <span class="text-yellow-600">2</span>      -       <span class="text-orange-600">3</span>    ║
║feature/c   │  <span class="text-gray-300">OK</span>     <span class="text-yellow-600">1</span>      <span class="text-orange-600">3</span>       -    ║
╚══════════════════════════════════════════╝</code></pre>
        </div>
      </div>
    </section>

    <!-- Getting Started -->
    <section id="getting-started" class="py-16">
      <div class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl font-bold mb-10 text-center">Getting Started</h2>

        <!-- Step 1: Install Clash -->
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4">1. Install Clash</h3>

          <!-- Tabs -->
          <div class="flex gap-1 mb-4 bg-gray-900/50 rounded-lg p-1 w-fit">
            <button
              on:click={() => { activeInstallTab = 'brew'; copiedInstall = false; }}
              class="px-4 py-2 rounded-md text-sm font-medium transition-colors {activeInstallTab === 'brew' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-gray-200'}"
            >
              Homebrew
            </button>
            <button
              on:click={() => { activeInstallTab = 'shell'; copiedInstall = false; }}
              class="px-4 py-2 rounded-md text-sm font-medium transition-colors {activeInstallTab === 'shell' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-gray-200'}"
            >
              Shell Script
            </button>
            <button
              on:click={() => { activeInstallTab = 'cargo'; copiedInstall = false; }}
              class="px-4 py-2 rounded-md text-sm font-medium transition-colors {activeInstallTab === 'cargo' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-gray-200'}"
            >
              Cargo
            </button>
          </div>

          <!-- Code block -->
          <div class="bg-gray-900 rounded-xl border border-gray-800">
            <div class="flex items-center justify-between px-4 py-3">
              <code class="font-mono text-sm text-gray-300">{installCommands[activeInstallTab]}</code>
              <button
                on:click={copyActiveInstall}
                class="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-xs flex-shrink-0 ml-4"
              >
                {copiedInstall ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        </div>

        <!-- Step 2: Connect to your AI agent -->
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4">2. Connect to your AI agent</h3>

          <!-- Tabs -->
          <div class="flex gap-1 mb-4 bg-gray-900/50 rounded-lg p-1 w-fit">
            <button
              on:click={() => activeAgentTab = 'plugin'}
              class="px-4 py-2 rounded-md text-sm font-medium transition-colors {activeAgentTab === 'plugin' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-gray-200'}"
            >
              Claude Code Plugin
            </button>
            <button
              on:click={() => activeAgentTab = 'hook'}
              class="px-4 py-2 rounded-md text-sm font-medium transition-colors {activeAgentTab === 'hook' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-gray-200'}"
            >
              Manual Hook
            </button>
            <button
              on:click={() => activeAgentTab = 'other'}
              class="px-4 py-2 rounded-md text-sm font-medium transition-colors {activeAgentTab === 'other' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-gray-200'}"
            >
              Other Agents
            </button>
          </div>

          <!-- Tab content -->
          {#if activeAgentTab === 'plugin'}
            <div class="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs bg-green-950/50 text-green-400 px-2 py-0.5 rounded border border-green-900/50">Recommended</span>
              </div>
              <p class="text-gray-400 mb-4">
                Install the Clash plugin — it automatically checks for conflicts before every Write/Edit:
              </p>

              <div class="relative">
                <pre class="bg-black/50 rounded-lg p-4 text-sm overflow-x-auto font-mono"><code><span class="text-green-500">$</span> <span class="text-gray-300">claude plugin marketplace add clash-sh/clash</span>
<span class="text-green-500">$</span> <span class="text-gray-300">claude plugin install clash@clash-sh</span></code></pre>
                <button
                  on:click={copyPluginCommand}
                  class="absolute top-3 right-3 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-xs"
                >
                  {copiedPlugin ? 'Copied' : 'Copy'}
                </button>
              </div>

              <p class="text-sm text-gray-500 mt-3">
                That's it. Clash will prompt you whenever Claude tries to edit a file that conflicts with another worktree.
              </p>
            </div>
          {:else if activeAgentTab === 'hook'}
            <div class="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <p class="text-gray-400 mb-4">
                Add the <code class="bg-gray-800 px-2 py-1 rounded text-sm">hooks</code> key to your
                <code class="bg-gray-800 px-2 py-1 rounded text-sm">.claude/settings.json</code>:
              </p>

              <div class="relative">
                <pre class="bg-black/50 rounded-lg p-4 text-sm overflow-x-auto font-mono"><code><span class="text-gray-500">&#123;</span>
  <span class="text-purple-400">"hooks"</span><span class="text-gray-500">:</span> <span class="text-gray-500">&#123;</span>
    <span class="text-purple-400">"PreToolUse"</span><span class="text-gray-500">:</span> <span class="text-gray-500">[</span>
      <span class="text-gray-500">&#123;</span>
        <span class="text-purple-400">"matcher"</span><span class="text-gray-500">:</span> <span class="text-green-400">"Write|Edit|MultiEdit"</span><span class="text-gray-500">,</span>
        <span class="text-purple-400">"hooks"</span><span class="text-gray-500">:</span> <span class="text-gray-500">[</span>
          <span class="text-gray-500">&#123;</span>
            <span class="text-purple-400">"type"</span><span class="text-gray-500">:</span> <span class="text-green-400">"command"</span><span class="text-gray-500">,</span>
            <span class="text-purple-400">"command"</span><span class="text-gray-500">:</span> <span class="text-green-400">"clash check"</span>
          <span class="text-gray-500">&#125;</span>
        <span class="text-gray-500">]</span>
      <span class="text-gray-500">&#125;</span>
    <span class="text-gray-500">]</span>
  <span class="text-gray-500">&#125;</span>
<span class="text-gray-500">&#125;</span></code></pre>
                <button
                  on:click={copyHookCommand}
                  class="absolute top-3 right-3 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-xs"
                >
                  {copiedHook ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          {:else}
            <div class="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <p class="text-gray-400 mb-4">
                Add to your project instructions
                (<code class="bg-gray-800 px-2 py-1 rounded text-sm">.cursorrules</code>, <code class="bg-gray-800 px-2 py-1 rounded text-sm">AGENTS.md</code>, etc.):
              </p>

              <div class="bg-black/50 rounded-lg p-4 text-sm text-gray-400 font-mono space-y-2">
                <p>IMPORTANT: Before editing any file, run <code class="text-gray-300">`clash check &lt;file&gt;`</code> to check for merge conflicts with other worktrees. If conflicts are detected, examine the conflicting files and adapt your approach to avoid or minimize them.</p>
                <p>Run <code class="text-gray-300">`clash status`</code> periodically (especially before and after commits) to get a full conflict overview across all worktrees.</p>
              </div>
            </div>
          {/if}
        </div>

        <!-- What Your Agent Sees -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold mb-4">What Your Agent Sees</h3>
          <p class="text-gray-400 mb-4">
            When conflicts are detected, <code class="bg-gray-800 px-2 py-1 rounded text-sm">clash check</code> returns structured JSON:
          </p>

          <div class="rounded-xl overflow-hidden border border-gray-800 bg-black">
            <div class="bg-gray-900 px-4 py-2 border-b border-gray-800">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <span class="ml-2 text-sm text-gray-400">clash check src/main.rs</span>
              </div>
            </div>
            <pre class="p-4 text-sm overflow-x-auto font-mono"><code><span class="text-gray-500">&#123;</span>
  <span class="text-purple-400">"file"</span><span class="text-gray-500">:</span> <span class="text-green-400">"src/main.rs"</span><span class="text-gray-500">,</span>
  <span class="text-purple-400">"has_conflicts"</span><span class="text-gray-500">:</span> <span class="text-amber-400">true</span><span class="text-gray-500">,</span>
  <span class="text-purple-400">"conflicts"</span><span class="text-gray-500">:</span> <span class="text-gray-500">[</span>
    <span class="text-gray-500">&#123;</span>
      <span class="text-purple-400">"worktree"</span><span class="text-gray-500">:</span> <span class="text-green-400">"feature/auth"</span><span class="text-gray-500">,</span>
      <span class="text-purple-400">"conflicting_files"</span><span class="text-gray-500">:</span> <span class="text-gray-500">[</span><span class="text-green-400">"src/main.rs"</span><span class="text-gray-500">,</span> <span class="text-green-400">"src/lib.rs"</span><span class="text-gray-500">]</span>
    <span class="text-gray-500">&#125;</span>
  <span class="text-gray-500">]</span>
<span class="text-gray-500">&#125;</span></code></pre>
          </div>

          <div class="mt-4 flex flex-wrap gap-3 text-xs font-mono">
            <span class="bg-green-950/50 text-green-400 px-3 py-1.5 rounded-lg border border-green-900/50">Exit 0 — no conflicts</span>
            <span class="bg-amber-950/50 text-amber-400 px-3 py-1.5 rounded-lg border border-amber-900/50">Exit 2 — conflicts found</span>
            <span class="bg-red-950/50 text-red-400 px-3 py-1.5 rounded-lg border border-red-900/50">Exit 1 — error</span>
          </div>
        </div>

        <!-- Multiple Agents Demo -->
        <div class="rounded-xl overflow-hidden border border-gray-800">
          <img
            src="/demos/multi-agent-clash-demo-v1.gif"
            alt="Multiple agents working with Clash"
            class="w-full"
          />
          <p class="text-center text-base text-gray-400 mt-3 mb-3">
            Multiple AI agents coordinating across worktrees with Clash
          </p>
        </div>
      </div>
    </section>

    <!-- Basic Commands -->
    <section id="commands" class="py-16">
      <div class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl font-bold mb-8 text-center">Basic Commands</h2>

        <div class="rounded-xl overflow-hidden border border-gray-800">
          <div class="bg-gray-900 px-4 py-2 border-b border-gray-800">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
              <span class="ml-2 text-sm text-gray-400">Terminal</span>
            </div>
          </div>
          <div class="bg-black/80 p-6">
            <div class="space-y-1 font-mono text-sm">
              <div class="group flex items-baseline gap-0 py-1.5 px-2 rounded hover:bg-gray-900/50 transition-colors">
                <span class="text-green-500">$</span>
                <span class="ml-2 text-gray-300 group-hover:text-white transition-colors">clash check src/main.rs</span>
                <span class="text-gray-600 ml-4"># Check a single file</span>
              </div>
              <div class="group flex items-baseline gap-0 py-1.5 px-2 rounded hover:bg-gray-900/50 transition-colors">
                <span class="text-green-500">$</span>
                <span class="ml-2 text-gray-300 group-hover:text-white transition-colors">clash status</span>
                <span class="text-gray-600 ml-4"># Conflict matrix</span>
              </div>
              <div class="group flex items-baseline gap-0 py-1.5 px-2 rounded hover:bg-gray-900/50 transition-colors">
                <span class="text-green-500">$</span>
                <span class="ml-2 text-gray-300 group-hover:text-white transition-colors">clash status --json</span>
                <span class="text-gray-600 ml-4"># JSON for AI agents</span>
              </div>
              <div class="group flex items-baseline gap-0 py-1.5 px-2 rounded hover:bg-gray-900/50 transition-colors">
                <span class="text-green-500">$</span>
                <span class="ml-2 text-gray-300 group-hover:text-white transition-colors">clash watch</span>
                <span class="text-gray-600 ml-4"># Real-time monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section id="use-cases" class="py-16 bg-gray-950/50">
      <div class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl font-bold mb-8 text-center">Use Cases</h2>

        <div class="space-y-6">
          <!-- AI Agent Orchestrators -->
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg">AI Agent Orchestrators</h3>
                <p class="text-sm text-gray-400 mt-1">Route agents around conflicts using JSON output</p>
              </div>
            </div>
            <div class="rounded-xl overflow-hidden border border-gray-800">
              <div class="bg-gray-900 px-4 py-2 border-b border-gray-800">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  <span class="ml-2 text-sm text-gray-400">orchestrator.sh</span>
                </div>
              </div>
              <pre class="bg-black/80 p-4 text-sm overflow-x-auto font-mono"><code><span class="text-gray-500"># Query conflicts as structured data</span>
<span class="text-green-400">conflicts</span><span class="text-gray-300">=$(</span><span class="text-gray-300">clash status --json | jq '.conflicts'</span><span class="text-gray-300">)</span>

<span class="text-purple-400">if</span> <span class="text-gray-300">[ "$conflicts" != "[]" ]; </span><span class="text-purple-400">then</span>
  <span class="text-gray-500"># Re-assign agent to non-conflicting files</span>
  <span class="text-gray-300">reassign_agent "$conflicts"</span>
<span class="text-purple-400">fi</span></code></pre>
            </div>
          </div>

          <!-- Human Teams -->
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg">Human Teams</h3>
                <p class="text-sm text-gray-400 mt-1">Catch conflicts before they reach your PR</p>
              </div>
            </div>
            <div class="rounded-xl overflow-hidden border border-gray-800">
              <div class="bg-gray-900 px-4 py-2 border-b border-gray-800">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  <span class="ml-2 text-sm text-gray-400">.git/hooks/pre-commit</span>
                </div>
              </div>
              <pre class="bg-black/80 p-4 text-sm overflow-x-auto font-mono"><code><span class="text-gray-500">#!/bin/bash</span>
<span class="text-gray-500"># Block commits that would conflict</span>
<span class="text-purple-400">if</span> <span class="text-gray-300">! clash status --quiet; </span><span class="text-purple-400">then</span>
  <span class="text-gray-300">echo </span><span class="text-green-400">"Conflicts detected. Run 'clash status' for details."</span>
  <span class="text-purple-400">exit</span> <span class="text-amber-400">1</span>
<span class="text-purple-400">fi</span></code></pre>
            </div>
          </div>

          <!-- CI/CD Pipelines -->
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg">CI/CD Pipelines</h3>
                <p class="text-sm text-gray-400 mt-1">Fail early when branches would conflict on merge</p>
              </div>
            </div>
            <div class="rounded-xl overflow-hidden border border-gray-800">
              <div class="bg-gray-900 px-4 py-2 border-b border-gray-800">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  <span class="ml-2 text-sm text-gray-400">.github/workflows/conflicts.yml</span>
                </div>
              </div>
              <pre class="bg-black/80 p-4 text-sm overflow-x-auto font-mono"><code><span class="text-purple-400">name</span><span class="text-gray-500">:</span> <span class="text-green-400">Conflict Check</span>
<span class="text-purple-400">on</span><span class="text-gray-500">:</span> <span class="text-gray-500">[</span><span class="text-green-400">pull_request</span><span class="text-gray-500">]</span>
<span class="text-purple-400">jobs</span><span class="text-gray-500">:</span>
  <span class="text-purple-400">check</span><span class="text-gray-500">:</span>
    <span class="text-purple-400">runs-on</span><span class="text-gray-500">:</span> <span class="text-green-400">ubuntu-latest</span>
    <span class="text-purple-400">steps</span><span class="text-gray-500">:</span>
      <span class="text-gray-500">-</span> <span class="text-purple-400">run</span><span class="text-gray-500">:</span> <span class="text-green-400">clash status --quiet</span></code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section id="how-it-works" class="py-16">
      <div class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl font-bold mb-8 text-center">How It Works</h2>

        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <p class="mb-6">
            Clash uses <code class="bg-gray-800 px-2 py-1 rounded">git merge-tree</code> to simulate merges
            <strong>without modifying your repository</strong>.
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="flex gap-3">
                <span class="w-7 h-7 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 text-sm font-semibold flex-shrink-0">1</span>
                <div>
                  <strong>Discovers worktrees</strong>
                  <p class="text-sm text-gray-400">Main + all linked worktrees</p>
                </div>
              </div>
              <div class="flex gap-3">
                <span class="w-7 h-7 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 text-sm font-semibold flex-shrink-0">2</span>
                <div>
                  <strong>Finds merge base</strong>
                  <p class="text-sm text-gray-400">For each worktree pair</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex gap-3">
                <span class="w-7 h-7 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-sm font-semibold flex-shrink-0">3</span>
                <div>
                  <strong>Simulates merge</strong>
                  <p class="text-sm text-gray-400">Detects conflicts in memory</p>
                </div>
              </div>
              <div class="flex gap-3">
                <span class="w-7 h-7 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400 text-sm font-semibold flex-shrink-0">4</span>
                <div>
                  <strong>Reports conflicts</strong>
                  <p class="text-sm text-gray-400">Shows conflicting files</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 p-4 bg-gray-900/30 rounded-lg border border-gray-800">
            <p class="text-center text-gray-300 font-semibold">
              Runs 100% locally · No data leaves your machine · Read-only operations
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-16 bg-gray-950/50">
      <div class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl font-bold mb-8 text-center">FAQ</h2>

        <div class="space-y-4">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="font-semibold text-lg mb-2">Does Clash modify my repository?</h3>
            <p class="text-gray-400">
              Never. Clash is 100% read-only. It uses <code class="bg-gray-800 px-2 py-1 rounded text-sm">git merge-tree</code> to simulate merges in memory without touching your working directory, staging area, or any git refs.
            </p>
          </div>

          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="font-semibold text-lg mb-2">Can it resolve conflicts automatically?</h3>
            <p class="text-gray-400">
              Not yet — Clash focuses on early detection so you can adjust course before conflicts grow. Automatic resolution is on the roadmap but conflict prevention is often more valuable than conflict resolution.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-gray-900">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="flex items-center gap-3 mb-4 md:mb-0">
            <img src="/logo.png" alt="Clash" class="w-8 h-8" />
            <span class="font-semibold">Clash</span>
          </div>

          <div class="flex flex-wrap gap-4 sm:gap-6 text-sm justify-center md:justify-start">
            <a href="https://github.com/clash-sh/clash" class="hover:text-white transition">
              GitHub
            </a>
            <a href="https://github.com/clash-sh/clash/issues" class="hover:text-white transition">
              Issues
            </a>
            <a href="https://github.com/clash-sh/clash/blob/main/CONTRIBUTING.md" class="hover:text-white transition">
              Contributing
            </a>
            <a href="mailto:support@clash.sh" class="hover:text-white transition">
              Support
            </a>
          </div>
        </div>

        <div class="text-center text-sm text-gray-500 mt-8">
          <div class="mb-2">
            <span class="text-blue-400/70">100% Local</span> ·
            <span class="text-purple-400/70">MIT License</span> ·
            <span class="text-orange-400/70">Built with Rust</span>
          </div>
          <div>Made with ❤️ and Claude</div>
        </div>
      </div>
    </footer>
  </div>
  {/if}
</main>
