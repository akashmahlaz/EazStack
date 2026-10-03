

export default function SignUpPage() {
  return (
    <div className="bg-primary-foreground min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-5xl p-2 grid md:grid-cols-2 rounded-2xl shadow-lg overflow-hidden min-h-150">
        <div className="bg-primary flex justify-center items-center p-8">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold">
              Start your journey
            </h1>
            <p className="mt-4 text-primary-foreground">
              Build, collaborate, and manage your projects in one place.
            </p>
          </div>
        </div>
        <div className="bg-accent flex justify-center items-center p-8">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold">
              Sign Up
            </h2>
            <p className="mt-4 text-primary-foreground">
              Create your account to get started.
            </p>
            <form className="mt-8">
              <div className="mb-4">
                <input type="text" placeholder="Username" className="w-full p-2 rounded" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email" className="w-full p-2 rounded" />
              </div>
              <div className="mb-4">
                <input type="password" placeholder="Password" className="w-full p-2 rounded" />
              </div>
              <button type="submit" className="w-full p-2 rounded bg-primary text-primary-foreground">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
