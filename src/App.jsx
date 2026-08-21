import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AOS from 'aos';
import { useEffect, useMemo } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { ThemeModeProvider } from './context/ThemeModeContext';
import { useThemeMode } from './hooks/useThemeMode';
import About from './pages/About';
import Contact from './pages/Contact';
import CourseDetails from './pages/CourseDetails';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Internships from './pages/Internships';
import PlacementSupport from './pages/PlacementSupport';
import SoftwareDevelopment from './pages/SoftwareDevelopment';

function AppShell() {
  const { mode } = useThemeMode();

  useEffect(() => {
    AOS.init({
      duration: 720,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#2563eb',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#00b878',
          },
          background: {
            default: '#fbfdf9',
            paper: '#ffffff',
          },
          text: {
            primary: '#111827',
            secondary: '#637083',
          },
        },
        typography: {
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          button: {
            textTransform: 'none',
            fontWeight: 700,
          },
        },
        shape: {
          borderRadius: 8,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <RouteContent />
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}

function RouteContent() {
  const location = useLocation();

  useEffect(() => {
    AOS.refreshHard();
  }, [location.pathname]);

  return (
    <main className="page-transition" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetails />} />
        <Route path="/placement-support" element={<PlacementSupport />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default function App() {
  return (
    <ThemeModeProvider>
      <AppShell />
    </ThemeModeProvider>
  );
}
