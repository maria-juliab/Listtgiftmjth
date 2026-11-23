# Lista de Presentes 🎄

Site de listas de presentes de **Natal** e **aniversário** para duas (ou mais) pessoas.
Cada pessoa entra com **nome e senha**, edita a própria lista e só **vê** a dos outros.
Dá para colocar link do produto, preço, loja, foto e observação.

Não precisa de conta no claude.ai: o site fica no **GitHub Pages** e os dados no **Firebase** (ambos grátis).

## Configuração (uma vez só, uns 15 minutos)

### 1. Criar o projeto no Firebase
1. Acesse https://console.firebase.google.com e entre com sua conta Google.
2. **Adicionar projeto** → dê um nome (ex.: `lista-presentes`) → pode desativar o Google Analytics → **Criar projeto**.

### 2. Ativar login com senha
1. No menu: **Criação → Authentication → Vamos começar**.
2. Aba **Método de login** → **E-mail/senha** → ative a primeira chave → **Salvar**.
   (O site transforma o nome em um "e-mail" interno; ninguém precisa de e-mail de verdade.)

### 3. Criar o banco de dados
1. No menu: **Criação → Firestore Database → Criar banco de dados**.
2. Escolha um local (ex.: `southamerica-east1`, São Paulo) → **modo de produção** → **Criar**.
3. Aba **Regras**: apague tudo, cole o conteúdo do arquivo [`firestore.rules`](firestore.rules) e clique em **Publicar**.

### 4. Ligar o site ao Firebase
1. Na **Visão geral do projeto**, clique no ícone **`</>`** (Web) → dê um apelido → **Registrar app** (não precisa marcar Hosting).
2. Copie o objeto `firebaseConfig` que aparece.
3. Abra o arquivo [`firebase-config.js`](firebase-config.js) e troque `null` por esse objeto
   (tem um exemplo no próprio arquivo). Salve e faça commit.

> Esses dados **não são segredo**: são feitos para ficar no site. Quem protege as listas são as regras do passo 3 e as senhas.

### 5. Publicar o site (GitHub Pages)
1. No GitHub, abra o repositório → **Settings → Pages**.
2. Em **Source** escolha **Deploy from a branch**, selecione o branch com estes arquivos e a pasta `/ (root)` → **Save**.
3. Em 1–2 minutos aparece o link, algo como `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

> GitHub Pages grátis só funciona em repositório **público**. Os dados das listas continuam protegidos no Firebase,
> só o código fica visível. Se preferir manter privado, arraste a pasta do site em https://app.netlify.com/drop.

### 6. Usar
1. Abra o link, toque em **»**, digite seu nome e escolha uma senha: sua lista é criada.
2. Mande o link para seu namorado fazer o mesmo com o nome dele.
3. **Opcional, mais seguro:** depois que os dois tiverem conta, no Firebase vá em
   **Authentication → Configurações → Ações do usuário** e desmarque **Ativar criação (inscrição)**.
   Assim ninguém mais consegue criar conta no seu site.

## Esqueceu a senha?
No Firebase: **Authentication → Usuários**, apague a conta da pessoa. Depois, em **Firestore Database**,
apague o documento dela em `people`. Ao entrar de novo com o mesmo nome, ela escolhe uma senha nova
(os presentes antigos ficam, mas presos à conta antiga; apague-os também se quiser recomeçar).
