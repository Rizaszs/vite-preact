import { FunctionComponent } from "preact";

const App: FunctionComponent = ({ children }) => (
  <div>
    <header>
      <nav>{/* Tambahkan tautan menu navigasi */}</nav>
    </header>
    <main>{children}</main>
    <footer>{/* Tambahkan konten footer */}</footer>
  </div>
);

export default App;
