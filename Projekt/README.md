# System Zarządzania Zadaniami dla Zespołu Programistycznego

## Spis treści

1. Opis projektu
2. Funkcjonalności
3. Technologie
4. Struktura projektu
5. Instalacja i uruchomienie
6. Autor

---

## Opis projektu

Aplikacja internetowa wykonana z wykorzystaniem wzorca architektonicznego MVC (Model-View-Controller).

Projekt umożliwia zarządzanie zadaniami w zespole programistycznym poprzez tworzenie, przeglądanie, edytowanie oraz usuwanie zadań.

Aplikacja została wykonana w środowisku Node.js z wykorzystaniem frameworka Express oraz silnika widoków EJS.

---

## Funkcjonalności

### Zarządzanie zadaniami

* Wyświetlanie listy wszystkich zadań
* Wyświetlanie szczegółów pojedynczego zadania
* Dodawanie nowych zadań
* Edycja istniejących zadań
* Usuwanie zadań

### Filtrowanie

* Wyświetlanie wszystkich zadań
* Filtrowanie zadań ze statusem:

  * Do zrobienia
  * W trakcie
  * Zrobione

### Interfejs użytkownika

* Nawigacja pomiędzy widokami
* Formularze dodawania i edycji zadań
* Ostylowana tabela z zadaniami
* Responsywny i przejrzysty interfejs użytkownika

---

## Technologie

* Node.js
* Express.js
* EJS
* HTML5
* CSS3

---

## Struktura projektu

```text
Projekt/
│
├── controllers/
│   └── taskController.js
│
├── models/
│   └── taskModel.js
│
├── routes/
│   ├── taskRoutes.js
│   └── defaultRoutes.js
│
├── views/
│   ├── default.ejs
│   ├── tasks.ejs
│   ├── taskDetails.ejs
│   ├── createTask.ejs
│   └── editTask.ejs
│
├── public/
│   └── css/
│       └── style.css
│
├── app.js
├── package.json
└── README.md
```

---

## Instalacja i uruchomienie

### 1. Sklonowanie repozytorium

```bash
git clone {adres_repozytorium}
```

### 2. Przejście do katalogu projektu

```bash
cd Projekt
```

### 3. Instalacja zależności

```bash
npm install
```

### 4. Uruchomienie aplikacji

```bash
node app.js
```

### 5. Otwarcie aplikacji

W przeglądarce przejdź pod adres:

```text
http://localhost:3000
```

---

## Autor

Jan Ciszewski

Projekt wykonany w ramach zaliczenia przedmiotu Wzorzec MVC w tworzeniu aplikacji internetowych
