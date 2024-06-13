import "./globals.css";

export const metadata = {
  title: 'Hola Mundo - La Frase más Icónica de la Programación'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.png" type="image/png"/>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
