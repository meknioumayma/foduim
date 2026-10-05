import React, { useLayoutEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../tailwind.css';
import '../style.css';
import '../enhancements.css';
import '../experience.css';
import '../motion.css';
import { finishFodiumRender, startFodium } from '../app.js';

const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const reactNames = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', maxlength: 'maxLength', inputmode: 'inputMode', autocomplete: 'autoComplete', readonly: 'readOnly', colspan: 'colSpan', rowspan: 'rowSpan' };

function toStyle(styleText) {
  return Object.fromEntries(styleText.split(';').map(rule => rule.trim()).filter(Boolean).map(rule => {
    const index = rule.indexOf(':');
    const name = rule.slice(0, index).trim().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    return [name, rule.slice(index + 1).trim()];
  }));
}

function toReact(node, key) {
  if (node.nodeType === Node.TEXT_NODE) return node.nodeValue;
  if (node.nodeType !== Node.ELEMENT_NODE) return null;
  const tag = node.tagName.toLowerCase();
  const props = { key };
  for (const attribute of node.attributes) {
    if (attribute.name === 'onclick') continue;
    const name = reactNames[attribute.name] || attribute.name;
    props[name] = name === 'style' ? toStyle(attribute.value) : attribute.value;
  }
  const children = [...node.childNodes].map((child, index) => toReact(child, index));
  return voidTags.has(tag) ? React.createElement(tag, props) : React.createElement(tag, props, children);
}

function App() {
  const [markup, setMarkup] = useState('');
  useLayoutEffect(() => {
    if (!markup) return;
    finishFodiumRender();
  }, [markup]);

  React.useEffect(() => startFodium(setMarkup), []);

  const documentBody = new DOMParser().parseFromString(markup, 'text/html').body;
  return <div className="min-h-screen font-sans antialiased">{[...documentBody.childNodes].map((node, index) => toReact(node, index))}</div>;
}

createRoot(document.getElementById('app')).render(<App />);
