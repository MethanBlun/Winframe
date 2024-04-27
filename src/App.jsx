


// src/components/AppLayout.js

import React from 'react';
import { Container } from '@nextui-org/react';
import { Box } from '@nextui-org/react';


const App = () => {
  return (
    <Container>
      {/* En-tête */}
      <div bg="red.500" p={4}>
        {/* Votre contenu d'en-tête ici */}
        <h1>Ma Todo List</h1>
      </div>

      {/* Corps */}
      <Box display="flex" minHeight="calc(100vh - 100px)">
        {/* Tableau de bord à gauche */}
        <Box flex="1" bg="blue.500" p={4}>
          {/* Boutons vides pour le tableau de bord */}
          <button>Créer une tâche</button>
          <button>Filtrer les tâches</button>
          {/* Autres éléments du tableau de bord */}
        </Box>

        {/* Liste des tâches au centre */}
        <Box flex="3" p={4}>
          {/* Votre liste de tâches ici */}
          <ul>
            <li>Tâche 1</li>
            <li>Tâche 2</li>
            {/* ... */}
          </ul>
        </Box>
      </Box>

      {/* Pied de page */}
      <Box bg="gray.200" p={4} position="fixed" bottom={0} left={0} right={0}>
        {/* Votre pied de page ici */}
        <p>© 2024 Ma Todo List. Tous droits réservés.</p>
      </Box>
    </Container>
  );
};

export default App;
