'use client';

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-row justify-center items-center gap-2">
                <p className="text-sm text-gray-500">Made with ❤️ by Yash</p>
                <a
                    href="https://www.linkedin.com/in/iyashjayesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-600"
                >
                    LinkedIn
                </a>
            </div>
        </footer>
    )
}

export default Footer;