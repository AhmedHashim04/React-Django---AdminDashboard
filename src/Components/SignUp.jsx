export default function SignUp() {
    return (
    <>
        <h1>Sign Up Page</h1>
        <form>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    </>
        )
}