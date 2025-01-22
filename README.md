### **README – Wskazówki i porady dotyczące projektu Zer0-Day Guardian**

---

#### **1. Struktura projektu**

- **Główne foldery i pliki**:
  - `src/` – Zawiera wszystkie komponenty React.
  - `public/` – Pliki statyczne, takie jak `index.html`, favicony i inne zasoby.
  - `build/` – Folder generowany po kompilacji (`npm run build`) – służy do wdrożenia na serwerze produkcyjnym.
  - `.env` – Plik z ustawieniami środowiskowymi (np. API URL). Ważne, aby był na tym samym poziomie co `package.json`.

---

#### **2. Kluczowe polecenia**

- **Uruchomienie aplikacji w trybie deweloperskim**:

  ```bash
  npm start
  ```

  Strona będzie dostępna pod adresem: `http://localhost:3000`.

- **Budowanie aplikacji do produkcji**:

  ```bash
  npm run build
  ```

  Wynik znajdziesz w folderze `build/`.

- **Testowanie aplikacji lokalnie w środowisku produkcyjnym**:
  ```bash
  serve -s build --single
  ```
  Aplikacja będzie dostępna pod: `http://localhost:5000`.

---

#### **3. Zmienne środowiskowe**

- Wszystkie zmienne środowiskowe muszą zaczynać się od `REACT_APP_`.
- Przykład pliku `.env`:

  ```env
  REACT_APP_API_URL=https://example.com/api
  REACT_APP_VERSION=1.0.0
  ```

- Po każdej zmianie w `.env` uruchom aplikację ponownie:
  ```bash
  npm start
  ```

---

#### **4. Typowe problemy i ich rozwiązania**

- **Błąd 404 przy testowaniu aplikacji w środowisku produkcyjnym**:

  - Upewnij się, że uruchamiasz serwer z flagą `--single`:
    ```bash
    serve -s build --single
    ```

- **Pliki CSS/JS nie ładują się w środowisku produkcyjnym**:

  - Ustaw poprawnie pole `homepage` w `package.json`:
    ```json
    "homepage": "."
    ```

- **Problemy z tłumaczeniami**:
  - Sprawdź, czy wszystkie pliki tłumaczeń w folderze `public/data` są poprawnie nazwane (`articles.en.json`, `articles.pl.json` itd.).

---

#### **5. Dobre praktyki**

- **Komponenty**:

  - Używaj komponentów funkcyjnych.
  - Stosuj **React.memo**, aby poprawić wydajność.

- **CSS**:

  - Korzystaj z **CSS Modules** lub utrzymuj porządek w plikach stylów.
  - Optymalizuj CSS za pomocą **PurgeCSS**, aby usuwać nieużywane klasy w środowisku produkcyjnym.

- **Debugowanie**:

  - Korzystaj z **React DevTools** w przeglądarce.
  - Upewnij się, że masz włączone mapy źródłowe (`source maps`) dla łatwiejszego debugowania.

- **Dokumentacja**:
  - Dokumentuj każdy istotny krok w plikach README, zwłaszcza dla konfiguracji środowiska produkcyjnego i zmiennych środowiskowych.

---

#### **6. Przygotowanie do wdrożenia**

1. **Zbuduj aplikację**:

   ```bash
   npm run build
   ```

2. **Skonfiguruj serwer produkcyjny**:

   - Dla **nginx**:

     ```nginx
     location / {
         root /path/to/your/build;
         index index.html;
         try_files $uri /index.html;
     }
     ```

   - Dla **Apache**:
     Stwórz plik `.htaccess` w folderze `build/`:
     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```

3. **Testuj aplikację w środowisku produkcyjnym**:
   - Upewnij się, że wszystkie ścieżki działają poprawnie.

---

#### **7. Przydatne narzędzia**

- **Visual Studio Code** – Edytor kodu z dużą ilością przydatnych wtyczek.
- **Postman** – Do testowania API.
- **React DevTools** – Narzędzie do debugowania komponentów React.

---

#### **8. Porządek w projekcie**

- **Folder `src/`**:

  - Trzymaj komponenty w osobnych folderach z odpowiadającymi im plikami CSS.
  - Przykład struktury:
    ```
    src/
      ├── App/
      │   ├── App.js
      │   └── App.css
      ├── Header/
      │   ├── Header.js
      │   └── Header.css
      └── ...
    ```

- **Folder `public/`**:
  - Trzymaj statyczne zasoby (np. favicon, obrazy).

---

#### **9. Checklist przed wdrożeniem**

- [ ] Sprawdź, czy wszystkie zmienne w `.env` są poprawne.
- [ ] Upewnij się, że `homepage` w `package.json` jest ustawione odpowiednio do środowiska.
- [ ] Przetestuj aplikację w trybie produkcyjnym (`serve -s build --single`).
- [ ] Zweryfikuj działanie wszystkich ścieżek.

---
