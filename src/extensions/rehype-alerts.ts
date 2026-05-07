import { visit } from "unist-util-visit";
import type { Root, Element, Text, ElementContent } from "hast";

type AlertType = "NOTE" | "TIP" | "IMPORTANT" | "WARNING" | "CAUTION";

type LucideNode = [tagName: string, attrs: Record<string, string>][];

const ALERT_META: Record<AlertType, { icon: LucideNode; label: string }> = {
  NOTE: {
    icon: [
      ["circle", { cx: "12", cy: "12", r: "10" }],
      ["path", { d: "M12 16v-4" }],
      ["path", { d: "M12 8h.01" }],
    ],
    label: "Note",
  },
  TIP: {
    icon: [
      ["path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5A6 6 0 1 0 7.5 11.5c.8.8 1.3 1.5 1.5 2.5" }],
      ["path", { d: "M9 18h6" }],
      ["path", { d: "M10 22h4" }],
    ],
    label: "Tip",
  },
  IMPORTANT: {
    icon: [
      ["path", { d: "M12 17v-5" }],
      ["path", { d: "M5 3h14" }],
      ["path", { d: "M5 21h14" }],
      ["path", { d: "M19 3v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3" }],
      ["path", { d: "M19 21v-4c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v4" }],
      ["path", { d: "M12 7h.01" }],
    ],
    label: "Important",
  },
  WARNING: {
    icon: [
      ["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }],
      ["path", { d: "M12 9v4" }],
      ["path", { d: "M12 17h.01" }],
    ],
    label: "Warning",
  },
  CAUTION: {
    icon: [
      ["path", { d: "M10.5 4.5 3 12l7.5 7.5h3L21 12l-7.5-7.5z" }],
      ["path", { d: "M12 8v4" }],
      ["path", { d: "M12 16h.01" }],
    ],
    label: "Caution",
  },
};

const baseSvgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

function buildLucideIcon(iconNodes: LucideNode): Element {
  return {
    type: "element",
    tagName: "svg",
    properties: {
      ...baseSvgProps,
      className: ["alert-icon-svg"],
    },
    children: iconNodes.map(([tagName, attrs]) => ({
      type: "element",
      tagName,
      properties: attrs,
      children: [],
    })),
  };
}

export function rehypeAlerts() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (node.tagName !== "blockquote" || !parent || index == null) return;

      const firstPara = node.children.find(
        (n): n is Element => n.type === "element" && n.tagName === "p",
      );
      if (!firstPara) return;

      const firstText = firstPara.children.find(
        (n): n is Text => n.type === "text",
      );
      if (!firstText) return;

      const match = firstText.value.match(
        /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\n?/
      );
      if (!match) return;

      const type = match[1] as AlertType;
      const { icon, label } = ALERT_META[type];

      firstText.value = firstText.value.slice(match[0].length);

      const remainingChildren = node.children.filter((child) => {
        if (child.type !== "element") return true;
        const el = child as Element;
        if (el.tagName !== "p") return true;
        const hasContent = el.children.some(
          (c) => c.type !== "text" || (c as Text).value.trim() !== "",
        );
        return hasContent;
      });

      const header: Element = {
        type: "element",
        tagName: "div",
        properties: { className: ["alert-header"] },
        children: [
          {
            type: "element",
            tagName: "span",
            properties: { className: ["alert-icon"] },
            children: [buildLucideIcon(icon)],
          },
          {
            type: "element",
            tagName: "span",
            properties: { className: ["alert-label"] },
            children: [{ type: "text", value: label }],
          },
        ],
      };

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
