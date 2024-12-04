import "@/styles/globals.css";
import "@/styles/fonts.css";

type TemplateProps = Readonly<{ children: React.ReactNode }>;
const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Template;
