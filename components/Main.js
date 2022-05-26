// Import Hello
import Hello from "./Hello";

/**
 * Membuat fungsi Main
 * Menggunakan fungsi Hello yang telah di import
 */
function Main() {
  return (
    <main>
      <Hello name="Ahmad" />
      <Hello name="Aufa" />
      <Hello name="Lana" />
      <Hello name="Michel" />
      <Hello name="Inazuma" />
      <Hello name="Rusly" />
    </main>
  );
}

// Export main
export default Main;