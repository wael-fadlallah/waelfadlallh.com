export const codeEditorColors = {
  bg: {
    editor: "#12121A",
    titleBar: "#1A1A24",
    tabBar: "#13131C",
    activeTab: "#161620",
    lineNumbers: "transparent",
  },

  ui: {
    border: "#2A2A35",
    divider: "#1E1E28",
    lineNumber: "#3A3A45",
  },

  syntax: {
    keyword: "#C586C0",
    function: "#DCDCAA",
    variable: "#9CDCFE",
    string: "#CE9178",
    tag: "#4EC9B0",
    comment: "#636369",
    text: "#D4D4D4",
  },

  brand: {
    react: "#61DAFB",
    javascript: "#F7DF1E",
  },

  windowControls: {
    close: "#FF5F57",
    minimize: "#FFBD2E",
    maximize: "#28CA42",
  },
} as const;

export const codeLines = [
  {
    text: "import { motion } from 'framer-motion'",
    color: codeEditorColors.syntax.keyword,
  },
  {
    text: "import { useEffect, useState } from 'react'",
    color: codeEditorColors.syntax.keyword,
  },
  { text: " ", color: codeEditorColors.syntax.comment },
  {
    text: "export const Hero = () => {",
    color: codeEditorColors.syntax.function,
  },
  {
    text: "  const [ready, setReady] = useState(false)",
    color: codeEditorColors.syntax.variable,
  },
  { text: " ", color: codeEditorColors.syntax.comment },
  { text: "  useEffect(() => {", color: codeEditorColors.syntax.function },
  { text: "    setReady(true)", color: codeEditorColors.syntax.variable },
  { text: "  }, [])", color: codeEditorColors.syntax.text },
  { text: " ", color: codeEditorColors.syntax.comment },
  { text: "  return (", color: codeEditorColors.syntax.keyword },
  {
    text: "    <motion.div animate={{ opacity: 1 }}>",
    color: codeEditorColors.syntax.tag,
  },
  {
    text: "      <h1>I craft experiences</h1>",
    color: codeEditorColors.syntax.string,
  },
  { text: "    </motion.div>", color: codeEditorColors.syntax.tag },
];
