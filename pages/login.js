export const login = () => {
  return `
  <a href="/">Go to Home</a>
  <div class="login-box">
    <h2>Login</h2>
    <form action="/submit" method="post">
        <input type="text" placeholder="Username" required>
        <input type="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>
  </div>`;
};
