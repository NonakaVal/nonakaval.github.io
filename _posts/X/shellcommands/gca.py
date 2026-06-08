#!/usr/bin/env python3

import subprocess
from datetime import datetime
from pathlib import Path
import os

# ============================================================
# CONFIG
# ============================================================

REPO_PATH = "/home/val/Projetos/nonakaval.github.io"

COMMIT_OPTIONS = {
    "Novo Post": [
        "novo post",
        "novo artigo",
        "novo conteúdo"
    ],
    "Correção": [
        "correção em post",
        "ajuste de conteúdo",
        "correção de informações"
    ],
    "Reescrita": [
        "reescrita de texto",
        "melhoria de copy",
        "refatoração de conteúdo"
    ],
    "Faturação": [
        "atualização de faturação",
        "ajuste financeiro",
        "registro financeiro"
    ],
    "Customizado": []
}

# ============================================================
# HELPERS
# ============================================================

def run(cmd):
    subprocess.run(cmd, check=True)

def git(*args):
    run(["git", *args])

def timestamp():
    return datetime.now().strftime("%Y-%m-%d %H:%M")

# ============================================================
# COMMIT
# ============================================================

def create_commit(message):
    os.chdir(REPO_PATH)

    git("add", ".")

    commit_message = f"{message} ({timestamp()})"

    print(f"\nCommit:")
    print(commit_message)

    git("commit", "-m", commit_message)

    push = input("\nEnviar para remoto? (y/n): ").lower()

    if push == "y":
        git("push")

# ============================================================
# MENU
# ============================================================

def menu():

    print("\n=== Git Content Assistant ===\n")
    print(f"Repositório: {REPO_PATH}\n")

    options = list(COMMIT_OPTIONS.keys())

    for i, option in enumerate(options, start=1):
        print(f"{i}. {option}")

    choice = int(input("\nEscolha: "))

    selected = options[choice - 1]

    if selected == "Customizado":
        msg = input("\nMensagem: ").strip()
        create_commit(msg)
        return

    messages = COMMIT_OPTIONS[selected]

    print()

    for i, msg in enumerate(messages, start=1):
        print(f"{i}. {msg}")

    msg_choice = int(input("\nEscolha: "))

    create_commit(messages[msg_choice - 1])

# ============================================================
# START
# ============================================================

if __name__ == "__main__":

    if not Path(REPO_PATH).exists():
        print("Repositório não encontrado.")
        raise SystemExit(1)

    menu()
