export default function Footer() {
  const currentDate = new Date().getFullYear();
  console.log(currentDate);
  return (
    <footer className="footer">
      <p className="footer-text">Copyright &copy; {currentDate}</p>
    </footer>
  );
}
