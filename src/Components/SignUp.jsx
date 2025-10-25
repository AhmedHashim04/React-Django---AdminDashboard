export default function SignUp() {
    return (
    <>
        <div className="signup-page">

            <div className="signup-image">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Signup" />
            </div>

            <div className="signup-container">

                <div className="signup-info">
                    <h1>Welcome to ShipMall !</h1>
                    <p>Your gateway to seamless shipping and logistics solutions.</p>
                    <div className="signup-header">
                        <h2>Sign Up</h2>
                    </div>

                    <form className="signup-form">
                        <label className="signup-label">
                            Email:
                            <input type="email" name="email" />
                        </label>

                        <label className="signup-label">
                            Full Name:
                            <input type="text" name="fullName" />
                        </label>

                        <label className="signup-label">
                            Password:
                            <input type="password" name="password" />
                        </label>
                        <button className="signup-submit-btn" type="submit">Sign Up</button>
                        <div className="signup-social">
                            <button className="signup-google-btn">Sign Up with Google</button>
                            <button className="signup-facebook-btn">Sign Up with Facebook</button>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    </>
        )
}