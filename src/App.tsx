import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Recipes from './pages/Recipes';
import Planner from './pages/Planner';
import ShoppingList from './pages/ShoppingList';
import { MealPlanProvider } from './context/MealPlanContext';

function App() {
  return (
    <MealPlanProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Planner />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="shopping-list" element={<ShoppingList />} />
          </Route>
        </Routes>
      </Router>
    </MealPlanProvider>
  );
}

export default App;
