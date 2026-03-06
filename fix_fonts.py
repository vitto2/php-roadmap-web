#!/usr/bin/env python3

# Ler o arquivo
with open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Substituir Space Mono por Roboto Mono
content = content.replace("'Space Mono','monospace'", "'Roboto Mono','monospace'")

# Escrever de volta
with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Todas as substituições concluídas!")
