import firebase_admin
from firebase_admin import credentials, db

# Inicializar o Firebase Admin SDK
cred = credentials.Certificate("conexaoFirebase.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://biscoito-da-sorte-e1a1d-default-rtdb.firebaseio.com/'
})

def adicionar_frase(nova_frase):
    ref = db.reference('frases')
    # Obter todas as frases atuais
    frases = ref.get()

    # Determinar a próxima chave
    proxima_chave = len(frases) if frases else 1

    # Adicionar a nova frase com a próxima chave
    ref.child(str(proxima_chave)).set(nova_frase)
    print(f"Frase '{nova_frase}' adicionada com sucesso com a chave {proxima_chave}!")

def main():
    print("Digite uma nova frase para adicionar ao Firebase. Digite '0' para sair.")
    while True:
        nova_frase = input("Nova frase: ").strip()
        if nova_frase == '0':
            print("Encerrando o programa.")
            break
        if nova_frase:
            adicionar_frase(nova_frase)
        else:
            print("Entrada inválida. Por favor, digite uma frase válida.")

if __name__ == "__main__":
    main()
