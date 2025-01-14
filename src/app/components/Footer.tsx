export const Footer = () => {
    return (
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="/privacy-policy" className="text-gray-700 hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-gray-700 hover:text-gray-900">
              Terms of Service
            </a>
          </div>
          <p className="text-gray-600">
            © {new Date().getFullYear()} Jon Dallas AI, LLC. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };