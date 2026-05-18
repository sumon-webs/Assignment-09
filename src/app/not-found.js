export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center">
                <h1 className="text-7xl font-bold text-blue-600">404</h1>

                <h2 className="mt-4 text-3xl font-semibold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-3 text-gray-500 max-w-md mx-auto">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>

                <div className="mt-6">
                    <a
                        href="/"
                        className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-white font-medium shadow hover:bg-blue-700 transition"
                    >
                        Go Back Home
                    </a>
                </div>
            </div>
        </div>
    );
}