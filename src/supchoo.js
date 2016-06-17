// start choo up
const choo = require('choo');
const app = choo();

// model
app.model({
  state: { title: 'Set what this text is' },
  reducers: {
    update: (action, state) => ({ title: action.value })
  }
});

// view
const mainView = (params, state, send) => choo.view`
  <main>
    <h1>${state.title}</h1>
    <input
      type="text"
      oninput=${(e) => send('update', { value: e.target.value })}
    />

    <p><a href="/about">what?</a></p>
  </main>
`;

const aboutView = (params, state, send) => choo.view`
  <main>
    jenn made this to try out <a href="https://github.com/yoshuawuyts/choo">choo</a>. sorry not sorry for the semi-colons, yosh 😘

    <p><a href="/">go back home</a> and/or <a href="https://github.com/jennschiffer/sup-choo/">fork this on "github"</a></p>
  </main>
`;

app.router((route) => [
  route('/', mainView),
  route('/about', aboutView)
]);

const tree = app.start();
document.body.appendChild(tree);
