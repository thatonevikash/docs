import { visit } from "unist-util-visit";
import type { Root, Element, Text, ElementContent } from "hast";

const ALERT_TYPES = ["NOTE", "TIP", "IMPORTANT", "WARNING", "CAUTION"] as const;
type AlertType = (typeof ALERT_TYPES)[number];

const ALERT_META: Record<AlertType, { icon: string; label: string }> = {
  NOTE: { icon: "ℹ️", label: "Note" },
  TIP: { icon: "💡", label: "Tip" },
  IMPORTANT: { icon: "📌", label: "Important" },
  WARNING: { icon: "⚠️", label: "Warning" },
  CAUTION: { icon: "🚨", label: "Caution" },
};

export function rehypeAlerts() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (node.tagName !== "blockquote" || !parent || index == null) return;

      // Get first paragraph inside blockquote
      const firstPara = node.children.find(
        (n): n is Element => n.type === "element" && n.tagName === "p",
      );
      if (!firstPara) return;

      // Get first text node
      const firstText = firstPara.children.find(
        (n): n is Text => n.type === "text",
      );
      if (!firstText) return;

      // Match [!NOTE], [!TIP] etc. at start of text
      const match = firstText.value.match(
        /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\n?/,
      );
      if (!match) return;

      const type = match[1] as AlertType;
      const { icon, label } = ALERT_META[type];

      // Remove the [!TYPE] prefix from the first text node
      firstText.value = firstText.value.slice(match[0].length);

      // Remove empty first paragraph if nothing left
      const remainingChildren = node.children.filter((child) => {
        if (child.type !== "element") return true;
        const el = child as Element;
        if (el.tagName !== "p") return true;
        const hasContent = el.children.some(
          (c) => c.type !== "text" || (c as Text).value.trim() !== "",
        );
        return hasContent;
      });

      // Build the alert header node
      const header: Element = {
        type: "element",
        tagName: "div",
        properties: { className: ["alert-header"] },
        children: [
          {
            type: "element",
            tagName: "span",
            properties: { className: ["alert-icon"] },
            children: [{ type: "text", value: icon }],
          },
          {
            type: "element",
            tagName: "span",
            properties: { className: ["alert-label"] },
            children: [{ type: "text", value: label }],
          },
        ],
      };

      // Replace blockquote with alert div
      const alertDiv: Element = {
        type: "element",
        tagName: "div",
        properties: {
          className: ["alert", `alert-${type.toLowerCase()}`],
        },
        children: [header, ...remainingChildren] as ElementContent[],
      };

      parent.children.splice(index, 1, alertDiv);
    });
  };
}
