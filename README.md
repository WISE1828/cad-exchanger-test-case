## Test case for the company CAD Exchanger.
### Functionality
- The project was initialized using `Vite`.
- A two-page web application with `Main` and `Contacts` pages has been implemented.
- `react-router-dom` was used to provide site navigation.
- Responsive interface.
- On the main page, a YouTube video is embedded on the right side of the first section, and the `React-Player` library was used to optimize video loading on the page.
- All "Contact Us" buttons lead to the `Contacts` page.
- After submitting the form on the `Contacts` page, it registers and sends the data to the `backend`. The `backend` registers the data and responds with the message "Thank you for your interest, {Name}". Upon receiving the server's response, the `Contacts` page updates and displays the aforementioned message.
### SEO
- For SEO optimization, the `react-helmet` library was used to dynamically change the meta tags for `description`, `keywords`, and `title`.
- The `OpenGraph` protocol was used, and the corresponding markup tags `<meta property="og:type"/>` were described for a more attractive and clickable link.
- The `Material UI` library was used for styling, which, in turn, mostly utilizes `semantic tags`.

### Libraries
- Material UI
- React Helmet
- React Player
- Axios
- React Query
- React Hook Form
- React Router Dom

### Project launch
1. Ensure that Node.js is installed.
```
node -v
```
2. Установите зависимости:
```
npm install
```
3. Запустите проект:
```
npm start
```
### IP for accessing the project.
- Client `http://130.193.46.182:5173`
- API `http://130.193.46.182:3000`
