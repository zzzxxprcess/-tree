import React, { useState } from 'react';
import Experience from './components/Experience';
import UI from './components/UI';
import { TreeState } from './types';

const App: React.FC = () => {
  const [treeState, setTreeState] = useState<TreeState>(TreeState.TREE_SHAPE);

  const toggleState = () => {
    setTreeState((prev) => 
      prev === TreeState.TREE_SHAPE ? TreeState.SCATTERED : TreeState.TREE_SHAPE
    );
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-arix-emerald-dark">
      <UI treeState={treeState} onToggle={toggleState} />
      <Experience treeState={treeState} />
    </div>
  );
};

export default App;
