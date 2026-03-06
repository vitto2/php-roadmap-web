#!/usr/bin/env python3

# Ler o arquivo
with open('src/App.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Substituir em cada linha
for i in range(len(lines)):
    if "'Space Mono'" in lines[i] and "monospace" in lines[i]:
        lines[i] = lines[i].replace("'Space Mono'", "'Roboto Mono'")

# Escrever de volta
with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Todas as substituições concluídas!")
