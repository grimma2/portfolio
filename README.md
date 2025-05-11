This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Настройка Telegram бота для формы обратной связи

Сайт настроен на отправку сообщений из формы контактов напрямую в ваш Telegram аккаунт. Для настройки:

1. Создайте нового бота через @BotFather в Telegram
2. Получите токен бота
3. Создайте файл `.env.local` в корне проекта со следующим содержимым:
   ```
   NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=ваш_токен_бота
   NEXT_PUBLIC_TELEGRAM_USER_ID=ваш_личный_telegram_id
   ```
4. Чтобы получить ваш личный Telegram ID, напишите боту @userinfobot в Telegram
5. Добавьте токен и ваш ID также в настройки окружения на хостинге
6. Важно: пользователь, которому отправляются сообщения, должен предварительно начать диалог с ботом
