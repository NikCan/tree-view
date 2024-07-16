import { TreeView } from './components/tree-view/TreeView';
import { mockData } from './constants/mockData';

export function App() {
  return <TreeView data={mockData} />;
}
