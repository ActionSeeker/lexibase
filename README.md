# Lexibase (MVP)

This is my little side project - a glossary app to help me learn languages, like Tamil and Persian.  

I kept the first version very simple: just **languages**, **lemmas** (base words), and their **forms** (conjugations/declensions).  

That’s it. No translations, no examples yet. Just the bare minimum to start storing and playing with words.

---

## ✨ What it does (right now)
- **Languages** → add Tamil (`ta`), Farsi (`fa`), or whatever I’m learning
- **Lemmas** → add the root word  
  *e.g. Tamil verb `சாப்பிடு (sāppidu = to eat)`*
- **Forms** → add the actual inflections  
  *e.g.*  
  - `சாப்பிடுகிறேன்` → present 1sg ("I eat")  
  - `சாப்பிட்டேன்` → past 1sg ("I ate")  
  - `சாப்பிடுவேன்` → future 1sg ("I will eat")  

That’s enough for me to practice verbs and nouns without losing track.

---

## 🛠️ Stack
- **NestJS** - backend
- **Prisma** - ORM
- **Postgres** - database
- **Docker** - local dev
- **Swagger** - quick API docs

---

## 🚀 How to run

1. **Clone & install**
   ```bash
   git clone https://github.com/<your-username>/lexibase.git
   cd lexibase
   npm install
````

2. **Set up `.env`**

   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/lexibase?schema=glossary"
   ```

3. **Run with Docker**

   ```bash
   docker compose up --build
   ```

4. **Migrate schema**

   ```bash
   docker compose exec nest-api npx prisma migrate dev --name init
   ```

5. **Play with the API**
   Visit → [http://localhost:3000/api](http://localhost:3000/api) for Swagger UI.

---

## 📖 Endpoints (MVP)

* **Languages**

  * `POST /languages` → add a language
  * `GET /languages` → list all
  * `GET /languages/:id` → get one
  * `DELETE /languages/:id` → remove

* **Lemmas**

  * `POST /lemmas` → add a base word
  * `GET /lemmas/:id` → get lemma + forms

* **Forms**

  * `POST /forms` → add a form to a lemma

---

## 🗺️ Roadmap

* Phase 1 → Languages, Lemmas, Forms ✅
* Phase 2 → Translations, Senses, Examples
* Phase 3 → Users, collections, search

---

## 📄 License

MIT - because why not.