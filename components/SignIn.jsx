import React from 'react';

export function SignIn() {
  return (
    <form
      action="/api/auth/signin"
       
    >
      <button type="submit">Sign in with GitHub</button>
    </form>
  );
}
