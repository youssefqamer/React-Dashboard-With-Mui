import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Masterlayout from './Masterlayout';

import Invoicepage from './pages/Invoicepage';
import Profilepage from './pages/Profilepage';
import Calenderpage from './pages/Calenderpage';
import Faqpage from './pages/Faqpage';
import Barchartpage from './pages/Barchartpage';
import Piechartpage from './pages/Piechartpage';
import Linechartpage from './pages/Linechartpage';
import Geographypage from './pages/Geographypage';
import Dashboardpage from './pages/Dashboardpage';
import Teampage from './pages/Teampage';
import Contactspage from './pages/Contactspage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  const router = createHashRouter([
    {path: "/",element: <Masterlayout />,children: [
      {index: true,element: <Dashboardpage/>},
      {path: '/team',element: <Teampage/>},
      {path: '/contacts',element: <Contactspage/>},
      {path: '/invoices',element: <Invoicepage/>},
      {path: '/form',element: <Profilepage/>},
      {path: '/calendar',element: <Calenderpage/>},
      {path: '/faq',element: <Faqpage/>},
      {path: '/bar',element: <Barchartpage/>},
      {path: '/pie',element: <Piechartpage/>},
      {path: '/line',element: <Linechartpage/>},
      {path: '/geography',element: <Geographypage/>},
      {path: '*',element: <NotFoundPage/>},
      ],
    },
  ]);

  return (
  <>
  <RouterProvider router={router} />
</>
  );
}

export default App;
