import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

async function main() {
    const rootElement = document.getElementById('root');
    if (!rootElement) return;

    const root = createRoot(rootElement);
    root.render(<App></App>);
}

window.onload = main;
