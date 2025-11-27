// Change 'resume' to 'Resume' (capital R)
export function Resume() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <h1 className="text-4xl font-bold mb-6">My Resume</h1>
            <iframe 
                src="/resume.pdf" 
                className="w-full h-screen max-w-4xl border border-gray-700 rounded-lg shadow-lg"
                title="Resume PDF"
            ></iframe>
        </div>
    );
}
