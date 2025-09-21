import { Instagram, Linkedin, Github, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/auv_iiitdm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/company/auv-iiitdm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/auv-iiitdm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com/@auv-iiitdm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>Made with love ❤️ by AUV IIITDM . Copyright © 2025. All Rights Reserved. Read our Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
