# HackerNews Scapper
Scrappes news from hacker news and store them in database in real time.

## Tech Stack
- Express.js
- Socket.io
- Drizzle
- Bun

## Demo
https://github.com/user-attachments/assets/53bedeed-0b5e-4f99-aa43-068e29083b7e


__NOTE:__ This project uses Bun as runtime so please use Bun to run the application on localhost.

To run locally:

```bash
git clone https://github.com/ritikprajapat21/hacker-news-scapping.git
cd hacker-news-scapping
```

```bash
bun install
```

Before running for first time migrate and seed the database:
```bash
bun run migrate
bun run seed
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.42. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
