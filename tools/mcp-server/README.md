# Exinoicons MCP Server

MCP server for Exinoicons integration and documentation

[![smithery badge](https://smithery.ai/badge/@exinoicons/mcp-server)](https://smithery.ai/server/@exinoicons/mcp-server)

This is a TypeScript-based MCP server that provides tools and resources for integrating Exinoicons into various platforms. It implements a Model Context Protocol (MCP) server that helps AI assistants provide accurate guidance for using Exinoicons.

## Features

### Tools

- `list_icons` - Get a list of all available Exinoicons icons
- `search_icons` - Search for icons by name or tags
- `get_platform_usage` - Get platform-specific usage instructions for Exinoicons
- `get_icon_glyphs` - Get all glyphs (unicode characters) for a specific icon across all available styles
- `get_icon_glyph_by_style` - Get the glyph (unicode character) for a specific icon with a particular style

### Resources

Platform Documentation (in Markdown format):

- `exinoicons://docs/platforms/react` - React integration guide
- `exinoicons://docs/platforms/vue` - Vue integration guide
- `exinoicons://docs/platforms/angular` - Angular integration guide
- `exinoicons://docs/platforms/svelte` - Svelte integration guide
- `exinoicons://docs/platforms/solid-js` - SolidJS integration guide
- `exinoicons://docs/platforms/react-native` - React Native integration guide
- `exinoicons://docs/platforms/flutter` - Flutter integration guide
- `exinoicons://docs/platforms/html` - HTML integration guide (font-based)

Icons Data:

- `exinoicons://icons/index` - Complete index of all Exinoicons (JSON format)

### Functionality

This server provides comprehensive Exinoicons integration support including:

- Icon discovery and search
- Glyph and unicode data retrieval for font-based implementations
- Platform-specific installation guides
- Usage examples with code snippets
- Component props documentation
- Package installation instructions
- Font-based HTML integration via CDN

## Development

Install dependencies:

```bash
npm install
```

Build the server:

```bash
npm run build
```

For development with auto-rebuild:

```bash
npm run watch
```

## Installation

### Installing via Smithery

To install Exinoicons MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@exinoicons/mcp-server):

```bash
npx -y @smithery/cli install @exinoicons/mcp-server --client claude
```

To use with Claude Desktop, add the server config:

On MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "exinoicons": {
      "command": "npx",
      "args": ["-y", "@exinoicons/mcp-server"]
    }
  }
}
```

The args array specifies:

1. `-y`: Automatically answer "yes" to npx prompts
2. Package name: `@exinoicons/mcp-server`

### Quick Start

You can also run the server directly using npx:

```bash
npx @exinoicons/mcp-server
```

### Debugging

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector), which is available as a package script:

```bash
npm run inspector
```

The Inspector will provide a URL to access debugging tools in your browser.
