import LoginForm from "./login/login-form";

export function TestChallenge() {
  function onSubmit(params: { email: string; password: string }) {
    alert(`Email: ${params.email}\nPassword: ${params.password}`);
  }

  return (
    <div className="p-20 max-w-lg m-auto">
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
