export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="text-center text-sm text-gray-400 py-8"
    >
      <p>&copy; {new Date().getFullYear()} Honomono. All rights reserved.</p>
    </footer>
  );
}
