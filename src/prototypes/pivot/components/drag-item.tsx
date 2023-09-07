import type { CSSProperties, FC } from 'react'
import { memo } from 'react'
import { useDrag } from 'react-dnd'
import cx from 'classnames';
import {Signal} from '@preamp/signal';


const DragHandleIcon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M6.907 9.6C5.3 9.6 4 10.675 4 12s1.301 2.4 2.907 2.4c1.605 0 2.907-1.075 2.907-2.4S8.512 9.6 6.907 9.6ZM6.907 0C5.3 0 4 1.075 4 2.4s1.301 2.4 2.907 2.4c1.605 0 2.907-1.075 2.907-2.4S8.512 0 6.907 0ZM6.907 19.2C5.3 19.2 4 20.275 4 21.6S5.301 24 6.907 24c1.605 0 2.907-1.075 2.907-2.4s-1.302-2.4-2.907-2.4ZM16.873 9.6c-1.605 0-2.907 1.075-2.907 2.4s1.302 2.4 2.907 2.4c1.606 0 2.907-1.075 2.907-2.4s-1.301-2.4-2.907-2.4ZM16.873 0c-1.605 0-2.907 1.075-2.907 2.4s1.302 2.4 2.907 2.4c1.606 0 2.907-1.075 2.907-2.4S18.479 0 16.873 0ZM16.873 19.2c-1.605 0-2.907 1.075-2.907 2.4s1.302 2.4 2.907 2.4c1.606 0 2.907-1.075 2.907-2.4s-1.301-2.4-2.907-2.4Z"/></g></svg>
)
export interface DragItemProps {
  name: string
  type: string
  isDropped: boolean
  className?: string
}

export const DragItem: FC<DragItemProps> = memo(function DragItem({ name, type, isDropped, className }) {
  const [{ dragging }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        // opacity: monitor.isDragging() ? 0.4 : 1,
        dragging: monitor.isDragging(),
      }),
    }),
    [name, type],
  )

  return (
    <div className={cx('pivot-drag-item', {'added' : isDropped}, {dragging})} ref={drag}  data-testid="box">
      <span>{name}</span>
      <Signal icon={DragHandleIcon} size={0.625} />
    </div>
  )
})