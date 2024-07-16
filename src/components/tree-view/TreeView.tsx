import { FC, useCallback } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { toggleItem } from '../../store/treeViewSlice';
import s from './TreeView.module.css';
import { TreeItem } from '../../constants/mockData';

interface TreeViewProps {
  data: TreeItem[];
}

export const TreeView: FC<TreeViewProps> = ({ data }) => {
  const expandedItems = useAppSelector((state) => state.treeView.expandedItems);
  const dispatch = useAppDispatch();

  const handleToggle = useCallback(
    (id: number) => {
      dispatch(toggleItem(id));
    },
    [dispatch]
  );

  const renderTree = useCallback(
    (items: TreeItem[]) => {
      return items.map((item) => {
        const isExpanded = expandedItems.includes(item.id);
        return (
          <div key={item.id}>
            <button
              className={s.TreeNode}
              onClick={() => handleToggle(item.id)}
            >
              <span className={s.sign}>{isExpanded ? '-' : '+'}</span>
              <span>{item.name}</span>
            </button>
            <TransitionGroup>
              {isExpanded && item.children && item.children.length > 0 && (
                <CSSTransition key={item.id} timeout={300} classNames="expand">
                  <div className={s.TreeChildren}>
                    {renderTree(item.children)}
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </div>
        );
      });
    },
    [expandedItems, handleToggle]
  );

  return <div className={s.TreeView}>{renderTree(data)}</div>;
};
