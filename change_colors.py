#!/usr/bin/env python3

# Ler o arquivo
with open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Substituir #333 por #00ff88
content = content.replace('color: "#333"', 'color: "#00ff88"')

# Escrever de volta
with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Substituição de cores concluída!")
