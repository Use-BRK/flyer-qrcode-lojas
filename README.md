# BRK Experience Hub - Cupom Landing Page

Bem-vindo ao **BRK Experience Hub**, uma landing page interativa desenvolvida para distribuição de cupons de desconto exclusivos das marcas BRK (Agro, Motors e Fishing).

Este projeto oferece uma experiência visual premium, com animações suaves e design responsivo, permitindo que os usuários copiem códigos de desconto e naveguem para as lojas específicas da marca.

## ✨ Funcionalidades

- **Cópia de Cupom**: Funcionalidade de um clique para copiar o código de desconto (`BRKVIP30`) para a área de transferência.
- **Feedback Visual**: Animações e mensagens de confirmação ao copiar o código.
- **Links para Lojas**: Cards interativos que direcionam para as lojas BRK Agro, BRK Motors e BRK Fishing.
- **Design Responsivo**: Layout otimizado para desktop e dispositivos móveis.
- **Estética Premium**: Uso de gradientes, blur e micro-interações para uma experiência moderna.

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)**: Biblioteca JavaScript para construção da interface.
- **[Vite](https://vitejs.dev/)**: Build tool rápida e leve.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para estilização.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones.
- **TypeScript**: Superset JavaScript para tipagem estática.

## 🚀 Como Executar Localmente

Siga os passos abaixo para rodar o projeto em sua máquina:

### Pré-requisitos

- **Node.js** (versão 18 ou superior recomendada)
- **npm** (gerenciador de pacotes)

### Instalação

1. Clone o repositório (se aplicável) ou navegue até a pasta do projeto:
   ```bash
   cd flyer-qrcode-cupons
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Rodando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O terminal exibirá o link local (geralmente `http://localhost:5173/`). Abra-o no seu navegador para visualizar a aplicação.

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção na pasta `dist`.
- `npm run preview`: Visualiza a versão de produção localmente.
- `npm run lint`: Executa a verificação de código com ESLint.

## 📂 Estrutura do Projeto

- `src/App.tsx`: Componente principal contendo a lógica e layout da landing page.
- `src/components/`: Componentes reutilizáveis (ex: `BrandCard`).
- `src/assets/`: Imagens e logotipos.
- `src/types.ts`: Definições de tipos TypeScript.

---

Desenvolvido para **BRK**.
