import { codeEditorColors, codeLines } from "./code-editor-theme";

export function CodeEditor() {
  return (
    <div
      className="flex w-full flex-col overflow-hidden rounded-[10px] border"
      style={{ 
        height: 480, 
        backgroundColor: codeEditorColors.bg.editor,
        borderColor: codeEditorColors.ui.border 
      }}
      aria-hidden="true"
    >
      {/* Title bar */}
      <div 
        className="flex items-center gap-2 rounded-t-[10px] px-3.5 py-2.5"
        style={{ backgroundColor: codeEditorColors.bg.titleBar }}
      >
        <span
          className="window-dot"
          style={{ backgroundColor: codeEditorColors.windowControls.close }}
        />
        <span
          className="window-dot"
          style={{ backgroundColor: codeEditorColors.windowControls.minimize }}
        />
        <span
          className="window-dot"
          style={{ backgroundColor: codeEditorColors.windowControls.maximize }}
        />
      </div>

      {/* Tab bar */}
      <div 
        className="flex"
        style={{ backgroundColor: codeEditorColors.bg.tabBar }}
      >
        <div
          className="editor-tab border-r"
          style={{
            backgroundColor: codeEditorColors.bg.activeTab,
            borderColor: codeEditorColors.ui.border
          }}
        >
          <span
            className="font-[Inter] text-[11px]"
            style={{ color: codeEditorColors.brand.react }}
          >
            ⚛
          </span>
          <span className="editor-tab-label text-text-primary">
            Hero.tsx
          </span>
        </div>
        <div className="editor-tab">
          <span
            className="font-mono text-[9px] font-bold"
            style={{ color: codeEditorColors.brand.javascript }}
          >
            {"{ }"}
          </span>
          <span className="editor-tab-label text-text-muted">
            styles.ts
          </span>
        </div>
      </div>

      {/* Code area */}
      <div className="flex flex-1 py-4">
        {/* Line numbers */}
        <div 
          className="flex flex-col gap-1 pl-3 pr-2" 
          style={{ width: 36 }}
        >
          {codeLines.map((_, i) => (
            <span
              key={i}
              className="editor-line-number"
              style={{ color: codeEditorColors.ui.lineNumber }}
            >
              {i + 1}
            </span>
          ))}
        </div>

        {/* Code */}
        <pre 
          className="flex flex-1 flex-col gap-1 px-3"
          style={{ borderLeft: `1px solid ${codeEditorColors.ui.divider}` }}
        >
          {codeLines.map((line, i) => (
            <code
              key={i}
              className="editor-code-text"
              style={{ color: line.color }}
            >
              {line.text}
            </code>
          ))}
        </pre>
      </div>

      {/* Status bar */}
      <div 
        className="flex items-center justify-between rounded-b-[10px] px-3.5 py-1.5"
        style={{ backgroundColor: codeEditorColors.bg.titleBar }}
      >
        <div className="flex items-center gap-2.5">
          <span className="editor-status-text">⎇ main</span>
          <span className="editor-status-text">↻ 0 ↑ 2</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="editor-status-text">Ln 13, Col 38</span>
          <span className="editor-status-text">TypeScript React</span>
        </div>
      </div>
    </div>
  );
}
