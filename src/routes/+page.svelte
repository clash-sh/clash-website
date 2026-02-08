<script>
  import { onMount } from 'svelte';

  let isVisible = false;
  let copied = false;
  let copiedBrew = false;
  let copiedHook = false;

  onMount(() => {
    isVisible = true;
  });

  function copyInstallCommand() {
    navigator.clipboard.writeText('curl -fsSL https://clash.sh/install.sh | sh');
    copied = true;
    setTimeout(() => copied = false, 2000);
  }

  function copyBrewCommand() {
    navigator.clipboard.writeText('brew install clash-sh/tap/clash');
    copiedBrew = true;
    setTimeout(() => copiedBrew = false, 2000);
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
            <img src="https://img.shields.io/badge/Status-v0.1.0-yellow.svg" alt="v0.1.0" class="h-5" />
          </div>

          <!-- Installation -->
          <div class="max-w-3xl mx-auto mb-8 px-4 sm:px-0">
            <!-- Homebrew -->
            <div class="bg-gray-900/50 backdrop-blur rounded-xl p-4 border border-gray-800 mb-3">
              <p class="text-xs text-gray-500 mb-2 uppercase tracking-wider">Install via Homebrew</p>
              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <code class="flex-1 bg-black/50 px-3 py-2 rounded-lg font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
                  brew install clash-sh/tap/clash
                </code>
                <button
                  on:click={copyBrewCommand}
                  class="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm whitespace-nowrap"
                >
                  {copiedBrew ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <!-- OR divider -->
            <div class="text-center text-gray-600 text-sm mb-3">or</div>

            <!-- Shell Script -->
            <div class="bg-gray-900/50 backdrop-blur rounded-xl p-4 border border-gray-800">
              <p class="text-xs text-gray-500 mb-2 uppercase tracking-wider">Install via Shell Script</p>
              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <code class="flex-1 bg-black/50 px-3 py-2 rounded-lg font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
                  curl -fsSL https://clash.sh/install.sh | sh
                </code>
                <button
                  on:click={copyInstallCommand}
                  class="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm whitespace-nowrap"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 px-4 sm:px-0">
            <a
              href="https://github.com/clash-sh/clash"
              target="_blank"
              class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base"
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
            <a
              href="https://github.com/clash-sh/clash/blob/main/README.md"
              target="_blank"
              class="px-5 py-2.5 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors font-semibold text-sm sm:text-base text-center"
            >
              Documentation
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
              <span class="text-gray-400 text-xl">•</span>
              <div>
                <strong>Guard file writes via hooks</strong>
                <p class="text-sm text-gray-400">Automatic conflict check before every AI agent edit</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-gray-400 text-xl">•</span>
              <div>
                <strong>See conflicts instantly</strong>
                <p class="text-sm text-gray-400">Across all active worktrees</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-gray-400 text-xl">•</span>
              <div>
                <strong>Visualize conflict matrix</strong>
                <p class="text-sm text-gray-400">See which branches conflict</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-gray-400 text-xl">•</span>
              <div>
                <strong>Monitor in real-time</strong>
                <p class="text-sm text-gray-400">As files change</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-gray-400 text-xl">•</span>
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

    <!-- Installation -->
    <section class="py-16">
      <div class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl font-bold mb-8 text-center">Installation Options</h2>

        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 class="font-semibold mb-3">Quick Install</h3>
            <code class="text-xs bg-black/50 px-3 py-2 rounded block text-gray-300">
              curl -fsSL https://clash.sh/install.sh | sh
            </code>
          </div>

          <div class="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 class="font-semibold mb-3">Homebrew</h3>
            <code class="text-xs bg-black/50 px-3 py-2 rounded block text-gray-300">
              brew tap clash-sh/tap<br/>
              brew install clash
            </code>
          </div>

          <div class="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 class="font-semibold mb-3">Cargo</h3>
            <code class="text-xs bg-black/50 px-3 py-2 rounded block text-gray-300">
              cargo install clash-sh
            </code>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Integration -->
    <section class="py-16 bg-gray-950/50">
      <div class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl font-bold mb-8 text-center">AI Agent Integration</h2>

        <!-- Claude Code Hook (Recommended) -->
        <div class="bg-gray-900 rounded-xl p-8 border border-gray-800">
          <h3 class="font-semibold mb-2">Claude Code — Hook Integration (Recommended)</h3>
          <p class="text-gray-400 mb-4">
            Add the <code class="bg-gray-800 px-2 py-1 rounded text-sm">hooks</code> key to your
            <code class="bg-gray-800 px-2 py-1 rounded text-sm">.claude/settings.json</code>
            — Clash fires automatically before every Write/Edit:
          </p>

          <div class="relative">
            <pre class="bg-black/50 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto font-mono"><code>{hookConfig}</code></pre>
            <button
              on:click={copyHookCommand}
              class="absolute top-3 right-3 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-xs"
            >
              {copiedHook ? 'Copied' : 'Copy'}
            </button>
          </div>

          <p class="text-sm text-gray-500 mt-3">
            That's it. Clash will prompt you whenever Claude tries to edit a file that conflicts with another worktree.
          </p>
        </div>

        <!-- Other Agents (Manual) -->
        <div class="mt-6 bg-gray-900 rounded-xl p-8 border border-gray-800">
          <h3 class="font-semibold mb-2">Codex / Cursor / Windsurf / Other Agents</h3>
          <p class="text-gray-400 mb-4">
            If hooks aren't available, add to your project instructions
            (<code class="bg-gray-800 px-2 py-1 rounded text-sm">.cursorrules</code>, etc.):
          </p>

          <div class="bg-black/50 rounded-lg p-4 text-sm text-gray-400 font-mono space-y-2">
            <p>IMPORTANT: Before editing any file, run <code class="text-gray-300">`clash check &lt;file&gt;`</code> to check for merge conflicts with other worktrees. If conflicts are detected, examine the conflicting files and adapt your approach to avoid or minimize them.</p>
            <p>Run <code class="text-gray-300">`clash status`</code> periodically (especially before and after commits) to get a full conflict overview across all worktrees.</p>
          </div>
        </div>

        <!-- Multiple Agents Demo -->
        <div class="mt-8 rounded-xl overflow-hidden border border-gray-800">
          <img
            src="/demos/multi-agent-clash-demo-v1.gif"
            alt="Multiple agents working with Clash"
            class="w-full"
          />
          <p class="text-center text-base text-gray-400 mt-3">
            Multiple AI agents coordinating across worktrees with Clash
          </p>
        </div>
      </div>
    </section>

    <!-- Basic Commands -->
    <section class="py-16">
      <div class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl font-bold mb-8 text-center">Basic Commands</h2>

        <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div class="space-y-3 font-mono text-sm">
            <div>
              <span class="text-gray-500">$</span> clash check src/main.rs
              <span class="text-gray-500 ml-4"># Check a single file</span>
            </div>
            <div>
              <span class="text-gray-500">$</span> clash status
              <span class="text-gray-500 ml-4"># Conflict matrix</span>
            </div>
            <div>
              <span class="text-gray-500">$</span> clash status --json
              <span class="text-gray-500 ml-4"># JSON for AI agents</span>
            </div>
            <div>
              <span class="text-gray-500">$</span> clash watch
              <span class="text-gray-500 ml-4"># Real-time monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-16">
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
                <span class="text-gray-500">1.</span>
                <div>
                  <strong>Discovers worktrees</strong>
                  <p class="text-sm text-gray-400">Main + all linked worktrees</p>
                </div>
              </div>
              <div class="flex gap-3">
                <span class="text-gray-500">2.</span>
                <div>
                  <strong>Finds merge base</strong>
                  <p class="text-sm text-gray-400">For each worktree pair</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex gap-3">
                <span class="text-gray-500">3.</span>
                <div>
                  <strong>Simulates merge</strong>
                  <p class="text-sm text-gray-400">Detects conflicts in memory</p>
                </div>
              </div>
              <div class="flex gap-3">
                <span class="text-gray-500">4.</span>
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
            <span class="text-gray-400">Free Forever</span> ·
            <span class="text-gray-400">100% Local</span> ·
            <span class="text-gray-400">MIT License</span> ·
            <span class="text-gray-400">Built with Rust</span>
          </div>
          <div>Made with ❤️ and Claude</div>
        </div>
      </div>
    </footer>
  </div>
  {/if}
</main>