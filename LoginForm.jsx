import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // API çağrısı yapılabilir
    onLogin(username, password);
  };

  return (
    <div className="login-form">
      <h1>Araç Kiralama Uygulaması</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Kullanıcı Adı:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Şifre:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}

export default LoginForm;